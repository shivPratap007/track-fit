import React, { useState } from "react";
import axios from "axios";

const BMI = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  async function checkBmi(data) {
    console.log(data.age,data.weight,data.height);
    const options = {
      method: "GET",
      url: "https://fitness-calculator.p.rapidapi.com/bmi",
      params: {
        age: data.age,
        weight: data.weight,
        height: data.height,
      },
      headers: {
        "X-RapidAPI-Key": "c7454bca6amsh50b9d1fce96bd78p173603jsnd93b391947e3",
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted values:", { age, weight, height });
    let data={age,weight,height};
    let result=await checkBmi(data);

    setAge("");
    setWeight("");
    setHeight("");
  };
  return (
    <>
      <div className="container">
        <h2>User Information Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">
              Weight (kg):
            </label>
            <input
              type="number"
              className="form-control"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="height" className="form-label">
              Height (cm):
            </label>
            <input
              type="number"
              className="form-control"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default BMI;
