import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Data from "./components/Data";
import Control from "./components/Control"
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";

function App() {
  const privacy= useSelector(state=> state.privacy)
 
  return (
    <>
       <div className="px-4 py-5 my-5 text-center">
        <Card>
          <Header />
          <div className="col-lg-6 mx-auto">
          {privacy === true ? <Privacy/> : <Data /> }  
            <Control/>
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
