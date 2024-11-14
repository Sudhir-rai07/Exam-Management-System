import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const ResetPassword = () => {

    const [email, setEmail] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            // your API call here  
    }

    const userFound = !false;
    const passwordResetEmailSent = true;

    
        {userFound && (
            <UserAccount />
        )}


  return (
    <div className='flex flex-col items-center justify-center w-full h-screen overflow-hidden'>
            <h1 className='mb-4 text-2xl font-semibold'>Welcome to EMS</h1>
            {!userFound &&
             <>
             <form onSubmit={handleSubmit} className='flex flex-col gap-3 max-w-[350px] w-full'>
                <p className='py-2 text-gray-400'>Enter registered email to search your account</p>
                <Label htmlFor='email'>Email</Label>
                <Input type='email' id='email' className='w-full' value={email} onChange={(e)=>setEmail(e.target.value)} />

                <Button type='submit'>Seach account</Button>
                <p className='text-gray-400 m2-4'>
                <Link to={"/login"} className='hover:text-blue-500 hover:underline'>Login</Link>
                </p>
            </form>
            </>}

            {userFound && !passwordResetEmailSent && <>
            <UserAccount />
            </>}
            
            {userFound && passwordResetEmailSent && <>
            <PasswordResetEmailSent />
            </>}
        </div>
  )
}

export default ResetPassword


const UserAccount = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        // your API call here
        toast.success("Password reset email sent to your email")
    }

   return (
    
        <>
        <form onSubmit={handleSubmit}>
            <div className='w-[350px] flex-col items-center overflow-hidden'>
                <p className='mb-4 text-lg font-semibold text-gray-400'>User Found</p>
                <img loading="lazy" src="https://placecats.com/bella/300/300" alt="_profile-image" className="w-20 h-20 mb-2"/>
                <p className='my-2 text-lg font-semibold'>username</p>
                <Button type='submit'>Send Password Reset Link</Button>
                <p className='mt-4 text-gray-400'>
                <Link to={"/login"} className='hover:text-blue-500 hover:underline'>Login</Link>
                </p>
                </div>
        </form>
        </>
    )
}

const PasswordResetEmailSent = () => {

    return (
        <>
        <div className='w-[350px] flex-col items-center overflow-hidden'>
                <p className='mb-4 text-lg font-semibold text-gray-400'>An email has been sent to your email with a password reset link</p>
                <img loading="lazy" src="https://placecats.com/bella/300/300" alt="_profile-image" className="w-20 h-20 mb-2"/>
                <p className='my-2 text-lg font-semibold'>username</p>
                <Button type='submit'><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Open Gmail</a></Button>
                <p className='mt-4 text-gray-400'>
                

                </p>
                </div>
        </>
    )
}