


export default function Landing(props) {

    return (
        <>
            {/* main content */}
            <main className="container flex flex-wrap items-center justify-center h-full mx-auto mt-32 lg:flex-nowrap md:nowrap lg:flex-row-reverse md:flex-row-reverse sm:flex-wrap lg:mt-64 md:mt-32 sm:mt-32">
                <div className="flex justify-center w-3/4">
                    <img src="src\images\undraw_drink_coffee_mgqk.svg" alt="portrait" className="w-64 h-64 rounded" />
                </div>
                <div className="flex flex-wrap w-3/4 lg:px-32 sm:mx-16">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-500">Hi,</h1>
                    <p className="text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-500">I'm <label className="text-3xl font-semibold tracking-wide bg-clip-text bg-gradient-to-br from-white to-sky-500">IAN ZETA</label> a Front-End Developer with expertise in HTML, CSS, and JavaScript.</p>
                    <div className="container flex justify-end h-full mt-5">
                        <button type="button" className="w-32 h-12 px-3 py-3 font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400">Contact</button>
                    </div>
                </div>
            </main>
        </>
    )
}