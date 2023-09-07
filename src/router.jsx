import {createBrowserRouter} from 'react-router-dom'

import Home from './views/Home';
import PageLayout from './layouts/PageLayout/PageLayout'
import AllCategoriesLinks from './views/Projects/AllCategoriesLinks';
import AllProjectsCategoryPage from './views/Projects/AllProjectsCategoryPage';

const router = createBrowserRouter([
    {path: '/',
    // element: <Layout />,
    children: [
        {
            index: true,
            element: <Home />
        }
    ]
    },
    {
        basename: '/projects',
        element: <PageLayout />,
        children: [
            {
                path: '/projects',
                element: <AllCategoriesLinks />
            },
            {
                path: '/projects/web-apps',
                element: <AllProjectsCategoryPage categoryIndex='0' />
            },
            {
                path: '/projects/ux',
                element: <AllProjectsCategoryPage categoryIndex='1' />
            },
            {
                path: '/projects/community',
                element: <AllProjectsCategoryPage categoryIndex='2' />
            }
            
        ]
    },

])

export default router