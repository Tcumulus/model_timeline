import React from "react"
import Block from "./Block"

interface Props {
  data: any,
  id: number,
  setSelected: (id: number, run: number) => void
}

const Model: React.FC<Props> = ({ data, id, setSelected }) => {
  return (
    <div className="flex flex-row m-1">
      <p className="w-20 text-gray-500 dark:text-white">{data.abbreviation}</p>
      <div className="w-[1440]" style={{position: "relative"}}>
        {
          data.runs.map((element: any, index: number) => {
            return <Block data={element} id={id} runId={index} setSelected={setSelected} color={data.color} key={"r"+index}/>
          })
        }
      </div>
    </div>
  )
}

export default Model
