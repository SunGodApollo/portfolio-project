import React, {useState} from "react"
import LandingPage from "./components/LandingPage.js"
import PortfolioPage from "./components/PortfolioPage.js"
import './App.css'




const App = () => {

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "project1.jpg",
      link: "https://www.example.com/project1"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "project2.jpg",
      link: "https://www.example.com/project2"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "project3.jpg",
      link: "https://www.example.com/project3"
    },
    {
      id: 4,
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "project3.jpg",
      link: "https://www.example.com/project3"
    },
    {
      id: 5,
      title: "Project 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "project3.jpg",
      link: "https://www.example.com/project3"
    },
    {
      id: 6,
      title: "Project 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "project3.jpg",
      link: "https://www.example.com/project3"
    },
  ]);


  return(
    <div className="app">
      <header>
        <h1>Welcome to my Portfolio</h1>
      </header>
      <section className="about-me">
        <h2>About Me</h2>
        <img className="myself" src="src/assets/myself LA.jpeg"/>
        <p>Scoot butt on the rug stare at imaginary bug. Snuggles up to shoulders or knees and purrs you to sleep lies down but pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now for to pet a cat, rub its belly, endure blood and agony, quietly weep, keep rubbing belly. Sleep on dog bed, force dog to sleep on floor hack up furballs yet cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip and be superior, cats secretly make all the worlds muffins. Catto munch salmono leave buried treasure in the sandbox for the toddlers so poop on couch. Slap owner's face at 5am until human fills food dish then cats take over the world and cat snacks, so shred all toilet paper and spread around the house.  </p>
      </section>
      <section>
        <h2 className="projects-header">My Projects</h2>
        <div className="my-projects">
          {projects.map(project => (
            <p key={project.id}>
              <h3 className="project-title">{project.title}</h3>
              <img className="project-image" src={project.image} atl={project.title}/>
              <p className="project-description">{project.description}</p>
              <a className="project-link"href={project.link}>View Project</a>
            </p>
            ))}
        </div>
      </section>

      <LandingPage />

    </div>
  )
}

export default App