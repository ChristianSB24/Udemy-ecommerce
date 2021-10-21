import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Navbar from './components/navbar'
import Homescreen from './screens/Homescreen'
import Productdescscreen from './screens/Productdescscreen'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route exact path="/" component={Homescreen} />
      <Route exact path="/product/:id" component={Productdescscreen} />


    </div>
  );
}

export default App;
