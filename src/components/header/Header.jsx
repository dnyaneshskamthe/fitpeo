

const Header= () => {
  return (
    <div className="mt-4 ms-5 d-flex align-items-center header-wrapper">
      <div className="d-flex col-8">
        <p className="greeting fw-bold">Hello, Shahrukh</p>
        <img src="hello.svg" alt="" className="hand mb-3" />
      </div>
      <div className="col-4 d-flex search-wrapper">
        <img src="search.svg" alt="" className="search-icon "/>
        <input type="text" placeholder="search" className="form-control w-75 ps-5 border border-0"/>
      </div>
    </div>
  )
}

export default Header