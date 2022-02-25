import React from 'react'
import { IoCloseSharp, IoLogoTwitter, } from 'react-icons/io5'
import { ImFacebook, ImInstagram, ImLinkedin } from 'react-icons/im'

// TODO: Pass down props as a parameter and take the parts of object you pass down to dyanmically create a unique contact for each component

function Contact(props) {
    return (
        <div className='contactContainer'>
            <div className="imageContainer">
                <img className='card-image' src={props.image === "" ? "https://via.placeholder.com/170x170/000000/ffffff?text=no+image" : props.image} alt={props.name}></img>
            </div>

            <div className="contactInfo">
                <h2 className='card-name'>{props.name}</h2>
                <h4 className='card-phone'>{props.phone}</h4>
                <h5 className='card-email'>{props.email}</h5>
                <div className='social-icons'>
                    <ImFacebook size={18}/>
                    <IoLogoTwitter size={18}/>
                    <ImInstagram size={18}/>
                    <ImLinkedin size={18}/>
                </div>
            </div>

            <div className='contactSidebar'>
                <div className='delete'><IoCloseSharp size={20}/></div>
            </div>
        </div>
    )
}

export default Contact
