import { useState } from "react";
import { Leaf1, Leaf2 } from "../assets";
import { AnimatePresence, motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";
import Alert from "./Alert"; // Import your Alert component
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation()
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    isAlert: false,
    message: "",
    status: null,
  });
  const handleTextChange = (e) => {
    const { name, value } = e.target;

    // update the state for the corresponding input values
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMessage = async () => {
    if (data.email.trim() === "") {
      // Email field is empty, show a danger alert
      setAlert({
        isAlert: true,
        message: "Required Fields cannot be empty",
        status: "danger",
      });

      setTimeout(() => {
        setAlert({
          isAlert: false,
          message: "",
          status: null,
        });
      }, 4000);
    } else {
      await addDoc(collection(db, "messages"), { ...data })
        .then(() => {
          // Message sent successfully, show a success alert (optional)
          setData({ firstName: "", lastName: "", email: "", message: "" });
          setAlert({
            isAlert: true,
            message: "Thanks for contacting me",
            status: "success",
          });

          setTimeout(() => {
            setAlert({
              isAlert: false,
              message: "",
              status: null,
            });
          }, 4000);

          // Reset the form or clear the data state (optional)
          setData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        })
        .catch((err) => {
          // An error occurred while sending the message, show a danger alert (optional)
          setAlert({
            isAlert: true,
            message: `Error ${err.message}`,
            status: "danger",
          });

          setTimeout(() => {
            setAlert({
              isAlert: false,
              message: "",
              status: null,
            });
          }, 4000);
        });
    }
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col gap-8 lg:gap-12 my-12"
    >
      {/* Toast Alert notification */}
      <AnimatePresence>
        {alert.isAlert && <Alert status={alert.status} message={alert.message} />}
      </AnimatePresence>
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
            {t('contact')}
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
              placeholder={t('fName')}
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
            />

            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleTextChange}
              placeholder={t('lName')}
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
            />
          </div>
          {/* email field */}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleTextChange}
            placeholder={t('eMail')}
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
          />
          <textarea
            name="message"
            value={data.message}
            onChange={handleTextChange}
            id=""
            cols="0"
            rows="10"
            placeholder={t('mesagge')}
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
          ></textarea>

          <div className="w-full flex items-center justify-center lg:justify-end">
            <button
              className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary "
              onClick={sendMessage}
            >
              {t('send')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
