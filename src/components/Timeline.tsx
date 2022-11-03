import React from "react"
import Model from "./Model"

interface Props {
  data: any,
  name: string,
  setId: (data: object) => void,
  categoryId: number
}

const Timeline: React.FC<Props> = ({ data, name, setId, categoryId }) => {
  const times = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

  const timeNow = new Date()
  const time = timeNow.getHours() * 60 + timeNow.getMinutes() 

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center m-2">
        <h2 className="text-xl">{name}</h2>
        <div className="flex flex-row">
          {
            data.models.map((element: any, id: number) => {
              return (
                <div className="flex flex-row items-center">
                  <div className="w-4 h-4 ml-4 rounded-full" style={{backgroundColor: element.color}}/>
                  <p className="mx-2" key={id}>{element.abbreviation}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="px-4 border-2 rounded-xl overflow-x-scroll scrollbar">
        <div className="flex flex-col" style={{position: "relative"}}>
          <div className="h-full w-0 z-10 border-r-2 border-red-400" style={{position: "absolute", left: time+"px"}} />
          <div className="flex flex-row w-full mb-4 ml-2">
            {
              times.map((element: number, id: number) => {
                return (<p className="z-15 text-xs text-gray-400 dark:text-gray-300" key={id} 
                  style={{position: "absolute", left: (element*60)+"px"}}
                >{element}</p>)
              })
            }
          </div>
          <div className="flex flex-col mt-2">
            {
              data.models.map((element: any, id: number) => {
                return <Model data={element} id={id} setId={setId} categoryId={categoryId} key={"m"+id}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
