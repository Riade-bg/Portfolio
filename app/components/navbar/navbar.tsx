// "use client";

// import React from "react"
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { AiOutlineClose } from "react-icons/ai";
// import { BsSun } from "react-icons/bs";
// import { MdOutlineDarkMode } from "react-icons/md";
// import { HiDownload, HiMenu } from "react-icons/hi";

// import { useRouter } from "next/navigation";
// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-scroll/modules";
// import Headroom from "react-headroom";

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const [darkMode, setDarkMode] = useState(true);
//   const router = useRouter();
//   const { setTheme } = useTheme();
//   return (
//     <>
//       <Headroom>
//         <nav className="z-10 w-full top-0 flex flex-1 justify-between items-center px-10 md:px-24 py-5 backdrop-blur">
//           <div className="border-blue-500 transition-ll border-2">
//             <h1
//               onClick={() => router.push("/")}
//               className="px-3 py-1 transition hover:text-blue-500 
//                     text-lg font-bold cursor-pointer"
//             >
//               R
//             </h1>
//           </div>
//           <ul className="flex dark:text-gray-300 text-sm font-mono items-center">
//             {[
//               {
//                 index: "01.",
//                 link: "About",
//                 id: "about"
//               },
//               {
//                 index: "02.",
//                 link: "Work",
//                 id: "work"
//               },
//               {
//                 index: "03.",
//                 link: "Contact",
//                 id: "contact"
//               }
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="cursor-pointer hover:text-blue-500 mr-10 capitalize hidden md:flex items-center transition-all"
//               >
//                 <Link
//                   activeClass={"text-blue-500"}
//                   to={item.id}
//                   spy={true}
//                   offset={50}
//                   smooth={true}
//                   duration={500}
//                   className="flex"
//                 >
//                   <span className="text-blue-500 mr-1">{item.index}</span>
//                   <p>{item.link}</p>
//                 </Link>
//               </li>
//             ))}
//             <li>
//               <a href="/Lebenslauf..pdf" target="_blank" rel="noreferrer">
//                 <Button
//                   variant={"outline"}
//                   className="hidden md:flex px-5 py-2 text-sm text-blue-500 rounded-none border border-blue-500 
//                             font-work hover:bg-blue-500/20 transition-all items-center"
//                 >
//                   Resume
//                   <span className="ml-2">
//                     <HiDownload />
//                   </span>
//                 </Button>
//               </a>
//             </li>
//             {/* <li>
//               <div className="bg-red-100 flex items-center ml-3">
//                 {darkMode && (
//                   <Button
//                     variant="secondary"
//                     className="text-black border rounded-none"
//                     size="icon"
//                     onClick={() => {
//                       setTheme("light"), setDarkMode(false);
//                     }}
//                   >
//                     <BsSun className="text-white h-[1.2rem] w-[1.2rem] transition-all" />
//                   </Button>
//                 )}
//                 {!darkMode && (
//                   <Button
//                     variant="secondary"
//                     className="rounded-none"
//                     size="icon"
//                     onClick={() => {
//                       setTheme("dark");
//                       setDarkMode(true);
//                     }}
//                   >
//                     <MdOutlineDarkMode className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
//                   </Button>
//                 )}
//               </div>
//             </li> */}
//             <li
//               className="md:hidden p-2 cursor-pointer ml-2"
//               onClick={() => setMenu(true)}
//             >
//               <HiMenu className="light:text-black" size={30} />
//             </li>
//           </ul>
//         </nav>
//       </Headroom>
//       {/* <AnimatePresence> */}
//         {menu && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed md:hidden right-0 top-0 dark:bg-[#09192e] backdrop-blur w-screen h-screen z-50 flex justify-end"
//           >
//             <ul className="px-5 right-0 text-gray-300 text-2xl relative h-full w-full bg-[#09192e] flex flex-col items-center justify-center font-work">
//               <li
//                 className="text-2xl absolute right-7 cursor-pointer top-0 p-1 m-4 bg-[#0a192f] flex justify-end text-white"
//                 onClick={() => setMenu(false)}
//               >
//                 <AiOutlineClose />
//               </li>
//               {[
//                 {
//                   index: "01.",
//                   link: "About",
//                   id: "about"
//                 },
//                 {
//                   index: "02.",
//                   link: "Work",
//                   id: "work"
//                 },
//                 {
//                   index: "03.",
//                   link: "Contact",
//                   id: "contact"
//                 }
//               ].map((item, index) => (
//                 <Link
//                   key={item.id}
//                   activeClass={"text-blue-500"}
//                   to={item.id}
//                   spy={true}
//                   offset={50}
//                   smooth={true}
//                   duration={500}
//                   className="flex"
//                 >
//                   <li
//                     key={index}
//                     className="mb-5 hover:text-blue-500 text-mono capitalize flex flex-col items-center transition-all"
//                     onClick={() => setMenu(false)}
//                   >
//                     <span className="text-blue-500 text-base">
//                       {item.index}
//                     </span>
//                     <a href={`#${item.link}`}>{item.link}</a>
//                   </li>
//                 </Link>
//               ))}
//               <li className="w-full">
//                 <a href="/Lebenslauf..pdf" target="_blank" rel="noreferrer">
//                   <Button
//                     className="mx-auto flex px-5 py-2 text-sm text-white rounded-none border border-blue-500 
//                                   font-work bg-blue-500 transition-all items-center w-1/2"
//                   >
//                     {" "}
//                     Resume
//                     <span className="ml-2">
//                       <HiDownload />
//                     </span>
//                   </Button>
//                 </a>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;

import React from "react"
import Headroom from "react-headroom";

import { Fragment, useState } from 'react'
import { useRouter } from "next/navigation";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: '01.About', href: '#about', current: true },
  { name: '02.Work', href: '#work', current: false },
  { name: '03.Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  // const { setTheme } = useTheme();
  const router = useRouter()
  return (
    <Disclosure as="nav" className="bg-gray-800 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-mono">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <h1
                    onClick={() => router.push("/")}
                    className="px-3 py-1 transition hover:text-blue-500 
                          text-lg font-bold cursor-pointer"
                  >
                    R
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block w-full">
                  <div className="flex justify-end space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={"text-white hover:text-blue-600 px-5 transition-all py-2 text-sm font-medium"}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 font-mono">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
