import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";

const TeamForm = () => {
  const [data, setData] = useState({
    team_name: "",
    team_member_1_name: "",
    team_member_1_department: "",
    team_member_1_phone: "",
    team_member_1_email: "",
    team_member_1_register_number: "",

    team_member_2_name: "",
    team_member_2_department: "",
    team_member_2_phone: "",
    team_member_2_email: "",
    team_member_2_register_number: "",

    team_member_3_name: "",
    team_member_3_department: "",
    team_member_3_phone: "",
    team_member_3_email: "",
    team_member_3_register_number: "",
  });

  const [status, setStatus] = useState(null);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "https://web-it-like-spider.onrender.com/hackathon/register/",
        data
      );
      const json = JSON.stringify(data);
      console.log(json);
      console.log(res.status, res.data);
      setStatus(res.status);
    } catch (e) {
      console.log(e.message);
      console.log(status);
    }
  };

  return (
    <div name="register" className="container">
      <div className="Registrationform">
        <h1>Registration</h1>
        <form className="team-form" onSubmit={handleSubmit}>
          <div className="team-info">
            <h2>Team Information</h2>
            <label htmlFor="team_name">Team Name:</label>
            <input
              type="text"
              id="team_name"
              name="team_name"
              value={data.team_name}
              onChange={inputHandler}
              required
            />
          </div>

          <div className="team_members">
            <div className="team-member1">
              <h2>Team Member 1</h2>
              <label htmlFor="team_member_1_name">Name:</label>
              <input
                type="text"
                id="team_member_1_name"
                name="team_member_1_name"
                value={data.team_member_1_name}
                onChange={inputHandler}
                required
              />
              <label htmlFor="team_member_1_department">Department:</label>
              <input
                type="text"
                id="team_member_1_department"
                name="team_member_1_department"
                value={data.team_member_1_department}
                onChange={inputHandler}
                required
              />
              <label htmlFor="team_member_1_phone">Phone:</label>
              <input
                type="tel"
                id="team_member_1_phone"
                name="team_member_1_phone"
                value={data.team_member_1_phone}
                onChange={inputHandler}
                required
              />
              <label htmlFor="team_member_1_email">Email:</label>
              <input
                type="email"
                id="team_member_1_email"
                name="team_member_1_email"
                value={data.team_member_1_email}
                onChange={inputHandler}
                required
              />
              <label htmlFor="team_member_1_register_number">
                Register Number:
              </label>
              <input
                type="text"
                id="team_member_1_register_number"
                name="team_member_1_register_number"
                value={data.team_member_1_register_number}
                onChange={inputHandler}
                required
              />
            </div>

            <div className="team-member2">
              <h2>Team Member 2</h2>
              <label htmlFor="team_member_2_name">Name:</label>
              <input
                type="text"
                id="team_member_2_name"
                name="team_member_2_name"
                value={data.team_member_2_name}
                onChange={inputHandler}
                required
              />
              <label htmlFor="team_member_2_department">Department:</label>
              <input
                type="text"
                id="team_member_2_department"
                name="team_member_2_department"
                value={data.team_member_2_department}
                onChange={inputHandler}
                required
              />
              <label htmlFor="team_member_2_phone">Phone:</label>
              <input
                type="tel"
                id="team_member_2_phone"
                name="team_member_2_phone"
                value={data.team_member_2_phone}
                onChange={inputHandler}
                required
              />
              <label htmlFor="team_member_2_email">Email:</label>
              <input
                type="email"
                id="team_member_2_email"
                name="team_member_2_email"
                value={data.team_member_2_email}
                onChange={inputHandler}
                required
              />
              <label htmlFor="team_member_2_register_number">
                Register Number:
              </label>
              <input
                type="text"
                id="team_member_2_register_number"
                name="team_member_2_register_number"
                value={data.team_member_2_register_number}
                onChange={inputHandler}
                required
              />
            </div>

            <div className="team-member3">
              <h2>Team Member 3</h2>
              <label htmlFor="team_member_3_name">Name:</label>
              <input
                type="text"
                id="team_member_3_name"
                name="team_member_3_name"
                value={data.team_member_3_name}
                onChange={inputHandler}
                required
              />
              <label htmlFor="team_member_3_department">Department:</label>
              <input
                type="text"
                id="team_member_3_department"
                name="team_member_3_department"
                value={data.team_member_3_department}
                onChange={inputHandler}
                required
              />
              <label htmlFor="team_member_3_phone">Phone:</label>
              <input
                type="tel"
                id="team_member_3_phone"
                name="team_member_3_phone"
                value={data.team_member_3_phone}
                onChange={inputHandler}
                required
              />
              <label htmlFor="team_member_3_email">Email:</label>
              <input
                type="email"
                id="team_member_3_email"
                name="team_member_3_email"
                value={data.team_member_3_email}
                onChange={inputHandler}
                required
              />
              <label htmlFor="team_member_3_register_number">
                Register Number:
              </label>
              <input
                type="text"
                id="team_member_3_register_number"
                name="team_member_3_register_number"
                value={data.team_member_3_register_number}
                onChange={inputHandler}
                required
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TeamForm;
