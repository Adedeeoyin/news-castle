import { fake, key, url } from "@/context/_API"

export default async function Explore(){
  const response =  await fetch(`${fake}`)
  const data = await response?.json()
  
    return (
      <div className="w-full h-[75vh] mb-24 p-16 flex gap-2 flex-wrap overflow-scroll mt-40">
        {data.map((user,i)=>{
          return(
            <div key={user.id} className="border border-choice1 p-2">
              {user.title}
            </div>
          )
        })}
      </div>
    )
}