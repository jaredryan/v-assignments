import React from 'react';

const Resume = () => {
    return (
        <div className="resumePage">
            <div className="resumeChoices">
                <div className="viewResume">
                    <div className="hoverWrapper">
                        <a href="Ryan_Jared_Resume.pdf">
                            <h1>View Resume</h1>
                            <div className="imageWrapper">
                                <div className="resumeImg1"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="downloadResume">
                    <div className="hoverWrapper">
                        <a href="Ryan_Jared_Resume.pdf" download="Ryan_Jared_Resume.pdf">
                            <h1>Download Resume</h1>
                            <div className="imageWrapper">
                                <div className="resumeImg2"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Resume;
