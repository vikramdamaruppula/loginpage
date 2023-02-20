import {useState} from "react"

import {Button} from "react-bootstrap"
import "./index.css"

export default function FirstComponent(){
    const[email,seEmail]=useState()
    const[password,setPassword] =useState()
    const[error,setError] =useState(false)

    const submitForm=(event)=>{  
        event.preventDefault()
        if(email.length===0 ||password.length===0){
            setError(true)
        }
        if(email&&password){
            console.log("email:",email,"password:",password)
        }
    }

    return(
      <div className="main-container">
        <form className="form-container" onSubmit={submitForm}>
          <div className="pl-5 login-container">
            <h3 className=""> Login </h3>
            <p className="welcome"> Welcome back,please login  to your account</p>
            <div>
                <label className="d-block">Email</label>
                <input 
                    className="form-control w-50"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="include @gmail.com" 
                    onChange={(e)=>seEmail(e.target.value)}       
                />
                {error &&email.length<=0 ? <p>email cannot be empty</p>:"" } 
            </div>
            <div>
                <label className="d-block"> password </label>
                <input 
                    className="form-control w-50"
                    value={password}
                    type="password" 
                    name="password"   
                    onChange={(e)=>setPassword(e.target.value)}         
                    placeholder="enter password"
                    />
                    {error && password.length<=0 ? <p>password cannot be empty</p>:"" } 
                </div>
                <div>
                    <input type="checkbox" className="m-2" />
                    <p className="d-inline "> forgot password ??</p>
                </div>
                <div>
                    <Button type="submit" className="btn btn-primary p-2 m-2 w-25"  > Login</Button>
                    <Button type="button" className="btn btn-warning p-2 m-2 w-25" onClick="Signup"> Sign Up</Button>
                </div>
                <ul className="list-container">
                    <li className="m-2">Or,login with</li>
                    <a href="www.facebook.com" target="_blank"><li className="m-2">Facebook</li> </a>
                    <a href="www.linkedin.com"><li className="m-2">LinkedIn</li></a>
                    <a href="www.google.com"><li className="m-2">Google</li></a>
                </ul>
            </div>
            <div className="image-section">
                <img src="https://www.linkpicture.com/q/image-7_15.png" alt="ima" className="image1" />
                <img src="https://www.linkpicture.com/q/main_9.png" alt="dalphus" className="image2" />
             </div>
            </form>
            </div>
        )
    }



// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

// const schema = yup.object({
//   firstName: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// }).required();

// export default function AppAgain() {
//   const { register, handleSubmit, formState:{ errors } } = useForm({
//     resolver: yupResolver(schema)
//   });
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       <p>{errors.firstName?.message}</p>
        
//       <input {...register("age")} />
//       <p>{errors.age?.message}</p>
      
//       <input type="submit" />
//     </form>
//   );
// }

