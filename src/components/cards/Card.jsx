

const Card = () => {
  return (
    <>
    <div className="card-wrapper d-flex mx-5 mt-3 justify-content-center align-item-center">
      <div className="card  d-flex flex-row mx-1" style = {{width: "18rem" , height: "7rem"}}>
        <div className="circle m-2 border-0 rounded-circle d-flex justify-content-center align-item-center">
          <img src="dollar.svg" alt="" className="p-4"/>
        </div>
        <div className="card-info d-flex flex-column justify-content-center align-item-center mt-4">
          <div className="">0024
          <span className="text-muted mt-5">Earning</span>
          <h2>$198K</h2>
          <p className=""><img src="up.svg" alt="" /><span className="text-success ">37.8% </span> this month</p>
          </div>
        </div>
      </div>

      <div className="card  d-flex flex-row ms-3" style = {{width: "18rem" , height: "7rem"}}>
        <div className="circle1 m-2 border-0 rounded-circle d-flex justify-content-center align-item-center">
          <img src="orders.svg" alt="" className="p-4"/>
        </div>
        <div className="card-info d-flex flex-column justify-content-center align-item-center mt-4">
          <div className="">
          <span className="text-muted mt-5">Orders</span>
          <h2>$2.4K</h2>
          <span className="pe-1"><img src="down-arrow.svg" alt="" /><span className="text-danger ">2% </span> this month</span>
          </div>
        </div>
      </div>

      <div className="card  d-flex flex-row ms-3" style = {{width: "18rem" , height: "7rem"}}>
        <div className="circle2 m-2 border-0 rounded-circle d-flex justify-content-center align-item-center">
          <img src="balance.svg" alt="" className="p-4"/>
        </div>
        <div className="card-info d-flex flex-column justify-content-center align-item-center mt-4">
          <div className="">
          <span className="text-muted mt-5">Balance</span>
          <h2>$2.4K</h2>
          <p className="pe-1"><img src="down-arrow.svg" alt="" /><span className="text-danger ">2% </span> this month</p>
          </div>
        </div>
      </div>

      <div className="card  d-flex flex-row mx-3" style = {{width: "18rem" , height: "7rem"}}>
        <div className="circle3 m-2 border-0 rounded-circle d-flex justify-content-center align-item-center">
          <img src="sales.svg" alt="" className="p-4"/>
        </div>
        <div className="card-info d-flex flex-column justify-content-center align-item-center mt-4">
          <div className="">
          <span className="text-muted mt-5">Total Sales</span>
          <h2>$89K</h2>
          <span className=""><img src="up.svg" alt="" /><span className="text-success ">11% </span> this month</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card