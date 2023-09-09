import { Outlet } from "react-router-dom";

const IndexLayout = ({ menuVisible  }) => {

  return(
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default IndexLayout;