import React, { Component } from 'react';

import {NewZealand} from './maps/NewZealand';
import {Default} from './maps/Default';

class SVGMap extends Component {

  render() {
    switch(this.props.country) {
      case 'srilanka':
        return <NewZealand percent={this.props.percent} />;
      case 'usa':
        return <NewZealand />;
      case 'newzealand':
        return <NewZealand />;
      default:
        return <Default />;
    }
  }
}

export default SVGMap;