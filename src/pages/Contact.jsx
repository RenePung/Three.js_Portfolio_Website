import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
// IMPORTS --------------------------------------------------------------------------------------------

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const { alert, showAlert, hideAlert } = useAlert(); // useAlert.js - custom hook

  // HANDLECHANGE -------------------------------------------------------------------------------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };
  // HANDLESUBMIT -------------------------------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setIsLoading(true);
    setCurrentAnimation('hit');

    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID) // console log email service emailjs
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Rene",
        from_email: form.email,
        to_email: 'rene.pungartnik98@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Message Sent Successfully!', type: 'success' })

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle') // after sending configurations / fox stop running after 3 sec and clear form after 3 sec.
        setForm({ name: '', email: '', message: '' })
      }, [3000]);

    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.log(error);
      showAlert({ show: true, text: 'This Message Was Taken Down By FBI! Try Again!', type: 'danger' })
    })
  };
  // HANDLEFOCUS FOX --------------------------------------------------------------------------------------
  const handleFocus = () => setCurrentAnimation('walk');
  // HANDLEBLUR FOX ---------------------------------------------------------------------------------------
  const handleBlur = () => setCurrentAnimation('idle');
  // RETURN -------------------------------------------------------------------------------------------
  return (
    <section className="relative flex lg:flex-row flex-col max-container bg-gradient-to-r from-rose-100 to-teal-100">
      {alert.show && <Alert {...alert} />}
      <Alert {...alert} />
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
      {/*FOX 3D ANIMATION---------------------------------------------------------------------*/}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.4} />
          <Suspense fallback={<Loader />}>
            <Fox
            currentAnimation={currentAnimation}
             position={[0.5, 0.35, 0]}
             rotation={[12.6, -0.6, 0]}
             scale={[0.6, 0.6, 0.6]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact