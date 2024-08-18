import "./App.css";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RecipeDetails from "./pages/RecipeDetails";
import BlogsPage from "./pages/BlogsPage";
import PopularPage from "./pages/PopularPage";
import CreateRecipe from "./pages/CreateRecipe";
import ProtectedRoute from "./pages/ProtectedRoute";
import TextEditor from "./pages/Quill";
import PostList from "./pages/BlogDetail";
import { CreatePost } from "./pages/CreatePost";
import BlogDetail from "./pages/BlogDetail";
import UserRecipes from "./pages/UserRecipes";
import UserRecipeDetails from "./pages/UserRecipeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="popular" element={<PopularPage />} />
        <Route
          path="create"
          element={
            <ProtectedRoute>
              <CreateRecipe />
            </ProtectedRoute>
          }
        >
        <Route index element={<Navigate replace to="blog" />} />
          <Route path="blog" element={<TextEditor />} />
          <Route path="post" element={<CreatePost />} />
        </Route>

        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/recipe/:slug" element={<RecipeDetails />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="tasty-trades" element={<UserRecipes />} />
        <Route path="/tasty-trades/:slug" element={<UserRecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
