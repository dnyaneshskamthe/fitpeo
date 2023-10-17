

const Header= () => {
  return (
    <div className="mt-3 ms-5 d-flex align-items-center header-wrapper justify-content-between flex-wrap" >
      <div className="d-flex col-9">
        <p className="greeting fw-bold">Hello, Shahrukh</p>
        <img src="hello.svg" alt="" className="hand mb-3 ms-2" />
      </div>
      <div className=" d-flex col-2 me-5 search-wrapper">
        <img src="search.svg" alt="" className="search-icon "/>
        <input type="text" placeholder="search" className="form-control search ps-5 border border-0"/>
      </div>
    </div>
  )
}

export default Header