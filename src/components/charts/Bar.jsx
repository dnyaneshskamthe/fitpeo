import BarChart from "./BarChart"
import Donut from "./Donut"


const Bar = () => {
  return (
    <div className=" ms-5 d-flex flex-wrap align-item-center justify-content-between charts-container"> 

      <div className="left mt-3 col-7 card border-0 bar-container">
        <div className="d-flex flex-column ">
          <span className="fs-4 fw-bold ms-3">Overview</span>
          <span className="text-muted mt-0 ms-3" style= {{fontSize:"14px"}}>Monthly Earning</span>
        </div>
        <div className="">
          <BarChart/>
        </div>        
      </div>
      <div className="right mt-3 card border-0 donut-container me-5" style={{}}>
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