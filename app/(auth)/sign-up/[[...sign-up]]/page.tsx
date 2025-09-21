import { SignUp } from '@clerk/nextjs'
import React from 'react'

function SignUpPage() {
  return (
    <section className='flex justify-center pt-10 h-screen'>
        <SignUp />
    </section>
  )
}

export default SignUpPage