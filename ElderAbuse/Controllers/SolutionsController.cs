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
    public class SolutionsController : Controller
    {
        

        // GET: Solutions
        public ActionResult Physical()
        {
            
            return View();
        }

        // GET: Solutions/Details/5
        public ActionResult Financial()
        {
           
            return View();
        }

        // GET: Solutions/Create
        public ActionResult Emotional()
        {
           
            return View();
        }

       

        // GET: Solutions/Edit/5
        public ActionResult Edit()
        {
           
            return View();
        }

        

        // GET: Solutions/Delete/5
        public ActionResult Delete()
        {
          
            return View();
        }

       
    }
}
