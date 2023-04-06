
import './App.scss';
import Footer from './Footer';
import HeaderTitle from './HeaderTitle';
import Iframe from './Iframe';

const App = () => { 
  return (  
    <div>
      <HeaderTitle />
      <div className='container'>
        <div className='row'>
          <Iframe title='dolarBlue'  classStyle='dolarBoxStyle' link={"https://dolarhoy.com/i/cotizaciones/dolar-blue"} />
        </div>
        <div className='row'>
          <Iframe title='dolarOficial' classStyle='dolarBoxStyle' link={"https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio"} />
        </div>           
        <div className='row'>
          <Iframe title='dolarMep'  classStyle='dolarBoxStyle' link={"https://dolarhoy.com/i/cotizaciones/dolar-mep"} />  
        </div> 
        <div className='row'> 
          <Iframe title='dolarCcl' classStyle='dolarBoxStyle' link={"https://dolarhoy.com/i/cotizaciones/dolar-contado-con-liquidacion"} />
        </div> 
        <div className='row'>               
          <Iframe title='dolarCrypto' classStyle='dolarBoxStyle' link={"https://dolarhoy.com/i/cotizaciones/bitcoin-usd"} />
        </div> 
        <div className='row'> 
          <Iframe title='dolarSolidario' classStyle='dolarBoxStyle' link={"https://dolarhoy.com/i/cotizaciones/banco-nacion"} /> 
        </div>          
      </div>
      <Footer />
    </div>    
  );
}

export default App;