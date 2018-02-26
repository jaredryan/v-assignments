import React from 'react'

const Project = props => {
    const descriptionList = props.description.map(bullet => {
        return <li>{bullet}</li>;
    });

    const techList = props.tech.reduce((total, elem) => {
        return total + elem + ", ";
    }, "");


    return(
        <div className="projectEntry">
            <a href={props.demo}><h2>{props.title}</h2></a>
            <h3>{props.subtitle} (<a href={props.github}>Github</a>)</h3>
            <ul>
                {descriptionList}
            </ul>
            <h5>Technoligies: {techList.slice(0, techList.length - 2)}</h5>
        </div>
    );
}

export default Project;
