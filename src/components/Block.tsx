import React from "react"

interface Props {
  data: any,
  id: number,
  runId: number,
  setSelected: (id: number, run: number) => void,
  color: string
}

const Block: React.FC<Props> = ({ data, id, runId, setSelected, color }) => {
  const width = (data.end - data.start)
  return (
    <div onClick={() => setSelected(id, runId)} className="flex flex-row border-2 rounded cursor-pointer" 
      style={{width: width+"px", position: "absolute", left: data.start+"px", borderColor: color}}
    >
      <p className="mx-1 text-gray-500 dark:text-white">{data.run}</p>
    </div>
  )
}

export default Block
