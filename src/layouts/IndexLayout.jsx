import { Outlet } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const IndexLayout = () => {

  return(
    <>
      <Outlet />
      <Tooltip id={"myTooltip"} place="top" type="dark" effect="solid" style={{fontSize:"17px"}}/>
    </>
  );
}

export default IndexLayout;