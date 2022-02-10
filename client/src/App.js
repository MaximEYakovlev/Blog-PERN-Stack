import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { ArticlesList } from "./components/articlesList/ArticlesList";
import { SpecificArticle } from "./components/specificArticle/SpecificArticle";
import { UpdateArticle } from "./components/updateArticle/UpdateArticle";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/article/:id" element={<SpecificArticle />} />
        <Route path="/article/:id/edit" element={<UpdateArticle />} />
      </Routes>
    </div>
  );
}

export default App;
