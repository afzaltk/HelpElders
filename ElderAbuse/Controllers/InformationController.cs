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
    public class InformationController : Controller
    {
       
        // GET: Information
        public ActionResult Index()
        {
            return View();
        }
    }
}
