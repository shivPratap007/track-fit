import React, { useState } from "react";
import axios from "axios";

const BMI = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiData, setBmiData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://fitness-calculator.p.rapidapi.com/bmi", {
        params: { age, weight, height },
        headers: {
          "X-RapidAPI-Key": "c7454bca6amsh50b9d1fce96bd78p173603jsnd93b391947e3",
          "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
        },
      });
      console.log(response.data);
      setBmiData(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setBmiData(null);
      setError("Failed to fetch BMI data. Please try again.");
    } finally {
      // Reset form fields after form submission
      setAge("");
      setWeight("");
      setHeight("");
    }
  };

  return (
    <div className="container">
      {bmiData ? (
        <div>
          <div>BMI: {bmiData.bmi}</div>
          <div>Health: {bmiData.health}</div>
          <div> {bmiData}</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age:</label>
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
            <label htmlFor="weight" className="form-label">Weight (kg):</label>
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
            <label htmlFor="height" className="form-label">Height (cm):</label>
            <input
              type="number"
              className="form-control"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default BMI;
