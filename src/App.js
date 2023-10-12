import { BrowserRouter , Route , Routes  } from "react-router-dom";
import About from "./About";
import Navbar from "./Navbar";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
       <Routes> 
        <Route  path="/" element={ <Navbar /> } >
          <Route index  path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
        </Route>
       </Routes> 
    </BrowserRouter>
  )
}

export default App;