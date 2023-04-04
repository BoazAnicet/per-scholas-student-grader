import React, { useState } from "react";

const Show = ({ student }) => {
  const [data, setData] = useState(student);
  const [newGrade, setNewGrade] = useState({ subject: "", grade: 0 });

  const renderGrades = () => {
    return data.grades.map((g, i) => (
      <li key={i}>
        <h3>{g.subject}</h3>
        <p>{g.grade}</p>
      </li>
    ));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const a = [...data.grades];
    a.push(newGrade);
    setData({ ...data, grades: a });
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "200px 200px" }}>
      <div>
        <div>{student.name}</div>
        <ul>{renderGrades()}</ul>
      </div>
      <div>
        <form method='POST' action='/sudents/:id'>
          <div>
            <label htmlFor='subject'>Subject</label>
            <input
              name='subject'
              id='subject'
              onChange={(e) =>
                setNewGrade({ ...newGrade, subject: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor='grade'>Grade</label>
            <input
              name='grade'
              id='grade'
              onChange={(e) =>
                setNewGrade({ ...newGrade, grade: e.target.value })
              }
            />
          </div>

          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default Show;
