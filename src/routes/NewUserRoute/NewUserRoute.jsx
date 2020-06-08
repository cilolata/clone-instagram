import React, { useState } from 'react';

import UserForm from '../../containers/UserForm';

const NewUserRoute = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');


    return( 
    <div data-testid="new-user-route">
      <UserForm />
    </div>
    )
  };
export default NewUserRoute;
