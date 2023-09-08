import BreadCrumb from "../../components/BreadCrumb/Breadcrumb";

const ArticleHeaderLayout = ( { title, mainParagraph, URL } ) => {

  return(
    <>
    <h1 className="font-bold text-4xl md:text-4x1 text-highlighted_text_color mb-3">
        { title }
      </h1>
      <BreadCrumb URL={URL} />
      <p className=" mt-[14px] mx-auto mb-[35px] text-center w-[90%] md:w-[100%] lg:mx-30">
        { mainParagraph }
      </p>
    </>
  );
}

export default ArticleHeaderLayout;