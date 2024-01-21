
import { Link } from "react-router-dom";
function Products() {
  return (
    <>
      <>
        <h1> product page </h1>

        <div class="table-responsive mt-5 ">
          <table class="table">
            <tr>
              <th scope="row m-2"></th>
              <th>Id</th>
              <th>title</th>
              <th>Price</th>
              <th>operation</th>

            </tr>
            <tr>
              <th scope="row"></th>
              <td>1</td>
              <td>product1</td>
              <td>100$</td>
              <td><button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-info btn-sm">View</button><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
              

            </tr>
            <tr>
              <th scope="row"></th>
              <td>2</td>
              <td>product2</td>
              <td>10$</td>
              <td><button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-info btn-sm">View</button><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
              
              
            </tr>
          </table>
        </div>
        
      </>
      <table />
    </>
  );
}

export default Products;
