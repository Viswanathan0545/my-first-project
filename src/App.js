import './App.css';
import phone from './imgs/mobile.jpeg'
import Clothing from './imgs/Clothing.jpeg'
import Accessories from './imgs/Accessories.jpeg'

import { Link } from 'react-router-dom';

function App() {
  // const [cart, setCart] = useState({});
  return (
    <div className="App">
      <Link style={{textDecoration: 'none'}} to="category/0">
        <div className="category">
          <img src={phone} alt="phones"/>
          <label>Smart Phones</label>
        <h4>Explore..</h4>
        </div>
      </Link>
      <Link style={{textDecoration: 'none'}} to="category/1">
        <div className="category">
          <img src={Clothing} alt="Clothing"/>
          <label>Clothing</label>
        <h4>Explore..</h4>
        </div>
      </Link>
      <Link  style={{textDecoration: 'none'}} to="category/2">
        <div className="category">
          <img src={Accessories} alt="Accessories"/>
          <label>Accesories</label>
        <h4>Explore..</h4>
        </div>
      </Link>
    </div>
  );
}

export default App;
