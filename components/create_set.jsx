'use strict';

class CreateSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return React.createElement(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

ReactDOM.render(React.createElement(CreateSet), document.querySelector('#create_set_container'));



/*
import React, {
  Component
} from 'react';

class NewSet extends Component {
  state = {

  };

  render() {
    createDefinitions();
  }


  createDefinitions() {
    let allDefinitions = [];
    let contents = require(../other/dictionary.json)
    let dictionary = JSON.stringify(contents);
    for (let g = 0; g < allTermsArray.length; g ++)
      allDefinitions[g] = dictionary.allTermsArray[g]
    ]
  }


}

export default NewSet;
*/
