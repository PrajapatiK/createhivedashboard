import React from "react";
import "./index.css";

const AddUser = () => {
  return (
    <div className="container show-data" style= {{transitionDelay: "0.1s"}}>
      <h3 style={{ color: "red" }}>Welcome to add new user</h3>
      <form autoComplete="off">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <strong>Name</strong>
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <strong>Owner</strong>
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <strong>Tagline</strong>
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
