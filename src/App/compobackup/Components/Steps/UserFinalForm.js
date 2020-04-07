import React from "react";
import { Button } from "semantic-ui-react";
import Slider from "react-rangeslider";
import moment from "moment";

function UserFinalForm({ values, nextStep, prevStep }) {
  const handleContinue = evt => {
    evt.preventDefault();
    nextStep(6);
  };

  const handleBack = evt => {
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
                <span>Final Review Form</span>
              </div>
            </div>

            <div className="player_information_box">
              <>
                <h1 className="FinalReviewHeader FinalReviewHeaderPT">
                  Basic Information
                </h1>
                <div className="row FinalReviewHeaderRow">
                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">Firstname</p>
                      <p className="reviewData--value">{values.FirstName}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">Lastname</p>
                      <p className="reviewData--value">{values.LastName}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">Nationality</p>
                      <p className="reviewData--value">{values.Nationality}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">Date of Birth</p>
                      <p className="reviewData--value">
                        {moment(values.DateOfBith).format("DD-MM-YYYY")}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">Age</p>
                      <p className="reviewData--value">{values.age}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">Height</p>
                      <p className="reviewData--value">{values.Height}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">Weight</p>
                      <p className="reviewData--value">{values.Weight}</p>
                    </div>
                  </div>
                </div>
              </>

              <>
                <h1 className="FinalReviewHeader">Personal Information</h1>
                <div className="row FinalReviewHeaderRow">
                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">Player Position</p>
                      <p className="reviewData--value">
                        {values.selectedPlayer}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">Specific Role</p>
                      <p className="reviewData--value">
                        {values.selectedSkills}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">Player Foot</p>
                      <p className="reviewData--value">{values.playerFoot}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">Player Agent</p>
                      <p className="reviewData--value">
                        {values.playerAgent === "" ? (
                          "none"
                        ) : (
                          <span>{values.playerAgent}</span>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="reviewData">
                      <p className="reviewData--header">
                        Skills / Specialities
                      </p>
                      <p className="reviewData--value">
                        {values.playerskills === "" ? (
                          "none"
                        ) : (
                          <span>{values.playerskills}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </>

              <>
                <h1 className="FinalReviewHeader">Technical Abilities</h1>
                <div className="row FinalReviewHeaderRow">
                  {values.playerAbilities.map((e, key) => {
                    return (
                      <div className="col-md-4" key={key}>
                        <div className="reviewData">
                          <p className="reviewData--header">
                            {e}
                          </p>
                          <div className="slider">
                            <Slider
                              min={0}
                              max={5}
                              disabled
                              value={values.playerabilityVal[e]}
                            />
                          </div>
                          <p
                            className="reviewData--value"
                            style={{ textAlign: "center" }}
                          >
                            {values.playerabilityVal[e]}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>

              <div className="FinalReviewHeaderRow FinalReviewHeaderClubRow">
                <>
                  <h1 className="FinalReviewHeader">Club Experiance</h1>
                  <div className="row clubCurrentTable">
                    <div className="col-md-4">
                      <div className="reviewData">
                        <p className="reviewData--header">
                          Currently Playing With Any Club
                        </p>
                        <p className="reviewData--value">
                          {values.currentClub === ""
                            ? "Not Assoiciated with any Club"
                            : values.currentClub}
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="reviewData">
                        <p className="reviewData--header">From Date</p>
                        <p className="reviewData--value">
                          {values.clubStartDate !== null
                            ? moment(values.clubStartDate).format("DD-MM-YYYY")
                            : "-"}
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="reviewData">
                        <p className="reviewData--header">To Date</p>
                        <p className="reviewData--value">
                          {values.clubEndDate !== null
                            ? moment(values.clubEndDate).format("DD-MM-YYYY")
                            : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </>

                {values.prevClubs.length > 0 ? (
                  <div className="PrevClubData">
                    <div className="row ">
                      <div className="col-md-4">
                        <div className="reviewData">
                          <p className="reviewData--header">
                            Previously Played Clubs
                          </p>
                        </div>
                      </div>
                    </div>

                    {values.prevClubs.map((e, key) => {
                      return (
                        <div className="row" key={key}>
                          <div className="col-md-4">
                            <div className="reviewData">
                              <p className="reviewData--value">
                                {e.ClubName}
                              </p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="reviewData">
                              <p className="reviewData--value">
                                {moment(e.From).format(
                                  "DD-MM-YYYY"
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="reviewData">
                              <p className="reviewData--value">
                                {moment(e.prevClubEndDate).format("DD-MM-YYYY")}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>

              <>
                <h1 className="FinalReviewHeader">Contact Information</h1>
                <div className="row FinalReviewHeaderRow FinalReviewHeaderRowBT">
                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">Mobile Number</p>
                      <p className="reviewData--value">{values.mobile}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">Email ID</p>
                      <p className="reviewData--value">{values.emailID}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="reviewData">
                      <p className="reviewData--header">
                        Reference of Any Coach
                      </p>
                      <p className="reviewData--value">
                        {values.coachReference === "" ? (
                          "No"
                        ) : (
                          <span>{values.coachReference}</span>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="reviewData">
                      <p className="reviewData--header">
                        Your Ambition & Motivation
                      </p>
                      <p className="reviewData--value">
                        {values.ambition === "" ? (
                          "none"
                        ) : (
                          <span>{values.ambition}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </>
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

export default UserFinalForm;