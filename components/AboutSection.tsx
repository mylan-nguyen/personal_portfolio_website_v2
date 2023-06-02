import React from "react"

const skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "C" },
  { skill: "Flutter" },
  { skill: "Dart" },
  { skill: "React" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Kotlin" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Postman" },
  { skill: "Wordpress" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-pink-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
            1. I am a huge foodie!👩‍🍳🍜🍱🌮🥐🍰 <br/>I love trying new food spots with friends and family, 
            eating different cuisines, and letting my phone eat first!📸<br/><br/>
            2. I love listening to music and finding new artists. 
            My favourite music genre is R&B music.🎶🎧🎫<br/><br/>
            3. I hope to travel around the world and visit every continent! 
            The first stop on this bucketlist is an Asia tour! ✈️❤️
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default AboutSection