import React from "react"
import Settings from "./Settings"

interface Props {
  data: any,
  theme: string,
  toggleTheme: () => void,
  settings: any, //TODO TYPE
  setSettings: (arg: any) => void,  //TODO TYPE
  settingsModal: boolean,
  setSettingsModal: (settingsModal: boolean) => void
}

const Header: React.FC<Props> = ({ data, theme, toggleTheme, settings, setSettings, settingsModal, setSettingsModal }) => {
  return (
    <div>
      {
        settingsModal ?
        <Settings data={data} theme={theme} toggleTheme={toggleTheme} setSettingsModal={setSettingsModal}/>
        :
        null
      }
      <p onClick={() => setSettingsModal(true)}>SETTINGS</p>
    </div>
  )
}

export default Header

