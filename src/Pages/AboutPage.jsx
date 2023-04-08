

export default function About(props) {


    return (

        <>
            <section className="flex h-screen text-gray-400 body-font">
                <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
                    <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
                        <img className="object-cover object-center rounded-lg" alt="hero" src="src\images\portrait.jpg" />
                    </div>
                    <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
                        <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">About me,
                            <br className="hidden lg:inline-block" /> I'm Ian Zeta
                        </h1>
                        <p className="mb-8 leading-relaxed">Passionate about creating stunning web experiences, I am a new front end developer based in the Philippines. Eager to learn and improve my skills, I am constantly seeking out new challenges and opportunities to hone my craft. With a hunger for knowledge and a drive for excellence, I am dedicated to creating beautiful, functional websites that delight users and solve real-world problems.</p>
                    </div>
                </div>
            </section>
        </>
    )
}