//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ElderAbuse.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Response
    {
        public int ResponseId { get; set; }
        public int ResponseNumber { get; set; }
        public int QuestionId { get; set; }
        public int Answer { get; set; }
    
        public virtual Question Question { get; set; }
    }
}
