import React, {Component} from 'react'

class Footer extends Component {
    render(){
        return(
            <footer>
                <fieldset>
                    <legend>Contact Information</legend>
                    <ul className="info">
                        <li><span>Email:</span>jryantennis@gmail.com</li>
                        <li><span>Cell:</span>559-348-3595</li>
                    </ul>
                    <ul className="links">
                        <a href="https://www.linkedin.com/in/jared-m-ryan/"><li>LinkedIn</li></a>
                        <a href="https://github.com/jaredryan"><li>Github</li></a>
                    </ul>
                </fieldset>
            </footer>
        );
    }
}

export default Footer;
