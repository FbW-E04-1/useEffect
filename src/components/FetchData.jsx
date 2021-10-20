import React, { useState, useEffect } from 'react';

//When we fetch data from an external source. E.G. an API it is good practice to not only store the data in state
//so it persists over renders but also to use a side effect to control the fetching.
//In the example below we can handle the fetch and subsequent promise handling with the '.then' syntax
//or with async await.

const FetchData = () => {
  const [data, setData] = useState([]);

  //Here we use the .then syntax to fetch the data.
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((data) => setData(data))

  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  //...........................................................................................................

  //Here we use the async await syntax to fetch the data.
  //As usual there are many ways to write code to achieve the same result.
  //Here we are calling an IIFE (Immediately invoked function expression)
  //that will run asynchronously.
  // useEffect(() => {
  //   (async function fetchData() {
  //     try {
  //       const response = await fetch(
  //         'https://jsonplaceholder.typicode.com/posts'
  //       );
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   })();
  // }, []);

  //...........................................................................................................

  //Lets try another way to fetch the data using async await syntax.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  //...........................................................................................................

  return <div></div>;
};

export default FetchData;
