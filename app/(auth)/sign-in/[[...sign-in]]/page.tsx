import { SignIn } from '@clerk/nextjs'
import React from 'react'

function SignInPage() {
  return (
    <section className='flex justify-center items-center h-screen'>
        <SignIn />
    </section>
  )
}

export default SignInPage