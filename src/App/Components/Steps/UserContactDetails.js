import React, { useState } from "react";
import { Button } from "semantic-ui-react";
// import toastr from "toastr";
// import "toastr/build/toastr.min.css";
import { UserContactValidation } from "./Validation";

import { userRegister , userUpdate } from "../../../services/productService";

function UserContactDetails({
  values,
  handleChange,
  handleChangeMobile,
  nextStep,
  prevStep,
}) {
  const [errors, setErrors] = useState([]);
console.log(values)
  const handleContinue = (e) => {
    e.preventDefault();

    const error = UserContactValidation({ values });
    setErrors(error.errors);
    // console.log(error);

    if (error.count <= 0) {
      const userDetails = values.userResponse;
      if(values.isUserRegisterd){
        userUpdate(userDetails).then((res) => {
          console.log(res);
        });
      }
      else{
        userRegister(userDetails).then((res) => {
          console.log(res);
        });
      }
      nextStep(6);
    }
  };

  const handleBack = (evt) => {
    evt.preventDefault();
    prevStep(4);
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
                <span>Contact Information</span>
              </div>
            </div>

            <div className="player_information_box">
              <div className="row">
                <div className="col-md-5">
                  <div className="registration_fields">
                    <label>Mobile Number*</label>
                    <input
                      className="u-full-width"
                      placeholder="Please Enter Mobile Number"
                      type="text"
                      onChange={handleChangeMobile("MobileNumber")}
                      defaultValue={values.userResponse.MobileNumber}
                      minLength={10}
                      maxLength={10}
                      required
                    />
                    {errors.MobileNumber ? (
                      <p className="inputError">{errors.MobileNumber}</p>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-1"></div>

                <div className="col-md-5">
                  <div className="registration_fields">
                    <label>Alternate Mobile Number</label>
                    <input
                      className="u-full-width"
                      placeholder="Please Enter Alternate Mobile Number"
                      type="text"
                      onChange={handleChangeMobile("AlternateMobileNumber")}
                      defaultValue={values.userResponse.AlternateMobileNumber}
                      minLength={10}
                      maxLength={10}
                      required
                    />
                    {errors.AlternateMobileNumber ? (
                      <p className="inputError">{errors.AlternateMobileNumber}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5">
                  <div className="registration_fields">
                    <label>EmailID*</label>
                    <input
                      className="u-full-width"
                      placeholder="Please Enter EmailID"
                      type="text"
                      onChange={handleChange("Email")}
                      defaultValue={values.userResponse.Email}
                      required
                    />
                    {errors.Email ? (
                      <p className="inputError">{errors.Email}</p>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <div className="registration_fields">
                    <label>Reference of Any Coach</label>
                    <input
                      className="u-full-width"
                      placeholder="Reference of Any Coach"
                      type="text"
                      onChange={handleChange("ReferencedCoach")}
                      defaultValue={values.userResponse.ReferencedCoach}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-11">
                  <div className="registration_fields">
                    <label>Your Ambition & Motivation</label>
                    <textarea
                      placeholder="Please add the skills"
                      onChange={handleChange("Ambition")}
                      defaultValue={values.userResponse.Ambition}
                      style={{ width: "100%", height: "60px" }}
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
    </>
  );
}

export default UserContactDetails;
