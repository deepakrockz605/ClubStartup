import axios from "axios";

let token = JSON.parse(sessionStorage.getItem("usertoken"));

const userID = "5e8c7ce69fe3f000246ee4be";

const config = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOGM3Y2U2OWZlM2YwMDAyNDZlZTRiZSIsImlhdCI6MTU4NjI2NTM0NX0.87ZcTppkJvyI1UC3Dxk3YUMxo20YUB-VWjYEzAG-Rk4`,
  },
};

export const getUserDetails = () => {
  return axios
    .get(
      `https://portfolio-api-node.herokuapp.com/api/Player/${userID}`,
      config
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userRegister = (userDetails) => {
  debugger
  return axios
    .post(
      "https://portfolio-api-node.herokuapp.com/api/Player/create",
      {
        UserId: userID,
        FirstName: userDetails.FirstName,
        LastName: userDetails.LastName,
        DateOfBirth: userDetails.DateOfBirth,
        Nationality: userDetails.Nationality,
        Height: userDetails.Height,
        Weight: userDetails.Weight,
        Position: userDetails.Position,
        Role: userDetails.Role,
        Foot: userDetails.Foot,
        Skills: userDetails.Skills,
        Agent: userDetails.Agent,
        Clubs: userDetails.Clubs,
        Ratings : userDetails.Ratings,
        Ambition: userDetails.Ambition,
        MobileNumber: userDetails.MobileNumber,
        AlternateMobileNumber: userDetails.AlternateMobileNumber,
        Email: userDetails.Email,
        ReferencedCoach: userDetails.ReferencedCoach,
      },
      config
    )
    .then((res) => {
      console.log(token);
      return res;
    })
    .catch((err) => {
      console.log(token);
      console.log(err);
    });
};


export const userUpdate = (userDetails) => {
  debugger;
  return axios
    .post(
      "https://portfolio-api-node.herokuapp.com/api/Player/update",
      {
        UserId: userID,
        FirstName: userDetails.FirstName,
        LastName: userDetails.LastName,
        DateOfBirth: userDetails.DateOfBirth,
        Nationality: userDetails.Nationality,
        Height: userDetails.Height,
        Weight: userDetails.Weight,
        Position: userDetails.Position,
        Role: userDetails.Role,
        Foot: userDetails.Foot,
        Skills: userDetails.Skills,
        Agent: userDetails.Agent,
        Clubs: userDetails.Clubs,
        Ratings : userDetails.Ratings,
        // Ratings: {
        //   Catching: userDetails.Ratings.Catching,
        //   Punching: userDetails.Ratings.Punching,
        //   Throwing: userDetails.Ratings.Throwing,
        //   Reflexes: userDetails.Ratings.Reflexes,
        //   Distribution: userDetails.Ratings.Distribution,
        //   Center_Defender: userDetails.Ratings.Center_Defender,
        //   Right_Back: userDetails.Ratings.Right_Back,
        //   Left_Back: userDetails.Ratings.Left_Back,
        //   Agility: userDetails.Ratings.Agility,
        //   Tackle: userDetails.Ratings.Tackle,
        //   Strength: userDetails.Ratings.Strength,
        //   Positioning: userDetails.Ratings.Positioning,
        //   Communication: userDetails.Ratings.Communication,
        //   Ariel_Ability: userDetails.Ratings.Ariel_Ability,
        //   Vision: userDetails.Ratings.Vision,
        //   Crossing: userDetails.Ratings.Crossing,
        //   Fitness: userDetails.Ratings.Fitness,
        //   Shooting: userDetails.Ratings.Shooting,
        //   Ball_Control: userDetails.Ratings.Ball_Control,
        //   Dribbling: userDetails.Ratings.Dribbling,
        //   First_Touch: userDetails.Ratings.First_Touch,
        //   Passing: userDetails.Ratings.Passing,
        //   Heading: userDetails.Ratings.Heading,
        // },
        Ambition: userDetails.Ambition,
        MobileNumber: userDetails.MobileNumber,
        AlternateMobileNumber: userDetails.AlternateMobileNumber,
        Email: userDetails.Email,
        ReferencedCoach: userDetails.ReferencedCoach,
      },
      config
    )
    .then((res) => {
      console.log(token);
      return res;
    })
    .catch((err) => {
      console.log(token);
      console.log(err);
    });
};

export const login = (user) => {
  // debugger;
  return axios
    .post("https://portfolio-api-node.herokuapp.com/api/User/login", {
      Email: user.email,
      Password: user.password,
    })
    .then((res) => {
      console.log(res.data.token);
      localStorage.setItem("usertoken", res.data.token);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
