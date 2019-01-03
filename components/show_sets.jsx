'use strict';

class ShowSets extends React.Component {

  render() {
    return (
      <this.showDecks atleastOneDeck="true" />
    )
  }

  showDecks(props) {
    const atleastOneDeck = props.atleastOneDeck;
    if (atleastOneDeck) {
      return <h1>Some decks have been created!</h1>;
    }
    return <h1>No decks created yet!</h1>;
  }

}

ReactDOM.render(React.createElement(ShowSets), document.querySelector('#show_sets_container'));
