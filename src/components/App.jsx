import React, { Component } from 'react';
import s from './App.module.css'
import { Container } from "../components/Container";



class App extends Component {
  state = {
      good: 0,
      neutral:0,
      bad:0,
  };
  handleIncrementGood = () => { 
      this.setState((prevState) => {
          return {
            good: prevState.good +1,
          }
      });
  }
  handleIncrementNeutral = () => {
      this.setState((prevState) => {
          return {
              neutral: prevState.neutral +1,
          }
      });
      }  
  
  handleIncrementBad = () => {   
      this.setState((prevState) => {
          return {
              bad: prevState.bad +1
          }
      })
  }
  countTotalFeedback = () => {
    const { good , neutral , bad }=this.state
    return good + neutral + bad; 
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }


  render() {
    return (<div className='counter'>
      <Container>
      <p className="title">Please leve feedback</p>
      <div className="counterControls">
              <button type="button" onClick={this.handleIncrementGood}>Good</button>
              <button type="button" onClick={this.handleIncrementNeutral}>Neutral</button>
              <button type="button"  onClick={this.handleIncrementBad}>Bad</button>
          </div>
          <div>
              <ul>
                  <p>Statistics</p>
                  <li>Good: {this.state.good}</li>
                  <li>Neutral: {this.state.neutral}</li>
                  <li>Bad: {this.state.bad}</li>
                  <li>Total: {this.countTotalFeedback()}</li>
                  <li>Positive fedtback: {this.countPositiveFeedbackPercentage()} %</li>
              </ul> 
          </div>
         </Container>
  </div>);
    
  }
}
export default App;