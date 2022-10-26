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
    <div className="flex flex-col items-center mx-8">
      <div className="w-full mt-8 p-2 border-2 h-40 overflow-x-scroll">
        <Timeline data={global.models} setSelected={setSelected} />
      </div>
        {
          id === -1 ? null
          :
          <Modal data={global.models} id={id} run={run} setSelected={setSelected}/>
        }
    </div>
  )
}

export default App
