
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/login/login';
import Signup from './component/login/signup';
import Home from './component/homepage/home';
import Movies from './component/movies/movies'


function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/homePage" element={<Home />} />
          
        </Routes>
      </BrowserRouter> 
      
     
    </>
  );
}

export default App;
