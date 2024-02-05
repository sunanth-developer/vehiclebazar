import './App.css';
import { useEffect, useState } from 'react';
import Home from './Home';
import SearchIcon from '@mui/icons-material/Search';
import Body from './components/Body';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './Redux/Store';
import Compare from './components/Compare';
import CloseIcon from '@mui/icons-material/Close';
function App() {
  const [showNav, setShowNav] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [navigation,setNavigation]=useState("")
  const [email, setEmail] = useState('');
  const [email1, setEmail1] = useState('');
  const [password1, setPassword1] = useState(" ");
  const [username, setUsername] = useState(" ");
  const [mobile, setMobile] = useState(" ");
  const [status,setStatus]=useState()
  const [password, setPassword] = useState(" ");
  const [confirmpassword, setConfirmPassword] = useState(" ");
  const [register,setRegister]=useState(false)
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {

    setConfirmPassword(e.target.value);
  };

  const handleSubmitlogin = ()=> {
      fetch("http://127.0.0.1:4006/Login",{
        method:"post",
        headers:{
          Accept: 'application/json',
          "Content-type":"application/json"
        },
        body:JSON.stringify({
          email:email,
          password:password,
        })

      }).then(response => response.json())
      .then(jsonResponse => setStatus(jsonResponse))
      alert(status)
  }
  
  const handleSubmitsignup = ()=> {
      fetch("http://127.0.0.1:4006/Signup",{
        method:"post",
        headers:{
          Accept: 'application/json',
          "Content-type":"application/json"
        },
        body:JSON.stringify({
          email1:email1,
          password1:password1,
          mobile1:mobile,
          username:username,
        })

      }).then(response => response.json())
      .then(jsonResponse => setStatus(jsonResponse))
      alert(status)
  }
  
const toggleMenu = () => {
 document.body.classList.toggle("open")
}
function Componentnavigation(){
  if(navigation===""){
    return(
      <div>
    
    <Body/>
    </div>
    )
  } else if(navigation === "Compare"){
    return(
      <Compare/>
    )
  }
}
  ReactDOM.render(
  <Provider store={store}> 
  

    <div>
    






<nav class="navbar">
      <button onClick={()=>toggleMenu()} class="burger"></button>
      <h3 style={{borderWidth:"15px",borderColor:"white",}} onClick={()=>setShowLogin(true)} >Login</h3>
      <h3  onClick={()=>setNavigation("")}>Home</h3>
      <h3  onClick={()=>setNavigation("Compare")}>Compare</h3>
      
      <div class="dropdowns">
        <div class="dropdown">
          <h3  class="navtext">
            Services
            
          </h3>
          <div class="dropdown-menu">
            <button>UX/UI Design</button>
            <button>Web Applications</button>
            <button>SEO Advice</button>
          </div>
        </div>
        <div class="dropdown">
          <h3 class="navtext">
            Products
            
          </h3>
          <div class="dropdown-menu">
            <button>Learn CSS Ebook</button>
            <button>Security Course</button>
            <button>Masterclass Bundle</button>
          </div>
        </div>
        <div class="dropdown">
          <h3 class="navtext">
            Support
          
          </h3>
          <div class="dropdown-menu">
            <button>Live Chat</button>
            <button>Send Email</button>
            <button>Request Help</button>
          </div>
        </div>
      </div>
     
    </nav>
    {showLogin?(
      <div className='loginform'>
        <div className='form'>
           
           {register?(
             <div class="wrapper">
             <CloseIcon onClick={()=>setShowLogin(false)} style={{float:"right"}}/>
    <form action="">
      <h1>Register</h1>
      <div class="input-box">
        <input type="text" placeholder="User Name" onChange={(e)=>setUsername(e.target.value)} required/>
        <i class='bx bxs-user'></i>
      </div>
      <div class="input-box">
        <input type="email" placeholder="Email" onChange={(e)=>setEmail1(e.target.value)} required/>
        <i class='bx bxs-user'></i>
      </div>
      <div class="input-box">
        <input type="mobile" placeholder="mobile no." onChange={(e)=>setMobile(e.target.value)} required/>
        <i class='bx bxs-user'></i>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Password" onChange={(e)=>setPassword1(e.target.value)} required/>
        <i class='bx bxs-user'></i>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} required/>
        <i class='bx bxs-lock-alt' ></i>
      </div>
     
      <button type="submit" class="btn" onClick={()=>handleSubmitsignup()}>Register</button>
      
      <div class="register-link">
      
        
        
        <p onClick={()=>setRegister(false)}> Have an account? <a href="#">Login</a></p>
     
        
      </div>
    </form>
  </div>
           ):(
             <div class="wrapper">
              <CloseIcon onClick={()=>setShowLogin(false)} style={{float:"right"}}/>
    <form action="">
      <h1>Login</h1>
      <div class="input-box">
        <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
        <i class='bx bxs-user'></i>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
        <i class='bx bxs-lock-alt' ></i>
      </div>
     
      <button type="submit" class="btn" onClick={()=>handleSubmitlogin()}>Login</button>
      
      <div class="register-link">
       <div class="remember-forgot">
        
        <a href="#">Forgot Password</a>
        <p onClick={()=>setRegister(true)}>Dont have an account? <a href="#">Register</a></p>
      </div>
        
      </div>
    </form>
  </div>
           )}
        </div>
        </div>
    ):""}
    
      {/*<div  className="garageheader">
      <div style={{textAlign:"center"}}>
        <h2 style={{color:"white",fontSize:"40px"}}>Vehicle Bazar </h2>
      </div>
      <div style={{display:"flex",flexDirection: screenWidth <= "1284px" && screenHeight <= "2778px"?"column":"row",alignItems:"center",justifyContent:"center"}}>
      <div>
        <h2 style={{color:"white",fontSize:"40px",display:"inline-block"}}>  </h2>
        <h3 style={{color:"white"}}>Select your Vehicle: </h3>
       
      </div>
       
        <img src={bullet} style={{width:"300px",height:"300px",marginTop:"13%"}}/>
        <img src={activa} style={{width:"350px",height:"300px",marginTop:"13%"}}/>
        <img src={innova} style={{width:"550px",height:"500px",marginTop:"3%"}}/>
       </div>
      </div>*/}
        
     
   <Componentnavigation/>
    </div>
  
  </Provider>,
  document.getElementById('root')
);
}

export default App;
