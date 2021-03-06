import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';

axios.defaults.headers.common['Authorization'] = "koOheljmQX";

class App extends Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }

    componentWillMount() {
        axios.get("http://shakespeare.podium.co/api/reviews").then(response => {
            const promises = response.data.data.map(review => {
                return this.getReview(review.id)
            });
            Promise.all(promises).then(reviews => {
                this.setState({reviews})
            })
        })
    }

    getReview = (id) => {
        return axios.get(`http://shakespeare.podium.co/api/reviews/${id}`).then(response => {
            return response.data.data
        })
    }

    ascending = () => {
        this.setState(prevState => {
            const reviews = prevState.reviews.sort((a, b) => a.rating - b.rating)
            return {reviews}
        })
    }

    descending = () => {
        this.setState(prevState => {
            const reviews = prevState.reviews.sort((a, b) => b.rating - a.rating)
            return {reviews}
        })
    }

    renderReviews = () => {
        return this.state.reviews
            .map((review, index) => {
            return  (<Card key={index + review.id} style={{marginBottom: "10px"}}>
                        <CardHeader
                          title={`Rating: ${review.rating}`}
                          subtitle={`${review.author}, ${review.publish_date.slice(5, 7)}-${review.publish_date.slice(8, 10)}-${review.publish_date.slice(0, 4)}`}
                          actAsExpander={true}
                          showExpandableButton={true}
                          subtitleStyle={{fontFamily: "Raleway", fontSize: "20px", fontWeight: "300"}}
                          titleStyle={{fontFamily: "Raleway", fontSize: "22px", fontWeight: "400"}}
                        />
                        <CardText
                            expandable={true}
                            style={{fontFamily: "Raleway", fontSize: "18px", fontWeight: "300"}}>
                            {review.body}
                        </CardText>
                    </Card>);
        })
    }

  render() {
    return (
      <div className="mainContainer">
          <div className="title">
              <div className="background"></div>
              <h1>Shakespeare's Reviews</h1>
          </div>
          <div className="buttons">
              <RaisedButton
                  label="Ascending"
                  onClick={this.ascending}
                  style={{width: "120px", marginRight: "5px", marginLeft: "5px"}}/>
              <RaisedButton
                  label="Descending"
                  onClick={this.descending}
                  style={{width: "120px", marginRight: "5px", marginLeft: "5px"}}/>
          </div>
          <div className="reviews">
              {this.renderReviews()}
          </div>
      </div>
    );
  }
}

export default App;
