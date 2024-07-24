import css from './Feedback.module.css';
import { BsEmojiSmile, BsEmojiFrown } from 'react-icons/bs';

const Feedback = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div className={css.feedbackContainer}>
      <p>Good: {goodFeedback}</p>
      <p>Neutral: {neutralFeedback}</p>
      <p>Bad: {badFeedback}</p>
      <p>Total: {totalFeedback}</p>
      <p>
        Positive feedback: {positiveFeedback}%
        {positiveFeedback >= 50 ? (
          <BsEmojiSmile className={css.iconGood} size="28" />
        ) : (
          <BsEmojiFrown className={css.iconBad} size="28" />
        )}
      </p>
    </div>
  );
};

export default Feedback;
