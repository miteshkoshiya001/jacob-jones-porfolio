import { NorthEast } from "@mui/icons-material";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { toast } from "react-toastify";
import "./style.css";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const socialName = [
  /* { id: 1, link: "https://www.facebook.com/", text: "Facebook" },
  { id: 2, link: "https://x.com/i/flow/login", text: "Twitter" },
  { id: 3, link: "https://www.instagram.com/", text: "Instagram" }, */
  { id: 4, link: "https://www.linkedin.com/in/krishna-dholiya-b0414016b/", text: "Linkedin" },
];

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    file: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleFileUpload = (e) => {
    setFormState({ ...formState, file: e.target.files[0] });
    setErrors({ ...errors, file: "" });
  };

  const handleSubmit = () => {
    const { name, email, message, file } = formState;
    let valid = true;
    let newErrors = { name: "", email: "", message: "", file: "" };

    if (!name) {
      valid = false;
      newErrors.name = "Please enter your name";
    }
    if (!email) {
      valid = false;
      newErrors.email = "Please enter your email";
    }

    if (
      !email.match(
        /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/
      )
    ) {
      valid = false;
      newErrors.email = "Please enter valid email";
    }

    if (!message) {
      valid = false;
      newErrors.message = "Please enter your message";
    }
    if (!file) {
      valid = false;
      newErrors.file = "Please attach a file";
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    setFormState({
      name: "",
      email: "",
      message: "",
      file: null,
    });
    toast.success("Form submitted successfully");
    console.log("Form Data:", formState);
  };

  return (
    <div className="font-plexSans grid grid-cols-1 laptop:grid-cols-[400px,1fr] 2xl:grid-cols-[350px,1fr] gap-8 justify-center items-center py-[60px] px-6 lg:p-[100px]">
      <div className="grid py-4 gap-8">
        <div className="flex flex-col gap-3">
          <motion.p
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 1, y: 1 }}
            transition={{ duration: 1 }}
            className="italic font-semibold"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, y: 1, x: 1 }}
            transition={{ duration: 1 }}
            className="md:text-5xl text-3xl font-bold uppercase"
          >
            Reach out me
          </motion.h1>
        </div>
        {/* <motion.a
          href="https://maps.app.goo.gl/J5FtJYNzCDkto75h8"
          target="_blank"
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, y: 1, x: 1 }}
          transition={{ duration: 1 }}
          className="text-balance cursor-pointer hover:underline"
        >
          249 king Sir, 05th Floor, Ultra House Building, Melboune, VIC 3000,
          London.
        </motion.a> */}
        <div className="grid gap-2 font-semibold pt-8">
          <motion.a
            href="tel:+447407021819"
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, y: 1, x: 1 }}
            transition={{ duration: 1 }}
            className="md:text-2xl text-xl cursor-pointer hover:underline"
          >
            +44 740 702 18 19
          </motion.a>
          <motion.a
            href="mailto:kishudholiya059@gmail.com"
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, y: 1, x: 1 }}
            transition={{ duration: 1 }}
            className="md:text-2xl text-xl cursor-pointer hover:underline"
          >
            kishudholiya059@gmail.com
          </motion.a>
        </div>
        <div className="flex gap-5 lmm:flex-wrap lm:flex-wrap xs:flex-wrap items-center">
          {socialName.map((value, index) => {
            return (
              <motion.a
                key={index}
                href={value.link}
                target="_blank"
                initial={{ opacity: 0, x: -50, y: 50 }}
                animate={{ opacity: 1, y: 1, x: 1 }}
                transition={{ duration: 1 }}
                className="uppercase text-sm font-medium cursor-pointer hover:underline"
              >
                {value.text}
              </motion.a>
            );
          })}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 1, y: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-white md:p-8 p-4 grid grid-flow-row items-center gap-6"
      >
        <h1 className="md:text-4xl uppercase text-2xl font-semibold">
          any project?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="NAME"
              className="bg-transparent border-b w-full outline-none placeholder:text-white pb-3"
              name="name"
              id="name"
              onChange={handleChange}
              value={formState.name}
            />
            {errors.name && <span className="text-red-900">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              required={true}
              className="bg-transparent border-b w-full outline-none placeholder:text-white pb-3"
              placeholder="EMAIL"
              name="email"
              id="email"
              onChange={handleChange}
              value={formState.email}
            />
            {errors.email && (
              <span className="text-red-900">{errors.email}</span>
            )}
          </div>
        </div>
        <textarea
          type="text"
          className="bg-transparent border-b outline-none placeholder:text-white pb-2"
          placeholder="MESSAGE"
          name="message"
          id="message"
          rows={1}
          onChange={handleChange}
          value={formState.message}
        ></textarea>
        {errors.message && (
          <span className="text-red-900">{errors.message}</span>
        )}
        <div>
          <Button
            component="label"
            sx={{ color: "white", cursor: "pointer" }}
            className="hover:!bg-transparent !text-start !w-max"
            startIcon={<BsLink45Deg size={22} />}
          >
            Attach file
            <VisuallyHiddenInput
              type="file"
              name="file"
              onChange={handleFileUpload}
            />
          </Button>
          {formState?.file?.name && <p>File Name: {formState.file.name}</p>}
        </div>
        {errors.file && <span className="text-red-900">{errors.file}</span>}
        <Button
          onClick={handleSubmit}
          className="!bg-[#141313] !rounded-none !text-white hover:bg-none flex gap-2 w-max !px-6 !py-3 !mt-12"
        >
          Submit now
          <NorthEast className="bg-gradient-to-r from-[#FFB147] w-6 h-6 via-[#FF6C63] to-[#B86ADF] text-white" />
        </Button>
      </motion.div>
    </div>
  );
}

export default Contact;
