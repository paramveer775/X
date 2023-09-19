const Link = require('next/link');


const RightSection = () => {
    return (

   

   //   <section className="w-150 sticky  top-2 overflow-y-auto mt-2 xl:flex flex-col items-stretch h-[90vh]  px-6">
           <section className="w-150 sticky  top-2  mt-2 xl:flex flex-col items-stretch h-[90vh]  px-6">
        <div>
          <div className="relative w-full h-full group">
            <input
              id="searchBox"
              type="text"
              placeholder="Search Friend"
              className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-80 h-full rounded-xl py-4 pl-14 pr-4"
            />
            <label
              htmlFor="searchBox"
              className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-primary"
            >
          
            </label>
          </div>
        </div>
      
        <div className="flex flex-col rounded-xl w-full bg-neutral-900 my-4">
          <h3 className="font-bold text-xl my-4 px-4 text-center">FRIENDS</h3>
          <div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="hover:bg-white/10 p-4 flex justify-between items-center last:rounded-b-xl transition duration-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
                  <div className="flex flex-col">
                    <div className="font-bold text-white">DRAX</div>
                    <div className="text-gray-500 text-xs">@drax</div>
                  </div>
                </div>
  
                <button className="rounded-full px-6 py-2 bg-white text-neutral-950">
                  VIEW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default RightSection;