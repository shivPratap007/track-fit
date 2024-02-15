import React, { useState } from "react";
import axios from "axios";


const IdealWeightForm = () => {
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");

  const handleSelectChange = (event) => {
    setGender(event.target.value);
    console.log("Selected option:", event.target.value);
  };

  function check() {
    if (gender === "" || height === "") {
      alert("Enter all the details");
    } else {
      getData();
    }
  }
  async function getData() {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://fitness-calculator.p.rapidapi.com/idealweight",
      params: {
        gender: "male",
        height: "180",
      },
      headers: {
        "X-RapidAPI-Key": "c7454bca6amsh50b9d1fce96bd78p173603jsnd93b391947e3",
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        <div>
          <label htmlFor="genderSelect">Select Gender: </label>
          <select
            id="genderSelect"
            onChange={handleSelectChange}
            value={gender}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Height</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter height"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={() => check()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default IdealWeightForm;
