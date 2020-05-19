import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Confirmation extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {

    const {
      values: { service, cost, firstName, lastName, dob, email, phone, address, city, state, zip, country, marital, iceFirstName, iceLastName, icePhone, iceRelationship, conditions, takingMeds, perscriptions, knownAllergies, ailments, comments, apptDate }
    } = this.props;

    return(
      <div>
        <div>
          <h2 style={{ textAlign: 'center' }}>Confirm Your Information</h2>
          <p style={{ textAlign: 'center' }}><strong>Scheduling {service} (${cost}) appointment on {apptDate}</strong></p>
        </div>
        <div style={{ display: 'flex', justifyContent: "space-around", flexWrap: "wrap"}}>
          <div>
            <ul>
              <h3>Personal:</h3>
              <li>Name: {firstName} {lastName}</li>
              <li>Date of Birth: {dob}</li>
              <li>E-Mail: {email}</li>
              <li>Phone: {phone}</li>
              <li>Address: <br/>{address}<br/>{city}, {state} {zip}<br/>{country}</li>
              <li>Marital Status: {marital}</li>
            </ul>
          </div>
          <div>
            <h3>Emergency Contact:</h3>
            <ul>
              <li>Name: {iceFirstName} {iceLastName}</li>
              <li>Phone: {icePhone}</li>
              <li>Relationship: {iceRelationship}</li>
            </ul>
          </div>
          <div>
            <h3>Health Overview:</h3>
              <ul>
                <p>Conditions:</p>
                <li>{conditions === "" ? "None" : conditions.map(condition => {return <li>{condition}</li>})}</li>
              </ul>
              <ul>
                <li>Currently taking medication? : {takingMeds}</li>
                <li>Perscriptions: {perscriptions}</li>
                <li>Allergies: {knownAllergies}</li>
                <li>Symptoms: {ailments}</li>
                <li>Comments: {comments}</li>
              </ul>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: "space-around" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.back}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.continue}
          >
            Continue
          </Button>
        </div>
      </div>

    )
  }
}

export default Confirmation;
