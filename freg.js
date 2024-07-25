import { useState } from "react";

function Freg() {
  const [firstRef, setFirst] = useState('');
  const [secondRef, setSecond] = useState('');
  const [emailRef, setEmail] = useState('');
  const [equal, setEqual] = useState("");
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const getPassword = (event) => {
    setSecond(event.target.value);
  };

  const getEmail = (event) => {
    setEmail(event.target.value);
  };

  const getCollege = (event) => {
    setFirst(event.target.value);
  };

  const getGender = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedBranch(event.target.value);
  };

  const getYear = (event) => {
    setSelectedYear(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted');
    console.log(`College Id: ${firstRef}`);
    console.log(`Password: ${secondRef}`);
    console.log(`Email: ${emailRef}`);
    console.log(`Branch: ${selectedBranch}`);
    console.log(`Year: ${selectedYear}`);
    console.log(`Gender: ${selectedGender}`);
    setFirst('');
    setSecond('');
    setEmail('');
    setSelectedBranch('');
    setSelectedYear('');
    setSelectedGender('');
  };

  const equity = () => {
    if (firstRef === secondRef && firstRef !== '') {
      setEqual("Successful");
    } else if (firstRef === '' || secondRef === '') {
      setEqual("Enter Details");
    } else {
      setEqual("Incorrect password");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="card" style={{ width: "20rem" }}>
        <h4 style={{ margin: "10px" }}>Register</h4>
        <p style={{ margin: "10px" }}>Provide your Details to login</p>
        <div className="card-body">
          <h6 className="card-title" style={{ margin: "5px" }}>College Id</h6>
          <form onSubmit={formSubmit} style={{ display: "flex", flexDirection: "column" }}>
            <input type="text" value={firstRef} onChange={getCollege} placeholder="College Id" style={{ margin: "5px" }} />
            <h6 className="card-title" style={{ margin: "5px" }}>Password</h6>
            <input type="password" value={secondRef} onChange={getPassword} placeholder="Password" style={{  margin: "5px" }} />
            <h6 className="card-title" style={{ margin: "5px" }}>Email</h6>
            <input type="email" value={emailRef} onChange={getEmail} placeholder="email" style={{  margin: "5px" }} />
            <h6 className="card-title" style={{ margin: "5px" }}>Branch</h6>
            <select className="form-select" aria-label="Default select example" value={selectedBranch} onChange={handleChange}>
              <option value="">Select a branch</option>
              <option value="cse">Computer Science Engineering</option>
              <option value="it">Information Technology</option>
              <option value="ds">Data Science</option>
            </select>
            <h6 className="card-title" style={{ margin: "5px" }}>Year</h6>
            <select className="form-select" aria-label="Default select example" value={selectedYear} onChange={getYear}>
              <option value="">Select a Year</option>
              <option value="1">2024</option>
              <option value="2">2025</option>
              <option value="3">2026</option>
              <option value="4">2027</option>
            </select>
            <h6 className="card-title" style={{ margin: "5px" }}>Gender</h6>
            <div>
              <input className="form-check-input" type="radio" name="gender" value="Male" onChange={getGender} />
              <label className="form-check-label" htmlFor="1">Male</label>
              <input className="form-check-input" type="radio" name="gender" value="Female" onChange={getGender} />
              <label className="form-check-label" htmlFor="2">Female</label>
              <input className="form-check-input" type="radio" name="gender" value="Other" onChange={getGender} />
              <label className="form-check-label" htmlFor="3">Other</label>
            </div>
            <br />
            <button className="btn btn-dark" type="submit" onClick={equity} style={{ margin: '5px' }}>Register</button>
            <p>{equal}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Freg;
