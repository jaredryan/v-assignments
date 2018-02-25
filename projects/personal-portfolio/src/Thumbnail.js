import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Thumbnail extends Component {
    render(){

        const backgroundImage = {
            backgroundImage: `url(${this.props.imgURL})`
        }

        return(
            <div className="thumbnail" id={this.props.id}>
                <Link to={this.props.path}>
                    <div className="thumbnailImg"  style={backgroundImage}></div>
                    <h3>{this.props.name}</h3>
                    <h5>{this.props.description}</h5>
                </Link>
            </div>
        );
    }
}

export default Thumbnail;
