

const Card = () => {
  return (
    <>
    <div className="card-wrapper d-flex mx-5 mt-3 justify-content-between flex-wrap align-item-center ">
      <div className="card border-0 d-flex flex-row mx-1 mt-1" style = {{width: "15rem" , height: "7rem"}}>
        <div className="circle m-2 border-0 rounded-circle d-flex justify-content-center align-item-center">
          <img src="dollar.svg" alt="" className="p-4"/>
        </div>
        <div className="card-info d-flex flex-column justify-content-center align-item-center mt-4">
          <div className="">0024
          <span className="text-muted mt-5">Earning</span>
          <h5>$198K</h5>
          <p className=""><img src="up.svg" alt="" /><span className="text-success ">37.8% </span> this month</p>
          </div>
        </div>
      </div>

      <div className="card border-0 d-flex flex-row mt-1 " style = {{width: "15rem" , height: "7rem"}}>
        <div className="circle1 m-2 border-0 rounded-circle d-flex justify-content-center align-item-center">
          <img src="orders.svg" alt="" className="p-4"/>
        </div>
        <div className="card-info d-flex flex-column justify-content-center align-item-center mt-4">
          <div className="">
          <span className="text-muted mt-5">Orders</span>
          <h5>$2.4K</h5>
          <span className="pe-1"><img src="down-arrow.svg" alt="" /><span className="text-danger ">2% </span> this month</span>
          </div>
        </div>
      </div>

      <div className="card border-0 d-flex flex-row mt-1" style = {{width: "15rem" , height: "7rem"}}>
        <div className="circle2 m-2 border-0 rounded-circle d-flex justify-content-center align-item-center">
          <img src="balance.svg" alt="" className="p-4"/>
        </div>
        <div className="card-info d-flex flex-column justify-content-center align-item-center mt-4">
          <div className="">
          <span className="text-muted mt-5">Balance</span>
          <h5>$2.4K</h5>
          <p className="pe-1"><img src="down-arrow.svg" alt="" /><span className="text-danger ">2% </span> this month</p>
          </div>
        </div>
      </div>

      <div className="card border-0 d-flex flex-row mt-1" style = {{width: "15rem" , height: "7rem"}}>
        <div className="circle3 m-2 border-0 rounded-circle d-flex justify-content-center align-item-center">
          <img src="sales.svg" alt="" className="p-4"/>
        </div>
        <div className="card-info d-flex flex-column justify-content-center align-item-center mt-4">
          <div className="">
          <span className="text-muted mt-5">Total Sales</span>
          <h5>$89K</h5>
          <span className=""><img src="up.svg" alt="" /><span className="text-success ">11% </span> this month</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card