import React from "react"

interface Props {
  theme: string,
  toggleTheme: () => void,
}

const Header: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <div className="h-fit flex flex-row items-center m-4 p-2 text-gray-500 dark:text-gray-100 bg-white dark:bg-[#2d2d2d] shadow-sm border rounded-md outline-none">
      {
        theme === "dark" ?
        <input type="checkbox" onClick={toggleTheme} checked={true} className="w-4 h-4 outline-none"/>
        :
        <input type="checkbox" onClick={toggleTheme} checked={false} className="w-4 h-4 outline-none"/>
      }
      <p className="h-fit ml-2 text-gray-500 dark:text-gray-100">Dark Mode</p>
    </div>
  )
}

export default Header

