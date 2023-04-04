import React, { useState } from "react";

const Index = ({ students }) => {
  const [newStudent, setNewStudent] = useState({ name: "", grades: [] });

  const renderStudents = () => {
    return students.map((s, i) => (
      <li>
        <a href={`/students/${i}`} key={i}>
          {s.name}
        </a>
      </li>
    ));
  };

  return (
    <div style={{ display: "grid" }}>
      <div>
        <div>Students</div>
        <ul>{renderStudents()}</ul>
      </div>

      <div>
        <form method='POST' action='/students'>
          <label htmlFor='name'>
            Student Name
            <input
              id='name'
              name='name'
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
            />
          </label>
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default Index;
