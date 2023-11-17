
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import First from './component/first';
import Second from './component/second';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer></ToastContainer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/second" element={<Second/>}/>
         
         
        
          
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
