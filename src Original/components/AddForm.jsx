import React,{useState} from "react";

function Addform(props) {
  const {hdlAdd} = props
  const [text, setText] = useState('')

  const hdlAddClick = () => {
    hdlAdd(text)
    setText('')
  }

  return (
    <div className="row justify-content-center my-3 border-bottom">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={text} onChange={e=>setText(e.target.value)}/>
          <button className="btn btn-outline-secondary" onClick={hdlAddClick}>Add</button>
          <button className="btn btn-outline-warning">Undo</button>
        </div>
      </div>
    </div>
  );
}

export default Addform;
