import axios from 'axios'
import React ,{useEffect,useState}from 'react'

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
                <div>
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
    const handleChange=(e)=>{
        if(e.target.value==="happy123"){
            window.location.href="/mails-0xd0b404ed80db938a187f771b64a9098c984d4bec8767a967ee5a029b2f8f7d45"
        }
    }
  return (
    <div className='container'>
        <input type="password" onChange={(e)=>handleChange(e)} placeholder="Enter Password here"/>
    </div>
  )
}


export default Mails