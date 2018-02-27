import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import ServiceDetail from './ServiceDetail';

const Services = props => {
    return (
      <div>
        <Link to="/services/dog-walking">Dog Walking</Link>
        <Link to={`${props.match.url}/lawn-care`}>Lawn Care</Link>
        <Link to="/services/toilet-unclogging">Toilet Unclogging</Link>
        <Switch>
            <Route path="/services/:serviceID" component={ServiceDetail}/>
        </Switch>
      </div>
    );
}

export default Services;
