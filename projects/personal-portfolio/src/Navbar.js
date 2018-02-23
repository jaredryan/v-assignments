import React, {Component} from 'react'

class Navbar extends Component {
    render(){
        return(
            <nav>
                <ul>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>About</li></a>
                    <a href=""><li>Projects</li></a>
                    <a href=""><li>Resume</li></a>
                </ul>
                <div className="overlay"></div>
            </nav>
        );
    }
}

export default Navbar;
