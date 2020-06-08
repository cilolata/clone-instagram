import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedStory, setSelectedStory] = useState({});

  //comparando se o story(id) selecionado é igual ao id do array
  const findStoryById = (id) => stories.find(story => story.id === id);
    
  //fazendo a função q será passada para o stories componente e para o botão de story de cada user
  //buscando o story.userId (e o perfil dono do story) pela função geUsertHandler passada como props
  const handleStory = (story) => {
    const storyActive = findStoryById(story.id);
    const profile = getUserHandler(story.userId);

    setSelectedUser(profile)
    setSelectedStory(storyActive)
    setShowStory(true)
  }

return (
  <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
        {stories.map(story => {
            const profileData = getUserHandler(story.userId);
          return (
            profileData && 
            <button
            key={story.userId}
            className="user__thumb"
            onClick={() => handleStory(story)}
            >
          <div className="user__thumb__wrapper">
              <img src={profileData.avatar} alt={profileData.name}/>
            </div>
            </button>  
          )})
        }
      </div> 
      </section>

      {showStory &&  
      <Story
      story={selectedStory}
      user={selectedUser}
      handleClose={setShowStory}
      />
     }
    </React.Fragment>
  );
};

export default Stories;
