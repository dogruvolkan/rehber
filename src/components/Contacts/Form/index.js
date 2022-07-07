import React from 'react'
import { useState, useEffect } from "react";

const initialFormValues = { fullName: "", phoneNumber: "" };

function Form({ addContact, contacts }) {

  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }
    addContact([...contacts, form])

  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input name="fullName" value={form.fullName} placeholder='Full Name' onChange={onChangeInput}></input>
        </div>
        <div>
          <input  name="phoneNumber" value={form.phoneNumber} placeholder='Phone Number' onChange={onChangeInput}></input>
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Form
