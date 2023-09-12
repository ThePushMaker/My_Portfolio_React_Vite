import {createBrowserRouter} from 'react-router-dom'

import Home from './views/pages/Home';
import ArticleLayout from './layouts/ArticleLayout';
import IndexLayout from './layouts/IndexLayout'
import ProjectsCategoryOverview from './views/Projects/ProjectsCategoryOverview';
import ProjectsCategoriesIndex from './views/Projects/ProjectsCategoriesIndex';
import MoreAboutMe from './views/MoreAboutMe';
import ProjectDisplay from './views/Projects/ProjectDisplay';
import ArticleProjectsLayout from './layouts/ArticleProjectsLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexLayout />,
        children: [
            {
                path: '/',
                index: true,
                element: <Home />
            },
            {
                // basename: '/article',
                element: <ArticleLayout />,
                children: [
                    {
                        basename: '/projects',
                        element: <ArticleProjectsLayout />,
                        children: [
                            {
                                path: '/projects',
                                element: <ProjectsCategoriesIndex />
                            },
                            {
                                path: '/project/1',
                                element: <ProjectDisplay />
                            }
                        ]
                    },
                    {
                        path: '/projects/web-apps',
                        element: <ProjectsCategoryOverview categoryIndex='0' />
                    },
                    {
                        path: '/projects/ux',
                        element: <ProjectsCategoryOverview categoryIndex='1' />
                    },
                    {
                        path: '/projects/community',
                        element: <ProjectsCategoryOverview categoryIndex='2' />
                    },
                    {
                        path: '/projects/:idProjectsCategory/:idProject',
                        element: <ProjectDisplay />
                    },
                ]
            },
            {
                path: '/about-me',
                element: <MoreAboutMe />
                
            }
        ]
    },
    

])

export default router