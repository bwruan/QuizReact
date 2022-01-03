﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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

        [HttpPost("answer")]
        [AllowAnonymous]
        public async Task<IActionResult> CheckAnswer([FromBody] AnswerRequest request)
        {
            try
            {
                var isCorrect = await _quizService.CheckAnswer(request.QuestionId, request.Answer);

                return Ok(isCorrect);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}