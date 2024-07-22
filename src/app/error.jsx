'use client'
const Error = ({error}) => {
  return (
    <div className="text-red-500 w-full h-[75vh] flex items-center justify-center">Error: {error.message} </div>
  )
}

export default Error