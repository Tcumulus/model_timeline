import React from "react"

interface Props {
  data: any,
  id: number,
  run: number,
  setSelected: (id: number, run: number) => void
}

const Modal: React.FC<Props> = ({ data, id, run, setSelected }) => {
  return (
    <div>
      <p>{data[id].abbrevation}</p>
      <p>{data[id].runs[run].window}</p>
      <button onClick={() => setSelected(-1, -1)}>Close</button>   
    </div>
  )
}

export default Modal
