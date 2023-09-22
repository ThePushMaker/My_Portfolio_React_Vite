import { Outlet } from "react-router-dom";
import { LanguageProvider } from "../contexts/LanguageContext";

const IndexLayout = () => {

  return(
    <>
      <div>
        <LanguageProvider>
          <Outlet />
        </LanguageProvider>
      </div>
    </>
  );
}

export default IndexLayout;