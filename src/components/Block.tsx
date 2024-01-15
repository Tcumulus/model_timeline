import React from "react"

interface Props {
  start: number,
  end: number,
  data: any,
  id: number,
  runId: number,
  setId: (data: object) => void,
  color: string,
  categoryId: number
}

const Block: React.FC<Props> = ({ start, end, data, id, runId, setId, color, categoryId }) => {
  const width = (end - start) * 100
  return (
    <div onClick={() => setId({ category: categoryId, id: id, run: runId })} 
      className="flex flex-row h-8 items-center border-[3px] rounded cursor-pointer opacity-80 hover:opacity-100 hover:font-bold" 
      style={{width: width+"%", position: "absolute", left: start*100+"%", borderColor: color}}
    >
      {
        width >= 2 ?
        <p className="mx-1">{data.run}</p>
        : null
      }
    </div>
  )
}

export default Block
