import SomePage from '@/components/alltweets';
import RightSection from '@/components/rightside';

const Leftsidebar = require('@/components/leftsidebar');
const MainComponent = require('@/components/maincomponent');

const Home = () => {
  return (
    <div>
      <div className="w-full h-full flex justify-center items-center relative bg-black">
        <div className="max-w-screen-lg w-full h-full flex relative">
          <Leftsidebar /> {/* Use the correct casing here */}
          <MainComponent />
          <RightSection />
          {/* <SomePage /> */}

          {/* <section className='w-full top-2 mt-2 flex flex-col sticky items-stretch '>

            <div>
               <div className='relative w-full h-full group'>
                  
                    <input id="searcBox" type="text" placeholder='search here' className=' relative outline-none bg-neutral-900/90 border-none w-full h-full rounded-xl py-4 pl-14 pr-4  m-4' />
                        <p className='peer-focus:visible invisible'> hello world </p>
              
                        <label htmlFor='searchBox' className='absolute top-0 left-0 h-full flex item-center justify-center p-4 peer-focus:text-primary'>
                        </label>
               
               </div>

            </div>
           





          </section> */}



{/* <section className="w-full sticky hidden top-2 overflow-y-auto mt-2 xl:flex flex-col items-stretch h-[90vh] overflow-x-hidden px-6">
      <div>
        <div className="relative w-full h-full group">
          <input
            id="searchBox"
            type="text"
            placeholder="Search Twitter"
            className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-14 pr-4"
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-primary"
          >
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900  my-4">
        <h3 className="font-bold text-xl my-4 px-4">What’s happening</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200"
            >
              <div className="font-bold text-lg ">#trending{i + 1}</div>
              <div className="text-xs text-neutral-400">35.4k</div>
            </div>
          ))}
        </div>
        <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
        <h3 className="font-bold text-xl my-4 px-4">Who to follow</h3>
        <div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-white/10 p-4 flex justify-between items-center last:rounded-b-xl transition duration-200"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
                <div className="flex flex-col">
                  <div className="font-bold text-white">Other User</div>
                  <div className="text-gray-500 text-xs">@otheruser1232</div>
                </div>
              </div>

              <button className="rounded-full px-6 py-2 bg-white text-neutral-950">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </section> */}
        </div>
      </div>
    </div>
  );
};

export default Home
