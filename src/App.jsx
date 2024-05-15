
import './App.css'
import HomePage from './pages/HomePage'
import PageNotFound from "./pages/PageNotFound"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipeDetails from './pages/RecipeDetails'
function App() {

  return (
    <BrowserRouter>
 
   <Routes>

    <Route index path='/' element={<HomePage/>}/>
    <Route index path='/recipe/:slug' element={<RecipeDetails/>}/>
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
    
    </BrowserRouter>
  
  )
}

export default App
