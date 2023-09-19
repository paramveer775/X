import React, { useEffect, useState } from 'react';

// import link from 'next/link';
function SomePage() {

  
  const [data, setData] = useState([
    {
      
      MESSAGES : '',
      image : '',
     
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/tweets');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();

        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);
//    console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>

      <ul>
        {data.map((tweet) => (
          <li key={tweet.ID}>
            TWEETS: {tweet.text_message}<br />
            image : {tweet.text_message}
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SomePage;


