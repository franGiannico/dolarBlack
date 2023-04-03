
import './App.scss';
// import Field from './components/Field';
// import Form from './components/Form';
// import Submit from './components/Submit';
import HeaderTitle from './HeaderTitle';
import Iframe from './Iframe';
import useForm from './hooks/useForm';

/* CON COMPONENTES CONTROLADOS */

// const App = () => {

//   const [data, setData] = useState({ email: "", password: "" })

//   const changeData = e => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value
//     })
//   } 

//   const submit = e => {
//     e.preventDefault()
//     console.log(data)
//     alert('Bienvenido')
//   }
//   return (
//     <div className='ed-grid'>
//       <form className='ed-container l-30' onSubmit={submit}>
//         <div className='ed-item form__item'>
//           <label htmlFor='email'>
//             Correo Electrónico
//             <input 
//               type='email' 
//               name='email' 
//               id='email' 
//               value={data.email} 
//               onChange={changeData} 
//             />
//           </label>
//         </div>
//         <div className='ed-item form__item'>
//           <label htmlFor='password'>
//             Contraseña
//             <input 
//               type='password' 
//               name='password'
//               id='password'
//               value={data.password} 
//               onChange={changeData}
//             />
//           </label>
//         </div>
//         <div className='ed-item form__item'>
//           <input type='submit' value='ingresar' className='button full'/>
//         </div>
//       </form>

//       <div>
//         <HeaderTitle />
//         <div className='container'>
//           <Iframe title='dolarBlue' classStyle='dolarBoxStyle' link={"https://dolarhoy.com/i/cotizaciones/dolar-blue"} />
//           <Iframe title='dolarOficial' classStyle='dolarBoxStyle' link={"https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio"} />
//           <Iframe title='dolarMep' classStyle='dolarBoxStyle' link={"https://dolarhoy.com/i/cotizaciones/dolar-mep"} />
//         </div>
//         <div className='container'>
//           <Iframe title='dolarCcl' classStyle='dolarBoxStyle' link={"https://dolarhoy.com/i/cotizaciones/dolar-contado-con-liquidacion"} />
//           <Iframe title='dolarCrypto' classStyle='dolarBoxStyle' link={"https://dolarhoy.com/i/cotizaciones/bitcoin-usd"} />
//           <Iframe title='dolarSolidario' classStyle='dolarBoxStyle' link={"https://dolarhoy.com/i/cotizaciones/banco-nacion"} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

/* CON COMPONENTES NO CONTROLADOS */

const App = () => {

  const [data, loginForm, submit] = useForm({ email: "", password: "" })
  //a partir de la clase 2.4 cuando creamos el hook personalizado, esta función se va al archivo useForm
  // const submit = e => {
  //   e.preventDefault()
  //   console.log(loginForm.current)
  //   alert('Bienvenido')
  return (
    // <Form submit={submit} formRef={loginForm}>
    //     <Field type={'email'} value={data.email} label={'Correo Electrónico'} />
    //     <Field type={'password'} value={data.password} label={'Contraseña'} />        
    //     <Submit value="Login" />
    //   </Form>
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
    </div>    
  );
}

export default App;