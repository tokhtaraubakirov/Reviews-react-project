import React, { useState } from 'react';
import people from './Data';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkPerson = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const clickRight = () => {
    setIndex((index) => {
      let newPerson = index + 1;
      return checkPerson(newPerson);
    })
  };

  const clickLeft = () => {
    setIndex((index) => {
      let newPerson = index - 1;
      return checkPerson(newPerson);
    })
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkPerson(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name}/>
      </div>
      <h4 className='author'>{ name }</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={clickLeft}> &#60; </button>
        <button className='next-btn' onClick={clickRight}> &#62; </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        Random?
      </button>
    </article>
  );
}

export default Review;