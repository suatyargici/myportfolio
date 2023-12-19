"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaMapMarker } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

type Props = {};

type InputType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit, reset } = useForm<InputType>();

  const onSubmit: SubmitHandler<InputType> = (formData) => {
    window.location.href = `mailto:yargicisuat@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}. This is my email address: ${formData.email}`;
    reset();
  };

  return (
    <div className="my-20" id="contact">

      <div className="text-white flex flex-col items-center">
        <h5 className="mt-14 text-center text-2xl">Contact Me</h5>
        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <BiLogoGmail size={24} />
            <p className="text-xl">yargicisuat@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaMapMarker size={24} />{" "}
            <p className="text-xl">İstanbul / Turkiye</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-5 flex flex-col space-y-2"
        >
          <div className="text-blue100 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <input
              {...register("name")}
              className="contact-input rounded-lg  placeholder:text-blue100 resize-none border border-white bg-transparent p-2  text-white"
              placeholder="Name"
            type="text"
            />
            <input
              {...register("email")}
              className="contact-input rounded-lg  placeholder:text-blue100 resize-none border border-white bg-transparent p-2  text-white"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
                         className="contact-input  rounded-lg p-2 placeholder:text-blue100 bg-transparent border border-white text-white  resize-none"
            placeholder="Subject"
            type="text"
          />
          <textarea
            {...register("message")}
            className="contact-input  rounded-lg placeholder:text-blue100 resize-none border border-white bg-transparent p-2  text-white"
            placeholder="Message"
          />

          <button
            type="submit"
            className="rounded-md  bg-indigo-900/70 px-4 py-2 font-bold text-white transition-all duration-200 hover:opacity-70 md:px-10 md:py-5"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
