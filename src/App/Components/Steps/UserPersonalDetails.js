import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { UserPersonalValidation } from "./Validation";

function UserPersonalDetails({
  values,
  handlePlayerPosition,
  handleChange,
  nextStep,
  prevStep
}) {
  const [errors, setErrors] = useState([]);

  const handleContinue = async e => {
    e.preventDefault();
    const error = UserPersonalValidation({ values });
    await setErrors(error.errors);

    if (error.count <= 0) {
      toastr.success("Data Saved Successfully !!");
      nextStep(3);
    }
  };

  const handleBack = evt => {
    evt.preventDefault();
    prevStep(1);
  };

  return (
    <div className="player_information_form">
      <div className="container">
        <div className="player_basic_information">
          <div className="verticle_line">
            <div className="hero"></div>
            <div className="triangle-right"></div>
            <div className="first-application-data first-application-data-kyc">
              <span>Player Information</span>
            </div>
          </div>

          <div className="player_information_box">
            <div className="row">
              <div className="col-md-5">
                <div className="registration_fields">
                  <label>Player Position*</label>
                  <div className="customDropDownArrow">
                    <span>
                      <i className="right"></i>
                    </span>
                    <select
                      value={values.selectedPlayer}
                      onChange={handlePlayerPosition("selectedPlayer")}
                      className="browser-default custom-select"
                    >
                      <option value="defaultPlayer">--Player Position--</option>
                      {values.players.map((e, key) => {
                        return (
                          <option value={e.name} key={key}>
                            {e.name}
                          </option>
                        );
                      })}
                    </select>
                    <p className="inputError">
                      {errors.selectedPlayer}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>

              <div className="col-md-5">
                <div className="registration_fields">
                  <label>Specific Role*</label>
                  <div className="customDropDownArrow">
                    <span>
                      <i className="right"></i>
                    </span>
                    <select
                      value={values.selectedSkills}
                      onChange={handlePlayerPosition("selectedSkills")}
                      className="browser-default custom-select"
                    >
                      <option value="default0">--Player Role--</option>
                      {values.skillsSet.map((e, key) => {
                        return (
                          <option value={e} key={key}>
                            {e}
                          </option>
                        );
                      })}
                    </select>
                    <p className="inputError">
                      {errors.selectedSkills}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-5">
                <div className="registration_fields">
                  <label>Playing Foot*</label>
                  <div className="customDropDownArrow">
                    <span>
                      <i className="right"></i>
                    </span>
                    <select
                      value={values.playerFoot}
                      onChange={handlePlayerPosition("playerFoot")}
                      className="browser-default custom-select"
                    >
                      <option defaultValue value="default">
                        Select Foot
                      </option>
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                    </select>
                    <p className="inputError">
                      {errors.playerFoot}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5">
                <div className="registration_fields">
                  <label>Player Agent</label>
                  <input
                    className="u-full-width"
                    placeholder="Agent Name"
                    type="text"
                    onChange={handleChange("playerAgent")}
                    defaultValue={values.playerAgent}
                    autoFocus
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-11">
                <div className="registration_fields">
                  <label>Skills / Specialities</label>
                  <textarea
                    className=""
                    placeholder="Please add Skills / Specialities"
                    type="text"
                    onChange={handleChange("playerskills")}
                    defaultValue={values.playerskills}
                    style={{ width: "100%", height: "60px" }}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button className="NEXT-btn" onClick={handleBack}>
          Back
        </Button>
        <Button className="NEXT-btn" onClick={handleContinue}>
          Save And Continue
        </Button>
      </div>
    </div>
  );
}

export default UserPersonalDetails;