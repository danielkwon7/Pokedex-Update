import React from 'react';

class PokemonIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div>
          <ul>
            Hello world!
            {this.props.pokemon.map((poke, idx) => (
              <li key={idx}>
                <span>{poke.name}</span>
                <img src={poke.image_url} alt={poke.name} />
              </li>
            )
            )}
          </ul>
        </div>
      );
    }
    componentWillReceiveProps(){

    }

    componentDidMount() {
      this.props.requestAllPokemon();
    }
}

export default PokemonIndex;
