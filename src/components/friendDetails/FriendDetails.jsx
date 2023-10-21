import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h5>Every thing about this person is here</h5>
            <h4>Name: {friend.name}</h4>
            <h4>Phone: {friend.phone}</h4>
        </div>
    );
};

export default FriendDetails;