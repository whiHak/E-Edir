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
                <Link href='/my-edirs'>Explore Edirs</Link>
              </Button>
            </div>
        
            <Image 
              src="/assets/images/hero.png"
              alt="hero"
              width={5000}
              height={1000}
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            />
          </div>
        </section>
        
        <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold lg:text-3x">
          Trusted by Thousands of Edirs
        </h2>

        <div className="container flex flex-col md:flex-row gap-4 items-center">
          <div className="bg-gray-100 bg-opacity-50 rounded-lg shadow-md p-8 md:p-6 lg:p-10 xl:p-12 mx-auto max-w-xs max-h-max">
            <div className="card-content text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-700 mb-4">
                2000+
              </h3>
              <p className="text-lg md:text-xl text-purple-600 font-semibold mb-4">
                Registered Members
              </p>
              <p className="text-base text-gray-800 line-clamp-4">
                These are the individuals who have faith in the vision and
                became part of the Edirs.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 bg-opacity-50 rounded-lg shadow-md p-8 md:p-6 lg:p-10 xl:p-12 mx-auto max-w-xs max-h-max">
            <div className="card-content text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-700 mb-4">
                1000+
              </h3>
              <p className="text-lg md:text-xl text-purple-600 font-semibold mb-4">
                Active Members
              </p>
              <p className="text-base text-gray-800 line-clamp-4">
                These are active members who regularly participate, contribute,
                or engage within the Edirs community platform.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 bg-opacity-50 rounded-lg shadow-md p-8 md:p-6 lg:p-10 xl:p-12 mx-auto max-w-xs max-h-max">
            <div className="card-content text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-700 mb-4">
                70+
              </h3>
              <p className="text-lg md:text-xl text-purple-600 font-semibold mb-4">
                Member Leaders
              </p>
              <p className="text-base text-gray-800 line-clamp-4">
                These are leaders who guide, inspire, and influence others
                toward a common goal or vision. They can create Edirs.
              </p>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default Home