import {createBrowserRouter} from 'react-router-dom'

import Home from './views/pages/Home';
import ArticleLayout from './layouts/ArticleLayout';
import IndexLayout from './layouts/IndexLayout'
import ProjectsCategoryOverview from './views/Projects/ProjectsCategoryOverview';
import ProjectsCategoriesIndex from './views/Projects/ProjectsCategoriesIndex';
import MoreAboutMe from './views/MoreAboutMe';
import ArticleProjectsLayout from './layouts/ArticleProjectsLayout';
import routes from './routes';
import ProjectDetail from './views/Projects/ProjectDetail';

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
                                path: routes['Projects'],
                                element: <ProjectsCategoriesIndex />
                            },
                            {
                                path: routes['Web Platforms & Applications'],
                                element: <ProjectsCategoryOverview categoryIndex='0' />
                            },
                            {
                                path: routes['User Experience (UX)'],
                                element: <ProjectsCategoryOverview categoryIndex='1' />
                            },
                            {
                                path: routes['Community Contributions'],
                                element: <ProjectsCategoryOverview categoryIndex='2' />
                            },
                            {
                                path: '/projects/:idCategory/:idProject',
                                element: <ProjectDetail />
                            },
                            {
                                path: '/project/1',
                                element: <ProjectDetail />
                            },
                        ]
                    },
                    
                ]
            },
            {
                path: routes['About Me'],
                element: <MoreAboutMe />
            }
        ]
    },
    

])

export default router