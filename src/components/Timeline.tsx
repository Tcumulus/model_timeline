import React from "react"
import Model from "./Model"

interface Props {
  data: any,
  setSelected: (id: number, run: number) => void
}

const Timeline: React.FC<Props> = ({ data, setSelected }) => {
  return (
    <div className="flex flex-col">
      {
        data.map((element: any, id: number) => {
          return <Model data={element} id={id} setSelected={setSelected} key={"m"+id}/>
        })
      }
    </div>
  )
}

export default Timeline
