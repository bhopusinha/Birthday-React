import styles from '../styles/BirthdayWish.module.css';
import pranav from '../assets/pranav.jpg';

const BirthdayWish = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Happy Birthday, Pranav Sir! 🎂</h1>
      <img 
        src={pranav} 
        alt="Birthday Celebration" 
        className={styles.birthdayImg}
      />
      <p className={styles.message}>
        🎉 Happy Birthday to the visionary who leads with wisdom and inspires us every day.
        May your year be filled with success and happiness as you continue to guide us to greater heights.
        Here's to celebrating you and all your achievements! 🎉
      </p>
      <p className={styles.message}>
        🎂 Happy Birthday, Boss! If we could bottle your enthusiasm and vision, we'd be millionaires.
        But since we can't, we'll just keep following your lead and hoping some of it rubs off on us.
        Have a fantastic day! 🎂
      </p>
    </div>
  );
};

export default BirthdayWish;
