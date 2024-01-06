import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import BottomNavigation from "./BottomNavigation";
import { containerVariants } from "../utils/framer-page-variants";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSendMail = () => {
    setLoading(true);

    emailjs
      .send(
        "service_3o2xgzn",
        "template_h0ge3fp",
        {
          from_name: form.name,
          to_name: "Jahnavi",
          from_email: form.email,
          to_email: "jahnavivuyyuru179@gmail.com",
          message: form.message,
        },
        "U9im7yVpgoGkzrzbP"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error.text);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-10 px-8 lg:px-44"
    >
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl">Contact Me</h1>
        <p className="my-4 text-gray-400">Get in Touch</p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-6 w-full lg:w-1/2 mt-4"
        >
          <div className="flex flex-col gap-1">
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="what's your good name?"
              onChange={handleChange}
              value={form.name}
              className="custom-input"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="What's your web address?"
              onChange={handleChange}
              value={form.email}
              className="custom-input"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Your Message</label>
            <textarea
              rows="7"
              name="message"
              placeholder="What you want to say?"
              onChange={handleChange}
              value={form.message}
              className="custom-input"
            />
          </div>
          <button
            className="bg-[#37D39A] rounded-md px-6 py-3 w-full text-black"
            onClick={handleSendMail}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="pt-8 flex gap-8 items-center">
          <Link to="mailto:jahnavivuyyuru179@gmail.com">
            <AiFillMail className="w-10 h-10" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/jahnavi-vuyyuru-17900ks/"
            target="_blank"
          >
            <FaLinkedin className="w-8 h-8" />
          </Link>
          <Link to="https://github.com/Jahnavi2001" target="_blank">
            <FaGithub className="w-8 h-8" />
          </Link>
        </div>
      </div>

      <BottomNavigation text="Return to the homepage" path="/" />
    </motion.div>
  );
};

export default Contact;
