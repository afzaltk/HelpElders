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
            return View(db.Questions.ToList());
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
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Create([Bind(Include = "QuestionId,Question1")] Question question)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        db.Questions.Add(question);
        //        db.SaveChanges();
        //        return RedirectToAction("Index");
        //    }

        //    return View(question);
        //}

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Questionnaire(NewModel newModel)
        {
            
            newModel.responses.ResponseNumber = 1;
            
            if (ModelState.IsValid)
            {

                db.Responses.Add(newModel.responses);
                db.SaveChanges();
                NewModel newModel1 = new NewModel();
                newModel1.questions = db.Questions.Find(newModel.responses.QuestionId+1);

                if (newModel1.questions == null)
                {
                    return HttpNotFound();
                }
                return View(newModel1); 
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

        // POST: Questions/Edit/5
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
