import React from "react"

interface Props {
  data: any,
  id: number,
  run: number,
  setSelected: (id: number, run: number) => void
}

const Modal: React.FC<Props> = ({ data, id, run, setSelected }) => {
  console.log(data)
  return (
    <div className="flex flex-row items-center justify-center fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60">
      <div className="flex flex-col justify-center w-fit px-4 py-2 m-2 bg-gray-100 border-2 border-gray-300 dark:bg-[#2d2d2d] rounded">
        <div className="flex flex-row justify-between">
          <p className="px-4 border-2 text-2xl rounded text-gray-500 dark:text-gray-100" style={{borderColor: data[id].color}}>{data[id].abbreviation}</p>
          <p onClick={() => setSelected(-1, -1)} className="text-2xl align-center cursor-pointer text-gray-500 dark:text-gray-100">&times;</p>
        </div>
        <hr className="my-2"/>
        <p className="text-gray-500 dark:text-gray-100">19h10-20h10</p>
        <p className="text-gray-500 dark:text-gray-100">{data[id].runs[run].window}h</p>
        <hr className="my-2"/>
        <div className="flex flex-col">
          {
            data[id].sites.map((element: any, index: number) => {
              return (<a href={element.href} key={index} className="text-sm underline text-gray-500 dark:text-gray-100">
                {element.name}
              </a>)
            })
          }
        </div>
        <hr className="my-2"/>
        <div className="flex flex-row justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-100">{data[id].name}</p>
          <p className="ml-8 text-sm text-gray-500 dark:text-gray-100">{data[id].country}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
