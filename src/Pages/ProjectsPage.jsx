


export default function Projects(props) {


    return (

        <>
            <section className="flex h-screen text-gray-400 body-font">
                <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
                    <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
                        <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">Audit App
                        </h1>
                        <p className="mb-8 leading-relaxed">"This application is designed to calculate the prices of items listed in a table, specifically tailored for use within an ice cream company's business operations.".</p>
                        <div className="flex justify-center">
                            <a target="_blank" href="https://sett99.github.io/tpicecream/">
                                <button className="inline-flex px-6 py-2 text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">Visit</button>
                            </a>
                        </div>
                    </div>
                    <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
                        <img className="object-cover object-center rounded" alt="hero" src="src\images\web.PNG" />
                    </div>
                </div>
            </section >
        </>
    )
}