
import InputText from "@/components/home-input"
import LanguageRender from "@/components/language-filterRender"
import Select from "@/components/language-select"
import { key, url } from "@/context/_API"

export default async function Home(){
  const response =  await fetch(`${url}${key}`)
  const resJson = await response?.json()
  const {results: data} = resJson
  console.log(data)
  
    return (
      <div className="w-full h-screen px-24 mt-48 mb-0 py-10">
        <div className="flex items-center justify-between">
          <div>
            Language:
            <Select data={data}/>
          </div>
          <div>
              <InputText/>
          </div>
        </div>
          <LanguageRender data={data}/>
      </div>
    )
}
