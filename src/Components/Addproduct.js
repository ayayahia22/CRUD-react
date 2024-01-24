import { useState } from "react";

function Addproduct() {
  const [title, settitle] = useState("");
  const [price, settprice] = useState(0);
  const forsubmit = (e) => {
    e.preventDefault();
 fetch(`http://localhost:9000/products`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
      });
  };

return (
  <>
    <h1>Add product</h1>
    <form onSubmit={forsubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1"> Title</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="producttitle"
          onChange={(e) => settitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1"> Price</label>
        <input
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="producttitle"
          onChange={(e) => settprice(e.target.value)}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Add product
      </button>
    </form>
  </>
);
};
export default Addproduct;
