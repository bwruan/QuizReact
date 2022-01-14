using Quiz.Infrastructure.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Quiz.Infrastructure
{
    public interface IQuizRepository
    {
        Task<List<Question>> GetNQuestionsByCategoryAndDifficult(int n, string category, string difficulty);
    }
}