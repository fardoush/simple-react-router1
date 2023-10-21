import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {id,title,body} = post;
    // const {id,title,userId,body} = post;

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>Details about your post</h3>
            <h3>{id}</h3>
            <h3>{title}</h3>
            {/* <p>{userId}</p> */}
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
            
        </div>
    );
};

export default PostDetails;