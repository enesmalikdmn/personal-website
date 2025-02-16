"use client";

import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    window.location.href = `mailto:enesmalikdmn@gmail.com?subject=${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}`;
    setName("");
    setMail("");
    setMessage("");
  };

  return (
    <main className="flex flex-col text-primary bg-white h-full">
      <div className="relative flex flex-col items-center m-16 md:m-24 lg:m-32">
      <div className="text-[2rem] md:text-[6rem] lg:text-[8rem] uppercase flex font-semibold opacity-10 absolute top-1/2 -translate-y-1/2">
          Contact
        </div>
        <div className="text-[0.75rem] md:text-[1.5rem] lg:text-[2rem] font-semibold text-black relative z-10 border-b-2 border-[#BEBE28]">
          Get In Touch
        </div>
      </div>
      <div className="flex w-full gap-6 justify-center bg-white h-full mt-0 md:mt-10">
        <div className="flex w-3/4 xl:w-1/2 flex-col gap-6">
          <div className="flex justify-center my-4">
            Send me a note, and let’s get started on your project today!
          </div>
          <div className="flex md:flex-row flex-col gap-6">
            <TextField
              className="flex flex-1"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              className="flex flex-1"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <TextField
              className="w-full"
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="mt-6">
              <Button
                sx={{ backgroundColor: "#BEBE28" }}
                className="w-48"
                variant="contained"
                onClick={sendEmail}
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
