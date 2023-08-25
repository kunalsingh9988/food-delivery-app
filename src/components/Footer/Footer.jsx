import React from 'react'
import './Footer.css'
import {AiOutlineInstagram,AiOutlineTwitter,AiOutlineLinkedin} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <p>© 2023 Lilies, All right reserved.</p>
        <div className="footerIcons">
            <div className="icon">
                <Link>
                <AiOutlineInstagram className='subIcon'/>
                </Link>
            </div>
            <div className="icon">
                <Link>
                <AiOutlineLinkedin className='subIcon'/>
                </Link>
            </div>
            <div className="icon">
                <Link>
                <AiOutlineTwitter className='subIcon'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer