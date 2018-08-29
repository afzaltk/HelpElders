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
            newModel.questions= db.Questions.Find(id);
            
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
            if (newModel.responses.QuestionId==1)
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
                if (newModel.responses.QuestionId<12)
                { 
                NewModel newModel1 = new NewModel();
                newModel1.questions = db.Questions.Find(newModel.responses.QuestionId+1);
                
                if (newModel1.questions == null)
                {
                    return HttpNotFound();
                }
                return View(newModel1);
                }
                else if (newModel.responses.QuestionId == 12)
                {
                    
                    //Calculate points of each question
                    var points1 = from c in db.Responses
                                 where c.ResponseNumber == max
                                 where c.QuestionId == 1
                                 select c.Answer;
                    var points2 = from c in db.Responses
                                  where c.ResponseNumber == max
                                  where c.QuestionId == 2
                                  select c.Answer;
                    var points3 = (from c in db.Responses
                                  where c.ResponseNumber == max
                                  where c.QuestionId == 3
                                  select c.Answer).Single();
                    var points4 = (from c in db.Responses
                                  where c.ResponseNumber == max
                                  where c.QuestionId == 4
                                  select c.Answer).Single();
                    var points5 = (from c in db.Responses
                                  where c.ResponseNumber == max
                                  where c.QuestionId == 5
                                  select c.Answer).Single();
                    var points6 = (from c in db.Responses
                                  where c.ResponseNumber == max
                                  where c.QuestionId == 6
                                  select c.Answer).Single();
                    var points7 = (from c in db.Responses
                                  where c.ResponseNumber == max
                                  where c.QuestionId == 7
                                  select c.Answer).Single();
                    var points8 = (from c in db.Responses
                                  where c.ResponseNumber == max
                                  where c.QuestionId == 8
                                  select c.Answer).Single();
                    var points9 = (from c in db.Responses
                                  where c.ResponseNumber == max
                                  where c.QuestionId == 9
                                  select c.Answer).Single();
                    var points10 = (from c in db.Responses
                                  where c.ResponseNumber == max
                                  where c.QuestionId == 10
                                  select c.Answer).Single();
                    var points11 = (from c in db.Responses
                                  where c.ResponseNumber == max
                                  where c.QuestionId == 11
                                  select c.Answer).Single();
                    var points12 = (from c in db.Responses
                                  where c.ResponseNumber == max
                                  where c.QuestionId == 12
                                  select c.Answer).Single();
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
                    if (points3 == 1 && points4 == 1 && Total==2)
                    {
                        TempData["AbuseType"] = "Physically Abused";
                    }
                    //Get the result of ginancially abused
                    else if (points5 == 1 && points6 == 1 && Total == 2)
                    {
                        TempData["AbuseType"] = "Financially Abused";
                    }
                    //Get the result of Emotionally abused
                    else if (points7 == 1 && points8 == 1 && Total == 2)
                    {
                        TempData["AbuseType"] = "Emotionally Abused";
                    }
                    //Get the result of Sexually abused
                    else if (points9 == 1 && points10 == 1 && Total == 2)
                    {
                        TempData["AbuseType"] = "Sexually Abused";
                    }
                    //Get the result of neglect
                    if (points11 == 1 && points12 == 1 && Total == 2)
                    {
                        TempData["AbuseType"] = "Neglected";
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
