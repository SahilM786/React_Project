import React, { useRef,useState } from "react";
import "./contact.css";
import Client1 from "../../assets/walmart.png";
import Client2 from "../../assets/adobe.png";
import Client3 from "../../assets/microsoft.png";
import Client4 from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const sucessNotify = (name) => {
  console.log("BUTTON CLICKED");

  toast.success(
    `Hey ${name},Thank you for your intrest, Your data has been sent successfully.`
  );
};

const errorNotify = (message)=>{
  toast.error(message);
}

const Contact = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  
  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();

    if (email === ""){
      errorNotify("Please enter valid email.")
    }
    

    if(!name || !message){
      errorNotify("Please fill out all fields")
    }

    emailjs
      .sendForm("service_4fkjxpe", "template_b4onrhi", form.current, {
        publicKey: "jb7lbEUu1dSKgsWrq",
      })
      .then(
        (response) => {
          // console.log(e.target);
          sucessNotify(name);
          console.log("Email Sent Sucessfully!",response.status);
        },
        (error) => {
          errorNotify("Failed to send email")
          console.log("Email sending failed...", error.text);
        }
      );
  };
  return (
    <section id="clients">
      <h2 className="clientTitle">My Clients</h2>
      <div className="clientDesc">
        I have had the opportunity to work with a diverse group of companies.
        Some of the notable companies I have worked with include.
      </div>
      <span className="clientsImgs">
        <img src={Client1} alt="walmart" className="clientImg" />
        <img src={Client2} alt="adobe" className="clientImg" />
        <img src={Client3} alt="microsoft" className="clientImg" />
        <img src={Client4} alt="facebook" className="clientImg" />
      </span>
      <section id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunies.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            value={name}
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            onChange={(e)=> setName(e.target.value)}
          />
          <input
            value={email}
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            onChange={(e)=> setEmail(e.target.value)}
          />
          <textarea
            value={message}
            rows="5"
            className="msg"
            placeholder="Your Message"
            name="message"
            onChange={(e)=> setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            value="send"
            className="submitBtn"
            onClick={sendEmail}
            disabled={!name || !email || !message}
          >
            Submit
          </button>
          <Toaster />
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YouTubeIcon} alt="YouTubeIcon" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </section>
    </section>
  );
};

export default Contact;
