'use client'
import { key, url } from "@/context/_API"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

const QueryPage = () => {
    const params = useParams()
    const { ...queryId} = params
    const [ searchData, setSearchData ] = useState()
    const [ error, setError ] = useState(false)
    // const [ loading, setLoading ] = useState(false)

    const query = useMemo(()=>
      queryId[1],[queryId])

    useEffect(()=>{
      
        const timer = setTimeout(async ()=>{
            const res = await fetch(`${url}${key}&q=${queryId[1]}`)
            const data = await res.json()
            if(data.status === 'error')setError(true)
            if(data.status === 'success') setSearchData(data)
          }
      ,[200]);
      return ()=>{
        clearTimeout(timer)
      }
    },[query])
    
  return (
    <div className="flex min-h-screen flex-wrap gap-6 items-center p-24 max-sm:p-8 mt-40">
        {error && <div className="text-red-500 mt-48 w-full h-full flex items-center justify-center font-semibold text-2xl">Error Fetching data!</div>}
          {searchData?.results?.map((res,i)=>{
            return(
                <div
             key={res.article_id}
              className="w-[40vw] max-sm:w-full h-48 border-t border-t-gray-50 relative p-1 cursor-pointer shadow-xl hover:bg-choice1 rounded-lg hover:text-choice4">
                <a href={res.link} className="w-full h-full ">
                     <Image src={res.image_url?res.image_url:res.image_url== (null || undefined)?'/grayscaleNews.jpg':null} alt={res.title} className="w-full h-full object-cover absolute top-0 left-0 z-10 " width={400} height={800} quality={100} />
                  
                <Image src={res.image_url?res.image_url:res.image_url== (null || undefined)?'/grayscaleNews.jpg':null} alt={res.title} className='w-10 h-10 object-cover object-center rounded-full z-40 absolute top-2 left-2' width={100} height={100} quality={100}/>
                <div className="z-40 absolute top-16 left-4 text-choice4 backdrop-blur-sm font-semibold">{res.title}</div>
                </a>
             <div className="z-40 absolute bottom-0 text-choice4 backdrop-blur-sm font-semibold left-4">{res.pubDate}</div>
             <div className="z-40 absolute top-2 text-choice4 backdrop-blur-3xl font-semibold right-4 border-2 border-choice4 p-2 rounded-lg">{res.category.map((cat,i)=><div key={i}>{cat}</div>)}</div>
            </div>
            )
          })
        }
        </div>
  )
}

export default QueryPage