const { BiSolidHomeAlt2, BiHash } = require('react-icons/bi');
const Link = require('next/link');

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    icon: BiSolidHomeAlt2,
  },
  {
    title: 'Explore',
    icon: BiHash,
  },
  {
    title: 'Search',
    // icon: TfiSearch
  },
  {
    title: 'Message',
    // icon: AiOutlineMessage
  },
];

const Leftsidebar = () => {
  return (
    <section className="fixed w-40   flex flex-col h-screen pr-4">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <div key={item.title}>
            <Link
              href={`/${item.title.toLowerCase()}`}
              className="bg-black-50 flex items-center justify-left  text-lg space-x-2 font-bold rounded-3xl  p-4"
              key={item.title}
            >
              
              {item.title}
            </Link>
            
          </div>
          
        ))}
        <button className="bg-red-500 font-bold flex items-center justify-center space-x-2 rounded-3xl m-2 p-4">
          Click Me
        </button>
      </div>
    </section>
  );
};

module.exports = Leftsidebar;

















// import { BiSolidHomeAlt2, BiHash } from 'react-icons/bi';
// import Link from 'next/link';

// const NAVIGATION_ITEMS = [
//   {
//     title: 'Home',
//     icon: BiSolidHomeAlt2,
//   },
//   {
//     title: 'Explore',
//     icon: BiHash,
//   },
//   {
//     title: 'Search',
//     // You can add an icon here, e.g., icon: TfiSearch
//   },
//   {
//     title: 'Message',
//     // You can add an icon here, e.g., icon: AiOutlineMessage
//   },
// ];

// const Leftsidebar = () => {
//   return (
//     <section className="fixed w-72 flex flex-col h-screen pr-4">
//       <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
//         {NAVIGATION_ITEMS.map((item) => (
//           <div key={item.title}>
//             <Link href={`/${item.title.toLowerCase()}`}>
//               <a className="bg-black-50 flex items-center justify-left text-lg space-x-2 font-bold rounded-3xl p-4">
//                 <div>{item.icon && <item.icon />}</div>
//                 {item.title}
//               </a>
//             </Link>
//           </div>
//         ))}
//         <button className="bg-red-500 font-bold flex items-center justify-center space-x-2 rounded-3xl m-2 p-4">
//           Click Me
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Leftsidebar;
