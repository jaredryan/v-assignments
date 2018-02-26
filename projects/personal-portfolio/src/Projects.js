import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
  render() {
      const projects = [
          {
              title: "Fishackathon",
              subtitle: "First hackathon experience",
              description: ["Full-stack CRUD application for adding and searching information on freshwater bodies of water through an API", "Secure user sign-up and login functionality", "Won local competition in Salt Lake City on Feb 10, 2018, currently awaiting results in the global competition"],
              demo: "https://freshwaterfeed.herokuapp.com/",
              github: "https://github.com/jaredryan/fishackathon-slc-11",
              tech: ["Ruby on Rails", 'JavaScript', 'HTML', 'CSS'],
              pictures: [
                  {
                      url: "",
                      caption: ""
                  }
              ]
          },{
              title: "OpenHouse",
              subtitle: "First experience working with a startup",
              description: [
                  "Full-stack CRUD application for searching, adding, editing, and removing information to allow users to rent home offices",
                  "Integrates search in its database with Google Maps API to display results on a map",
                  "Implemented a messaging system to allow users to discuss renting a space",
                  "Secure user sign-up and login functionality",
                  "Thoroughly tested with Cucumber and RSpec"
              ],
              demo: "http://openhouse-1.herokuapp.com/",
              github: "https://github.com/jjeremydiaz/OpenHouse",
              tech: ["Ruby on Rails", 'JavaScript', 'HTML', 'CSS'],
              pictures: [
                  {
                      url: "",
                      caption: ""
                  }
              ]
          },{
              title: "MovieRecs",
              subtitle: "First website made for fun.",
              description: ["Performs a movie search using public APIs", "Interface allows user to create and edit a recommendation list as desired"],
              demo: "https://jaredryan.github.io/movie_recs/  ",
              github: "https://github.com/jaredryan/movie_recs",
              tech: ['JavaScript', 'HTML', 'CSS'],
              pictures: [
                  {
                      url: "",
                      caption: ""
                  }
              ]
          }
      ];

      const mappedProjects = projects.map((project, index) => {
          return <Project
                      title={project.title}
                      subtitle={project.subtitle}
                      description={project.description}
                      demo={project.demo}
                      github={project.github}
                      tech={project.tech}
                      pictures={project.pictures}
                 />
      });

    return (
        <div className="projectsPage">
            <div class="projectBanner">
                <h1>Projects</h1>
                <div className="projectPageImg"></div>
            </div>
            <div className="projectsDiv">
                {mappedProjects}
            </div>
        </div>
    );
  }
}

export default Projects;