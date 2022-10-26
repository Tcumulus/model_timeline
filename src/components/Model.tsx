import React from "react"
import Block from "./Block"

interface Props {
  data: any,
  id: number,
  setSelected: (id: number, run: number) => void
}

const Model: React.FC<Props> = ({ data, id, setSelected }) => {
  return (
    <div className="flex flex-row">
      {
        data.runs.map((element: any, index: number) => {
          return <Block data={element} abbrevation={data.abbrevation} id={id} runId={index} setSelected={setSelected} key={"r"+index}/>
        })
      }      
    </div>
  )
}

export default Model
