'use client'
import { useNewsApi } from "@/context/api-context"
import Image from "next/image"
import { useState } from "react"


const LanguageRender =({data})=>{
const { selected} = useNewsApi()

return (
   <div className="p-4 h-full mt-4 flex flex-wrap gap-4 w-full overflow-scroll">
     {data.filter((article,i)=>{
        return(
            article.language?.includes(selected)
        )
     }).map((sel, i)=>{
        return(
            <div
             key={sel.article_id}
              className="w-[40vw] max-sm:w-full max-sm:p-4 mx-auto h-48 border-t border-t-gray-50 relative p-1 cursor-pointer shadow-xl hover:bg-choice1 rounded-lg hover:text-choice4">
                <a href={sel.link} className="w-full h-full ">
                     <Image src={sel.image_url?sel.image_url:sel.image_url== (null || undefined)?'/grayscaleNews.jpg':null} alt={sel.title} className="w-full h-full object-cover absolute top-0 left-0 z-10 " width={400} height={800} quality={100} />
                  
                <Image src={sel.source_icon?sel.source_icon:sel.source_icon== (null || undefined)?'/grayscaleNews.jpg':null} alt={sel.title} className='w-10 h-10 object-cover object-center rounded-full z-40 absolute top-2 left-2' width={100} height={100} quality={100}/>
                <div className="z-40 absolute top-16 left-4 text-choice4 backdrop-blur-sm font-semibold">{sel.title}</div>
                </a>
             <div className="z-40 absolute bottom-0 text-choice4 backdrop-blur-sm font-semibold left-4">{sel.pubDate}</div>
             <div className="z-40 absolute top-2 text-choice4 backdrop-blur-3xl font-semibold right-4 border-2 border-choice4 p-2 rounded-lg">{sel.category.map((cat,i)=><div key={i}>{cat}</div>)}</div>
            </div>
        )
     })}
   </div>
)
}

export default LanguageRender