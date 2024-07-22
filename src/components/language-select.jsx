'use client'
import { useNewsApi } from '@/context/api-context'

const Select = ({data}) => {
    const { setSelected, selected,} = useNewsApi()

    // setNewsApi(data)

    const handleSelect =(e)=>{
        setSelected(e.target.value)
    }

  return (
    <select name="language" value={selected} className="outline-none bg-transparent ml-2 cursor-pointer" onChange={handleSelect}>
          {data.filter((item,i,self)=>self.findIndex(t=>t.language === item.language) === i).map((article, i)=>{
            return(
              <option key={article.article_id} value={article.language}>{article.language}</option>
            )
          })}
        </select>
  )
}

export default Select