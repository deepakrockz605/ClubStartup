import moment from "moment";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export const UserBasicValidation = e => {
  let fields = e.values;
  let errors = [];
  let count = 0;

  if (!fields["FirstName"]) {
    errors["FirstName"] = "FirstName cannot be Empty !!";
    count = count + 1;
  } else if (fields["FirstName"] !== "") {
    if (!fields["FirstName"].match(/^[a-zA-Z]+$/)) {
      errors["FirstName"] = "FirstName cannot contains spaces or Numbers !!";
      count = count + 1;
    }
  }

  if (!fields["LastName"]) {
    errors["LastName"] = "LastName cannot be Empty !!";
    count = count + 1;
  } else if (fields["LastName"] !== "") {
    if (!fields["LastName"].match(/^[a-zA-Z]+$/)) {
      errors["LastName"] = "LastName cannot contaims spaces or Numbers !!";
      count = count + 1;
    }
  }

  if (fields["DateOfBith"] === null) {
    errors["DateOfBith"] = "Date of birth Cannot be Empty !!";
    count = count + 1;
  } else {
    // const agedata =
      // new Date().getFullYear() - fields["DateOfBith"].getFullYear();
    // if (agedata <= 4) {
    //   errors["age"] = "Please Enter the valid DOB !!";
    //   errors["DateOfBith"] = "Please Enter the valid DOB !!";
    //   count = count + 1;
    // }
  }

  if (fields["Nationality"] === "default") {
    errors["Nationality"] = "Please select Nationality !!";
    count = count + 1;
  }

  if (!fields["Height"]) {
    errors["Height"] = "Height cannot be Empty !!";
    count = count + 1;
  } else if (fields["Height"] !== "") {
    if (!fields["Height"].match(/^[0-9]*\.?[0-9]*$/)) {
      errors["Height"] = "Height cannot contains letters !!";
      count = count + 1;
    }
  }

  if (!fields["Weight"]) {
    errors["Weight"] = "Weight cannot be Empty !!";
    count = count + 1;
  } else if (fields["Weight"] !== "") {
    if (!fields["Weight"].match(/^[0-9]*\.?[0-9]*$/)) {
      errors["Weight"] = "Weight cannot contains letters !!";
      count = count + 1;
    }
  }

  return { errors, count };
};

export const UserPersonalValidation = e => {
  let fields = e.values;
  let errors = [];
  let count = 0;

  if (fields["selectedPlayer"] === "defaultPlayer") {
    errors["selectedPlayer"] = "Please Select Player Position";
    count = count + 1;
  }

  if (fields["selectedSkills"] === "default0") {
    errors["selectedSkills"] = "Please Select Player Role";
    count = count + 1;
  }

  if (fields["playerFoot"] === "default") {
    errors["playerFoot"] = "Please select playing Foot";
    count = count + 1;
  }
  return { errors, count };
};

export const UserClubValidation = e => {
  let fields = e.values;
  let errors = [];
  let count = 0;

  let prevClubs = e.values.prevClubs;

  if (fields["currentClub"] !== "") {
    if (fields["clubStartDate"] === null) {
      errors["clubStartDate"] = "Start Date cannot be empty";
      count = count + 1;
    }

    if (fields["clubEndDate"] === null) {
      errors["clubEndDate"] = "End Date cannot be empty";
      count = count + 1;
    }

    if (fields["clubEndDate"] !== null) {
      if (new Date(fields["clubStartDate"]) > new Date(fields["clubEndDate"])) {
        errors["clubEndDate"] = "End Date can not be greater than Start Date";
        count = count + 1;
      } else if (
        moment(fields.clubStartDate).format("DD-MM-YYYY") ===
        moment(fields.clubEndDate).format("DD-MM-YYYY")
      ) {
        errors["clubStartDate"] = "Start Date and End Date can not be Equal";
        count = count + 1;
      } else if (fields["clubEndDate"] >= new Date()) {
        errors["clubEndDate"] =
          "End Date can not be greater than or Equal to Today";
        count = count + 1;
      } else if (fields["clubStartDate"] === null) {
        errors["clubStartDate"] = "Start Date can not Empty";
        count = count + 1;
      }
    }
  } else {
    if (fields["currentClub"] === "") {
      if (fields["clubStartDate"] !== null) {
        errors["currentClub"] = "Current Club name cannot be empty";
        count = count + 1;
      }

      if (fields["clubEndDate"] !== null) {
        errors["currentClub"] = "Current Club name cannot be empty";
        count = count + 1;
      }
    }
  }

  if (prevClubs.length >= 1) {
    if (
      prevClubs[prevClubs.length - 1].ClubName === "" ||
      prevClubs[prevClubs.length - 1].From === null ||
      prevClubs[prevClubs.length - 1].To === null
    ) {
      errors["prevClub"] = "Previous Club cannot be Empty";
      toastr.error(errors["prevClub"]);
      count = count + 1;
    } else if (
      new Date(prevClubs[prevClubs.length - 1].From) >=
        new Date(fields["clubStartDate"]) ||
      new Date(prevClubs[prevClubs.length - 1].From) ===
        new Date(prevClubs[prevClubs.length - 1].To) ||
      new Date(prevClubs[prevClubs.length - 1].To) <=
        new Date(prevClubs[prevClubs.length - 1].From) ||
      new Date(prevClubs[prevClubs.length - 1].To) >=
        new Date(new Date(fields["clubStartDate"]))
    ) {
      count = count + 1;
      errors["prevClubs"] = "Date Invalid";
      toastr.error(errors["prevClubs"]);
    }
  }
  return { errors, count };
};

export const AddClubValidation = clubs => {
  const prevClubs = clubs.prevClubs;
  let errors = [];
  let rowSucess = false;
  if (
    clubs.currentClub !== "" &&
    clubs.clubStartDate !== null &&
    clubs.clubEndDate !== null
  ) {
    if (
      new Date(clubs.clubStartDate) >= new Date(clubs.clubEndDate) ||
      moment(clubs.clubStartDate).format("DD-MM-YYYY") ===
        moment(clubs.clubEndDate).format("DD-MM-YYYY")
    ) {
      errors["clubStartDate"] =
        "End Date can not be greater than or Equal to Start Date";
      toastr.warning(errors["clubStartDate"]);
    } else if (prevClubs.length >= 1) {
      if (
        prevClubs[prevClubs.length - 1].ClubName === "" ||
        prevClubs[prevClubs.length - 1].From === null ||
        prevClubs[prevClubs.length - 1].To === null
      ) {
        errors["prevClubs"] =
          "First Please add the all fields then add new club. or else if do not have then remove";
        toastr.warning(errors["prevClubs"]);
      } else if (
        new Date(prevClubs[prevClubs.length - 1].From) >=
          new Date(clubs.clubStartDate) ||
        new Date(prevClubs[prevClubs.length - 1].From) ===
          new Date(prevClubs[prevClubs.length - 1].To) ||
        new Date(prevClubs[prevClubs.length - 1].To) <=
          new Date(prevClubs[prevClubs.length - 1].From) ||
        new Date(prevClubs[prevClubs.length - 1].To) >=
          new Date(new Date(clubs.clubStartDate))
      ) {
        errors["prevClubs"] =
          "Previous Clubs Dates should not be more than or equal to current Date";
        toastr.warning(errors["prevClubs"]);
      } else {
        errors["prevClubs"] = "Another Row Added";
        toastr.success(errors["prevClubs"]);
        rowSucess = true;
      }
    } else {
      rowSucess = true;
      errors["prevClubs"] = "Another Row Added";
      toastr.success(errors["prevClubs"]);
    }
  } else {
    if (clubs.currentClub === "") {
      errors["currentClub"] = "Currrent Club cannot be Empty";
      toastr.error(errors["currentClub"]);
    } else if (clubs.clubStartDate === null) {
      errors["currentClub"] = "Currrent Clubs StartDate cannot be Empty";
      toastr.error(errors["currentClub"]);
    } else if (clubs.clubEndDate === null) {
      errors["currentClub"] = "Currrent Clubs EndDate cannot be Empty";
      toastr.error(errors["currentClub"]);
    }
  }
  return { errors, rowSucess };
};

export const UserContactValidation = e => {
  let fields = e.values;
  let errors = [];
  let count = 0;

  if (!fields["mobile"]) {
    errors["mobile"] = "Invalid Mobile Number";
    count = count + 1;
  } else if (fields["mobile"] !== "") {
    if (fields["mobile"].length <= 9) {
      errors["mobile"] = "Please Enter the correct Mobile Number";
      count = count + 1;
    }
  }

  if (!fields["alternateMobile"]) {
  } else if (fields["alternateMobile"] !== "") {
    if (fields["alternateMobile"].length <= 9) {
      errors["alternateMobile"] = "Please Enter the correct Mobile Number";
      count = count + 1;
    }
  }

  if (!fields["emailID"]) {
    errors["emailID"] = "emailID cannot be empty";
    count = count + 1;
  }

  if (typeof fields["emailID"] !== "undefined") {
    let lastAtPos = fields["emailID"].lastIndexOf("@");
    let lastDotPos = fields["emailID"].lastIndexOf(".");

    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        fields["emailID"].indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        fields["emailID"].length - lastDotPos > 2
      )
    ) {
      errors["emailID"] = "Email is not valid";
      count = count + 1;
    }
  }
  return { errors, count };
};