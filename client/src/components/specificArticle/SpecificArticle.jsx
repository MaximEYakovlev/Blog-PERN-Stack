import style from "./SpecificArticle.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const SpecificArticle = () => {
  const [article, setArticle] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getArticle = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/article/${id}`);
      setArticle(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  const deleteArticle = async () => {
    try {
      await axios.delete(`http://localhost:5000/article/${id}`);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  const editArticle = () => {
    navigate(`/article/${id}/edit`);
  };

  const showAllArticles = () => {
    navigate("/");
  };

  return (
    <div className={style.container}>
      <div className={style.heading}>{article.heading}</div>
      <div className={style.created}>created: {article.createdAt}</div>
      {article.createdAt !== article.updatedAt ? (
        <div className={style.updated}>updated: {article.updatedAt}</div>
      ) : null}
      <div className={style.content}>{article.content}</div>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={editArticle}>
          edit
        </button>
        {article.heading && article.content && (
          <button className={style.button} onClick={showAllArticles}>
            all articles
          </button>
        )}
        <button className={style.deleteButton} onClick={deleteArticle}>
          delete
        </button>
      </div>
    </div>
  );
};
