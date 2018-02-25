import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
        <div className="projectsPage">
            <div class="projectBanner">
                <h1>Projects</h1>
                <div className="projectPageImg"></div>
            </div>
            <div className="projectsDiv">
                <div>
                    <h3>Fishackathon</h3>
                    <p>First hackathon experience.</p>
                </div>
                <div>
                    <h3>OpenHouse</h3>
                    <p>It was amazing to learn so much so quickly.</p>
                </div>
                <div>
                    <h3>MovieRecs</h3>
                    <p>Proof that I'm driven to program on my own.</p>
                </div>
            </div>
        </div>
    );
  }
}

export default Projects;
