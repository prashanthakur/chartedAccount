import axios from 'axios'
import React ,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Mails = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get('https://mentorconnects.onrender.com/getall-mails').then((response)=>{
            setdata(response.data)
        console.log(response)
        })
    },[])
  return (
    <>
    {
        data.map((item)=>{
            return (
                <div style={{color: "#23984c",FontWeight: "bold",padding: "30px 60px"}}>
                    <h2>{item.name} sends "{item.message}" from {item.email}</h2><hr/>
                    {/* <h2>{item.name}</h2>
                    <h3>{item.email}</h3>
                    <h3>{item.message}</h3> */}
                </div>
            )
        })
    }

    
    </>
  )
}


export const Authadmin = () => {
    const [pass,setpass] = useState('')
    const handleChange=(e)=>{
        setpass(e.target.value)
    }
    const Apass=()=>{
        if(pass!=='happy'){
            Swal.fire("You are not an Admin !")
        }
    }
  return (
    <>
    <div className='container' style={{height:200}}>
        <input type="password" onChange={(e)=>handleChange(e)} placeholder="Enter Password here"/>
        <Link to={pass==='happy' ? '/mails-0xd0b404ed80db938a187f771b64a9098c984d4bec8767a967ee5a029b2f8f7d45': '/mails-auth'} className="btn btn-success" onClick={Apass}>Login</Link>
    </div>
    </>
  )
}


export default Mails