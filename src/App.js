
import NotFound from './components/NotFound';
import Home from './components/Home';
import { BrowserRouter, Routes, Route , } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
