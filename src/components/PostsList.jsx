import React, { useEffect, useState } from 'react';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    async function fetchPosts() {
        setIsFetching(true);
        const response = await fetch('http://localhost:8082/posts', {
            headers: {
                'Content-Type': 'application-json',
            },
        });
        const responseData = await response.json();
        setPosts(responseData.posts);
        setIsFetching(false);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <React.Fragment>
            {!isFetching && (
                <ul className={classes.postsList}>
                    {posts?.length > 0 ? (
                        posts.map(({ id, author, body }) => (
                            <Post key={id} author={author} body={body} />
                        ))
                    ) : (
                        <div>Nothing to display!</div>
                    )}
                </ul>
            )}
            {isFetching && <div>Loading...</div>}
        </React.Fragment>
    );
}

export default PostsList;
