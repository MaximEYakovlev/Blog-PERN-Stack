import style from "./ArticleList.module.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Article } from "../article/Article";

export const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const getArticles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/articles/");
      setArticles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const createNewArticle = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/article/",
        data: {
          heading: null,
          content: null,
        },
      });
      navigate(`/article/${response.data.id}/edit`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <button className={style.button} onClick={createNewArticle}>
        create new article
      </button>
      <div className={style.list}>
        {articles.map((article) => (
          <Article key={uuidv4()} article={article} />
        ))}
      </div>
    </div>
  );
};
