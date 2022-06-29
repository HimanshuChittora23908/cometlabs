import Sidebar from "../components/Sidebar"
import Stepper from "../components/StepperComp"
import SurveyCard from "../components/SurveyCard"

export default function Home() {
  return (
    <div className="flex font-kumbh">
      <Sidebar />
      <div className="w-3/4 bg-primary-100 px-24 py-16">
        <Stepper />
        <SurveyCard />
      </div>
    </div >
  )
}
