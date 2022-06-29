import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight, faBriefcase, faCheckCircle, faDollar, faDotCircle, faHouse, faUser } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import Image from "next/image";
import Turing from "../assets/img/Turing.png";
import Work from "../assets/img/Work.svg";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

export default function sidebar() {
    const [isOpen, setIsOpen] = useState(false);
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
                                <Image src={Work} width={24} height={24} className />
                                {isOpen ? <p className="font-medium text-gray-700">Available for Jobs</p> : null}
                            </div>
                        </div>
                        <div className={`${isOpen ? 'pl-6' : ''} py-2 flex gap-2 items-center`}>
                            <FontAwesomeIcon icon={faHouse} className="text-gray-700 text-lg" />
                            {isOpen ? <p className="text-gray-400">Home</p> : null}
                        </div>
                    </div>
                    <div className={`flex flex-col ${isOpen ? 'items-start' : 'items-center'} gap-1 py-4 h-screen`}>
                        <div className={`${isOpen ? 'pl-6' : ''} py-2 flex items-center gap-2`}>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg py-2" />
                            {isOpen ? <p className="text-gray-400">Profile</p> : null}
                        </div>
                        <div className="bg-gray-200 px-6 py-2 flex items-center gap-2 w-full">
                            <FontAwesomeIcon icon={faDotCircle} className="text-lg text-green-500" />
                            {isOpen ? <p className="text-gray-700">Turing Test</p> : null}
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
                            <div className={`py-2 flex items-center gap-2`}>
                                <FontAwesomeIcon icon={faDollar} className="text-green-500 text-lg" />
                                {isOpen ? <p className="text-green-500">Refer & Earn $500</p> : null}
                            </div>
                            <div className="py-2 flex items-center gap-2">
                                <FontAwesomeIcon icon={faBriefcase} className="text-gray-700 text-lg" />
                                {isOpen ? <p className="text-gray-400">Jobs</p> : null}
                            </div>
                            <div className="py-2 flex items-center gap-2">
                                <FontAwesomeIcon icon={faUser} className="text-gray-700 text-lg" />
                                {isOpen ? <p className="text-gray-400">Settings</p> : null}
                            </div>
                        </div>
                        <div className={`${isOpen ? 'pl-6' : ''} py-2 flex items-center gap-2`}>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="text-gray-700 text-lg" />
                            {isOpen ? <p className="text-gray-400">Log Out</p> : null}
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
