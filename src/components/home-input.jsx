'use client'
import { useNewsApi } from "@/context/api-context";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { CiSearch } from "react-icons/ci";

const InputText = () => {
    const { input, setInput} = useNewsApi()
    const [ focused, setFocused] = useState(false)
    const {push} = useRouter()

    const handleInput=(e)=>{
        setInput(e.target.value)
        e.target.value=''
    }

    const handleFocus =()=>{
            setFocused(true)
    }

    const handleBlur =()=>{
            setFocused(false)
    }

    const handleSubmit =(e)=>{
      if(e.key === 'Enter'){
        push(`/search/${input}`)
        setInput('')
      }
    }

  return (
    <div className="relative w-full">
        <input onKeyDown={handleSubmit} type="text" value={input} onFocus={handleFocus} onBlur={handleBlur} onChange={handleInput} placeholder={'Search'} className="outline-none bg-transparent border-b border-b-choice1 placeholder:pl-3 pl-3 placeholder:text-choice3 cursor-pointer z-30" />
        {!focused && <CiSearch className="absolute w-full top-1 left-4 text-choice3 z-20 pointer-events-none"/>}
    </div>
  )
}

export default InputText