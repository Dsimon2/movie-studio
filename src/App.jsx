import './App.css'

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
