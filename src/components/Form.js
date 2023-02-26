import React,{useState} from 'react';
import axios from 'axios';
import './form.css'

const Form = () => {

  const [ud,setud] = useState({
    name:'',
    email:'',
    message:''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(ud)
    axios.post('https://mentorconnects.onrender.com/send-mail', {
      name: ud.name,
      email: ud.email,
      message:ud.message
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  const handleChange=(e)=> {
    // this.setState({ [e.target.name]: e.target.value  });
    setud({...ud,[e.target.name]: e.target.value})
    console.log(e.target.value)
  }

  return (
    <>
      <div class="container">
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