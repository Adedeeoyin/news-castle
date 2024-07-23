
const Loading = () => {
  return (
    <div className="flex flex-col w-full h-[60vh] items-center justify-center">
      <div className="w-20 h-20 rounded-full border-y-4 border-t-choice1 dark:border-t-choice4 dark:border-b-choice4 border-b-choice2 animate-spin duration-300"></div>
      <div className="text-choice1 dark:text-choice4">loading...</div>
    </div>
  )
}

export default Loading