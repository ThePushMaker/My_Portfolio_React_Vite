import {createBrowserRouter} from 'react-router-dom'

import Home from './views/Home';
import WebPlatformsAndApplications from './views/Projects/WebPlatformsAndApplications';
import UserExperienceUX from './views/Projects/UserExperienceUX';
import CommunityContributions from './views/Projects/CommunityContributions';
import PageLayout from './layouts/PageLayout/PageLayout'

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
        path: '/projects',
        element: <PageLayout />,
        children: [
            {
                path: '/projects/web-apps',
                element: <WebPlatformsAndApplications />
            },
            {
                path: '/projects/ux',
                element: <UserExperienceUX />
            },
            {
                path: '/projects/community-contributions',
                element: <CommunityContributions />
            }
            
        ]
    }
])

export default router