const Sidebar = () => {
  return (
    <div className="wrapper d-flex flex-column">
      <div className="mt-3 text-white ms-4 d-flex align-items-center">
        <img src="dashboard.svg" alt="" className="m-2" />
        <span className="fw-bold fs-4">Dashboard</span>
      </div>
      <div className="d-flex flex-column ms-4">
        <div className="d-flex mt-3 gap-2">
          <img src="bulb.svg" alt="" className="mt-5 ms-2" />
          <span className="mt-5">Dashboard</span>
        </div>
        <div className="mt-3 d-flex justify-content-start align-items-center">
          <div className="col-8 mt-2 d-flex gap-2 ms-2">
            <img src="product.svg" alt="" className="" />
            <span className="fs-6 sidebar-menu">Product</span>
          </div>
          <div className="col-4 mt-2">
            <span>
              <img src="right.svg" alt="" className="" />
            </span>
          </div>
        </div>

        <div className="mt-3 d-flex justify-content-start align-items-center">
          <div className="col-8 mt-2 d-flex gap-2 ms-2">
            <img src="customers.svg" alt="" className="" />
            <span className="fs-6 sidebar-menu">Customers</span>
          </div>
          <div className="col-4 mt-2">
            <span>
              <img src="right.svg" alt="" className="" />
            </span>
          </div>
        </div>

        <div className="mt-3 d-flex justify-content-start align-items-center">
          <div className="col-8 mt-2 d-flex gap-2 ms-2">
            <img src="income.svg" alt="" className="" />
            <span className="fs-6 sidebar-menu">Income</span>
          </div>
          <div className="col-4 mt-2">
            <span>
              <img src="right.svg" alt="" className="" />
            </span>
          </div>
        </div>

        <div className="mt-3 d-flex justify-content-start align-items-center">
          <div className="col-8 mt-2 d-flex gap-2 ms-2">
            <img src="promote.svg" alt="" className="" />
            <span className="fs-6 sidebar-menu">Promote</span>
          </div>
          <div className="col-4 mt-2">
            <span>
              <img src="right.svg" alt="" className="" />
            </span>
          </div>
        </div>

        <div className="mt-3 d-flex justify-content-start align-items-center">
          <div className="col-8 mt-2 d-flex gap-2 ms-2">
            <img src="help.svg" alt="" className="" />
            <span className="fs-6 sidebar-menu sidebar-menu">Help</span>
          </div>
          <div className="col-4 mt-2">
            <span>
              <img src="right.svg" alt="" className="" />
            </span>
          </div>
        </div>
      </div>
      <div className="footer border rounded d-flex ms-2  start-0 md-5 end-2 align-items-center">
        <div className="icon p-2">
          <img src="user.png" className="rounded rounded-circle pic" alt="" />
        </div>
        <div className="info d-flex ms-2 flex-column">
          <span className="pmanager">Dnyanesh</span>
          <span className="position text-secondary">Project Manager</span>
        </div>
        <div className="arrow">
          <img src="down.svg" className="text-secondary" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
