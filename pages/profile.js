import Sidebar from "../components/SideMenu"
import * as React from 'react';
import Image from "next/image";
import Man from "../assets/img/Man.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faDumpster, faEdit, faEnvelope, faFileLines, faGears, faIdBadge, faPen, faPhone, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Profile() {
    return (
        <div className="flex font-kumbh h-screen">
            <div className="hidden md:block">
                <Sidebar active="Profile" />
            </div>
            <div className="lg:w-3/4 bg-primary-100 px-4 lg:px-60 pt-16 pb-8 overflow-scroll">
                <div className="bg-white shadow-lg rounded-lg px-8 py-6">
                    <p className="font-semibold text-gray-900 text-lg">Turing</p>
                    <div className="flex flex-col divide-y-1">
                        <div className="flex flex-col lg:flex-row items-center justify-between mt-2 py-8">
                            <div className="flex gap-4 items-center">
                                <FontAwesomeIcon icon={faFileLines} className="text-gray-900 text-lg" />
                                <p className="font-semibold text-gray-900">Upload your resume</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <p className="text-gray-700 w-40 truncate lg:w-auto">1656332716328_2481483_2020kucp1023.pdf</p>
                                <FontAwesomeIcon icon={faPen} className="text-gray-300 text-lg hover:bg-gray-100 p-2 rounded-full" />
                            </div>
                        </div>
                        <div className="py-8">
                            <div className="flex flex-col lg:flex-row items-center justify-between">
                                <div className="flex gap-8 items-center">
                                    <Image src={Man} alt="profile" width={100} height={100} className="rounded-full overflow-hidden" />
                                    <div className="flex flex-col gap-4">
                                        <p className="font-semibold text-xl text-gray-900">Himanshu Chittora</p>
                                        <p className="text-xs text-gray-900">India</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <FontAwesomeIcon icon={faPen} className="text-gray-300 text-lg hover:bg-gray-100 p-2 rounded-full" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-700 text-xl" />
                                    <p className="text-gray-700 text-sm w-40 truncate">2020kucp1023@iiitkota.ac.in</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faPhone} className="text-gray-700 text-xl" />
                                    <p className="text-gray-700 text-sm w-40 truncate">+91 95493-05890</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-gray-700 text-xl" />
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faGithub} className="text-gray-700 text-xl" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-2 py-8">
                            <div className="flex gap-4 items-center">
                                <FontAwesomeIcon icon={faGears} className="text-gray-900 text-lg" />
                                <p className="font-semibold text-gray-900">Overall experience</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div>
                                    <p className="text-gray-900 font-medium">1 year/1 year remote</p>
                                    <p className="text-gray-700">Great English proficiency</p>
                                </div>
                                <FontAwesomeIcon icon={faPen} className="text-gray-300 text-lg hover:bg-gray-100 p-2 rounded-full" />
                            </div>

                        </div>
                        <div className="flex items-center justify-between mt-2 py-8">
                            <div className="flex gap-4 items-center">
                                <FontAwesomeIcon icon={faCalendarCheck} className="text-gray-900 text-lg" />
                                <p className="font-semibold text-gray-900">Availability</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div>
                                    <p className="text-gray-900 font-medium">Full Time</p>
                                    <p className="text-gray-700">Ready to start now</p>
                                </div>
                                <FontAwesomeIcon icon={faPen} className="text-gray-300 text-lg hover:bg-gray-100 p-2 rounded-full" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-2 py-8">
                            <div className="flex gap-4 items-center">
                                <FontAwesomeIcon icon={faIdBadge} className="text-gray-900 text-lg" />
                                <p className="font-semibold text-gray-900">Role and current salary</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="text-right">
                                    <p className="text-gray-900 font-medium">Web Frontend</p>
                                    <p className="text-gray-700 text-xs">Current salary: 1,20,000 INR / Year</p>
                                    <p className="text-gray-700 text-xs">Expected salary: 10,00,000 INR / Year</p>
                                </div>
                                <FontAwesomeIcon icon={faPen} className="text-gray-300 text-lg hover:bg-gray-100 p-2 rounded-full" />
                            </div>
                        </div>
                        <div className=" mt-2 py-8">
                            <div className="flex justify-between items-center">
                                <p className="font-medium text-xl text-gray-900">Skills</p>
                                <FontAwesomeIcon icon={faPen} className="text-gray-300 text-lg hover:bg-gray-100 p-2 rounded-full" />
                            </div>
                            <div className="flex gap-4 mt-4 pl-2">
                                <div className="flex flex-col">
                                    <p className="text-gray-900 font-medium">Expert</p>
                                    <p className="text-gray-900 font-medium">Advanced</p>
                                    <p className="text-gray-900 font-medium">Intermediate</p>
                                    <p className="text-gray-900 font-medium">Beginner</p>
                                </div>
                                <div className="flex flex-col text-xs text-gray-500 gap-2">
                                    <div className="flex gap-2">
                                        <button className="px-1 bg-gray-50 rounded border-1 border-gray-200">JavaScript</button>
                                        <button className="px-1 bg-gray-50 rounded border-1 border-gray-200">React</button>
                                        <button className="px-1 bg-gray-50 rounded border-1 border-gray-200">HTML</button>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-1 bg-gray-50 rounded border-1 border-gray-200">Redux</button>
                                        <button className="px-1 bg-gray-50 rounded border-1 border-gray-200">Graphic Design</button>
                                        <button className="px-1 bg-gray-50 rounded border-1 border-gray-200">Figma</button>
                                        <button className="px-1 bg-gray-50 rounded border-1 border-gray-200">TypeScript</button>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-1 bg-gray-50 rounded border-1 border-gray-200">OAuth</button>
                                        <button className="px-1 bg-gray-50 rounded border-1 border-gray-200">CSS</button>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-1 bg-gray-50 rounded border-1 border-gray-200">C++</button>
                                        <button className="px-1 bg-gray-50 rounded border-1 border-gray-200">Redis</button>
                                        <button className="px-1 bg-gray-50 rounded border-1 border-gray-200">Heroku</button>
                                        <button className="px-1 bg-gray-50 rounded border-1 border-gray-200">Node.js</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 py-8">
                            <p className="font-medium text-xl text-gray-900">Education</p>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <p className="text-xs text-gray-700">December 2020 - April 2024</p>
                                    <p className="text-lg font-medium text-gray-700">Indian Institute of Information Technology, Kota</p>
                                    <p className="text-gray-700">B.Tech</p>
                                </div>
                                <div className="flex gap-4">
                                    <FontAwesomeIcon icon={faPen} className="text-gray-500 text-xs p-2 hover:bg-gray-100 rounded-full" />
                                    <FontAwesomeIcon icon={faTrash} className="text-gray-500 text-xs p-2 hover:bg-gray-100 rounded-full" />
                                </div>
                            </div>
                            <button className="px-4 py-1 mt-8 font-medium border-gray-400 border-1 text-gray-700 rounded">Add Education</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
