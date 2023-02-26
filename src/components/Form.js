import React,{useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './form.css'

const Form = () => {

  const [ud,setud] = useState({
    name:'',
    email:'',
    message:'',
    sendcomplete:false
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if(ud.sendcomplete===false){
      Swal.fire('sending...')
    }
    if(ud.name !== '' && ud.email !== '' && ud.message !== ''){
      axios.post('https://mentorconnects.onrender.com/send-mail', {
      name: ud.name,
      email: ud.email,
      message:ud.message
    })
    .then(function (response) {
      if(response){
        setud({...ud,sendcomplete:true})
        Swal.fire({
          title: 'Email sent successfully !',
          html:'<p style="color:green">we will connect you in 24 hours</p>',
          icon: 'success',
        })
      }
      console.log(response);
    })
    .catch(function (error) {
      Swal.fire({
        title: 'Error!',
        icon: 'error',
      })
      console.log(error);
    });
    }else{
      Swal.fire({
        title: 'All fields are mandatory !',
        icon: 'error',
      })
    }
    
    
  }

  const handleChange=(e)=> {
    // this.setState({ [e.target.name]: e.target.value  });
    setud({...ud,[e.target.name]: e.target.value})
    console.log(e.target.value)
  }

  return (
    <>
      <div class="container mb-5 mt-2">
        <form onSubmit={(e) => handleSubmit(e)}>

          <label for="fname">Name</label>
          <input type="text" id="fname" name="name" placeholder="Your name.." onChange={(e)=>handleChange(e)}/>

          <label for="lname">Email</label>
          <input type="text" id="lname" name="email" placeholder="Your email." onChange={(e)=>handleChange(e)}/>


          <label for="subject">Subject</label>
          <textarea id="subject" name="message" placeholder="Write something.." onChange={(e)=>handleChange(e)}></textarea>

          <input type="submit" value="Submit" />

        </form>
      </div>
    </>
  )
}

export default Form