
import './App.css'
import HomePage from './pages/HomePage'
import PageNotFound from "./pages/PageNotFound"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipeDetails from './pages/RecipeDetails'
import BlogsPage from './pages/BlogsPage'
import PopularPage from './pages/PopularPage'
function App() {

  return (
    <BrowserRouter>
 
   <Routes>

    <Route index path='/' element={<HomePage/>}/>
    <Route path='blogs' element={<BlogsPage/>}/>
    <Route path='popular' element={<PopularPage/>}/>
    <Route path='/recipe/:slug' element={<RecipeDetails/>}/>
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
    
    </BrowserRouter>
  
  )
}

export default App
