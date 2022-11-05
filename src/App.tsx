import React, { useState, useEffect, createContext } from "react"
import Header from "./components/Header"
import Modal from "./components/Modal"
import Timeline from "./components/Timeline"
import { data } from "./data/data"

export const CData = createContext(data)
export const CSettings = createContext({ utc: 1, models: [[0, 1, 2], [0, 1], [0, 1]] })

const App: React.FC = () => {
  const [id, setId] = useState<any>({ category: -1, id: -1, run: -1 })
  const [theme, setTheme] = useState<string>(() => {
    let saved = localStorage.getItem("theme")
    if(saved) { saved = JSON.parse(saved) }
    return saved || ""
  })
  const [models, setModels] = useState<number[][]>(() => {
    let saved = localStorage.getItem("models")
    if(saved) { return JSON.parse(saved) }
    return [[0, 1, 2], [0, 1], [0, 1]]
  })
  const [settingsModal, setSettingsModal] = useState<boolean>(false)
  const utcOffset = new Date().getTimezoneOffset() * -1 / 60

  const toggleTheme = () => {
    theme === "dark" ? setTheme("") : setTheme("dark")
  }

  const changeModelSettings = (categoryId: number, id: number) => {
    const newModels = [...models]
    newModels.map((category: number[], index: number) => {
      if(index == categoryId) {
        if(category.includes(id)) {
          category = category.filter((item: number) => { return item !== id })
        } else {
          category.push(id)
        }
        newModels[index] = category
      }
    })
    setModels(newModels)
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  useEffect(() => {
    localStorage.setItem("models", JSON.stringify(models))
  }, [models])

  return (
    <div className={theme}>
      <CData.Provider value={data}>
      <CSettings.Provider value={{ utc: utcOffset, models: models }}>
        <div className="flex flex-col min-h-screen px-4 bg-white dark:bg-[#2d2d2d] text-gray-500 dark:text-gray-100 items-center">
          <Header theme={theme} toggleTheme={toggleTheme} changeModelSettings={changeModelSettings}
            settingsModal={settingsModal} setSettingsModal={setSettingsModal}
          />
          <div className="w-full mb-4">
            <Timeline data={data.categories[0]} categoryId={0} name="Global Models" setId={setId}/>
            <Timeline data={data.categories[1]} categoryId={1} name="Short-term Models" setId={setId}/>
            <Timeline data={data.categories[2]} categoryId={2} name="Ensembles" setId={setId}/>
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
