import { Outlet } from "react-router-dom";

const IndexLayout = ({ menuVisible  }) => {

  return(
    <>
      <div className={` ${menuVisible ? 'blur-background' : ''}`}>
        <Outlet />
      </div>
    </>
  );
}

export default IndexLayout;