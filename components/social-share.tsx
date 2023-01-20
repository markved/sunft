import {
  TwitterShareButton, TwitterIcon,
  LinkedinShareButton, LinkedinIcon,
  FacebookShareButton, FacebookIcon,
  RedditShareButton, RedditIcon,
} from 'next-share'

type Props = {
  title: string
}

const SocialShare = ({title}:Props) => {
  return (
    <div className="flex justify-end">
      <TwitterShareButton url={document.location.href} title={title}>
      <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton url={document.location.href} title={title}> 
      <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <FacebookShareButton url={document.location.href} quote={title}>
      <FacebookIcon size={32} round />
      </FacebookShareButton>

      <RedditShareButton url={document.location.href} title={title}>
      <RedditIcon size={32} round /> 
      </RedditShareButton>      
    </div>
  )
}

export default SocialShare
