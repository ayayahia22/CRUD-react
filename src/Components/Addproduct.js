
function Addproduct() {
    return(<>
    <h1>Add product</h1>
    <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1"> Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="producttitle" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1"> Price</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="producttitle" />
  </div>
  <br/>
  <button type="submit" className="btn btn-primary">Add product</button>
</form></>)
}

export default Addproduct;