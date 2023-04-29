import { useState, useMemo } from 'react';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Statistic from './Statistics/Statistics';
import Notification from '../components/Notification/Notification';
import Section from './Section/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };
  // export class App extends Component {
  //   state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };
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
  //   changeFeedback = option => {
  //     this.setState(prevState => {
  //       return {
  //         [option]: prevState[option] + 1,
  //       };
  //     });
  //   };

  const total = useMemo(() => {
    const countTotalFeedback = () => {
      return good + neutral + bad;
    };
    return countTotalFeedback(good + neutral + bad);
  }, [good, neutral, bad]);
  //   countTotalFeedback() {
  //     const { good, neutral, bad } = this.state;
  //     return good + neutral + bad;
  //   }

  const PositiveFeedback = useMemo(() => {
    const countPositiveFeedbackPercentage = () => {
      const total = good + neutral + bad;
      return Math.round((good * 100) / total) || 0;
    };
    return countPositiveFeedbackPercentage();
  }, [good, neutral, bad]);
  //   countPositiveFeedbackPercentage() {
  //     const { good, neutral, bad } = this.state;
  //     const total = good + neutral + bad;
  //     return Math.round((good * 100) / total) || 0;
  //   }
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={options} changeFeedback={changeFeedback} />
      {total ? (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          PositiveFeedback={PositiveFeedback}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}
//   render() {
//     const percentage = this.countPositiveFeedbackPercentage();
//     const total = this.countTotalFeedback();
//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           changeFeedback={this.changeFeedback}
//         />
//         {total ? (
//           <Statistic
//             state={this.state}
//             countPositiveFeedbackPercentage={percentage}
//             countTotalFeedback={total}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     );
//   }
