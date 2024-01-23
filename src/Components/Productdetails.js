import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




function Productdetails() {
    const [product ,setproducts] = useState([]);
  let { productId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:9000/products/${productId}`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        setproducts (product)
      });
  }, []);
  return ({product} && <h1>{product.title}</h1>);
}
export default Productdetails;
