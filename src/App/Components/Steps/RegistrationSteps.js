import React, { PureComponent } from "react";
import UserBasicDetails from "./UserBasicDetails";
import UserPersonalDetails from "./UserPersonalDetails";
import UserTechnicalAbilities from "./UserTechnicalAbilities";
import UserClubExperiance from "./UserClubExperiance";
import UserContactDetails from "./UserContactDetails";
import UserFinalForm from "./UserFinalForm";
import "../../CSS/Steps.scss";
import { AddClubValidation } from "./Validation";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

class RegistrationSteps extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      steps: {
        step1: true,
        step2: false,
        step3: false,
        step4: false,
        step5: false
      },

      // Step 1
      firstName: "",
      lastName: "",
      birthDate: null,
      age: 0,
      nationality: "default",
      height: "",
      weight: "",

      // Step 2
      players: [],
      skillsSet: [],
      selectedPlayer: "defaultPlayer",
      selectedSkills: "default0",
      playerFoot: "default",
      playerAgent: "",
      playerskills: "",

      // Step 3
      mobile: "",
      alternateMobile: "",
      emailID: "",
      coachReference: "",
      ambition: "",

      // Step 4
      currentClub: "",
      clubStartDate: null,
      clubEndDate: null,
      playerAchivements : '',
      prevClubs: [],
      prevClubName: "",
      prevClubStartDate: null,
      prevClubEndDate: null,

      // Step 5
      playerAbilities: [],
      playerabilityVal: {
        Catching: 0,
        Punching: 0,
        Throwing: 0,
        Reflexes: 0,
        Distribution: 0,
        Center_Defender: 0,
        Right_Back: 0,
        Left_Back: 0,
        Agiity: 0,

        Tackle: 0,
        Strength: 0,
        Positioning: 0,
        Communication: 0,
        Ariel_Ability: 0,

        Vision: 0,
        Crossing: 0,
        Fitness: 0,

        Shooting: 0,
        Ball_Control: 0,
        Dribbling: 0,
        First_Touch: 0,
        Passing: 0,
        heading: 0
      },
      errors: {}
    };
  }

  addPreviousClub = async e => {
    e.preventDefault();
    const obj = {
      prevClubName: "",
      prevClubStartDate: null,
      prevClubEndDate: null
    };
    const error = AddClubValidation(this.state);

    if (error.rowSucess) {
      this.setState({ prevClubs: [...this.state.prevClubs, obj] });
    }
  };

  handlePrevStartDatePicker = i => date => {
    let prevClubs = [...this.state.prevClubs];
    prevClubs[i].prevClubStartDate = date;
    this.setState({
      prevClubs
    });
  };

  handlePrevEndDatePicker = i => date => {
    let prevClubs = [...this.state.prevClubs];
    prevClubs[i].prevClubEndDate = date;
    this.setState({
      prevClubs
    });
  };

  setSteps = (step1, step2, step3, step4, step5) => {
    const steps = {};
    steps.step1 = step1;
    steps.step2 = step2;
    steps.step3 = step3;
    steps.step4 = step4;
    steps.step5 = step5;

    this.setState({
      steps: steps
    });
  };

  setTopBar = val => {
    if (val === 1) {
      this.setSteps(true, false, false, false, false);
    } else if (val === 2) {
      this.setSteps(true, true, false, false, false);
    } else if (val === 3) {
      this.setSteps(true, true, true, false, false);
    } else if (val === 4) {
      this.setSteps(true, true, true, true, false);
    } else if (val === 5) {
      this.setSteps(true, true, true, true, true);
    }
    return val;
  };

  nextStep = val => {
    const topSteps = this.setTopBar(val);
    this.setState({
      currentStep: topSteps
    });
  };

  prevStep = val => {
    const topSteps = this.setTopBar(val);
    this.setState({
      currentStep: topSteps
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleChangeMobile = input => async e => {
    const re = /^[0-9\b]+$/;
    if (re.test(e.target.value)) {
      await this.setState({ [input]: e.target.value });
    }
  };

  handleDatePicker = input => async date => {
    await this.setState({
      [input]: date
    });
    if (input === "birthDate") {
      if (this.state.birthDate !== null) {
        await this.setState({
          age: new Date().getFullYear() - this.state.birthDate.getFullYear()
        });
      }
    }
  };

  handlePlayerPosition = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  handleSliderChange = async (field, val) => {
    let fields = this.state.playerabilityVal;
    fields[field] = val;
    await this.setState({ fields });
    this.forceUpdate();
  };

  handleText = i => e => {
    let prevClubs = [...this.state.prevClubs];
    prevClubs[i].prevClubName = e.target.value;
    this.setState({
      prevClubs
    });
  };

  handleRemoveClub = i => async e => {
    e.preventDefault();
    let prevClubs = [
      ...this.state.prevClubs.slice(0, i),
      ...this.state.prevClubs.slice(i + 1)
    ];
    await this.setState({
      prevClubs
    });
  };

  componentDidMount() {
    this.setState({
      players: [
        {
          name: "Goal Keeper",
          skills: ["Goal Keeper"],
          techAbilities: [
            "Catching",
            "Punching",
            "Throwing",
            "Reflexes",
            "Distribution",
            "Agiity"
          ]
        },
        {
          name: "Defender",
          skills: ["Center_Defender", "Right_Back", "Left_Back"],
          techAbilities: [
            "Tackle",
            "Strength",
            "Positioning",
            "Communication",
            "Ariel_Ability"
          ]
        },
        {
          name: "Mid Fielder",
          skills: [
            "Center Attacking Mid-fielder(CAM)",
            "Center Defending Mid-fielder(CDM)",
            "Right Mid-Fielder",
            "Left Mid-Fielder",
            "Right Winger",
            "Left Winger"
          ],
          techAbilities: [
            "Passing",
            "Dribbling",
            "Ball_Control",
            "Vision",
            "Crossing",
            "Fitness"
          ]
        },
        {
          name: "Striker",
          skills: ["Center Forward", "Second Striker"],
          techAbilities: [
            "Shooting",
            "Ball_Control",
            "Dribbling",
            "First_Touch",
            "Passing",
            "heading"
          ]
        }
      ]
    });
  }

  handleChangeSteps = async e =>{
      const topSteps = this.setTopBar(e);
      this.setState({currentStep : topSteps})
      console.log(topSteps)
  }

  render() {
    const { currentStep } = this.state;
    const values = { ...this.state };

    toastr.options = {"positionClass": "toast-top-center"}

    if (values.selectedPlayer !== "defaultPlayer") {
      values.skillsSet = values.players.find(
        cntry => cntry.name === this.state.selectedPlayer
      ).skills;

      values.playerAbilities = values.players.find(
        cntry => cntry.name === this.state.selectedPlayer
      ).techAbilities;
    }

    var data = "";
    switch (currentStep) {
      case 1:
        data = (
          <UserBasicDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleDatePicker={this.handleDatePicker}
            values={values}
          />
        );
        break;
      case 2:
        data = (
          <UserPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handlePlayerPosition={this.handlePlayerPosition}
            handleChange={this.handleChange}
            values={values}
          />
        );
        break;
      case 3:
        data = (
          <UserTechnicalAbilities
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleSliderChange={this.handleSliderChange}
          />
        );
        break;
      case 4:
        data = (
          <UserClubExperiance
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleDatePicker={this.handleDatePicker}
            addPreviousClub={this.addPreviousClub}
            handleText={this.handleText}
            handleRemoveClub={this.handleRemoveClub}
            handlePrevStartDatePicker={this.handlePrevStartDatePicker}
            handlePrevEndDatePicker={this.handlePrevEndDatePicker}
            values={values}
          />
        );
        break;
      case 5:
        data = (
          <UserContactDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleChangeMobile={this.handleChangeMobile}
            values={values}
          />
        );
        break;
      default:
        return (
          <UserFinalForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
    }

    return (
      <div className="registration_Wrapper">
        <div className="Multistep--stepsBar">
          <div className="container">
            <ul className="Multistep--stepsBarUl">
              <li
                className={
                  this.state.steps.step1
                    ? " Multistep--stepsBarList isvisited"
                    : " Multistep--stepsBarList"
                }
              >
                <div className="multistep--box">
                  <p className="multistep--Innerbox" id="stepone" onClick={this.state.steps.step1 ? ()=>this.handleChangeSteps(1) : null}>
                    1
                  </p>
                </div>
              </li>

              <li
                className={
                  this.state.steps.step2
                    ? " Multistep--stepsBarList isvisited"
                    : " Multistep--stepsBarList"
                }
              >
                <div className="multistep--box">
                  <p className="multistep--Innerbox" id="steptwo" onClick={this.state.steps.step2 ? ()=>this.handleChangeSteps(2) : null}>
                    2
                  </p>
                </div>
              </li>
              <li
                className={
                  this.state.steps.step3
                    ? " Multistep--stepsBarList isvisited"
                    : " Multistep--stepsBarList"
                }
              >
                <div className="multistep--box">
                  <p className="multistep--Innerbox" id="stepthree"  onClick={this.state.steps.step3 ? ()=>this.handleChangeSteps(3) : null}>
                    3
                  </p>
                </div>
              </li>
              <li
                className={
                  this.state.steps.step4
                    ? " Multistep--stepsBarList isvisited"
                    : " Multistep--stepsBarList"
                }
              >
                <div className="multistep--box">
                  <p className="multistep--Innerbox" id="stepfour"  onClick={this.state.steps.step4 ? ()=>this.handleChangeSteps(4) : null}>
                    4
                  </p>
                </div>
              </li>
              <li
                className={
                  this.state.steps.step5
                    ? " Multistep--stepsBarList isvisited"
                    : " Multistep--stepsBarList"
                }
              >
                <div className="multistep--box">
                  <p className="multistep--Innerbox" id="stepfive"  onClick={this.state.steps.step5 ? ()=>this.handleChangeSteps(5) : null}>
                    5
                  </p>
                </div>
              </li>
            </ul>
            <div>
              <p className="mandatoryText">* All Fields are Mandatory</p>
            </div>
          </div>
        </div>
        <div>{data}</div>
      </div>
    );
  }
}

export default RegistrationSteps;