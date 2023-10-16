import BarChart from "./BarChart"
import Donut from "./Donut"


const Bar = () => {
  return (
    <div className="col-12 mt-3 ms-5 d-flex">
     
      <div className="left col-7 card">
        <div className="d-flex flex-column">
          <span className="fs-4 fw-bold ms-3">Overview</span>
          <span className="text-muted mt-0 ms-3" style= {{fontSize:"14px"}}>Monthly Earning</span>
        </div>
        <div className="">
          <BarChart/>
        </div>        
      </div>
      <div className="right card ms-3" style={{}}>
        <div className="d-flex flex-column">
          <span className="fs-4 fw-bold ms-3">Customers</span>
          <span className="text-muted mt-0 ms-3" style= {{fontSize:"14px"}}>Customes that buy products</span>
        </div>
        <div className="">
            <Donut/>
        </div> 

      </div>
    </div>
    
  )
}

export default Bar