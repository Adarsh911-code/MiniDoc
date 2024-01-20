import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoIosClose } from "react-icons/io";


function Card({data}) {
  return (
    <div className=" flex-shrink-0 relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaFileInvoice />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between  py-3 px-8 mb-3">
            <h5>{data.filesize}</h5>
            <span className="bg-zinc-600 w-7 h-7 flex items-center justify-center rounded-full">
                {data.close ? <IoIosClose/> : <IoMdDownload size=".8em" color="#fff" /> }
            </span>
        </div>
        {data.tag.isOpen ? (
                <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
                <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
        ) : null}
       
      </div>
    </div>
  );
}

export default Card;
