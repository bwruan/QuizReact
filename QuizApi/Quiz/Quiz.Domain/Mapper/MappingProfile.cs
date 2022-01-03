using AutoMapper;
using CoreQuestion = Quiz.Domain.Models.Question;
using DbQuestion = Quiz.Infrastructure.Entities.Question;

namespace Quiz.Domain.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<DbQuestion, CoreQuestion>();
        }
    }
}
