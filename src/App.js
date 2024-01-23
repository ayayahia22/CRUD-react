import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import Addproduct from "./Components/Addproduct";
import { Link } from "react-router-dom";
import Productdetails from "./Components/Productdetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Link to='products/add' type="button" class="btn btn-primary btn-sm mt-2">Add new product</Link>

      <div className="row">
        <div className="col-2  Sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Products' element={<Products/>} />
         <Route path='/Addproduct' element={<Addproduct/>} />
         <Route path='/products/:productId' element={<Productdetails/>} />
       </Routes>
       
        </div>
      </div>
    </div>
  );
}

export default App;
