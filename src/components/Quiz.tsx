import Counter from "./Counter"

const Quiz = () => {
    return (
        <div className='bg-gray-400 w-full h-screen flex justify-center items-center flex-col relative'>
            <Counter />
            <div className='min-w-[400px] mt-10'>
                <p className='text-gray-900 text-center text-3xl'>
                    Who lives on moon ?
                </p>
                <ul className="mt-20">
                    <li className="w-full bg-black text-gray-300 mt-6 flex items-center justify-center h-12 capitalize rounded-md border-2 border-black hover:bg-gray-400 hover:text-black transition duration-300 cursor-pointer">Robert Downey Jr.</li>
                    <li className="w-full bg-black text-gray-300 mt-6 flex items-center justify-center h-12 capitalize rounded-md border-2 border-black hover:bg-gray-400 hover:text-black transition duration-300 cursor-pointer">Captain america</li>
                    <li className="w-full bg-black text-gray-300 mt-6 flex items-center justify-center h-12 capitalize rounded-md border-2 border-black hover:bg-gray-400 hover:text-black transition duration-300 cursor-pointer">Natasha Romanoff</li>
                    <li className="w-full bg-black text-gray-300 mt-6 flex items-center justify-center h-12 capitalize rounded-md border-2 border-black hover:bg-gray-400 hover:text-black transition duration-300 cursor-pointer">Hulk</li>
                </ul>
            </div>
        </div>
    )
}

export default Quiz