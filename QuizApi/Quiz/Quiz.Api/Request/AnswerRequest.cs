using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quiz.Api.Request
{
    public class AnswerRequest
    {
        public long QuestionId { get; set; }

        public string UserAnswer { get; set; }
    }
}
