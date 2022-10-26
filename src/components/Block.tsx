import React from "react"

interface Props {
  data: any,
  id: number,
  runId: number,
  setSelected: (id: number, run: number) => void
}

const Block: React.FC<Props> = ({ data, id, runId, setSelected }) => {
  const width = (data.end - data.start)
  return (
    <div onClick={() => setSelected(id, runId)} className="flex flex-row border-2 cursor-pointer" 
      style={{width: width+"px", position: "absolute", left: data.start+"px"}}
    >
      <p>{data.run}</p>
    </div>
  )
}

export default Block
