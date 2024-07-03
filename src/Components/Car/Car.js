import React from 'react'
import './Car.css'

export default function Car(props) {

  return (
        <section key={props.id} className='car-item-design' onClick={()=>{
            props.handleSelectedCarItemClick(props.id);
        }}>
            <div>
                <img alt={props.car.model} src={props.car.imageUrl}></img>
            </div>
            <div>
                <h1>ID : <u>{props.car.id}</u></h1>
                <h1>Vendor : <u>{props.car.vendor}</u></h1>
                <h1>Model : <u>{props.car.model}</u></h1>
                <h1>Price : <u>{props.car.price}</u></h1>
            </div>
        </section>
    
  )
}
