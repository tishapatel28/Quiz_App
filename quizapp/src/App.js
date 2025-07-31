import logo from './logo.svg';
import './App.css';
import Quetion from './Quetion';
import Quetion_Bank from './Quetion_Bank';
import Score from './Score';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QuetionBank: Quetion_Bank,
      currentQuetion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
    };
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  }

  checkAnswer = () => {
    const { QuetionBank, currentQuetion, selectedOption, Score } = this.state;
    if (selectedOption === QuetionBank[currentQuetion].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
  };

  handleNextQuestion = () => {
    const { QuetionBank, currentQuetion } = this.state;
    if (currentQuetion + 1 < QuetionBank.length) {
      this.setState((prevState) => ({
        currentQuetion: prevState.currentQuetion + 1,
        selectedOption: '',
      }));
    }
    else {
      this.setState({
        quizEnd: true,
      });
    }
  };

  render() {
    const { QuetionBank, currentQuetion, selectedOption, score, quizEnd } = this.state;
    return (
      // <div className='App d-flex flex-column align-items-center justify-content-center'>

        <div className='quiz'>
          {!quizEnd ? (
            <Quetion
              question={QuetionBank[currentQuetion]} selectedOption={selectedOption} onOptionChange={this.handleOptionChange} onSubmit={this.handleFormSubmit} />
          ) : (
            <Score Score={score} onNextQuetion={this.handleNextQuestion} className="score" />
          )}
        </div>

      // </div>
    )
  }

}

export default App;

