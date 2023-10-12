import React, { useState } from 'react';

export default function Time() {
  const myStyle = {
    color: "darkgreen",
    backgroundColor: "",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

  // State variables to store selected section and entered subsection
  const [selectedSection, setSelectedSection] = useState("");
  const [enteredSubsection, setEnteredSubsection] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    // Here, you can perform actions with selectedSection and enteredSubsection
    console.log("Selected Section:", selectedSection);
    console.log("Entered Subsection:", enteredSubsection);

    // Example: You can make an API call to store the data in your database
  };

  return (
    <>
      <div style={{ backgroundColor: "lightgrey" }}>
        <h1 style={{ color: "blue" }}>This is the registration section</h1>

        <p style={{ color: "red" }}>Note:</p>
        <p style={myStyle}>
          Here you are going to register only once. When you hit the enter
          button, you will automatically update the database, so you can't make
          changes easily. Please make sure that you choose the options carefully
          and seek insights from experienced people.
        </p>
        <br></br>
        <h1>This is 2nd year 1st sem registration</h1>
        <p>hello</p>
      </div>
      <div>
        {/* Dropdown and input for section and subsection */}
        <label htmlFor="section">Select a section:</label>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>

        <br />

        <label htmlFor="subsection">Enter a subsection (e.g., LTPS):</label>
        <input
          type="text"
          id="subsection"
          name="subsection"
          placeholder="Enter subsection"
          value={enteredSubsection}
          onChange={(e) => setEnteredSubsection(e.target.value)}
        />
        <input
          type="text"
          id="subsection"
          name="subsection"
          placeholder="Enter subsection"
          value={enteredSubsection}
          onChange={(e) => setEnteredSubsection(e.target.value)}
        />
        <input
          type="text"
          id="subsection"
          name="subsection"
          placeholder="Enter subsection"
          value={enteredSubsection}
          onChange={(e) => setEnteredSubsection(e.target.value)}
        />
        <input
          type="text"
          id="subsection"
          name="subsection"
          placeholder="Enter subsection"
          value={enteredSubsection}
          onChange={(e) => setEnteredSubsection(e.target.value)}
        />

        <br />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}