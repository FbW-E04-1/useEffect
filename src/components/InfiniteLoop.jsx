import React, { useState, useEffect } from 'react';

const InfiniteLoop = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  //componentDidMount     = Only run the side effect once.
  //componentDidUpdate    = Will run every time a condition updates.
  //componentWillUnmount  = Will run when the component un-mounts.

  //-------------------------------------------------------------------------------------------------
  //We can get into a situation whereby we crash react because of too many renders
  //For example....

  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then((response) => response.json())
  //   .then((data) => setData(data));

  // console.log('rendered');
  //----------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------
  //The same would happen if we used this useEffect without a dependency array
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // });
  // console.log('rendered');
  //-----------------------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------------------------
  //Specifying an empty dependency array ensures that the code inside the useEffect will only run once.
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);
  // console.log('rendered');
  //-------------------------------------------------------------------------------------------------------

  //Be careful with setting values in a dependency array. In this case we will again get into an infinite loop
  //Why?
  //Because we are setting state within our useEffect. We are also telling the useEffect to run
  //every time the state variable data changes.
  //As a state change causes a re-render.
  // useEffect(() => {
  //   setCount((previousCount) => previousCount + 1);
  // }, [count]);

  // console.log('rendered');

  return <div></div>;
};

export default InfiniteLoop;
