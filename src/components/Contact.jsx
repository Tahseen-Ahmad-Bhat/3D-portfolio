import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {
  validateEmail,
  validateMessage,
  validateName,
} from "../utils/validation";
import { notify } from "../utils/notification";

// 6lcXh_uD4SA-WwlNE
// service_0vqib7a
// template_dyleirj

const defaultFormState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    ...defaultFormState,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validating Name
    if (!validateName(form.name)) {
      setLoading(false);
      return notify("error", "Please enter your name!");
    }
    // Validating Email
    if (!validateEmail(form.email)) {
      setLoading(false);
      return notify("error", "Please enter your email!");
    }
    // Validating Message
    if (!validateMessage(form.message)) {
      setLoading(false);
      return notify("error", "Please enter your message!");
    }

    try {
      const response = await emailjs.send(
        "service_0vqib7a",
        "template_ajugr3i",
        {
          from_name: form.name,
          to_name: "Tahseen Ahmad Bhat",
          from_email: form.email,
          to_email: "bhat.tahseen8@gmail.com",
          message: form.message,
        },
        "6lcXh_uD4SA-WwlNE"
      );

      console.log(response);

      setLoading(false);
      if (response.status === 200)
        notify(
          "success",
          "Thanku for Contacting me! I will get back to you ASAP!"
        );

      setForm({ ...defaultFormState });
    } catch (error) {
      notify("error", "Something went Wrong! Please Try again!");

      setLoading(false);

      setForm({ ...defaultFormState });
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="py-5 bg-tertiary px-6 mt-5 space-y-2 rounded-lg">
          <FiSmartphone className="contact__option-icon" />
          <h4>Phone</h4>
          <h5>+916005094196</h5>
          <a
            href="tel:+916005094196"
            className="hover:bg-black-200 py-3 px-6 inline-block rounded-xl shadow-primary -ml-5"
          >
            Call me
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-4 px-6 rounded-lg outline-none border-none bg-tertiary placeholder:text-secondary text-white font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-4 px-6 rounded-lg outline-none border-none bg-tertiary placeholder:text-secondary text-white font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="py-4 px-6 rounded-lg outline-none border-none bg-tertiary placeholder:text-secondary text-white font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className=" bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
