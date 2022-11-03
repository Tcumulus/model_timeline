import React, { useState, useEffect, createContext } from "react"
import Header from "./components/Header"
import Modal from "./components/Modal"
import Timeline from "./components/Timeline"
import { data } from "./data/data"

export const CData = createContext(data)
export const CSettings = createContext({ utc: 1 })

const App: React.FC = () => {
  const [id, setId] = useState<any>({ category: -1, id: -1, run: -1 })
  const [theme, setTheme] = useState<string>(() => {
    let saved = localStorage.getItem("theme")
    if(saved) { saved = JSON.parse(saved) }
    return saved || ""
  })
  const [settings, setSettings] = useState({ utc: 1 })
  const [settingsModal, setSettingsModal] = useState<boolean>(false)

  const setSelected = (id: number, run: number) => {
    setId(id)
  }

  const toggleTheme = () => {
    theme === "dark" ? setTheme("") : setTheme("dark")
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <div className={theme}>
      <CData.Provider value={data}>
      <CSettings.Provider value={settings}>
        <div className="flex flex-col px-4 h-screen bg-white dark:bg-[#2d2d2d] text-gray-500 dark:text-gray-100 items-center">
          <Header theme={theme} toggleTheme={toggleTheme} setSettings={setSettings}
            settingsModal={settingsModal} setSettingsModal={setSettingsModal}
          />
          <div className="w-full">
            <Timeline data={data.categories[0]} categoryId={0} name="Global Models" setId={setId}/>
            <Timeline data={data.categories[1]} categoryId={1} name="Ensembles" setId={setId}/>
          </div>
            {
              id.category === -1 ? null
              :
              <Modal id={id} setId={setId}/>
            }
        </div>
      </CSettings.Provider>
      </CData.Provider>
    </div>
    
  )
}

export default App
