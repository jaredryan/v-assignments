import React, { Component } from 'react';
import ProjectImage from './ProjectImage';

class Project extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.dir(e.target);
        if (e.target.id !== "ignoreToggle") {
            this.setState(prevState => {
                return {
                    clicked: !prevState.clicked
                }
            });
        }
    }

    render(){
        const style = {
            backgroundColor: this.props.index % 2 === 0
                                ? "rgb(210, 210, 225)"
                                : "white"
        }

        const descriptionList = this.props.description.map((bullet, index) => {
            return <li key={index + bullet}>{bullet}</li>;
        });

        const techList = this.props.tech.reduce((total, elem) => {
            return total + elem + ", ";
        }, "");

        const imageList = this.props.pictures.map((image, index) => {
            return <ProjectImage
                        id={image.id}
                        caption={image.caption}
                   />
        })

        return(
            <div className="projectEntry" onClick={this.handleClick} style={style}>
                <h2>{this.props.title}
                    {
                        this.props.demo !== "" &&
                        <a href={this.props.demo} target="_blank" id="ignoreToggle">(<span id="ignoreToggle">Demo</span>)</a>
                    }
                </h2>
                <h3>{this.props.subtitle}
                    {
                        this.props.github !== "" && <a href={this.props.github} target="_blank" id="ignoreToggle">(<span id="ignoreToggle">Github</span>)</a>
                    }
                </h3>
                {this.state.clicked ?
                    <div>
                        <ul>
                            {descriptionList}
                        </ul>
                        <h5><span>Technologies:</span> {techList.slice(0, techList.length - 2)}</h5>
                        <div className="projectImages">
                            {imageList}
                        </div>
                        <h6>(Click to close)</h6>
                    </div> :
                    <h6>(Click to expand)</h6>
                }
            </div>
        );
    }
}

export default Project;
