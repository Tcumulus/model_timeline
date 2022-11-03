import React, { useContext } from "react"
import { CData, CSettings } from "src/App"

interface Props {
  id: any,
  setId: (data: object) => void
}

const Modal: React.FC<Props> = ({ id, setId }) => {
  const data = useContext(CData)
  const settings = useContext(CSettings)

  const _id = data.categories[id.category].models[id.id]

  const startTime = _id.runs[id.run].start + settings.utc*60
  const endTime = _id.runs[id.run].end + settings.utc*60
  const startHour = Math.floor(startTime / 60) <= 24 ? Math.floor(startTime / 60) : Math.floor(startTime / 60)-24
  const endHour = Math.floor(endTime / 60) <= 24 ? Math.floor(endTime / 60) : Math.floor(endTime / 60)-24
  const startMinute = (startTime % 60) > 10 ? (startTime % 60) : "0" + (startTime % 60)
  const endMinute = (endTime % 60) > 10 ? (endTime % 60) : "0" + (endTime % 60)
  const startTimeString = startHour + "h" + startMinute
  const endTimeString = endHour + "h" + endMinute

  return (
    <div className="flex flex-row items-center justify-center fixed inset-0 z-20 overflow-y-auto bg-black bg-opacity-60">
      <div className="flex flex-col justify-center w-fit h-fit px-4 py-2 m-2 bg-gray-100 border-2 border-gray-300 dark:bg-[#2d2d2d] rounded">
        <div className="flex flex-row justify-between">
          <p className="px-4 border-4 text-2xl rounded font-bold" style={{borderColor: _id.color}}>
            {_id.abbreviation}
          </p>
          <p onClick={() => setId({ category: -1, id: -1, run: -1 })} className="text-2xl align-center cursor-pointer">&times;</p>
        </div>
        <hr className="my-2"/>
        <p>{startTimeString}-{endTimeString}</p>
        <p>{_id.runs[id.run].window}h</p>
        <hr className="my-2"/>
        <div className="flex flex-col">
          {
            _id.sites.map((element: any, index: number) => {
              return (<a href={element.href} key={index} className="text-sm underline">
                {element.name}
              </a>)
            })
          }
        </div>
        <hr className="my-2"/>
        <div className="flex flex-row justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-100">{_id.name}</p>
          <p className="ml-8 text-sm text-gray-500 dark:text-gray-100">{_id.country}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
