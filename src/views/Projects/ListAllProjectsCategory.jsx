import ProjectItem from "../../components/Projects/ProjectItem/ProjectItem";
import BreadCrumb from "../../components/BreadCrumb/Breadcrumb";

const ListAllProjectsCategory = ({ categoryData }) => {
  const { category, description, projects } = categoryData;
  console.log(category)
  const breadcrumbItems = [
    {to: '/', label: 'Home'},
    {to: '/projects', label: 'Projects'},
    {to: `/projects/${category}`, label: category},
  ];

  return (
      <>
        <div>
          <h1 className="font-bold text-4xl md:text-4x1 text-highlighted_text_color mb-3">
            {category}
          </h1>
          <BreadCrumb items={breadcrumbItems} />
          <p className=" mx-auto mb-10 text-center w-[90%] md:w-[100%] lg:mx-30 text-xl">
            {description}
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
              ))}
          </div>
        </div>
    </>
  );
};

export default ListAllProjectsCategory;