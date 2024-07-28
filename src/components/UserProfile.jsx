import React from 'react';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    userId: '123456',
    email: 'johndoe@example.com',
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <div className="user-profile">
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>User ID: {user.userId}</p>
        <p>Email: {user.email}</p>
      </div>
      <div className="side-menu">
        <ul>
          <li>Saved Trips</li>
          <li onClick={handleLogout}>Log Out</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
