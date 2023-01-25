import classes from './NewPost.module.css';
import React, { useState } from 'react';
import Modal from '../components/Modal';
import { Link, useNavigate } from 'react-router-dom';

function NewPost() {
    const [newBody, setNewBody] = useState('');
    const [newAuthor, setNewAuthor] = useState('');
    const navigate = useNavigate();

    function onBodyChanged(event) {
        setNewBody(event.target.value);
    }

    function onAuthorChanged(event) {
        setNewAuthor(event.target.value);
    }

    function saveNewPost(postData) {
        fetch('http://localhost:8082/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: newBody,
            author: newAuthor,
        };
        saveNewPost(postData);
        navigate('/');
    }

    return (
        <Modal>
            <form className={classes.form} onSubmit={submitHandler}>
                <p>
                    <label htmlFor='body'>Text</label>
                    <textarea
                        id='body'
                        required
                        rows={3}
                        onChange={onBodyChanged}
                        value={newBody}
                    />
                </p>
                <p>
                    <label htmlFor='name'>Author</label>
                    <input
                        type='text'
                        id='author'
                        required
                        onChange={onAuthorChanged}
                        value={newAuthor}
                    />
                </p>
                <p className={classes.actions}>
                    <Link to='/' className={classes.button}>
                        Cancel
                    </Link>
                    <button>Submit</button>
                </p>
            </form>
        </Modal>
    );
}

export default NewPost;
