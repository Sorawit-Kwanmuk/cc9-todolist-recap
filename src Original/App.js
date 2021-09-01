import axios from 'axios';
import React,{useEffect, useState} from 'react'
import './App.css';
import Addform from './components/AddForm';
import Header from './components/Header';
import Lists from './components/Lists';

const url = "http://localhost:8080"

function App() {
  const [lists, setLists] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect( ()=> {
    axios.get(`${url}/todo`)
    .then(res => setLists(res.data.todos))
  },[refresh])

  const hdlAdd = async (text) => {
    try {
      await axios.post(`${url}/todo`, {name: text, status: false})
      setRefresh(prv=>!prv)
    } catch (error) {
      console.log(error.message)
    }
  }

  const hdlDel = async (xid) => {
    await axios.delete(`${url}/todo/${xid}`);
    setRefresh(prv => !prv);
  }

  const hdlEdit = async (xid, text) => {
    let {data:{todo:e_item}} = await axios.get(`${url}/todo/${xid}`)
    // let {data} = await axios.get(`${url}/todo/${xid}`)
    // let e_item = data.todo
    await axios.put(`${url}/todo/${xid}`, {name: text, status: e_item.status})
    setRefresh(prv => !prv)
  }

  return (
    <div className="App container-md my-4 pb-3 border rounded bg-light">
      <Header />
      <Addform hdlAdd={hdlAdd}/>
      <Lists lists={lists} hdlDel={hdlDel} hdlEdit={hdlEdit}/>
    </div>  
  );
}

export default App;
