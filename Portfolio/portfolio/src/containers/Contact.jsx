import { useState } from "react";
import { Leaf1, Leaf2 } from "../assets";
import { motion } from "framer-motion";
import {addDoc, collection } from "firebase/firestore"
import { db } from "../config/firebase.config"
import { Alert } from "./";

const Contact = () => {
  const[data,setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  })


  const handleTextChange = (e) =>{
const  {name, value }= e.target;

// update the state for the corresponding  input values
setData((prevData) => ({...prevData, [name] : value}))
  }


  const sendMessage = async () =>{
    if(data.email === "" || data.email === null){
      ///throw an alert
    }else{
      await addDoc(collection(db, "messages"), {...data}).then(()=>{
        //throw that alert message
      }).catch(err=>{
        //throw that alert
        console.error(err)
      })
    }
  }
  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col gap-8 lg:gap-12 my-12"
    >
      {/* Toast  Alert notification */}
      <Alert/>
      {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Contact Me
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      {/* main content */}
      <div className="w-full flex flex-col items-center justify-start gap-4">
        <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleTextChange}
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
            />

            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleTextChange}
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
            />
          </div>
          {/* email field */}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleTextChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
          />
          <textarea
            name="message"
            value={data.message}
            onChange={handleTextChange}
            id=""
            cols="0"
            rows="10"
            placeholder="Message here..."
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
          ></textarea>

          <div className="w-full flex items-center justify-center lg:justify-end">
            <button className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary "
            onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
