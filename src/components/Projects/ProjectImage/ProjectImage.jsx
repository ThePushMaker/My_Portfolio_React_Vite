const ProjectImage = ({ imgPath, title }) => {
  if(!imgPath){
    imgPath='https://cdn3.tstatic.net/jualbeli/img/njajal/2019/8/-340082284.jpg'
  }
  
  return (
    <img src={imgPath} alt={title} 
      className="object-cover text-center w-screen h-full"
    />
  )
}

export default ProjectImage;