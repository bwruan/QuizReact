CREATE TABLE dbo.Questions(
	QuestionId bigint PRIMARY KEY Identity(1,1) NOT NULL,
    Question varchar(max) not null,
	Answer varchar(max) not null,
	Category varchar(50) not null,
	Difficulty varchar(25) not null
);