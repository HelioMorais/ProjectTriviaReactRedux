import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';

class Feedbacks extends Component {
  feedbackMessage() {
    const { assertions } = this.props;
    const hit = 3;

    if (assertions < hit) {
      return 'Could be better...';
    }
    return 'Well Done!';
  }

  render() {
    const { assertions, score } = this.props;
    return (
      <div>
        <Header />
        <p>Feedback</p>
        <p>Your Score</p>
        <span data-testid="feedback-total-score">{ score }</span>
        <p>Your Assertions</p>
        <span data-testid="feedback-total-question">{ assertions }</span>
        <div data-testid="feedback-text">{this.feedbackMessage()}</div>
      </div>
    );
  }
}

Feedbacks.propTypes = {
  assertions: PropTypes.number,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = (globalState) => ({
  assertions: globalState.player.assertions,
  score: globalState.player.score,
});

export default connect(mapStateToProps)(Feedbacks);
