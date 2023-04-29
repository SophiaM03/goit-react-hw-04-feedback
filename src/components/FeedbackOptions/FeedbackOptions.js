import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ changeFeedback, options }) => {
  return (
    <div>
      {Object.keys(options).map(option => {
        return (
          <button
            key={option}
            type="button"
            onClick={() => changeFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  changeFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

export default FeedbackOptions;
