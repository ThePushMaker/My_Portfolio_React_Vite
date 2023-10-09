import './ProjectImage.css'

const ProjectImage = ({ imgPath, title }) => {
  if(!imgPath){
    imgPath='https://i.imgur.com/Ev85aGs.png'
  }
  
  return (
    <img src={imgPath} alt={title} 
      className="object-cover text-center w-screen h-full"
    />
  )
}

export default ProjectImage;