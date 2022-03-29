import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';




const membersList = [
  { memberName: 'John', memberEmail: 'compyjohn@gmail.com', memberRole: 'Senior Engineer'},
  { memberName: 'Larry', memberEmail: 'larryjordan@hotmail.com', memberRole: 'Intern'},
  { memberName: 'Monica', memberEmail: 'monicastrauss@gmail.com', memberRole: 'Junior Engineer'},
]


function App() {
  //setting slices of state
  const [formValues, setFormValues] = useState({ memberName: "", memberEmail: "", memberRole: "" });
  const [members, setMembers] = useState(membersList);
  //creating change and submit functions
  const change = evt => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const submit = evt => {
    evt.preventDefault();
    const newMember = {
      memberName: formValues.memberName.trim(),
      memberEmail: formValues.memberEmail.trim(),
      memberRole: formValues.memberRole.trim()
    }
    setMembers(members.concat(newMember));
    setFormValues({ memberName: "", memberEmail: "", memberRole: "" });
  }


  return (
    <div className="App">
      <h1>Team Member Form</h1>
      {members.map((member, idx) => {
        return <div key={idx}>
          {member.memberName} is a {member.memberRole}
        </div>
      })}
      <form onSubmit={submit}>
        <label>Enter Name: 
          <input 
            value={formValues.memberName} 
            name="memberName" 
            type="text"
            onChange={change}
          />
        </label>
        <br />
        <label>Enter Email: 
          <input
            value={formValues.memberEmail}
            name="memberEmail"
            type="text"
            onChange={change}
          />
        </label>
        <br />
        <label>Enter Role: 
          <input
            value={formValues.memberRole}
            name="memberRole"
            type="text"
            onChange={change}
          />
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
