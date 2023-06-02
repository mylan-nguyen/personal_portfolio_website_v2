import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Phone Eats First",
    description:
      "Mobile application that captures food photography and recipes of your favourite eats using Flutter and Dart.",
    image: "/Recipe book-amico.png",
    github: "https://github.com/mylan-nguyen/phone-eats-first-app.git",
    link: "https://github.com/mylan-nguyen/phone-eats-first-app.git",
  },
  {
    name: "Covid Community Tracker",
    description: "I created this Python program to help in protecting my neighbours, as well as slowing the spread of COVID-19 by designing a system for contact tracing.",
    image: "/community-covid-tracker.png",
    github: "https://github.com/mylan-nguyen/CommunityCovidTracker",
    link: "https://github.com/mylan-nguyen/CommunityCovidTracker",
  },
  {
    name: "Wordle Game",
    description:
      "I love playing word games, so I created this Java program as a modified version of wordle for my family's enjoyment.",
    image: "/wordle-game.png",
    github: "https://github.com/mylan-nguyen/WordleGame",
    link: "https://github.com/mylan-nguyen/WordleGame",
  },
  {
    name: "Stock Analyzer",
    description:
      "I created a stock analyzing web application that uses Python and Pandas to call data from Yahoo Finance and visualize the information in graphs and charts that are more user-friendly for beginners to investing (like myself) to understand.",
    image: "/stock_analyzer.png",
    github: "https://github.com/mylan-nguyen/Stock_Analyzer_Dashboard",
    link: "https://mylan-nguyen-stock-analyzer-dashboard-stockwebapp-di3alh.streamlit.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-pink-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <Link href={project.github} target="_blank">
                  <Image
                    src={project.image}
                    alt=""
                    width={500}
                    height={500}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                  </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-2xl font-bold mb-6">{project.name}</h1>
                  <p className="text-l leading-7 mb-4 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
