import React from "react"
import Settings from "./Settings"

import logo from "../assets/logo.png"
import settings_dark from "../assets/settings_dark.png"
import settings_light from "../assets/settings_light.png"
import refresh_dark from "../assets/refresh_dark.png"
import refresh_light from "../assets/refresh_light.png"

interface Props {
  theme: string,
  toggleTheme: () => void,
  changeModelSettings: (category: number, id: number) => void,
  settingsModal: boolean,
  setSettingsModal: (settingsModal: boolean) => void
}

const Header: React.FC<Props> = ({ theme, toggleTheme, changeModelSettings, settingsModal, setSettingsModal }) => {
  const refreshWindow = () => {
    window.location.reload()
  }

  return (
    <div className="w-full border-b border-gray-100 dark:border-gray-500">
      {
        settingsModal ?
        <Settings theme={theme} toggleTheme={toggleTheme} setSettingsModal={setSettingsModal} changeModelSettings={changeModelSettings}/>
        :
        null
      }
      <div className="flex flex-row w-full justify-between items-center my-4">
        <div className="flex flex-row items-center">
          <img src={logo} className="ml-4 h-14 w-14" />
          <h1 className="ml-4 text-xl w-20 sm:w-full sm:text-3xl">Weather Model Timeline</h1>
        </div>
        <div className="flex flex-row items-center">
          {
            theme === "dark" ?
            <img src={refresh_dark} onClick={refreshWindow} className="mr-8 w-8 h-8 cursor-pointer opacity-70 hover:opacity-100" alt="refresh button" />
            :
            <img src={refresh_light} onClick={refreshWindow} className="mr-8 w-8 h-8 cursor-pointer opacity-70 hover:opacity-100" alt="refresh button" />
          }
          {
            theme === "dark" ?
            <img onClick={() => setSettingsModal(true)} src={settings_dark} className="mr-4 h-8 w-8 cursor-pointer opacity-70 hover:opacity-100" alt="settings icon"/>
            :
            <img onClick={() => setSettingsModal(true)} src={settings_light} className="mr-4 h-8 w-8 cursor-pointer opacity-70 hover:opacity-100" alt="settings icon"/>
          }
        </div>
      </div>
    </div>
  )
}

export default Header

