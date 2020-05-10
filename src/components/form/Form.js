import React, { Component } from "react";
import PatientContactInfo from "./PatientContactInfo";
import EmergencyContact from "./EmergencyContact";
import BasicMedicalInfo from "./BasicMedicalInfo";
import CalendarSheet from "./CalendarSheet";
import Confirmation from "./Confirmation";

export class Form extends Component {
  state = {
    step: 1,
    service: "",
    apptDate: "",
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

  updateCondition = input => e => {
    this.setState({conditions: [...this.state.conditions, e.target.value]})
  }

  render() {

    const { step } = this.state;

    const { service, apptDate, cost, firstName, lastName, dob, email, phone, address, city, state, zip, country, marital, iceFirstName, iceLastName, icePhone, iceRelationship, conditions, takingMeds, perscriptions, knownAllergies, ailments, comments } = this.state;

    const values = { service, apptDate, cost, firstName, lastName, dob, email, phone, address, city, state, zip, country, marital, iceFirstName, iceLastName, icePhone, iceRelationship, conditions, takingMeds, perscriptions, knownAllergies, ailments, comments };

    const formStyle = {
      body: {
        input: {
          width: "25vw"
        }
      }
    }

    switch(step) {
      case 1:
        return (
          <PatientContactInfo
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            values={values}
            style={formStyle}
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
              updateCondition={this.updateCondition}
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
        case 5:
          return(
            <Confirmation
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          )
        case 6:
          return (
            <div>Confirmed</div>
          )
        default:
          return (
            <div>
              <p>Something went Wrong</p>
              <a href="/">Back to Home</a>
            </div>
          )
    }
  }
}

export default Form;
