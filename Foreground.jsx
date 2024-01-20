import React from 'react'
import Card from './Card'


function Foreground() {
    const data = [
        {
            desc: "This is the First card design of Doc Inteface made using React & Tailwind CSS.",
            filesize: ".9mb",
            close: false,
            tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "This is the Second card design of Doc Inteface made using React & Tailwind CSS.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "This is the Third card design of Doc Inteface made using React & Tailwind CSS.",
            filesize: ".9mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },
    ];
  return (
    <>
     <div className="fixed z[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
       {data.map((item, index)=>(
        <Card data={item} />
       ))}
     </div>
    </>
  )
}

export default Foreground