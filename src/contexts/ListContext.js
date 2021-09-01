import axios from 'axios';
import { createContext, useEffect, useState, useContext } from 'react';

const ListContext = createContext();
const url = 'http://localhost:8080';

const useLists = () => {
  return useContext(ListContext);
};

function ListProvider({ children }) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get(`${url}/todo`).then(res => setLists(res.data));
  }, []);
  const hdlAdd = async text => {
    try {
      let { data } = await axios.post(`${url}/todo`, { name: text, status: false });
      setLists([...lists, data]);
    } catch (error) {
      console.log('Add Error :', error);
    }
  };
  const hdlDel = async xid => {
    try {
      setLists(lists.filter(x => x.id !== xid));
      await axios.delete(`${url}/todo/${xid}`);
      // setRefresh(prv => !prv);
    } catch (error) {
      console.log('Delete Error :', error);
    }
  };
  const hdlEdit = async (xid, text) => {
    try {
      let e_item = lists.find(item => item.id === xid);
      if (text === '_STATUS_') {
        setLists(
          lists.map(item => (item.id === xid ? { ...item, status: !item.status } : item))
        );

        // let { data } = await axios.get(`${url}/todo/${xid}`);
        await axios.put(`${url}/todo/${xid}`, {
          name: e_item.name,
          status: !e_item.status,
        });
      } else {
        setLists(lists.map(item => (item.id === xid ? { ...item, name: text } : item)));
        // let { data } = await axios.get(`${url}/todo/${xid}`);
        await axios.put(`${url}/todo/${xid}`, { name: text, status: e_item.status });
      }
    } catch (error) {
      console.log('Edit Error :', error);
    }
  };

  return (
    <ListContext.Provider value={{ lists, hdlAdd, hdlDel, hdlEdit }}>
      {children}
    </ListContext.Provider>
  );
}

export { ListProvider, ListContext, useLists };
