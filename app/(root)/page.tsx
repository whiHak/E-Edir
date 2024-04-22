import { Button } from '@/components/ui/button'
import { createuser } from '@/lib/actions/user.actions'
import { auth, clerkClient } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = async() => {
  return (
      <>
        <section className="bg-primary-50  bg-dotted-pattern bg-contain py-5 md:py-10 ">
          <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="h1-bold">
                Create, Manage, Pay: Your Edirs, On Our Platform!
              </h1>
              <p className="p-regular-20 md:p-regular-24">
                The best and relable platform out there to manage edir and pay  
                regular payment 
              </p>
        
              <Button size="lg" asChild className="button w-full sm:w-fit">
                <Link href='#edirs'>Explore Edirs</Link>
              </Button>
            </div>
        
            <Image 
              src="/assets/images/hero.png"
              alt="hero"
              width={1000}
              height={1000}
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            />
          </div>
        </section>
        
        <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold">Trust by <br /> Thousands of Edirs</h2>
        
          <div className="flex w-full flex-col gap-5 md:flex-row">
            Search
          </div>
        </section>
      </>
  )
}

export default Home