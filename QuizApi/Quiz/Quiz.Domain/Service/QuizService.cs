using AutoMapper;
using Quiz.Domain.Models;
using Quiz.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Quiz.Domain.Service
{
    public class QuizService : IQuizService
    {
        private readonly IQuizRepository _quizRepository;
        private readonly IMapper _mapper;

        public QuizService(IQuizRepository quizRepository, IMapper mapper)
        {
            _quizRepository = quizRepository;
            _mapper = mapper;
        }

        public async Task<bool> CheckAnswer(long questionId, string userAnswer)
        {
            if (await _quizRepository.CheckAnswer(questionId, userAnswer) == false)
            {
                return false;
            }

            return true;
        }

        public async Task<List<Question>> GetNQuestionsByCategoryAndDifficult(int n, string category, string difficulty)
        {
            var questions = await _quizRepository.GetNQuestionsByCategoryAndDifficult(n, category, difficulty);

            var questionList = new List<Question>();

            foreach (var q in questions)
            {
                questionList.Add(_mapper.Map<Question>(q));
            }

            return questionList;
        }
    }
}
