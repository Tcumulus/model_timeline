import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Modal from "./components/Modal"
import Timeline from "./components/Timeline"
import { global } from "./data/data"

const App: React.FC = () => {
  const [id, setId] = useState<number>(-1)
  const [run, setRun] = useState<number>(-1)
  const [theme, setTheme] = useState<string>(() => {
    let saved = localStorage.getItem("theme")
    if(saved) { saved = JSON.parse(saved) }
    return saved || ""
  })

  const setSelected = (id: number, run: number) => {
    setId(id)
    setRun(run)
  }

  const toggleTheme = () => {
    theme == "dark" ? setTheme("") : setTheme("dark")
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <div className={theme}>
      <div className="flex flex-col px-4 h-screen bg-white dark:bg-[#2d2d2d] items-center">
        <Header theme={theme} toggleTheme={toggleTheme} />
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
