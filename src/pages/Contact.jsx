import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false);

  // update state of a form dynamically as the user types into input fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleFocus = (e) => {
    e.preventDefault(); // prevent page reload
    setIsLoading(true);

    emailjs.sendForm()
  };

  const handleBlur = () => {};
  
  const handleSubmit = () => {};

  return (
    <section className="relative flex lg:flex-row flex-col max-container bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch 💬</h1>

        <form
        className="w-full flex flex-col gap-7 mt-14"
        onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Your full name
            <input
            type="text"
            name="name"
            className="input"
            required
            placeholder="Rene Pungartnik"
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your email
            <input
            type="email"
            name="email"
            className="input"
            required
            placeholder="rene.pungartnik@gmail.com"
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your message
            <textarea
            name="message"
            className="textarea"
            rows={6}
            required
            placeholder="Write your message here!"
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <button 
          className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          type="submit"
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact