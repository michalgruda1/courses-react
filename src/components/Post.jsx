import classes from './Post.module.css';
import { Link } from 'react-router-dom';

function Post({ author, body }) {
    function clickHandler() {}

    return (
        <Link>
            <li className={classes.post}>
                <p className={classes.author}>{author}</p>
                <p className={classes.body}>{body}</p>
            </li>
        </Link>
    );
}

export default Post;
