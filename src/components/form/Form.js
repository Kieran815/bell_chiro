import React, { Component } from "react";

import PatientContactInfo from "./PatientContactInfo";
import EmergencyContact from "./EmergencyContact";
import BasicMedicalInfo from "./BasicMedicalInfo";
import CalendarSheet from "./CalendarSheet";
export class Form extends Component {
  state = {
    step: 1,
    service: "",
    cost: "75.00",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    marital: "",
    iceFirstName: "",
    iceLastName: "",
    icePhone: "",
    iceRelationship: "",
    conditions: "",
    takingMeds: false,
    perscriptions: "",
    knownAllergies: "",
    ailments: "",
    comments: ""
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({step: step + 1})
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({step: step - 1})
  }

  inputChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
    console.log(this.state[input])
  };


  render() {

    const { step } = this.state;

    const { service, cost, name, email, phone, address, city, state, zip, country, dob, marital, iceFirstName, iceLastName, icePhone, iceRelationship, conditions, takingMeds, perscriptions, knownAllergies, ailments, comments } = this.state;

    const values = { service, cost, name, email, phone, address, city, state, zip, country, dob, marital, iceFirstName, iceLastName, icePhone, iceRelationship, conditions, takingMeds, perscriptions, knownAllergies, ailments, comments };

    switch(step) {
      case 1:
        return (
          <PatientContactInfo
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 2:
        return(
          <EmergencyContact
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
        case 3:
          return(
            <BasicMedicalInfo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              inputChange={this.inputChange}
              values={values}
            />
          );
        case 4:
          return(
            <CalendarSheet
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              inputChange={this.inputChange}
              values={values}
            />
          )
        default:
          return (
            <div>Hello!!!</div>
          )
    }

  }

}

export default Form;
