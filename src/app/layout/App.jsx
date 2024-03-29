import React, {Component} from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Fragment } from 'react';

class App extends Component {
  render(){
    return (
      <Fragment>
        <NavBar />
        <Container className="main"> 
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
