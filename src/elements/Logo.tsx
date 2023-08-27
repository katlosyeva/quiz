import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.logo}>
      <img src="/assets/logos/SongQuiz.png" alt="logo" />
      <img src="/assets/logos/SongQuiz (2).png" alt="logo" />
    </div>
  );
}
export default Logo;
