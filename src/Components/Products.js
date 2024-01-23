import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'


function Product() {

  const [products, setproducts] = useState([]);   
  useEffect(() => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => {console.log(data)
        setproducts(data)
      }
      
      );
     
  }, []);

 function deletProduct(productId) {
  Swal.fire({title:`are you sure to delet?` })
  fetch(`http://localhost:9000/products/${productId}`, { method: 'DELETE' })
  .then((res) => res.json()) .then((data) => {console.log(data) });
 }
  return (
    <>
      <>
        <div class="table-responsive mt-5 ">
          <table class="table">
            <tr>
              <th scope="row m-2"></th>
              <th>Id</th>
              <th>title</th>
              <th>Price</th>
              <th>operation</th>
            </tr>
            {products.map((product) => {
              return (
                <tr>
                  <th scope="row"></th>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}$</td>
                  <td>
                    <button type="button" class="btn btn-danger "  onClick={()=>deletProduct(product)}>
                      Delete
                    </button>
                    < Link to={`/products/${product.id}`} type="button" class="btn btn-info btn-sm" >
                      View
                    </Link>
                    <button type="button" class="btn btn-primary btn-sm">
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
           
          </table>
        </div>
      </>
      <table />
    </>
  );
}

export default Product;
