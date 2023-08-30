
import './App.scss';
import Footer from './Footer';
import HeaderTitle from './HeaderTitle';
// import Iframe from './Iframe';
import DolarBlue from './DolarBlue'
import DolarOficial from './DolarOficial';
import DolarBlueExplicacion from './DolarBlueExplicacion';
import DolarMep from './DolarMep';


const App = () => { 

  return (  
    <div>
      <HeaderTitle />
        <div>
          <div className='container-flex'>
            <div className='row'>
              <div className='dolarBoxStyle' >
                <DolarBlue />
              </div>
            </div>
            <div className='row'>
              <div className='dolarBoxStyle' >
                <DolarOficial />
              </div>
            </div>
            <div className='row'>
              <div className='dolarBoxStyle' >
                <DolarMep />
              </div>
            </div>
          </div>
          <DolarBlueExplicacion />
        </div>
      <Footer />
    </div>    
  );
}

export default App;