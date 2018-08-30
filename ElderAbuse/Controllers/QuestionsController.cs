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
            ViewBag.AbuseType = TempData["AbuseType"].ToString();
            return View();
        }

        // GET: Questions/Questionnaire/5
        public ActionResult Questionnaire(int? id)
        {
            if (id<12)
            {
          
                ViewBag.ButtonValue = "Next Question";
            }
            else if (id==12)
            {
                
                ViewBag.ButtonValue = "Submit";
            }
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            else if (id == 0)
            {
                return RedirectToAction("Index");
            }
            //Question question = db.Questions.Find(id);
            NewModel newModel = new NewModel();
            newModel.questions = db.Questions.Find(id);

            if (newModel.questions == null)
            {
                return HttpNotFound();
            }
            return View(newModel);
        }

        // GET: Questions/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Questions/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "QuestionId,Question1")] Question question)
        {
            if (ModelState.IsValid)
            {
                db.Questions.Add(question);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(question);
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
                    //var points1 = from c in db.Responses
                    //              where c.ResponseNumber == max
                    //              where c.QuestionId == 1
                    //              select c.Answer;
                    //var points2 = from c in db.Responses
                    //              where c.ResponseNumber == max
                    //              where c.QuestionId == 2
                    //              select c.Answer;
                    //var points3 = (from c in db.Responses
                    //               where c.ResponseNumber == max
                    //               where c.QuestionId == 3
                    //               select c.Answer).Single();
                    //var points4 = (from c in db.Responses
                    //               where c.ResponseNumber == max
                    //               where c.QuestionId == 4
                    //               select c.Answer).Single();
                    //var points5 = (from c in db.Responses
                    //               where c.ResponseNumber == max
                    //               where c.QuestionId == 5
                    //               select c.Answer).Single();
                    //var points6 = (from c in db.Responses
                    //               where c.ResponseNumber == max
                    //               where c.QuestionId == 6
                    //               select c.Answer).Single();
                    //var points7 = (from c in db.Responses
                    //               where c.ResponseNumber == max
                    //               where c.QuestionId == 7
                    //               select c.Answer).Single();
                    //var points8 = (from c in db.Responses
                    //               where c.ResponseNumber == max
                    //               where c.QuestionId == 8
                    //               select c.Answer).Single();
                    //var points9 = (from c in db.Responses
                    //               where c.ResponseNumber == max
                    //               where c.QuestionId == 9
                    //               select c.Answer).Single();
                    //var points10 = (from c in db.Responses
                    //                where c.ResponseNumber == max
                    //                where c.QuestionId == 10
                    //                select c.Answer).Single();
                    //var points11 = (from c in db.Responses
                    //                where c.ResponseNumber == max
                    //                where c.QuestionId == 11
                    //                select c.Answer).Single();
                    //var points12 = (from c in db.Responses
                    //                where c.ResponseNumber == max
                    //                where c.QuestionId == 12
                    //                select c.Answer).Single();

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

                    //Get the result of physically abused
                    if (points[3] == 1 && points[2] == 1 && Total == 2)
                    {
                        TempData["AbuseType"] = "being Physically Abused";
                    }
                    //Get the result of ginancially abused
                    else if (points[4] == 1 && points[5] == 1 && Total == 2)
                    {
                        TempData["AbuseType"] = "being Financially Abused";
                    }
                    //Get the result of Emotionally abused
                    else if (points[6] == 1 && points[7] == 1 && Total == 2)
                    {
                        TempData["AbuseType"] = "being Emotionally Abused";
                    }
                    //Get the result of Sexually abused
                    else if (points[8] == 1 && points[9] == 1 && Total == 2)
                    {
                        TempData["AbuseType"] = "being Sexually Abused";
                    }
                    //Get the result of neglect
                    else if (points[11] == 1 && points[10] == 1 && Total == 2)
                    {
                        TempData["AbuseType"] = "being Neglected";
                    }

                    //No abuse happening
                    else if (Total == 0)
                    {
                        TempData["AbuseType"] = "not being Abused";
                    }
                    else if (Total >= 10)
                    {
                        TempData["AbuseType"] = "being badly Abused";
                    }


                    return RedirectToAction("Index");
                }
            }

            return RedirectToAction("Index");
        }

        // GET: Questions/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Question question = db.Questions.Find(id);
            if (question == null)
            {
                return HttpNotFound();
            }
            return View(question);
        }

        //POST: Questions/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "QuestionId,Question1")] Question question)
        {
            if (ModelState.IsValid)
            {
                db.Entry(question).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(question);
        }

        // GET: Questions/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Question question = db.Questions.Find(id);
            if (question == null)
            {
                return HttpNotFound();
            }
            return View(question);
        }

        // POST: Questions/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Question question = db.Questions.Find(id);
            db.Questions.Remove(question);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
