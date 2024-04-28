/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import UseAuth from '../CustomHook/UseAuth';
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
	const [show, setShow] = useState(false)
	const toggleShow = () => {
		setShow(!show)
	}
    useEffect(() => {
        document.title = 'Registration Page';
        return () => {
          document.title = 'Title';
        };
      }, []);

	  function isPasswordValid(password) {		
		const uppercaseRegex = /[A-Z]/;
		const lowercaseRegex = /[a-z]/;
		return (
		  password.length >= 6 &&
		  uppercaseRegex.test(password) &&
		  lowercaseRegex.test(password)
		);
	  }
	  const notify = () => toast.error("Password should have 1 uppercase letter, 1 lowercase letter and 6 character long");
	  const { createUser, updateUserProfile } = UseAuth()
	  const {
		register,
		handleSubmit,
		formState: { errors }, 
	  } = useForm()
	  const onSubmit = (data) => {
		const {email, password, image, name} = data
		if(isPasswordValid(password)){
			createUser(email, password)
		.then((result) => {
			updateUserProfile(name, image)
			.then(() => {

			})
			toast.success("Successfully Login")
		})
		} else {
			notify()
		}
	  }
      
  return (
    <div className='w-full mx-auto max-w-md p-4 rounded-md  sm:p-8'>
      <form noValidate="" action="" className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="name" className="block text-sm">Name</label>
				<input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md" {...register("name", { required: true })}/>
				{errors.name && <span className='text-sm text-red-600 font-semibold'>This field is required</span>}
			</div>
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="youremail@gmail.com" className="w-full px-3 py-2 border rounded-md" {...register("email", { required: true })}/>
				{errors.email && <span className='text-sm text-red-600 font-semibold'>This field is required</span>}
			</div>
			<div className="space-y-2">
				<label htmlFor="url" className="block text-sm">PhotoURL</label>
				<input type="url" name="url" id="url" placeholder="Your URL" className="w-full px-3 py-2 border rounded-md" {...register("photoUrl")}/>
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
				</div>
				<div className='w-full px-3 py-2 border rounded-md flex  justify-between items-center'>
					<input type={show ? "text" : "password"} name="password" id="password" placeholder="*****" className="w-full outline-none" {...register("password", { required: true })}/>					
					{show ? <IoEyeOutline className='text-xl cursor-pointer' onClick={toggleShow}/> : <IoEyeOffOutline className='text-xl cursor-pointer' onClick={toggleShow}/>}
					</div>
				{errors.password && <span className='text-sm text-red-600 font-semibold'>This field is required</span>}
			</div>
		</div>
		<button type="submit" className="w-full mt-5 px-8 py-3 font-semibold rounded-md bg-blue-600 text-white">Sign Up</button>
	</form>
    <p className="text-md text-center mt-3">Already have account?
		<Link to={"/login"} rel="noopener noreferrer" className="focus:underline hover:underline font-semibold"> Sign In here</Link>
	</p>
	<ToastContainer />
    </div>
  )
}

export default RegisterPage
