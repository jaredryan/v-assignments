import React, {Component} from 'react'

class Thumbnail extends Component {
    render(){

        const backgroundImage = {
            backgroundImage: `url(${this.props.imgURL})`
        }

        return(
            <div className="thumbnail" id={this.props.id}>
                <a href="">
                    <div className="thumbnailImg"  style={backgroundImage}></div>
                    <h3>{this.props.name}</h3>
                    <h5>{this.props.description}</h5>
                </a>
            </div>
        );
    }
}

export default Thumbnail;
