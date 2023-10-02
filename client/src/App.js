import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LadingPage/LadingPage';
import HomePage from './Components/HomePage/HomePage';
import DetailPage from './Components/DetailPage/DetailPage';
import FormPage from './Components/FormPage/FormPage';
import { useLocation, Link } from 'react-router-dom';


function App() {
   const location = useLocation();


   return (
      <div className="App">
         {
            location.pathname !== "/" && location.pathname !== "/home" && (
               <Link to="/home"><button className='btn'>Back</button></Link>
            )
         }
         <Routes>
            < Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path='/dogs' element={<FormPage />} />
         </Routes>
      </div>
   );
}

export default App;
