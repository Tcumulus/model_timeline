import React from "react"
import Model from "./Model"

interface Props {
  data: any,
  setSelected: (id: number, run: number) => void
}

const Timeline: React.FC<Props> = ({ data, setSelected }) => {
  return (
    <div className="w-full h-40 mt-8 p-2 border-2 rounded-xl overflow-x-scroll scrollbar">
      <div className="flex flex-col">
        {
          data.map((element: any, id: number) => {
            return <Model data={element} id={id} setSelected={setSelected} key={"m"+id}/>
          })
        }
      </div>
    </div>
  )
}

export default Timeline
