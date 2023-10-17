import { useEffect, useState } from "react";


const ProductTable = () => {
    const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch('/src/components/data/products.json'); //vite-project/src/components/data/products.json
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      // Handle the error (e.g., display an error message)
    }
  };

  fetchProducts();
}, []);

  return (
    <div className="ps-3">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th className="col-6" scope="col">Product Name</th>
            <th scope="col" className="text-center">Stock</th>
            <th scope="col" className="text-center">Price</th>
            <th scope="col" className="text-center">Total Sales</th>
          </tr>
         
        </thead>
        {products.map((product, index) => (
          <tr key={index} className="p-1">
           <td className="d-flex align-items-center">
              <div className="product-image w-25">
                <img className="w-75 rounded" src={product.productImage} alt={product.productTitle} />
              </div>
              <div className="product-details mt-3">
                <h5>{product.productTitle}</h5>
                <p>{product.productShortInfo}</p>
              </div>
            </td>
            <td className="text-center">{product.stock}</td>
            <td className="text-center">{product.price}</td>
            <td className="text-center">{product.totalSales}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProductTable;
