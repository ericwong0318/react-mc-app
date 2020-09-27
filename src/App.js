import React from "react";
/**
 * Question banks
 */
import data from "./assets/data.json";
/**
 * jQuery
 */
import $ from "jquery";
/**
 * React boostrap need to combine with bootstrap
 */
import "bootstrap/dist/css/bootstrap.css";
import { Jumbotron, Container, Row } from "react-bootstrap";
/**
 * CSS
 */
import "./App.css";
/**
 * Components
 */
import { FirstPage } from "./FirstPage";
import { Navigatebar } from "./Navigatebar";
import { ScoreContent } from "./ScoreContent";
import { FeedbackBadge } from "./FeedbackBadge";
import { Question } from "./Question";
import { Answer } from "./Answer";
import { FinishPage } from "./FinishPage";

/**
 * Main content of the website, switch between FirstPage (instruction), MC question (questions) and FinalPage (Result of MC questions)
 */
class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /**
       * Page status state
       */
      isFirstPage: true,
      isSubmitted: false,
      isCorrect: false,
      /**
       * Quetion state
       */
      questionNo: 0,
      totalQuestionNo: data.length,
      questionText: data[0].questionText,
      /**
       * Answer state
       */
      answerChoice: data[0].answerChoice,
      correctAnswer: data[0].correctAnswer,
      feedback: data[0].feedback,
      /**
       * Button label state
       */
      btnLabel: "Submit",
      /**
       * Score state
       */
      correctScore: 0,
      wrongScore: 0,
      sName: "Undefined",
    };
    /**
     * Function binding
     */
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }

  /**
   * onClick event of the button
   */
  handleClick() {
    /**
     * State
     */
    let correctAnswer = this.state.correctAnswer;
    let answerChoice = this.state.answerChoice;
    let isSubmitted = this.state.isSubmitted;
    let correctScore = this.state.correctScore;
    let wrongScore = this.state.wrongScore;
    let isFirstPage = this.state.isFirstPage;

    /**
     * If the user is in the first page, then click the button will bring him to MC question page
     */
    if (isFirstPage === true) {
      /**
       * set isFirstPage to false, so the programme can enter MC question page
       */
      this.setState({
        isFirstPage: false,
      });
      /**
       * If the user is in the MC question page, performs MC question page's logic
       */
    } else {
      /**
       * Change to next question
       */
      if (isSubmitted === true) {
        this.handleQuestionChange();
        return null;
      } else {
        /**
         * Check correctness
         */
        let radioCheckedVal = $("form input[type=radio]:checked").val();
        if (answerChoice[correctAnswer] === radioCheckedVal) {
          /**
           * If the answer is correct, then it increaes correctScore and updates the states
           */
          console.log("correct");
          correctScore += 1;
          this.setState({
            isSubmitted: true,
            isCorrect: true,
            btnLabel: "Next Question",
            correctScore: correctScore,
          });
        } else {
          /**
           * If the answer is wrong, then it increaes wrongScore and updates the states
           */
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

  /**
   * Change the MC question to next question
   * If there are no more question, go to the FinishPage
   */
  handleQuestionChange() {
    let totalQuestionNo = this.state.totalQuestionNo;
    this.setState((state) => ({
      questionNo: state.questionNo + 1,
    }));
    /**
     * The questionNo is more than totalQuestionNo, so the MC question are all answered.
     */
    if (this.state.questionNo >= totalQuestionNo - 1) {
      return null;
      /**
       * Initalize the status of the MC question
       */
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
    /**
     * Page status state
     */
    let isFirstPage = this.state.isFirstPage;
    let isSubmitted = this.state.isSubmitted;
    /**
     * Question state
     */
    let questionNo = this.state.questionNo;
    let totalQuestionNo = this.state.totalQuestionNo;
    let questionText = this.state.questionText;
    /**
     * Answer state
     */
    let answerChoice = this.state.answerChoice;
    let correctAnswer = this.state.correctAnswer;
    /**
     * Button label state
     */
    let btnLabel = this.state.btnLabel;
    /**
     * Score state
     */
    let correctScore = this.state.correctScore;
    let wrongScore = this.state.wrongScore;
    let sName = this.state.sName;
    /**
     * Determine render content
     */
    if (isFirstPage === true) {
      /**
       * Render FirstPage
       */
      return (
        <FirstPage handleClick={this.handleClick.bind(this)} sName={sName} />
      );
    } else if (questionNo > totalQuestionNo - 1) {
      /**
       * Final page
       */
      return <FinishPage correctScore={correctScore} wrongScore={wrongScore} />;
    } else {
      let answerChoiceCorrect = data[questionNo].answerChoice[correctAnswer];
      /**
       * MC quetions page
       */
      return (
        <Container>
          <Row>
            <ScoreContent
              correctScore={correctScore}
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
