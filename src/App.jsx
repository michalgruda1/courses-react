import React, { useState } from 'react';
import PostsList from './components/PostsList';

function App() {
    const [isModalVisible, setModalVisible] = useState(false);

    function createPostHandler() {
        setModalVisible(true);
    }

    function postCancelledHandler() {
        setModalVisible(false);
    }

    return (
        <>
            <main>
                <PostsList
                    isModalVisible={isModalVisible}
                    onModalVisibilityChanged={createPostHandler}
                    onPostCancelled={postCancelledHandler}
                />
            </main>
        </>
    );
}

export default App;
