import './App.css';
import Footer from './Components/Footer'
import pic from './Images/pic.jpg'
import Body from './Components/Body'

export default function App() {
  return (
    <div className="App">
      <img src={pic} className="profile"/>
      <Body/>
      <Footer/>
    </div>
  );
}
