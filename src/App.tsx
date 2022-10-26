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
    <div>
      <Timeline data={global.models} setSelected={setSelected} />
      {
        id === -1 ? null
        :
        <Modal data={global.models} id={id} run={run} setSelected={setSelected}/>
      }
    </div>
  )
}

export default App
