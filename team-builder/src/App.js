import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import MemberForm from './components/MemberForm'
const initialMemberValues = {
  name:'',
  email:'',
  role:''
}

 function App() {
  const [members, setMembers] = useState([]);

  const [memberValues, setMemberValues] = useState(initialMemberValues)

  const updateForm = (inputName, inputValue) => {
    setMemberValues({...memberValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      Username: memberValues.username.trim(),
      email: memberValues.email.trim(),
      role: memberValues.role
    }
    if (!newMember.username || ! newMember.email || !newMember.role)
    return;
  }

  return (
    <div className="App">
      <h1>Member</h1>
      <MemberForm values={memberValues} update={updateForm} submit={submitForm}
      />
    </div>
  );
}

export default App;
