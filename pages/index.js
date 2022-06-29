import Sidebar from "../components/SideMenu"
import Stepper from "../components/StepperComp"
import SurveyCard from "../components/SurveyCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle, faLock } from "@fortawesome/free-solid-svg-icons"
import { pass } from "../json/pass"
import { skill } from "../json/skill"
import { useState } from "react"
import ReactImg from "../assets/img/React.png";
import Javascript from "../assets/img/Javascript.png";
import Image from "next/image";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Footer from '../components/Footer';

export default function Home() {
  const [selected, setSelected] = useState(0)
  const [skillsSelected, setSkillsSelected] = useState([])
  const [searchItem, setSearchItem] = useState('')
  return (
    <div className="flex font-kumbh h-screen">
      <Sidebar active="Turing Test" />
      <div className="w-3/4 bg-primary-100 px-24 pt-16 pb-8 overflow-scroll">
        <Stepper />
        <SurveyCard />
        <div className="opacity-50">
          <div className="flex gap-2 items-center mt-6">
            <p className="text-gray-900 text-2xl font-medium">Pass a tech stack</p>
            <FontAwesomeIcon icon={faLock} className="text-gray-900 text-xl" />
            <p className="text-gray-500 text-sm font-medium mt-2">Take Seniority Assessment to unlock</p>
          </div>
          <p className="text-gray-500 mt-2">Become eligible for Jobs by passing the tests below.</p>
          <div className="flex mt-6">
            {pass.map((pass, index) => {
              return (
                <div key={index} className={`${selected === index ? 'border-b-2 border-blue-500' : ''} flex flex-col gap-2 px-4 py-1`}>
                  <p className="text-gray-900 font-medium cursor-pointer" onClick={() => setSelected(index)}>{pass.name}</p>
                </div>
              )
            })}
          </div>
          <div className="flex items-stretch gap-4 mt-4">
            {pass[selected]?.cards.map((card, index) => {
              return (
                <div key={index} className="flex flex-col items-center bg-white shadow rounded gap-2 w-40 py-8 cursor-not-allowed">
                  <Image src={ReactImg} width={40} height={40} />
                  <p className="text-gray-900 font-medium mt-4">{card.name}</p>
                  <p className="text-gray-500 text-sm font-medium">{card.duration}</p>
                </div>
              )
            })}
          </div>
          <div className="flex gap-2 items-center mt-16">
            <p className="text-gray-900 text-2xl font-medium">Take relevant tests</p>
            <FontAwesomeIcon icon={faLock} className="text-gray-900 text-xl" />
            <p className="text-gray-500 text-sm font-medium mt-2">Take Seniority Assessment to unlock</p>
          </div>
          <p className="text-gray-500 mt-2">Are you interested in using these skills? This is our way of knowing which jobs to match you with. Please take tests for the skills you want to continue using in your next career. Based on your Profile, we marked your top skills with a star</p>
          <div className="flex mt-8 items-center gap-2">
            <FontAwesomeIcon icon={faExclamationCircle} className="text-gray-700" />
            <p className="text-gray-500"><span className="text-gray-700">Tip:</span> If you&apos;re afraid of failing a test, don&apos;t worry. You&apos;ll be allowed to retake them after 3 months.</p>
          </div>

          <p className="font-semibold mt-16">Skill Type</p>
          <div className="flex gap-8 items-start w-full mt-4">
            <div className="flex flex-wrap gap-2 w-2/3">
              {['All', 'Skill-Based', 'Backend', 'Containers', 'Data engineering', 'Database', 'DevOps', 'Frontend', 'Hybrid mobile', 'Infrastructure', 'Java', 'Microsoft', 'Mobile', 'Other', 'PHP', 'Python', 'React', 'Soft skills', 'turing test', 'Vue'].map((skill, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <button className={`rounded-full px-4 py-1 text-sm ${skillsSelected.includes(skill) ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                      onClick={() => {
                        if (skill === 'All') {
                          setSkillsSelected(['All'])
                        }
                        else if (skillsSelected.includes(skill)) {
                          setSkillsSelected(skillsSelected.filter(s => s !== skill))
                        } else {
                          setSkillsSelected([...skillsSelected.filter(s => s !== 'All'), skill])
                        }
                      }
                      }>{skill}</button>
                  </div>
                )
              })}
            </div>
            <div className="w-1/3">
              <Paper
                component="form"
                className="bg-gray-200 flex items-center rounded border-gray-300 border-1 px-4 text-gray-600"
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Skills"
                  inputProps={{ 'aria-label': 'search skills' }}
                  onChange={() => setSearchItem(event.target.value)}
                />
                <IconButton type="submit" sx={{ px: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>
          </div>
          <div className="grid grid-cols-5 items-stretch gap-4 mt-4">
            {skill ? skill.filter(s => s.name.includes(searchItem)).map((card, index) => {
              return (
                <div key={index} className="flex flex-col items-center bg-white shadow rounded gap-2 py-8 cursor-not-allowed">
                  <Image src={Javascript} width={40} height={40} />
                  <p className="text-gray-900 font-medium mt-4">{card.name}</p>
                  <p className="text-gray-500">{card.duration}</p>
                  <button className="text-blue-500 font-medium rounded-full mt-2">Start Test</button>
                </div>
              )
            }) : null}
          </div>
        </div>
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div >
  )
}
