import { Routes, Route } from "react-router-dom"
import Home from './views/Home'
import WebPlatformsAndApplications from "./views/Projects/WebPlatformsAndApplications";
import UserExperienceUX from "./views/Projects/UserExperienceUX";
import CommunityContributions from "./views/Projects/CommunityContributions";

function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="projects/web-platforms-and-applications" element={ <WebPlatformsAndApplications /> } />
        <Route path="projects/user-experience-ux" element={ <UserExperienceUX /> } />
        <Route path="projects/community-contributions" element={ <CommunityContributions /> } />
      </Routes>
    </>
  );
}

export default App
