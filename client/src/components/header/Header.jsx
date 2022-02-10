import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.logo}>MAXIM...BLOG...</h1>
      </div>
    </div>
  );
};
