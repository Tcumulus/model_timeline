import React, { useContext } from "react"
import Block from "./Block"
import { CSettings } from "src/App"

interface Props {
  data: any,
  id: number,
  setId: (data: object) => void,
  categoryId: number
}

const Model: React.FC<Props> = ({ data, id, setId, categoryId }) => {
  const settings = useContext(CSettings)

  return (
    <div className="flex flex-row h-8 my-1">
      {
        data.runs.map((element: any, index: number) => {
          const start = element.start + settings.utc*60 <= 1440 ? element.start + settings.utc*60 : element.start + settings.utc*60 - 1440
          const end = element.end + settings.utc*60 <= 1440 ? element.end + settings.utc*60 : element.end + settings.utc*60 - 1440
          if(end < start) {
            return (
            <div>
              <Block start={0} end={end} data={element} id={id} runId={index} setId={setId} 
                color={data.color} categoryId={categoryId} key={"r1"+index} />
              <Block start={start} end={1440} data={element} id={id} runId={index} setId={setId} 
                color={data.color} categoryId={categoryId} key={"r2"+index} />
            </div>)
          }
          return <Block start={start} end={end} data={element} id={id} runId={index} setId={setId} 
            color={data.color} categoryId={categoryId} key={"r"+index}
          />
        })
      }
    </div>
  )
}

export default Model
