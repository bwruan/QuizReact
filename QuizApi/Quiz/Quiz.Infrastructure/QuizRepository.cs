using Microsoft.EntityFrameworkCore;
using Quiz.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quiz.Infrastructure
{
    public class QuizRepository : IQuizRepository
    {
        public async Task<List<Question>> GetNQuestionsByCategoryAndDifficult(int n, string category, string difficulty)
        {
            using (var context = new QuizReactContext())
            {
                var questions = await context.Questions.Where(q => q.Category == category && q.Difficulty == difficulty).ToListAsync();

                var questionList = new List<Question>();
                var skipAmt = 0;

                for (int i = 0; i < n; i++)
                {
                    var rnd = new Random();
                    skipAmt = rnd.Next(0, questions.Count);

                    var q = questions.Skip(skipAmt).Take(1);

                    questionList.Add(q.FirstOrDefault());
                }

                return questionList;
            }
        }

        public async Task<bool> CheckAnswer(long questionId, string answer)
        {
            using (var context = new QuizReactContext())
            {
                var correctAns = await context.Questions.Where(q => q.QuestionId == questionId).Select(q => q.Answer).FirstOrDefaultAsync();

                if (answer != correctAns)
                {
                    return false;
                }

                return true;
            }
        }
    }
}
