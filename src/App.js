import './App.css';
import Card from  './card'
import Form from './form'

import React, { Component } from 'react'

export default class App extends Component {
      state = {
        nom : 'nom',
        prenom : 'prenom',
        expireMois : '##',
        expireAnnee : '##',
        numero : '#### #### #### ####'

      }
      
  onNomChange = (e) => {
    this.setState({
      nom : e.target.value
    })
  }
  onPrenomChange = (e) => {
    this.setState({
      prenom : e.target.value
    })
  }
  onExpireMoisChange = (e) => {
    this.setState({
      expireMois : e.target.value
    })
  }
  onExpireAnneeChange = (e) => {
    this.setState({
      expireAnnee : e.target.value
    })
  }
  onNumeroChange = (e) => {
    this.setState({
      numero : e.target.value
    })
  }

  render() {
    
    return (
      <div>
        <div className="App">
          <Card
          nom={this.state.nom} 
          prenom={this.state.prenom} 
          expireMois={this.state.expireMois} 
          expireAnnee={this.state.expireAnnee} 
          numero={this.state.numero}/>

          <Form 
          onNomChange={this.onNomChange}
          onPrenomChange={this.onPrenomChange}
          onExpireMoisChange={this.onExpireMoisChange}
          onExpireAnneeChange={this.onExpireAnneeChange}
          onNumeroChange={this.onNumeroChange}
          nom={this.state.nom} 
          prenom={this.state.prenom} 
          expireMois={this.state.expireMois} 
          expireAnnee={this.state.expireAnnee} 
          numero={this.state.numero}/>

      </div>
    </div>
    )
  }
}
  

