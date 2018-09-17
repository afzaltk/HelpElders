using ElderAbuse.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace ElderAbuse.Controllers
{
    public class QuestionsController : Controller
    {
        private HelpEldersDBEntities db = new HelpEldersDBEntities();

        // GET: Questions
        public ActionResult Index()
        {
            return View();
        }

        
        // GET: Questions/Questionnaire/5
        public ActionResult Questionnaire(int? id)
        {
            
            return View();
        }

        // GET: Questions/Create
        public ActionResult Create()
        {
            return View();
        }

   

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Questionnaire(NewModel newModel)
        {
            int max = db.Responses.Max(p => p.ResponseNumber);
            int QstnId = newModel.responses.QuestionId;
            if (QstnId == 1)
            {
                newModel.responses.ResponseNumber = max + 1;

            }
            else
            {
                newModel.responses.ResponseNumber = max;
            }
            if (ModelState.IsValid)
            {
                db.Responses.Add(newModel.responses);
                db.SaveChanges();
                //Check if the question number is less than 12 to load the next question                
                if (QstnId < 11)
                {

                    ViewBag.ButtonValue = "Next Question";
                    NewModel newModel1 = new NewModel();
                    
                    newModel1.questions = db.Questions.Find(newModel.responses.QuestionId + 1);
                    if (newModel1.questions == null)
                    {
                        return HttpNotFound();
                    }
                    return View(newModel1);
                }
                //Getting the submit button
                else if (QstnId == 11)
                {
                    ViewBag.ButtonValue = "Submit";
                    NewModel newModel1 = new NewModel();
                    newModel1.questions = db.Questions.Find(newModel.responses.QuestionId + 1);
                    if (newModel1.questions == null)
                    {
                        return HttpNotFound();
                    }
                    return View(newModel1);
                }

                //Further questions part
                else if (QstnId == 13 || QstnId == 14 || QstnId == 16 || QstnId == 17 || QstnId == 19 || QstnId == 20 || QstnId == 22 || QstnId == 24 || QstnId == 25)
                {
                    if (QstnId == 14 || QstnId == 17 || QstnId == 20 || QstnId == 22 || QstnId == 25)
                    {
                        ViewBag.ButtonValue = "Submit";
                    }
                    else if (QstnId == 13 || QstnId == 16 || QstnId == 19 || QstnId == 24)
                    {
                        ViewBag.ButtonValue = "Next Question";
                    }

                    NewModel newModel1 = new NewModel();
                    newModel1.questions = db.Questions.Find(newModel.responses.QuestionId + 1);
                    if (newModel1.questions == null)
                    {
                        return HttpNotFound();
                    }
                    return View(newModel1);
                }
                //in case of final question of each type
                else if (QstnId == 15 || QstnId == 18 || QstnId == 21 || QstnId == 23 || QstnId == 26)
                {
                    int[] points = new int[12];
                    //Get points of each question from database
                    for (int i = 0; i < 12; i++)
                    {
                        points[i] = (from c in db.Responses
                                     where c.ResponseNumber == max
                                     where c.QuestionId == i + 1
                                     select c.Answer).Single();
                    }


                    //Get the total sum of the answers to compare
                    List<int> answrlst = new List<int>();
                    answrlst = (from c in db.Responses where c.ResponseNumber == max where c.QuestionId > 2 where c.QuestionId < 13 select c.Answer).ToList();
                    int Total = 0;
                    if (answrlst != null)
                    {
                        for (int i = 0; i < answrlst.Count; i++)
                        {
                            Total += answrlst[i];
                        }
                    }
                    int physical = points[2] + points[3];
                    int financial = points[4] + points[5];
                    int emotional = points[6] + points[7];
                    int sexual = points[8] + points[9];
                    int neglect = points[10] + points[11];

                    //if only physical was present
                    if (QstnId == 15 && financial != 1 && emotional != 1 && sexual != 1 && neglect != 1)
                    {
                        List<int> physicalList = new List<int>();
                        physicalList = (from c in db.Responses where c.ResponseNumber == max where c.QuestionId > 12 where c.QuestionId < 16 select c.Answer).ToList();
                        int physicalTotal = 0;
                        if (physicalList != null)
                        {
                            for (int i = 0; i < physicalList.Count; i++)
                            {
                                physicalTotal += physicalList[i];
                            }
                        }

                        TempData["AbuseType"] = "being Physically Abused";
                        if (physicalTotal < 2)
                        {
                            TempData["Priority"] = "Low";
                        }
                        else
                        {
                            TempData["Priority"] = "High";
                        }
                        var Likelihood = TempData["Priority"].ToString();
                        var AbuseType = TempData["AbuseType"].ToString();
                        return RedirectToAction("Postcode", new { Likelihood, AbuseType });
                    }
                    //if only financial was present
                    else if (QstnId == 18 && emotional != 1 && sexual != 1 && neglect != 1)
                    {
                        List<int> physicalList = new List<int>();
                        physicalList = (from c in db.Responses where c.ResponseNumber == max where c.QuestionId > 15 where c.QuestionId < 19 select c.Answer).ToList();
                        int physicalTotal = 0;
                        if (physicalList != null)
                        {
                            for (int i = 0; i < physicalList.Count; i++)
                            {
                                physicalTotal += physicalList[i];
                            }
                        }

                        TempData["AbuseType"] = "being Financially Abused";
                        if (physicalTotal < 2)
                        {
                            TempData["Priority"] = "Low";
                        }
                        else
                        {
                            TempData["Priority"] = "High";
                        }

                        var Likelihood = TempData["Priority"].ToString();
                        var AbuseType = TempData["AbuseType"].ToString();
                        return RedirectToAction("Postcode", new { Likelihood, AbuseType });
                    }
                    //if only emotiona was present
                    else if (QstnId == 21 && sexual != 1 && neglect != 1)
                    {
                        List<int> physicalList = new List<int>();
                        physicalList = (from c in db.Responses where c.ResponseNumber == max where c.QuestionId > 18 where c.QuestionId < 22 select c.Answer).ToList();
                        int physicalTotal = 0;
                        if (physicalList != null)
                        {
                            for (int i = 0; i < physicalList.Count; i++)
                            {
                                physicalTotal += physicalList[i];
                            }
                        }

                        TempData["AbuseType"] = "being Emotionally Abused";
                        if (physicalTotal < 2)
                        {
                            TempData["Priority"] = "Low";
                        }
                        else
                        {
                            TempData["Priority"] = "High";
                        }

                        var Likelihood = TempData["Priority"].ToString();
                        var AbuseType = TempData["AbuseType"].ToString();
                        return RedirectToAction("Postcode", new { Likelihood, AbuseType });
                    }
                    //if only sexual was present
                    else if (QstnId == 23 && neglect != 1)
                    {
                        List<int> physicalList = new List<int>();
                        physicalList = (from c in db.Responses where c.ResponseNumber == max where c.QuestionId > 21 where c.QuestionId < 24 select c.Answer).ToList();
                        int physicalTotal = 0;
                        if (physicalList != null)
                        {
                            for (int i = 0; i < physicalList.Count; i++)
                            {
                                physicalTotal += physicalList[i];
                            }
                        }

                        TempData["AbuseType"] = "being Sexually Abused";
                        if (physicalTotal < 2)
                        {
                            TempData["Priority"] = "Low";
                        }
                        else
                        {
                            TempData["Priority"] = "High";
                        }

                        var Likelihood = TempData["Priority"].ToString();
                        var AbuseType = TempData["AbuseType"].ToString();
                        return RedirectToAction("Postcode", new { Likelihood, AbuseType });
                    }
                    //if only neglect was present
                    else if (QstnId == 26)
                    {
                        List<int> physicalList = new List<int>();
                        physicalList = (from c in db.Responses where c.ResponseNumber == max where c.QuestionId > 23 where c.QuestionId < 27 select c.Answer).ToList();
                        int physicalTotal = 0;
                        if (physicalList != null)
                        {
                            for (int i = 0; i < physicalList.Count; i++)
                            {
                                physicalTotal += physicalList[i];
                            }
                        }

                        TempData["AbuseType"] = "being Neglected";
                        if (physicalTotal < 2)
                        {
                            TempData["Priority"] = "Low";
                        }
                        else
                        {
                            TempData["Priority"] = "High";
                        }

                        var Likelihood = TempData["Priority"].ToString();
                        var AbuseType = TempData["AbuseType"].ToString();
                        return RedirectToAction("Postcode", new { Likelihood, AbuseType });
                    }
                    //else if (physical == 1 || financial==1||emotional==1||sexual==1||neglect==1)
                    //{
                    //    ViewBag.ButtonValue = "Next Question";
                    //    NewModel newModel1 = new NewModel();
                    //    newModel1.questions = db.Questions.Find(newModel.responses.QuestionId + 1);
                    //    if (newModel1.questions == null)
                    //    {
                    //        return HttpNotFound();
                    //    }
                    //    return View(newModel1);
                    //}

                }
                //check if it is on the last question
                else if (QstnId == 12)
                {

                    int[] points = new int[12];
                    //Get points of each question from database
                    for (int i = 0; i < 12; i++)
                    {
                        points[i] = (from c in db.Responses
                                     where c.ResponseNumber == max
                                     where c.QuestionId == i + 1
                                     select c.Answer).Single();
                    }


                    //Get the total sum of the answers to compare
                    List<int> answrlst = new List<int>();
                    answrlst = (from c in db.Responses where c.ResponseNumber == max where c.QuestionId > 2 select c.Answer).ToList();
                    int Total = 0;
                    if (answrlst != null)
                    {
                        for (int i = 0; i < answrlst.Count; i++)
                        {
                            Total += answrlst[i];
                        }
                    }
                    int physical = points[2] + points[3];
                    int financial = points[4] + points[5];
                    int emotional = points[6] + points[7];
                    int sexual = points[8] + points[9];
                    int neglect = points[10] + points[11];
                    //Get the result of physically abused
                    if (physical == 2 && Total == 2)
                    {
                        TempData["Priority"] = "High";
                        TempData["AbuseType"] = "being Physically Abused";
                    }
                    //Get the result of financially abused
                    else if (financial == 2 && Total == 2)
                    {
                        TempData["Priority"] = "High";
                        TempData["AbuseType"] = "being Financially Abused";
                    }

                    //Get the result of Emotionally abused
                    else if (emotional == 2 && Total == 2)
                    {
                        TempData["Priority"] = "High";
                        TempData["AbuseType"] = "being Emotionally Abused";
                    }

                    //Get the result of Sexually abused
                    else if (sexual == 2 && Total == 2)
                    {
                        TempData["Priority"] = "High";
                        TempData["AbuseType"] = "being Sexually Abused";
                    }
                    //Get the result of neglect
                    else if (neglect == 2 && Total == 2)
                    {
                        TempData["Priority"] = "High";
                        TempData["AbuseType"] = "being Neglected";
                    }

                    //No abuse happening
                    else if (Total == 0)
                    {
                        TempData["Priority"] = "high";
                        TempData["AbuseType"] = "not being Abused";
                    }
                    else if (Total > 5)
                    {
                        TempData["Priority"] = "High";
                        TempData["AbuseType"] = "being badly Abused";
                    }
                    else
                    {
                        TempData["Priority"] = "low";
                        TempData["AbuseType"] = "being Abused";
                    }



                    return RedirectToAction("Index");
                }

            }

            return RedirectToAction("Index");
        }



        // GET: Questions/Edit/5
        public ActionResult FurtherQuestions()
        {
            

            return View();
        }

        //POST: Questions/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit([Bind(Include = "QuestionId,Question1")] Question question)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        db.Entry(question).State = EntityState.Modified;
        //        db.SaveChanges();
        //        return RedirectToAction("Index");
        //    }
        //    return View(question);
        //}

        //// GET: Questions/Delete/5
        //public ActionResult Delete(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }

        //    Question question = db.Questions.Find(id);
        //    if (question == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(question);
        //}

        //// POST: Questions/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public ActionResult DeleteConfirmed(int id)
        //{
        //    Question question = db.Questions.Find(id);
        //    db.Questions.Remove(question);
        //    db.SaveChanges();
        //    return RedirectToAction("Index");
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}
    }
}
