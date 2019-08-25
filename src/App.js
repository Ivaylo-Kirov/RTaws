import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
  }
  componentDidMount() {
    // axios post
    axios.post('https://8j1okp4gx2.execute-api.us-east-1.amazonaws.com/react', {
      firstName: 'Ivaylo',
      lastName: 'Kirov'
    })
    .then((response) => {
      this.setState({data: response.request.status})
      console.log(response);
    })
    .catch((err) => console.log(err))
    // put it into state
  }

  render() {
    return(
      <div>
        {this.state.data}
      </div>
    );
  }
}

export default App;
