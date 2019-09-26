import React, { useState } from 'react';
import uuid from 'uuid';

const initalHabit = [
    { id: uuid(), habit: 'Example',},
  ];
  
  const initialForm = {
    habit: '',
  };
  
  function AddHabits() {
  
    const [Team, setTeam] = useState(initalTeam);
    const [Form, setForm] = useState(initialForm);
  
    const onhabitChange = e => {
      setForm({
        habit: e.target.value,
      });
    };
  
    const onFormSubmit = e => {
      e.preventDefault();
      const newMember = {
        id: uuid(),
        habit: Form.habit,
      };
      const newTeam = Team.concat(newMember);
      setTeam(newTeam);
      setForm(initialForm);
    };
  
    return (
      <div>
        <Form
          onhabitChange={onhabitChange}
          onFormSubmit={onFormSubmit}
          Form={Form}
        />
        <div>
          {
            Team.map(member => (
              <p key={member.id}>
                {member.habit}
                <button>
                  edit
                </button>
              </p>
            ))
          }
        </div>
      </div>
    );
  }
  
  export default AddHabits;