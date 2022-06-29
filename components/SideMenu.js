import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight, faBriefcase, faCheckCircle, faDollar, faDotCircle, faHouse, faUser } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import Image from "next/image";
import Turing from "../assets/img/Turing.png";
import Work from "../assets/img/Work.svg";
import { useRouter } from 'next/router';
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

export default function SideMenu({ active }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hoverHome, setHoverHome] = useState(false);
    const [hoverProfile, setHoverProfile] = useState(false);
    const [hoverTuringTest, setHoverTuringTest] = useState(false);
    const [hoverDollar, setHoverDollar] = useState(false);
    const [hoverJobs, setHoverJobs] = useState(false);
    const [hoverSetting, setHoverSetting] = useState(false);
    const [hoverLogout, setHoverLogout] = useState(false);

    const router = useRouter();
    return (
        <div>
            <div className="flex flex-col justify-between h-screen">
                <div className="flex flex-col justify-between divide-y-1 h-full overflow-y-scroll border-r-1 border-gray-200 pl-2">
                    <div className={`flex flex-col ${isOpen ? 'items-start' : 'items-center'} justify-between gap-20 py-4 h-screen`}>
                        <div className={`flex flex-col ${isOpen ? 'items-start' : 'items-center'} gap-1 py-4`}>
                            <div className="py-2 transition-all">
                                {isOpen ? <p className="text-xl font-bold pl-6">Turing</p> : <Image src={Turing} width={36} height={36} />}
                            </div>
                            <div className={`${isOpen ? 'px-6 mr-20 py-2' : 'p-2'} rounded-full bg-gray-200 flex gap-2 items-center`}>
                                <Image src={Work} width={24} height={24} className="cursor-pointer" />
                                {isOpen ? <p className="font-medium text-gray-700">Available for Jobs</p> : null}
                            </div>
                        </div>
                        <div className={`${isOpen ? 'pl-6' : ''} py-2 flex gap-2 items-center px-6 w-full hover:bg-gray-200 cursor-pointer`} onMouseEnter={() => isOpen ? '' : setHoverHome(true)} onMouseLeave={() => isOpen ? '' : setHoverHome(false)}>
                            <FontAwesomeIcon icon={faHouse} className="text-gray-700 text-lg" />
                            {isOpen ? <p className="text-gray-400">Home</p> : null}
                            {hoverHome ? <div className="absolute bg-gray-700 px-4 py-1 rounded ml-12">
                                <p className="text-gray-300">Home</p>
                            </div> : null}
                        </div>
                    </div>
                    <div className={`flex flex-col ${isOpen ? 'items-start' : 'items-center'} gap-1 py-4 h-screen`}>
                        <div className={`${isOpen ? 'pl-6' : ''} py-2 flex items-center gap-2 px-6 w-full cursor-pointer ${active === "Profile" ? 'bg-gray-200' : 'hover:bg-gray-200'}`} onMouseEnter={() => isOpen ? '' : setHoverProfile(true)} onMouseLeave={() => isOpen ? '' : setHoverProfile(false)} onClick={() => router.push('/profile')}>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg py-2" />
                            {isOpen ? <p className="text-gray-400">Profile</p> : null}
                            {hoverProfile ? <div className="absolute bg-gray-700 px-4 py-1 rounded ml-12">
                                <p className="text-gray-300">Profile</p>
                            </div> : null}
                        </div>
                        <div className={`${active === 'Turing Test' ? 'bg-gray-200' : 'hover:bg-gray-200'} px-6 py-2 flex cursor-pointer items-center gap-2 w-full`} onMouseEnter={() => isOpen ? '' : setHoverTuringTest(true)} onMouseLeave={() => isOpen ? '' : setHoverTuringTest(false)} onClick={() => router.push('/')}>
                            <FontAwesomeIcon icon={faDotCircle} className="text-lg text-green-500" />
                            {isOpen ? <p className="text-gray-700">Turing Test</p> : null}
                            {hoverTuringTest ? <div className="absolute bg-gray-700 px-4 py-1 rounded ml-12">
                                <p className="text-gray-300">Turing Test</p>
                            </div> : null}
                        </div>
                        <div className="py-2 pl-12">
                            {isOpen ? <p className="text-gray-300">Coding Challenge</p> : null}
                        </div>
                        <div className="py-2 pl-12">
                            {isOpen ? <p className="text-gray-300">Get Matched</p> : null}
                        </div>
                    </div>
                    <div className={`flex flex-col justify-between ${isOpen ? 'items-start' : 'items-center'} gap-20 py-4`}>
                        <div className={`flex flex-col ${isOpen ? 'pl-6' : ''} gap-1`}>
                            <div className={`py-2 flex items-center gap-2 px-6 w-full hover:bg-gray-200 cursor-pointer`} onMouseEnter={() => isOpen ? '' : setHoverDollar(true)} onMouseLeave={() => isOpen ? '' : setHoverDollar(false)}>
                                <FontAwesomeIcon icon={faDollar} className="text-green-500 text-lg" />
                                {isOpen ? <p className="text-green-500">Refer & Earn $500</p> : null}
                                {hoverDollar ? <div className="absolute bg-gray-700 px-4 py-1 rounded ml-12">
                                    <p className="text-gray-300">Refer & Earn $500</p>
                                </div> : null}
                            </div>
                            <div className="py-2 flex items-center gap-2 px-6 w-full hover:bg-gray-200 cursor-pointer" onMouseEnter={() => isOpen ? '' : setHoverJobs(true)} onMouseLeave={() => isOpen ? '' : setHoverJobs(false)}>
                                <FontAwesomeIcon icon={faBriefcase} className="text-gray-700 text-lg" />
                                {isOpen ? <p className="text-gray-400">Jobs</p> : null}
                                {hoverJobs ? <div className="absolute bg-gray-700 px-4 py-1 rounded ml-12">
                                    <p className="text-gray-300">Jobs</p>
                                </div> : null}
                            </div>
                            <div className="py-2 flex items-center gap-2 px-6 w-full hover:bg-gray-200 cursor-pointer" onMouseEnter={() => isOpen ? '' : setHoverSetting(true)} onMouseLeave={() => isOpen ? '' : setHoverSetting(false)}>
                                <FontAwesomeIcon icon={faUser} className="text-gray-700 text-lg" />
                                {isOpen ? <p className="text-gray-400">Settings</p> : null}
                                {hoverSetting ? <div className="absolute bg-gray-700 px-4 py-1 rounded ml-12">
                                    <p className="text-gray-300">Settings</p>
                                </div> : null}
                            </div>
                        </div>
                        <div className={`${isOpen ? 'pl-6' : ''} py-2 flex items-center gap-2 px-6 w-full hover:bg-gray-200 cursor-pointer`} onMouseEnter={() => isOpen ? '' : setHoverLogout(true)} onMouseLeave={() => isOpen ? '' : setHoverLogout(false)}>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="text-gray-700 text-lg" />
                            {isOpen ? <p className="text-gray-400">Log Out</p> : null}
                            {hoverLogout ? <div className="absolute bg-gray-700 px-4 py-1 rounded ml-12">
                                <p className="text-gray-300">Log Out</p>
                            </div> : null}
                        </div>
                    </div>
                </div>
                <div className={`py-6 flex ${isOpen ? 'justify-end pr-8' : 'justify-center'} bg-primary-100 hover:cursor-pointer border-gray-200 border-t-1`} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FontAwesomeIcon icon={faAngleLeft} className="text-gray-500 text-sm" /> : <FontAwesomeIcon icon={faAngleRight} className="text-gray-500 text-sm" />}
                </div>
            </div>
        </div>

    )
}
