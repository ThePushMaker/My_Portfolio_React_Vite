import ProjectItem from "../../components/Projects/ProjectItem/ProjectItem";
import BreadCrumb from "../../components/BreadCrumb/Breadcrumb";

const ListAllProjectsCategory = (props ) => {
  const { category, description, projects } = props.categoryData;

  return (
      <>
        <div>
          <h1 className="font-bold text-4xl text-highlighted_text_color mb-3">
            {category}
          </h1>
          <BreadCrumb URL={props.URL} />
          <p className=" mx-auto mb-10 text-center w-[90%] md:w-[100%] lg:mx-30">
            {description}
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
              ))}
          </div>
        </div>
    </>
  );
};

export default ListAllProjectsCategory;