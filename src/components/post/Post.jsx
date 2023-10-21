import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const navigate = useNavigate();
    const {id, title,body} = post;

    const handleNavigate = ()=> {
        navigate(`/post/${id}`);


    }
    return (
        <div className='post'>
            This is single post page

            <h4>{id}</h4>
            <h4>{title}</h4>
            <p>{body}</p>
            <div className="btn-holder">
            <Link to={`/post/${id}`} className='btn btn1'>Show Details</Link>
            <Link to={`/post/${id}`}><button className='btn btn2'>Show Post Details</button></Link>
            <button onClick={handleNavigate}>With BTN Handle</button>
            
            </div>
        </div>
    );
};

export default Post;