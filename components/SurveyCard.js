export default function SurveyCard() {
    return (
        <div className="p-8 bg-gradient-to-r from-[#6b7ed6] to-blue-400 mt-6 rounded-lg shadow-sm ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-72">
                <div className="lg:w-1/2 flex flex-col text-white items-start gap-4">
                    <p className="text-3xl font-medium tracking-wide">Tell us about your work experience</p>
                    <p>We will ask you about your past projects, product involvement and experience working with other engineers. This will help us find the right jobs for you.</p>

                </div>
                <div className="bg-white px-4 py-2 lg:w-40 rounded-lg shadow-md flex flex-col gap-4">
                    <div>
                        <p className="text-gray-500 text-xl font-medium">Work Experience Survey</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Est. time</p>
                        <p className="text-gray-500 text-xl font-medium">30 min</p>
                    </div>
                </div>
            </div>
            <button className="px-4 py-1.5 shadow-md bg-[#586db6] rounded font-medium mt-8 lg:mt-4 text-white">Start now</button>
        </div>
    )
}
