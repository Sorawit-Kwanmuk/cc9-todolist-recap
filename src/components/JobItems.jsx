import React, { useState, useEffect, useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

function JobItems({ item }) {
  const { hdlDel, hdlEdit } = useContext(ListContext);
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    setEditText(item.name);
  }, [editMode, item.name]);

  const hdlSaveClick = () => {
    hdlEdit(item.id, editText);
    setEditMode(false);
  };

  return (
    <div className='col-md-8'>
      <div className='input-group'>
        <div className='input-group-text'>
          <input
            className='form-check-input mt-0'
            type='checkbox'
            value=''
            onChange={() => hdlEdit(item.id, '_STATUS_')}
            checked={item.status}
          />
        </div>
        <input
          className='form-control'
          type='text'
          readOnly={!editMode}
          value={editMode ? editText : item.name}
          onChange={e => setEditText(e.target.value)}
        />
        {editMode ? (
          <>
            <button className='btn btn-outline-secondary' onClick={hdlSaveClick}>
              Save
            </button>
            <button
              className='btn btn-outline-secondary'
              onClick={() => setEditMode(false)}>
              Cancel
            </button>
          </>
        ) : (
          <button className='btn btn-outline-secondary' onClick={() => setEditMode(true)}>
            Edit
          </button>
        )}
        <button className='btn btn-outline-secondary' onClick={() => hdlDel(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobItems;
