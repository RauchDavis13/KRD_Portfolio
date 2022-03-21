import React, { useState } from 'react';
// import Modal from '../Modal';

const Work = () => {

  const works = [
    {
      title: 'Project 2: Get Fit!',
      pic: '../../assets/work/1_Project2_Getfit.jpg',
      alt: 'Getfit',
      description: 'Team based Project utilizing a Fullstack build',
      website: 'https://damp-reef-46989.herokuapp.com/',
      repo: 'https://github.com/RauchDavis13/Get_Fit'
    },
    {
      title: 'Challeng 19: PWA Budget Tracker',
      pic: '../../assets/work/2A_Challenge19_BudgetTrack_PWA.png',
      alt: 'PWA Budget Tracker',
      description: 'Challege 19:  A Budget Tracker structured as a PWA.',
      website: 'https://afternoon-hollows-70451.herokuapp.com/',
      repo: 'https://github.com/RauchDavis13/BudgetTrak.git'
    },
    {
      title: 'Challenge 18: Social Media App',
      pic: '../../assets/work/3A_Challenge18_Social_Media.png',
      alt: 'Social Media',
      description: 'Links go to GitHub Repository, where video snippets are shown outlining the flow of Express routes in the context of a Social Media app.',
      website: 'https://github.com/RauchDavis13/Social_Media.git',
      repo: 'https://github.com/RauchDavis13/Social_Media.git'
    },
    {
      title: 'Project 1: The Jokeinator',
      pic: '../../assets/work/4_Project1_The_Jokeinator.png',
      alt: 'Joekinator',
      description: "Team based project.  Focus on local storage and using 3rd party API's",
      website: 'https://rauchdavis13.github.io/Project1_The_Jokeinator/',
      repo: 'https://github.com/RauchDavis13/Project1_The_Jokeinator'
    },
    {
      title: 'Challenge 14: Tech Blog',
      pic: '../../assets/work/5_Challenge14_Tech_Blog.png',
      alt: 'Tech Blog',
      description: 'The Tech Blog - App featuring use of Expressjs with dynamicall loaded elements',
      website: 'https://radiant-dusk-58701.herokuapp.com/',
      repo: 'https://github.com/RauchDavis13/Tech_Blog'
    },
    {
      title: 'Challenge 9: README Maker',
      pic: '../../assets/work/6_Challenge9_ReadMe_Maker.png',
      alt: 'Readme Maker',
      description: 'My First PWA. This budget trakcer app can be used with and without internet.',
      website: 'https://radiant-dusk-58701.herokuapp.com/',
      repo: 'https://github.com/RauchDavis13/Tech_Blog'
    }
   
  ];

  return (
    <>
      {works.map(work => (
          <div class="card" >
            <img class="card-img-top" src={work.pic} alt={work.alt}></img>
            <div class="card-body">
              <h5 class="card-title">{work.title}</h5>
              <p class="card-text">{work.description}</p>
            </div> 
             <div class="card-body">
              <a href={`${work.website}`} class="card-link">Website link</a>
              <br></br>
              <a href={`${work.repo}`} class="card-link">Git Repository link</a>
            </div>
          </div>
      ))}
 
  
    </>
  );
};

export default Work;
