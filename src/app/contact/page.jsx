import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 max-sm:p-8 mt-40">
      <div className="font-semibold text-lg mb-2">Contact Information:</div>
        <div className="font-semibold text-lg mb-2">Abdulazeez Asimi</div>
        <div className="font-semibold text-lg mb-2">asimiadedoyin@gmail.com</div>
        <div className="font-semibold text-lg mb-2"><a href="https://github.com/Iamdodo22" className="flex items-center gap-2 hover:underline">Git-hub <FaGithub/></a></div>
    </main>
  )
}

export default Contact