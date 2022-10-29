import React from "react"

interface Props {
  data: any,
  theme: string,
  toggleTheme: () => void,
  setSettingsModal: (settingsModal: boolean) => void
}

const Settings: React.FC<Props> = ({ data, theme, toggleTheme, setSettingsModal }) => {
  return (
    <div className="flex flex-row items-center justify-center fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60">
      <div className="flex flex-col justify-center w-fit h-fit px-4 py-2 m-2 bg-gray-100 border-2 border-gray-300 dark:bg-[#2d2d2d] rounded text-gray-500 dark:text-gray-100">
        <div className="flex flex-row justify-between">
          <p className="px-4 text-2xl">Settings</p>
          <p onClick={() => setSettingsModal(false)} className="text-2xl align-center cursor-pointer">&times;</p>
        </div>
        <hr className="my-2"/>
        <div className="flex flex-row items-center justify-between outline-none">
          <p className="ml-2 ">Dark Mode</p>
          {
            theme === "dark" ?
            <input type="checkbox" onClick={toggleTheme} checked={true} className="w-4 h-4 outline-none"/>
            :
            <input type="checkbox" onClick={toggleTheme} checked={false} className="w-4 h-4 outline-none"/>
          }
        </div>
        <div className="flex flex-row justify-between items-center">
          <p>Timezone</p>
          <p>UTC+2</p>
        </div>
        <hr className="my-2"/>
        {
          data.models.map((element: any, index: number) => {
            return (
              <div className="flex flex-row justify-between items-center" key={index}>
                <p className="mr-4">{element.abbreviation}</p>
                <input type="checkbox" onClick={() => console.log(element.abbreviation)} className="w-4 h-4 outline-none"/>
              </div>
            )
          })
        }
        <hr className="my-2"/>
        {
          data.sites.map((element: any, index: number) => {
            return (
              <div className="flex flex-row justify-between items-center" key={index}>
                <p className="mr-4">{element.name}</p>
                <input type="checkbox" onClick={() => console.log(element.name)} className="w-4 h-4 outline-none"/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Settings