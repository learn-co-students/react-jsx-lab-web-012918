import FillerText from './FillerText.js';

import React from 'react';
import ReactDOM from 'react-dom';

export default class Webpage extends React.Component {
  render(){
    return(
      <div>
        <h1> The world's coolest webpage </h1>
        < FillerText/>
        < FillerText/>
      </div>
    )
  }

}
