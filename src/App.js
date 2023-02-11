
import NotFound from './components/NotFound';
import Home from './components/Home';
import History from './components/History'
import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
