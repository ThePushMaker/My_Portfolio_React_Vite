import "./ProjectCard.css"
const ProjectCard = ( {title, description, imgPath} ) => {
  // console.log(title)
  // console.log(description)
  // console.log(imgPath)
  
  const openProject = () => {
      console.log("click")
  }
  
  return (
    <div className="mx-auto">
      <a>
        <div className="proj-imgbx w-[auto] h-[auto]" onClick={openProject}>
          <img src={imgPath} alt={title} className="text-center w-full h-full bg-center"/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </div>
      

  );
}

export default ProjectCard;