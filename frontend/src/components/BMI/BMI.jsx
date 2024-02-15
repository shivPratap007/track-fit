import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BMI() {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiData, setBmiData] = useState({});

  async function getData() {
    const options = {
      method: "GET",
      url: "https://fitness-calculator.p.rapidapi.com/bmi",
      params: {
        age: "25",
        weight: "65",
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
      setBmiData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function check() {
    if (age === "" || weight === "" || height === "") {
      alert("Enter all the details");
    } else {
      getData();
    }
  }

  console.log(bmiData, "===");
  return (
    <>
      {Object.keys(bmiData).length !== 0 ? (
        <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div style={{border:"2px solid black",padding:"50px",borderRadius:"20px", boxShadow:"5px 5px 5px black"}}>
            <div>BMI : {bmiData.data.bmi} </div>
            <div>Health : {bmiData.data.health}</div>
            if
            <button style={{borderRadius:"5px",marginTop:"5px"}}>
              <Link to="/bmi"> Calculate again</Link>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div class="form-group">
            <label for="exampleInputEmail1">Age</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Weight</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter weight"
              onChange={(e) => setWeight(e.target.value)}
            />
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
      )}
    </>
  );
}
