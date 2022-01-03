using Quiz.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Quiz.Domain.Service
{
    public interface IQuizService
    {
        Task<bool> CheckAnswer(long questionId, string answer);
        Task<List<Question>> GetNQuestionsByCategoryAndDifficult(int n, string category, string difficulty);
    }
}