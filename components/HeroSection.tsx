"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"


const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/mylannguyenheadshot.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">Hello, I&#39;m Mylan!</h1>
          <p className="text-lg mt-4 mb-6 md:text-1xl">
            I&#39;m a Computer Science and Business Student studying at{" "}
            <span className="font-semibold text-pink-600">
              Western University{" "}
            </span>
            and an aspiring{" "}
            <span className="font-semibold text-pink-600">
                Software Engineer{" "}
            </span>
            from Toronto, Ontario.<br/><br/>
            I believe that technology has the power to conquer the world's most 
            complex issues and can create positive change. 
            I hope to help make the world a better place through tech to support my community.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-pink-600 rounded shadow hover:bg-pink-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection