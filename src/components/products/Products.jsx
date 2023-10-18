import ProductTable from "./ProductTable";

const Products = () => {
  return (
    <div className="card mx-5 mt-1 border-0" style={{}}>
      <div className="product">
        <div className="product-header d-flex">
          <div className="d-flex flex-column col-lg-8 col-md-6 col-sm-3">
            <span className="fs-4 fw-bold ms-3 pt-2">Product Sell</span>
          </div>
          <div className="product-search">
            <input
              type="text"
              placeholder="search"
              className="mt-2 ms-2 ps-3 rounded"
              style={{ width: "10rem", height: "2.4rem" }}
            />
          </div>
          <div className="dropdown mt-2 ms-2">
            <select name="cars" id="cars" className="rounded p-2 border-secondry">
              <option value="30days">last 30 days</option>
              <option value="60days">last 60 days</option>
              <option value="90days">last 90 days</option>
              <option value="120days">last 120 days</option>
            </select>
          </div>
        </div>
      </div>
      <div className="table-wrapper">
        <ProductTable />
      </div>
    </div>
  );
};

export default Products;
