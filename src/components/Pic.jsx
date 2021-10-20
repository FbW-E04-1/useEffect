import React, { useEffect } from 'react';
import Einstein from '../assets/einstein.jpg';

const Pic = () => {
  useEffect(() => {
    let interval = setInterval(() => {
      console.log('mounted');
    }, 1000);

    //When we un-mount the component, meaning it is no longer in the DOM we can cleanup
    //any external processes like timers and intervals.
    //As soon as the component gets un-mounted, or disappears from the DOM the cleanup function runs.
    return () => {
      clearInterval(interval);
      console.log('un-mounted');
    };
  }, []);

  return (
    <aside>
      <img src={Einstein} alt='einstein' />
    </aside>
  );
};

export default Pic;
