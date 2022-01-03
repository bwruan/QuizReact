using Quiz.Infrastructure.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Quiz.Infrastructure
{
    public interface IQuizRepository
    {
        Task<bool> CheckAnswer(long questionId, string answer);
        Task<List<Question>> GetNQuestionsByCategoryAndDifficult(int n, string category, string difficulty);
    }
}