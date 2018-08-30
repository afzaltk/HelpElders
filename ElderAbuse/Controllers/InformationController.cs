using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ElderAbuse.Models;

namespace ElderAbuse.Controllers
{
    public class InformationController : Controller
    {
        private HelpEldersDBEntities db = new HelpEldersDBEntities();

        // GET: Information
        public ActionResult Index()
        {
            return View();
        }

        // GET: Information/Details/5
        public ActionResult Details(int? id)
        {
            return View();
        }

        // GET: Information/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Information/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ResponseNumber,AbuseType")] ResponseType responseType)
        {
            if (ModelState.IsValid)
            {
                db.ResponseTypes.Add(responseType);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(responseType);
        }

        // GET: Information/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ResponseType responseType = db.ResponseTypes.Find(id);
            if (responseType == null)
            {
                return HttpNotFound();
            }
            return View(responseType);
        }

        // POST: Information/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ResponseNumber,AbuseType")] ResponseType responseType)
        {
            if (ModelState.IsValid)
            {
                db.Entry(responseType).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(responseType);
        }

        // GET: Information/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ResponseType responseType = db.ResponseTypes.Find(id);
            if (responseType == null)
            {
                return HttpNotFound();
            }
            return View(responseType);
        }

        // POST: Information/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            ResponseType responseType = db.ResponseTypes.Find(id);
            db.ResponseTypes.Remove(responseType);
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
