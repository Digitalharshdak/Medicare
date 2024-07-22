import './App.css';
import './Style.css'
import Navbar from './component/Navbar';
import Header from './component/Header';
import Service from './component/Service';  
import Innovative from './component/Innovative';
import Specialist from './component/Specialist';
import News from './component/News';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <div class="Navbarm" id="Medicare">
      <Navbar/>
      <Header/>
      <Service/>
      <Innovative/>
      <div className='special'>
      <Specialist/>
      </div>
      <News/>
      <Footer/>
    </div>
    </>
  );
}

export default App;