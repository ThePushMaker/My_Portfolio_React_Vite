import {createBrowserRouter} from 'react-router-dom'

import Home from './views/pages/Home';
import ArticleLayout from './layouts/ArticleLayout';
import IndexLayout from './layouts/IndexLayout'
import ProjectsCategoryOverview from './views/Projects/ProjectsCategoryOverview';
import ProjectsCategoriesIndex from './views/Projects/ProjectsCategoriesIndex';
import MoreAboutMe from './views/MoreAboutMe';

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
                basename: '/projects',
                element: <ArticleLayout />,
                children: [
                    {
                        path: '/projects',
                        element: <ProjectsCategoriesIndex />
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
                    }
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