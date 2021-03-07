import React from 'react'
import './App.css'
import img from './img/visapng.png'

export default function card(props) {
     return (
          <section className='cardcontainer'>
               <div className='card'>
                    <div className='cardImg'>
                         <img src="https://img.icons8.com/plasticine/100/000000/sim-card-chip.png" alt='puce electronique'/>
                         <img className='visa' src={img} alt=''/>
                    </div>
                    <div className='cardInfo'>
                         <p className='cardName'>{props.nom}</p>
                         <p className='cardExpire'>Expire le <br/>{props.expireMois}/{props.expireAnnee}</p>
                         <p className='cardNumero'>{props.numero}</p>
                    </div>
               </div>
          </section>
     )
}
