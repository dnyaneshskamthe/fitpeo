import ProductTable from "./ProductTable"


const Products = () => {
  return (
    <div className=" card  mx-5 mt-3 border-0" style={{}}>
    <div className="product">
      <div className="d-flex flex-column">
      <span className="fs-4 fw-bold ms-3">Product Sell</span>
      </div>
      <div>
        <ProductTable/>
      </div>
    </div>
    </div>
  )
}

export default Products