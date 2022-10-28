import React, { useState } from "react"
import Modal from "./components/Modal"
import Timeline from "./components/Timeline"
import { global } from "./data/data"

const App: React.FC = () => {
  const [id, setId] = useState<number>(-1)
  const [run, setRun] = useState<number>(-1)

  const setSelected = (id: number, run: number) => {
    setId(id)
    setRun(run)
  }

  return (
    <div className="">
      <div className="flex flex-col px-4 h-screen bg-white dark:bg-[#2d2d2d] items-center">
        <p>HEADER</p>
        <div className="w-full">
          <Timeline data={global.models} setSelected={setSelected} />
        </div>
          {
            id === -1 ? null
            :
            <Modal data={global.models} id={id} run={run} setSelected={setSelected}/>
          }
      </div>
    </div>
    
  )
}

export default App
