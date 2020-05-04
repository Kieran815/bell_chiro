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
      <div className="form-container" title="Patient Registration" style={{display: "center"}}>
      <h2 style={{ textAlign: 'center' }}>Confirm Your Information</h2>
      <div style={{ display: 'flex', justifyContent: "space-around", flexWrap: "wrap"}}>
        <p><strong>Scheduling {service} ({cost}) appointment on {apptDate}</strong></p>
        <div>
          <h3>Personal:</h3>
          <ul>
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
            <h4>Conditions</h4>
            {conditions}
            <li>Currently taking medication? : {takingMeds}</li>
            <li>Perscriptions: {perscriptions}</li>
            <li>Allergies: {knownAllergies}</li>
            <li>Symptoms: {ailments}</li>
            <li>Comments: {comments}</li>
          </ul>
        </div>
      </div>
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
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
