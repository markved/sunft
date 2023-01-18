import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="flex justify-center">
      <a href="https://www.linkedin.com/vedmishra" className="text-gray-500 hover:text-gray-600">
        <FaLinkedin className="h-6 w-6" />
      </a>
      <a href="https://www.twitter.com/markved" className="text-gray-500 hover:text-gray-600 ml-4">
        <FaTwitter className="h-6 w-6" />
      </a>      
    </div>
  )
}

export default SocialMedia
