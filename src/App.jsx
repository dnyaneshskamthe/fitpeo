import Card from "./components/cards/Card"
import Bar from "./components/charts/Bar"
import Header from "./components/header/Header"
import Products from "./components/products/Products"
import Sidebar from "./components/sidebar/Sidebar"
import "./components/basic/basic.css"

function App() {
 
  return (
    <>
     <div className="d-flex ">
      <div className="col-2 sidebar vh-100 text-white">
        <Sidebar/>
      </div>
      <div className="col-10 vh-100 right-content">
        <Header/>
        <Card/>
        <Bar/>
        <Products/>
     </div>
     </div>
    </>
  )
}

export default App
