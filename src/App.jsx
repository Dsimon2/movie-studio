import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

function App() {
  
  return (
    <div className="App">
    <Router>
      <Header />
        <Routes>
            <Route index element={<Home />}></Route>
    
            <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
    </Router>
</div>
  )
}

export default App
