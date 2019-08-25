import React, { Component, Fragment } from 'react';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    nom: 'Antho',
    age: 32
  },
  membre2: {
    nom: 'Ludivine',
    age: 32
  },
  membre3: {
    nom: 'Ethan',
    age: 7
  },
  membre4: {
    nom: 'Nolan',
    age: 3
  }
}

class App extends Component {
  state = {
    famille,
    displayed: false
  }

  handleClick = (num) => {
    const famille = { ...this.state.famille}
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = (event, id) => {
    const famille = { ...this.state.famille}
    const nom = event.target.value
    famille[id].nom = nom
    console.log(nom)
    this.setState({ famille })
  }

  hideName = (id) => {
    const famille = { ...this.state.famille}
    famille[id].nom = 'X'
    this.setState({ famille })
  }

  handleShowDetails = () => {
    const displayed = !this.state.displayed
    this.setState({ displayed })
  }

  render() {
    const { titre } = this.props
    const { famille, displayed } = this.state

    let details = null

    if (displayed) {
      details = (
        <strong>Le petit dernier</strong>
      )
    }

    const liste = Object.keys(famille).map((membre) => (
      <Membre
        hideName={() => this.hideName(membre)}
        handleChange={(event) => this.handleChange(event, membre)}
        key={membre}
        age={famille[membre].age}
        nom={famille[membre].nom} />
    ))

    return (
      <Fragment>
        <div className="App">
          <h1>{titre}</h1>

          {liste}
          { details }
          <div className='footer'>
            <button onClick={this.handleShowDetails}>{displayed ? 'Cacher' : 'Montrer'}</button>
            <Button
              vieillir={() => this.handleClick(2)}
             />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
