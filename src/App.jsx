
import './App.css'
import HomePage from './pages/HomePage'
import PageNotFound from "./pages/PageNotFound"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
 
   <Routes>

    <Route index path='/' element={<HomePage/>}/>
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
    
    </BrowserRouter>
  
  )
}

export default App
