import "./ProjectItem.css"
const ProjectItem = ( {title, description, imgPath} ) => {

  if(imgPath==''){
    imgPath='https://wordpress.calderonworks.pro/wordpress/wp-content/uploads/2023/09/404.png'
  }
  
  const openProject = () => {
      console.log("click")
  }
  
  return (
    <div className="mx-auto">
      <a>
        <div className="proj-imgbx 
          md:max-h-[230px]
          lg:max-h-[260px]" 
          onClick={openProject}
        >
          <img src={imgPath} alt={title} 
            className="text-center min-h-[300px]"
          />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </div>
      

  );
}

export default ProjectItem;