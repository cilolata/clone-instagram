import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const[users, setUsers] = useState([]);
  const[stories, setStories] = useState([]);
  const[posts, setPosts] = useState([]);
  const[userIndex, setUserIndex] = useState(0);
 
  useEffect(() => {
     fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users")
     .then(res => res.json())
     .then(data => {
       setUsers(data)       
    })
  },[]);

   useEffect(() => {
      fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories")
      .then(res => res.json())
      .then(res => {
        setStories(res) 
      }) 
  },[users]);
  

  useEffect(() => {
    //comparação do tamanho do array users com o userIndex (iniciado em 0 e add + 1 para comparar com o tamanho do array))
    if(userIndex === users.length) {
      return;
    }  
    //pegando a posição pelo userIndex e buscando o id de users
    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[userIndex].id}/posts`)
     .then(res => res.json())
     .then(data => {
     setPosts([...posts,...data]) 

     setUserIndex(userIndex + 1)
    })
    
  },[users, userIndex]);

   //procurando o post que pertence ao usuário pelo id --> passando a função como props
   const getUserHandler = postUserById => users.find(user => postUserById === user.id )
 

  return (
    <div  data-testid="feed-route">
      {(users.length > 0 && stories.length > 0) && 
        <Stories
        stories={stories}
        getUserHandler={getUserHandler}
      />
     }

     {users.length !== userIndex ?
      <Loading />
      : <Posts
        posts={posts}
        getUserHandler={getUserHandler}
        />
     }
    </div>
  );
};

export default FeedRoute;
