import React from 'react';
import ReactDOM from 'react-dom/client';
import Posts from './routes/Posts';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewPost from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import PostDetails from './components/PostDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Posts />,
                children: [
                    { path: '/create-post', element: <NewPost /> },
                    { path: '/post-details/:id', element: <PostDetails /> },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
