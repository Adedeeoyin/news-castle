import { FaGithub } from "react-icons/fa6";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 max-sm:p-8 mt-40">
      <div className="font-semibold text-lg mb-2">Introduction:</div>
        <div className="text-sm mb-8">Are you seeking a talented frontend developer to bring your digital projects to life? Look no further! I have recently created a news website to demonstrate my skills and passion for frontend development. This project highlights my ability to design, develop, and maintain high-quality, user-friendly websites that not only look great but also perform seamlessly.</div>

        <div className="font-semibold text-lg mb-2">Key Features:</div>
        <div className="text-sm mb-8">Responsive Design: The website is optimized for desktop, tablet, and mobile devices, providing a consistent and engaging user experience no matter how it’s accessed.</div>
        <div className="font-semibold text-lg mb-2">Dynamic Content:</div><div className="text-sm mb-8"> Utilizing APIs to fetch and display the latest news articles in real-time, ensuring users always have access to the most current information.</div>

        <div className="font-semibold text-lg mb-2">Interactive Elements:</div><div className="text-sm mb-8"> Engaging UI components such as sliders, carousels, and modal windows to enhance user interaction.
        SEO-Friendly: Implemented best practices in SEO to ensure the website ranks well in search engine results, driving more traffic and visibility.
        Performance Optimization: Leveraged techniques such as lazy loading, code splitting, and caching to ensure fast load times and smooth performance.</div>
      <div className="font-semibold text-lg mb-2">About the News Website:</div>
      <div className="text-sm mb-8">My news website is a fully responsive platform built using the latest frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like Next.js. It features a clean, modern design with intuitive navigation, ensuring a great user experience across all devices.</div>

      <div className="font-semibold text-lg"><a href="https://github.com/Adedeeoyin/news-castle" className="flex items-center gap-2">link to the project<FaGithub/></a></div>
    </main>
  )
}

export default About