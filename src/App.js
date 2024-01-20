import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2  Sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/products" element={<Products/>} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
