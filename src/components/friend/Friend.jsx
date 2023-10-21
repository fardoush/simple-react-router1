import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend);
    // const {id,name,username,email,address,phone,website,company} = friend;
    const {id,name,username,email,phone} = friend;
    return (
        <div className='friend'>
            <h3>Name : {name}</h3>
            <p>UserName : {username}</p>
            <p>E-mail : {email}</p>
            {/* <p>Address : {address}</p> */}
            <p>Phone : {phone}</p>
            {/* <p>Website : {website}</p>
            <p>Company : {company}</p> */}
            <p><Link to={`/friend/${id}`}>Show Details</Link></p>
            
        </div>
    );
};

export default Friend;