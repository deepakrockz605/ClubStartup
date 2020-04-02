import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import {UserBasicValidation} from "./Validation";

function UserBasicDetails({
  values,
  handleChange,
  handleDatePicker,
  nextStep
}) {
  const [errors, setErrors] = useState([]);

  const handleContinue = async e => {
    e.preventDefault();
    const error = UserBasicValidation({ values });
    await setErrors(error.errors);
    console.log(errors);

    if (error.count <= 0) {
      toastr.success("Data Saved Successfully !!");
      nextStep(2);
    }
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
                <span>Basic Information</span>
              </div>
            </div>

            <div className="player_information_box">
              <div className="row">
                <div className="col-md-5">
                  <div className="registration_fields">
                    <label>First Name*</label>
                    <input
                      className="u-full-width"
                      placeholder="First Name"
                      type="text"
                      onChange={handleChange("firstName")}
                      defaultValue={values.firstName}
                      autoFocus
                      required
                    />
                    <p className="inputError">{errors.firstName}</p>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <div className="registration_fields">
                    <label>Last Name*</label>
                    <input
                      className="u-full-width"
                      placeholder="Last Name"
                      type="text"
                      onChange={handleChange("lastName")}
                      defaultValue={values.lastName}
                    />
                    <p className="inputError">{errors.lastName}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div className="registration_fields registration_fieldsDatePicker">
                    <label>Birth Date*</label>
                    <Datepicker
                      placeholderText="Click to select a date"
                      onChange={handleDatePicker("birthDate")}
                      selected={values.birthDate}
                      className="u-full-width"
                      dateFormat="dd/MM/yyyy"
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                    />
                    <p className="inputError">{errors.birthDate}</p>
                  </div>
                </div>

                <div className="col-md-1"></div>

                <div className="col-md-5">
                  <div className="registration_fields">
                    <label>Age*</label>
                    <input
                      className="u-full-width"
                      type="text"
                      defaultValue={values.age + " Years"}
                      disabled
                    />
                    <p className="inputError">{errors.age}</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5">
                  <div className="registration_fields">
                    <label>Nationality*</label>
                    <div className="customDropDownArrow">
                      <span>
                        <i className="right"></i>
                      </span>
                      <select
                        onChange={handleChange("nationality")}
                        value={values.nationality}
                        className="browser-default custom-select"
                      >
                        <option defaultValue value="default">
                          Select Nationality
                        </option>
                        <option value="india">India</option>
                        <option value="brazil">Brazil</option>
                      </select>
                      <p className="inputError">{errors.nationality}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5">
                  <div className="registration_fields">
                    <label>Height*</label>
                    <input
                      className="u-full-width"
                      placeholder="Height in C.M"
                      type="text"
                      onChange={handleChange("height")}
                      defaultValue={values.height}
                      minLength={0}
                      maxLength={3}
                    />
                    <p className="inputError">{errors.height}</p>
                  </div>
                </div>
                <div className="col-md-1"></div>

                <div className="col-md-5">
                  <div className="registration_fields">
                    <label>Weight*</label>
                    <input
                      className="u-full-width"
                      placeholder="Weight In K.G"
                      type="text"
                      onChange={handleChange("weight")}
                      defaultValue={values.weight}
                      maxLength={2}
                    />
                    <p className="inputError">{errors.weight}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button className="NEXT-btn" onClick={handleContinue}>
            Save And Continue
          </Button>
        </div>
      </div>
    </>
  );
}

export default UserBasicDetails;