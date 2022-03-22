import './App.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import {
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <h2>Diddy's Quizzle</h2>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
    </div>
  )
}

export default App
