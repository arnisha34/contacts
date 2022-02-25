import React from 'react'
import Contact from './Contact'


function Contactslist(props) {
    return (
        <Contact key={props.name} image={props.image} name={props.name} phone={props.phone} email={props.email}/>
    )
}

export default Contactslist
