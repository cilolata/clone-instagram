import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile"  data-testid="user-profile">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <img src={avatar} alt={name}/>
            </div>
               <p className="user__name">{username}</p>
            </div>
        </div>
    </section>
  )
};

export default UserProfile;
