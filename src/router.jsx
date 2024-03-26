import {createBrowserRouter} from 'react-router-dom'

import ArticleLayout from './layouts/ArticleLayout';
import IndexLayout from './layouts/IndexLayout'
import ProjectsCategoryOverview from './views/Projects/ProjectsCategoryOverview';
import ProjectsCategoriesIndex from './views/Projects/ProjectsCategoriesIndex';
import ArticleProjectsLayout from './layouts/ArticleProjectsLayout';
import { routes } from './routes';
import ProjectDetail from './views/Projects/ProjectDetail';
import App from './App';
import NotFound from './views/NotFound/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexLayout />,
        children: [
            {
                path: '/',
                index: true,
                element: <App /> 
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
                                path: routes['Interface Design'],
                                element: <ProjectsCategoryOverview categoryIndex='1' />
                            },
                            {
                                path: routes['Community Contributions'],
                                element: <ProjectsCategoryOverview categoryIndex='2' />
                            },
                            {
                                path: '/projects/:idCategory/:idProject',
                                element: <ProjectDetail />
                            }
                        ]
                    },
                    
                ]
            },
            {
                path: '*',
                element: <NotFound />
            }
            // {
            //     path: routes['About Me'],
            //     element: <MoreAboutMe />
            // }
        ]
    },
    

])

export default router