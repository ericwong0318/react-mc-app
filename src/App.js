import React from "react";
//question bank
import data from "/assets/data.json";
//jquery
import $ from "jquery";
//react boostrap need to combine with bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Container, Row } from "react-bootstrap";
import "./App.css";
//Components
import { FirstPage } from "./FirstPage";
import { Navigatebar } from "./Navigatebar";
import { ScoreContent } from "./ScoreContent";
import { FeedbackBadge } from "./FeedbackBadge";
import { Question } from "./Question";
import { Answer } from "./Answer";
import { FinishPage } from "./FinishPage";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //page status
      isFirstPage: true,
      isSubmitted: false,
      isCorrect: false,
      //Question & Answer state
      questionNo: 0,
      totalQuestionNo: data.length,
      //Question state
      questionText: data[0].questionText,
      //Answer state
      answerChoice: data[0].answerChoice,
      correctAnswer: data[0].correctAnswer,
      feedback: data[0].feedback,
      //Button
      btnLabel: "Submit",
      //Score
      score: 0,
      wrongScore: 0,
      sName: "Undefined",
    };
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }

  handleClick() {
    var correctAnswer = this.state.correctAnswer;
    var answerChoice = this.state.answerChoice;
    var isSubmitted = this.state.isSubmitted;
    var score = this.state.score;
    var wrongScore = this.state.wrongScore;
    var isFirstPage = this.state.isFirstPage;

    if (isFirstPage === true) {
      // first page
      this.setState({
        isFirstPage: false,
      });
    } else {
      // change to next question
      if (isSubmitted === true) {
        this.handleQuestionChange();
        return null;
      } else {
        // check correstness
        var radioCheckedVal = $("form input[type=radio]:checked").val();
        if (answerChoice[correctAnswer] === radioCheckedVal) {
          //Correct
          console.log("correct");
          score += 1;
          this.setState({
            isSubmitted: true,
            isCorrect: true,
            btnLabel: "Next Question",
            score: score,
          });
        } else {
          //Wrong
          console.log("wrong");
          wrongScore += 1;
          this.setState({
            isSubmitted: true,
            isCorrect: false,
            btnLabel: "Next Question",
            wrongScore: wrongScore,
          });
        }
      }
    }
  }

  handleQuestionChange() {
    var totalQuestionNo = this.state.totalQuestionNo;
    this.setState((state) => ({
      questionNo: state.questionNo + 1,
    }));
    if (this.state.questionNo >= totalQuestionNo - 1) {
      return null;
    } else {
      this.setState((state) => ({
        isSubmitted: false,
        questionText: data[state.questionNo].questionText,
        answerChoice: data[state.questionNo].answerChoice,
        feedback: data[state.questionNo].feedback,
        correctAnswer: data[state.questionNo].correctAnswer,
        btnLabel: "Submit",
      }));
    }
  }

  render() {
    //Status
    var isFirstPage = this.state.isFirstPage;
    var isSubmitted = this.state.isSubmitted;
    //Question
    var questionNo = this.state.questionNo;
    var totalQuestionNo = this.state.totalQuestionNo;
    var questionText = this.state.questionText;
    //Answer
    var answerChoice = this.state.answerChoice;
    var correctAnswer = this.state.correctAnswer;
    //Button
    var btnLabel = this.state.btnLabel;
    //Score
    var score = this.state.score;
    var wrongScore = this.state.wrongScore;
    var sName = this.state.sName;
    //Determine render content
    if (isFirstPage === true) {
      //First page of the website
      return (
        <FirstPage handleClick={this.handleClick.bind(this)} sName={sName} />
      );
    } else if (questionNo > totalQuestionNo - 1) {
      //Final page of the website
      return <FinishPage score={score} wrongScore={wrongScore} />;
    } else {
      var answerChoiceCorrect = data[questionNo].answerChoice[correctAnswer];
      //MC quetions
      return (
        <Container>
          <Row>
            <ScoreContent
              score={score}
              wrongScore={wrongScore}
              totalQuestionNo={totalQuestionNo}
            />
          </Row>
          <br />
          <Row>
            <Question
              questionNo={questionNo}
              questionText={questionText}
              handleQuestionChange={this.handleQuestionChange}
            />
          </Row>
          <Row>
            <Answer
              answerChoice={answerChoice}
              btnLabel={btnLabel}
              handleQuestionChange={this.handleQuestionChange}
              handleClick={this.handleClick.bind(this)}
            />
          </Row>
          <br />
          <Row>
            <h4>
              <FeedbackBadge
                isCorrect={this.state.isCorrect}
                feedback={this.state.feedback}
                answerChoiceCorrect={answerChoiceCorrect}
                isSubmitted={isSubmitted}
              />
            </h4>
          </Row>
        </Container>
      );
    }
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigatebar />
        <Jumbotron>
          <MainContent />
        </Jumbotron>
      </div>
    );
  }
}
