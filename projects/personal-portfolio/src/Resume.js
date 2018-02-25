import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Resume extends Component {
  render() {
    return (
        <div className="resumePage">
            <div className="resumeChoices">
                <div className="simpleResume">
                    <div className="hoverWrapper">
                        <a href="Ryan_Jared_Resume.pdf">
                            <h1>Simple Resume</h1>
                            <div className="imageWrapper">
                                <div className="resumeImg1"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="simpleResume">
                    <div className="hoverWrapper">
                        <Link to="/fun/resume" class="img2">
                            <h1>Fun Resume</h1>
                            <div className="imageWrapper">
                                <div className="resumeImg2"></div>
                            </div>
                        </Link>
                    </div>            
                </div>
            </div>
            <a href="Ryan_Jared_Resume.pdf" download="Ryan_Jared_Resume.pdf" ><button>Download Resume</button></a>
        </div>
        
    );
  }
}

export default Resume;
