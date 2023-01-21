import { FaTwitter, FaLinkedin } from 'react-icons/fa'
interface Props {
  color: string
}
const SocialMedia = ({color}:Props) => {
  return (
    <div className="flex justify-center">
      <a href="https://www.linkedin.com/in/vedmishra" className="text-gray-500 hover:text-gray-600">
        <FaLinkedin color={color} className="h-6 w-6" />
      </a>
      <a href="https://www.twitter.com/markved" className="text-gray-500 hover:text-gray-600 ml-4">
        <FaTwitter color={color} className="h-6 w-6" />
      </a>
    </div>
  )
}

export default SocialMedia
