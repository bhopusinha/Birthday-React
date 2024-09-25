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
        🎂 Warmest birthday wishes to the most remarkable leader. May this special day bring you all the success and happiness you deserve. Happy Birthday, Pranav Sir!! 🎂
      </p>
    </div>
  );
};

export default BirthdayWish;
