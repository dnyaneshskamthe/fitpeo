import Card from "./components/cards/Card";
import Bar from "./components/charts/Bar";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Sidebar from "./components/sidebar/Sidebar";
import "./components/basic/basic.css";

function App() {
  return (
    <>
      <div className="d-flex">
        <div className="col-2 offcanvas-container">
          <Sidebar />
        </div>
        <div className="col-10 vh-100 right-content">
          <div>
            <Header />
          </div>
          <div>
            <Card />
          </div>
          <div >
            <Bar />
          </div>
          <div>
            <Products />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
