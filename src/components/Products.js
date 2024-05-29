import React, { useState } from 'react';
import './Product.css'

export default function Products() {
  const [product, setProduct] = useState('');
  const [productList, setProductList] = useState([]);

  const handleProduct = (e) => {
    setProduct(e.target.value);
  };

  const handleSubmit = () => {
    if (product) {
      setProductList([...productList, product]);
      setProduct('');
    }
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          value={product}
          onChange={handleProduct}
          placeholder="Enter Product Name"
        />
        <button onClick={handleSubmit}>Add Product</button>
      </div>
      <div className="table-container">
        {productList.length!==0 &&(
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, index) => (
              <tr key={index}>
                <td>{product}</td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      </div>
    </div>
  );
}
