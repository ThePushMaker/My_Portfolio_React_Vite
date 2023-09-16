import { Outlet } from "react-router-dom";

const IndexLayout = () => {

  return(
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default IndexLayout;