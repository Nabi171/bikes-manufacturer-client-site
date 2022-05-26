import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import UserRow from '../UserRow/UserRow';



const Users = () => {

    const [users, setUsers, refetch] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/user').then(res => res.json()).then(data => setUsers(data))
    }, []);
    // if (isLoading) {

    // }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;