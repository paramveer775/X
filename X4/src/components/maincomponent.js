import { useEffect, useState } from "react";
import axios from 'axios';

const MainComponent = () => {
  const [tweetData, setTweetData] = useState({
    text_message: '',
    image: '',
  });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [tweetss, setTweetss] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTweetData({ ...tweetData, [name]: value });

    

  };



  
  // const handleInputChange2 = (e) => {
  //   const { name2, value2 } = e.target;
  //   setTweetData({ ...tweetData.image, [name2]: value2 });
  // };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/tweets');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();

        setTweetss(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost:3001/tweets', tweetData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        setSuccess('Tweet added successfully');
        setTweetss([...tweetss, tweetData]); // Add the new tweet to the list
        setTweetData({
          text_message: '',
          image: '',
        });
      } else {
        throw new Error('Tweet could not be added');
      }
    } catch (err) {
      setError('Error adding tweet');
    }
  };

  return (
    <main className="ml-[275px] p-6 m-2 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      {/* ... (rest of your code remains the same) */}
      <div className="text-xl pl-2 pb-2">HOME</div>
      <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-2 border-gray-600 h-32 relative">
        <div className="w-full h-10 bg-black-400">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <input
                type="text"
                name="text_message"
                className="w-full h-full text-sm placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-2 outline-none border-none"
                placeholder="Compose tweet text"
                value={tweetData.text_message}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="image"
                className="w-full h-full text-sm placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-2 outline-none border-none"
                placeholder="Compose tweet image URL"
                value={tweetData.image}
                onChange={handleInputChange}
              />
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button
                    type="submit"
                    className="rounded-full bg-blue-500 px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold flex justify-center items-center"
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      

      {/* ... (rest of your code remains the same) */}




      {/* ... (rest of your code remains the same) */}
  

      <div className="flex flex-col ">
        {tweetss.map((tweet, i) => (
          <div key={i} className=" px-4 border-b-[0.5px] p-2 flex border-gray-600 space-x-4">
            <div>
              <div className='w-10 h-10 bg-slate-200 rounded-full'/>
            </div>

            <div className='flex flex-col space-y-1'>
              <div className='flex items-center space-x-1'>
                <div className='font-bold text-lg pr-2'>Thanos</div>
                <div className='pr-2'>@thor</div>
                <div>Hour</div>
              </div>

              <div className='pt-4 pb-3'>
                {tweet.text_message}
              </div>

         
                 <div className='bg-slate-400 aspect-square  h-96 rounded-xl w-96'>
                       <img src={tweet.image} alt="Tweet Image" className="w-full h-full object-cover rounded-xl object-contain" />
                 </div>

              <div className='flex items-center sapce-x-2 w-full '>
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
                <div>E</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

module.exports = MainComponent;

