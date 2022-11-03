import React from "react"
import Settings from "./Settings"
import settings_dark from "../assets/settings_dark.png"
import settings_light from "../assets/settings_light.png"

interface Props {
  theme: string,
  toggleTheme: () => void,
  setSettings: (arg: any) => void,
  settingsModal: boolean,
  setSettingsModal: (settingsModal: boolean) => void
}

const Header: React.FC<Props> = ({ theme, toggleTheme, setSettings, settingsModal, setSettingsModal }) => {
  return (
    <div className="w-full border-b border-gray-100 dark:border-gray-500">
      {
        settingsModal ?
        <Settings theme={theme} toggleTheme={toggleTheme} setSettingsModal={setSettingsModal}/>
        :
        null
      }
      <div className="flex flex-row w-full justify-between items-center my-4">
        <h1 className="ml-4 text-3xl">Weather Model Timeline</h1>
        {
          theme === "dark" ?
          <img onClick={() => setSettingsModal(true)} src={settings_dark} className="mr-4 h-8 w-8 cursor-pointer opacity-80 hover:opacity-100"/>
          :
          <img onClick={() => setSettingsModal(true)} src={settings_light} className="mr-4 h-8 w-8 cursor-pointer opacity-80 hover:opacity-100"/>
        }
      </div>
    </div>
  )
}

export default Header

