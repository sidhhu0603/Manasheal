import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Saved.css"
import image from "./img.png";

  const Saved = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xpumd1m', 'template_hqjzdo2', form.current, '1dc2JomPrKdT1_Thq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div className='container1' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%'}} >
    <table>
    <td><center><img src={image}/></center></td>
    <td>
    <form ref={form} onSubmit={sendEmail}>

      <label>Name</label>
      <input type="text" name="to_name" placeholder='Enter Name'/>
      <label>Email</label>
      <input type="email" name="from_email" placeholder='Enter Email' />
      <label>Phone Number</label>
      <input type='tel' name="phone" placeholder='Enter Phone'/>
        <label className ="label" for="cars">Services</label>
        <select name="service_area" id="srvc">
            <option value="default">Choose Services</option>
            <option value="Adult Therapy">Adult Therapy</option>
            <option value="Child Therapy">Child Therapy</option>
        </select>
        <div classname="input-group">
        <label className ="label" for="city" >City</label>
        <input className='input' required type='text'  id="city" placeholder='Enter Your City'/>
        </div>
        <button type="submit">SUBMIT</button>
      
    </form>
    </td>
    </table>
    </div>
    </>
  );
};

export default Saved;