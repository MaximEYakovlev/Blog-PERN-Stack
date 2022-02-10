import style from "./UpdateArticle.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateArticle = () => {
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getArticle = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/article/${id}`);
      setInput(response.data.heading);
      setTextarea(response.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  const updateArticle = async (event) => {
    event.preventDefault();

    try {
      await axios({
        method: "put",
        url: `http://localhost:5000/article/${id}`,
        data: {
          heading: input,
          content: textarea,
        },
      });
      navigate(`/article/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={updateArticle}>
        <input
          className={style.input}
          type="text"
          defaultValue={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="enter the title"
        />
        <textarea
          className={style.textarea}
          type="text"
          defaultValue={textarea}
          onChange={(event) => setTextarea(event.target.value)}
          placeholder="enter the text"
        />
        <button className={style.button} type="submit">
          update
        </button>
      </form>
    </div>
  );
};
