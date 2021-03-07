import React, { Component } from 'react';
import './App.css'

export default class form extends Component {
     constructor(props){
     super(props)
     this.state={
          numero : 'ca marche !'
     }
     }
     render() {
          return (
               <div>
                    <form className='form'>
                         
                         <label>Numéro</label>
                         <input defautValue={this.props.numero} onChange={this.props.onNumeroChange}
                         type='number'
                         required></input>

                         <label>Date d'expiration</label>
                         <div className='flex' >
                              <input className='expirationinput' 
                                        value={this.props.ExpireMois}
                                        type="number"
                                        maxLength='2'
                                        required
                                        onChange={this.props.onExpireMoisChange}>
                              </input>
                              <span>/</span>
                              <input className='expirationinput' 
                                        value={this.props.ExpireAnnee} 
                                        onChange={this.props.onExpireAnneeChange}>
                              </input>
                         </div>

                         <label>Nom</label>
                         <input value={this.props.nom} 
                              onChange={this.props.onNomChange}>
                         </input>

                         <label>Prenom</label>
                         <input value={this.props.prenom} onChange={this.props.onPrenomChange}></input>
                    </form>
               </div>
          )
     }
}
   

