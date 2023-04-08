import Landing from "./Pages/LandingPage";
import Projects from "./Pages/ProjectsPage";
import About from "./Pages/AboutPage";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import { useState } from "react";


export default function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  return (
    <>
      <Navbar handlePageChange={handlePageChange} />
      <section>
        {currentPage === 'home' ? (
          <>
            <Landing />
          </>
        ) : currentPage === 'projects' ? (
          <>
            <Projects />
          </>
        ) : currentPage === 'about' ? (
          <>
            <About />
          </>
        ) : (
          alert('meow')
        )}
      </section>
      <Footer />
    </>
  )
}