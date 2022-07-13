import React , {useEffect , useState} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import bg from "../images/resources-hero.png";
const Ideas= () => {
  const navigate=useNavigate();
  const [userData,setUserData]=useState({message:""});
  const callGetdata=async()=>{
     try{ 
        const res=await fetch('/getdata',{
        method:"GET",
        headers:{
            //Accept:"application/json",
            "Content-Type":"application/json"
        },
      });
      const data=await res.json();
      console.log(data);
      setUserData({...userData,name:userData.message});
      if(!res.status==200){ 
        const error=new Error(res.error);
        throw error;
      }
     }catch(err){
        console.log(err);
        navigate('/login'); 
     }
  }
  useEffect(() => {
      callGetdata();
  }, []);


  const handleInputs=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUserData({...userData,[name]:value});
}

const comment= async (e)=>{
   e.preventDefault();
   const { message}=userData;
   const res=await fetch('/ideas',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
       message
    })
  });
  const data = await res.json();
  if(!data){
      console.log("Idea not send ");
      navigate('/login');

  }else{
    alert("Idea sent");
    setUserData({...userData,message:""});
  }
}
  return (
       <>
  
        <div id="topnav" className='topnav'>
           {/*<h5>Welcome Vishal</h5>*/}
           <div class="logo-image"> 
                  <NavLink className="nav-link px-4" to="/logout"><button className="btn login-btn">Logout</button></NavLink>
           </div>
           <h1>Welcome {userData.username}</h1>  
     </div>
       <p>{userData.message}</p>
       <section id="login">
          <div className="container">
      <div>
        <form method="POST">
            <div>
                <textarea ClassName="comments" id="comments" placeholder="Write a comment"
                name="message"
                value={userData.message}
                onChange={handleInputs}>
                </textarea>
            </div>
            <input type="submit" value="Submit"onClick={comment} />
      </form>
    </div>
    </div>
    </section>
    </>
  )
};

export default Ideas;
