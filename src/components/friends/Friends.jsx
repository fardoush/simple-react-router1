import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends);
    return (
        <div>
            <h3>These are my friends: {friends.length}</h3>

            <div>
                {
                    friends.map (friend => <Friend
                    friend={friend}
                    key={friend.id}>

                    </Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;