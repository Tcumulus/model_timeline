import React from "react"

interface Props {
  data: any,
  abbrevation: string,
  id: number,
  runId: number,
  setSelected: (id: number, run: number) => void
}

const Block: React.FC<Props> = ({ data, abbrevation, id, runId, setSelected }) => {
  const width = (data.end - data.start)*5
  return (
    <div onClick={() => setSelected(id, runId)} className="flex flex-row border-2 m-2 cursor-pointer" style={{width: width+"px"}}>
      <p className="mr-2">{abbrevation}</p>
      <p>{data.run}</p>
    </div>
  )
}

export default Block
