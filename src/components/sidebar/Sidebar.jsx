
const Sidebar = () => {

  
  return (
    <div className="container container-fluide">
    <div className="row vh-100">
      <div className="col-md-3">
        <div className="offcanvas sidebar offcanvas-start col-3 offcanvas-container show text-white" data-bs-toggle="offcanvas">
          <div className="offcanvas-header">
          <div className="d-flex align-items-center">
                <img src="dashboard.svg" alt="" className="m-2" />
                <span className="fw-bold fs-4">Dashboard</span>
              </div>
          </div>
          <div className="offcanvas-body">
            <div className="d-flex flex-column">
              
              <div className="d-flex flex-column">
                <div className="d-flex gap-2 bg-secondary rounded p-2">
                  <img src="bulb.svg" alt="" className="" />
                  <span className="text-white">Dashboard</span>
                </div>
                <div className="mt-3 d-flex justify-content-between align-items-center menu rounded p-2">
                  <div className="d-flex gap-2">
                    <img src="product.svg" alt="" />
                    <span className="fs-6 sidebar-menu " >Product</span>
                  </div>
                  <span>
                    <img src="right.svg" alt="" />
                  </span>
                </div>
                <div className="mt-3 d-flex justify-content-between align-items-center menu rounded p-2">
                  <div className="d-flex gap-2">
                    <img src="customers.svg" alt="" />
                    <span className="fs-6 sidebar-menu">Customers</span>
                  </div>
                  <span>
                    <img src="right.svg" alt="" />
                  </span>
                </div>
                <div className="mt-3 d-flex justify-content-between align-items-center menu rounded p-2">
                  <div className="d-flex gap-2 ">
                    <img src="income.svg" alt="" />
                    <span className="fs-6 sidebar-menu">Income</span>
                  </div>
                  <span>
                    <img src="right.svg" alt="" />
                  </span>
                </div>
                <div className="mt-3 d-flex justify-content-between align-items-center menu rounded p-2">
                  <div className="d-flex gap-2">
                    <img src="promote.svg" alt="" />
                    <span className="fs-6 sidebar-menu">Promote</span>
                  </div>
                  <span>
                    <img src="right.svg" alt="" />
                  </span>
                </div>
                <div className="mt-3 d-flex justify-content-between align-items-center menu rounded p-2">
                  <div className="d-flex gap-2">
                    <img src="help.svg" alt="" />
                    <span className="fs-6 sidebar-menu">Help</span>
                  </div>
                  <span>
                    <img src="right.svg" alt="" />
                  </span>
                </div>
              </div>
              <div className="footer border rounded d-flex start-0 md-5 end-2 text-white align-items-center">
                <div className="icon p-2">
                  <img src="user.png" className="rounded-circle pic" alt="" />
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
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Sidebar;
