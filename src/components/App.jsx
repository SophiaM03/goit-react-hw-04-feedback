import { useState } from 'react';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Statistic from './Statistics/Statistics';
import Notification from '../components/Notification/Notification';
import Section from './Section/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  const changeFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const PositiveFeedback = (good * 100) / countTotalFeedback() || 0;
    return Math.round(PositiveFeedback);
  };

  const total = countTotalFeedback();

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={options} changeFeedback={changeFeedback} />
      {total ? (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}
