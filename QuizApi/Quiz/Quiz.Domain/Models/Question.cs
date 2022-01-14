using System;
using System.Collections.Generic;
using System.Text;

namespace Quiz.Domain.Models
{
    public class Question
    {
        public long QuestionId { get; set; }

        public string Question1 { get; set; }
        
        public string Answer { get; set; }
        
        public string Category { get; set; }
        
        public string Difficulty { get; set; }

        public string UserAnswer { get; set; }
    }
}
