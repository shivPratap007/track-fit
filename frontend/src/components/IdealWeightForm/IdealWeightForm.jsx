import React from "react";

const IdealWeightForm = () => {
  return (
    <div>
      <div>
        <div class="form-group">
          <label for="exampleInputEmail1">Gender</label>
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
    </div>
  );
};

export default IdealWeightForm;
