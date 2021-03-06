import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

import { UserClubValidation } from "./Validation";

function UserClubExperiance({
  values,
  handleChange,
  handleDatePicker,
  handleText,
  handleRemoveClub,
  addPreviousClub,
  handlePrevStartDatePicker,
  handlePrevEndDatePicker,
  handleAchievementsChange,
  nextStep,
  prevStep,
}) {
  // debugger
  const [errors, setErrors] = useState([]);

  const handleContinue = (e) => {
    e.preventDefault();
    const error = UserClubValidation({ values });
    setErrors(error.errors);
    console.log(error);

    if (error.count <= 0) {
      toastr.success("Data Saved Successfully !!");
      nextStep(5);
    }
  };

  const handleBack = (evt) => {
    evt.preventDefault();
    prevStep(3);
  };
  return (
    <>
      <div className="player_information_form">
        <div className="container">
          <div className="player_basic_information">
            <div className="verticle_line">
              <div className="hero"></div>
              <div className="triangle-right"></div>
              <div className="first-application-data first-application-data-kyc">
                <span>Club Experiance</span>
              </div>
            </div>

            <div className="player_information_box">
              {/* <div className="row row_CurrentClubBox">
                <div className="col-md-12">
                  <div className="registration_fields">
                    <label>Currently Playing With Any Club</label>
                    <input
                      className="u-full-width"
                      placeholder="Please Mention the Club Name"
                      type="text"
                      onChange={handleChange("CurrentClubName")}
                      defaultValue={values.userResponse.CurrentClubName}
                    />
                    {errors.CurrentClubName ? (
                      <p className="inputError">{errors.CurrentClubName}</p>
                    ) : null}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="registration_fields registration_fieldsDatePicker">
                    <label>Playing From</label>
                    <Datepicker
                      placeholderText="Click to select a date"
                      onChange={handleDatePicker("CurrentClubFrom")}
                      selected={values.userResponse.CurrentClubFrom}
                      className="u-full-width"
                      dateFormat="dd/MM/yyyy"
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                    />
                    {errors.CurrentClubFrom ? (
                      <p className="inputError">{errors.CurrentClubFrom}</p>
                    ) : null}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="registration_fields registration_fieldsDatePicker">
                    <label>Played Till</label>
                    <Datepicker
                      placeholderText="Click to select a date"
                      onChange={handleDatePicker("CurrentClubTo")}
                      selected={values.userResponse.CurrentClubTo}
                      className="u-full-width"
                      dateFormat="dd/MM/yyyy"
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                    />
                    {errors.CurrentClubTo ? (
                      <p className="inputError">{errors.CurrentClubTo}</p>
                    ) : null}
                  </div>
                </div>

                <div className="col-md-11">
                  <div className="registration_fields">
                    <label>Achievements</label>
                    <textarea
                      className=""
                      placeholder="Please add any Achievements if you had"
                      type="text"
                      onChange={handleChange("CurrentClubsAchievements")}
                      defaultValue={values.userResponse.CurrentClubsAchievements}
                      style={{ width: "100%", height: "60px" }}
                      required
                    />
                  </div>
                </div>
              </div> */}

              <>
                {values.userResponse.Clubs.map((question, index) => (
                  <div
                    className="row clubPrevRow row_CurrentClubBox clubPrevRow_updated"
                    key={index}
                    id={index}
                  >
                    <div className="col-md-12">
                      <div className="registration_fields">
                      {
                            index === 0 ? 
                            <label>
                          
                            Currently Playing Club
                            <span
                              className="previousClub"
                              style={{
                                marginLeft: "20px",
                                cursor: "pointer",
                                textDecoration: "underline",
                                fontSize: "12px",
                              }}
                            >
                              
                            </span>
                          </label>
                          :
                          <label>
                          
                          Previously Played Club
                          <span
                            onClick={handleRemoveClub(index)}
                            className="previousClub"
                            style={{
                              marginLeft: "20px",
                              cursor: "pointer",
                              textDecoration: "underline",
                              fontSize: "12px",
                            }}
                          >
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </span>
                        </label>
                      }


                        <input
                          type="text"
                          onChange={handleText(index)}
                          defaultValue={question.ClubName}
                          id={"question" + index}
                          className="u-full-width"
                          placeholder="Enter Club Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="registration_fields registration_fieldsDatePicker">
                        <label>Played From*</label>
                        <Datepicker
                          placeholderText="Click to select a date"
                          onChange={handlePrevStartDatePicker(index)}
                          selected={question.From}
                          className="u-full-width"
                          dateFormat="dd/MM/yyyy"
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="registration_fields registration_fieldsDatePicker">
                        <label>Played Till*</label>
                        <Datepicker
                          placeholderText="Click to select a date"
                          onChange={handlePrevEndDatePicker(index)}
                          selected={question.To}
                          className="u-full-width"
                          dateFormat="dd/MM/yyyy"
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                        />
                      </div>
                    </div>

                    <div className="col-md-11">
                      <div className="registration_fields">
                        <label>Achievements</label>
                        <textarea
                          className=""
                          placeholder="Please add any Achievements if you had"
                          type="text"
                          onChange={handleAchievementsChange(index)}
                          defaultValue={question.Achievements}
                          style={{ width: "100%", height: "60px" }}
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </>

              <p onClick={addPreviousClub} className="clubsBtn">
                + Click to Add Last Played Clubs
              </p>
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
    </>
  );
}

export default UserClubExperiance;
