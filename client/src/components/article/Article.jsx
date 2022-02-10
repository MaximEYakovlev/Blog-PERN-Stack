import style from "./Article.module.css";
import { Link } from "react-router-dom";

export const Article = ({ article }) => {
  return (
    <div className={style.container}>
      <Link className={style.link} to={`/article/${article.id}`}>
        {article.heading}
      </Link>
      <div className={style.createdAt}>created: {article.createdAt}</div>
    </div>
  );
};
