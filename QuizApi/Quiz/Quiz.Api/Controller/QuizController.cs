using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Quiz.Api.Request;
using Quiz.Domain.Service;

namespace Quiz.Api.Controller
{
    [Route("api/quiz")]
    [ApiController]
    [Authorize]
    public class QuizController : ControllerBase
    {
        private readonly IQuizService _quizService;

        public QuizController(IQuizService quizService)
        {
            _quizService = quizService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetNQuestionsByCategoryAndDifficult([FromQuery] int n, string category, string difficulty)
        {
            try
            {
                var questions = await _quizService.GetNQuestionsByCategoryAndDifficult(n, category, difficulty);

                return Ok(questions);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}