import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class EmergencyContact extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {

    const { values, inputChange } = this.props;

    return(
      <div className="form-container" title="Patient Registration" style={{display: "center"}}>
      <h2 style={{ textAlign: 'center' }}>Patient Registration Form</h2>
{/*begin Emergency Contact*/}
        <h3>Emergency Contact</h3>
        <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
          {/* ICE FirstName */}
          <label htmlFor="iceFirstName">First Name: </label>
          <input type="text" className="form-control" name="iceFirstName" onChange={inputChange('iceFirstName')} value={values.iceFirstName} required />
          <br />
          {/* ICE LastName */}
          <label htmlFor="iceLastName">Last Name: </label>
          <input type="text" className="form-control" name="iceLastName" onChange={inputChange('iceLastName')} value={values.iceLastName} required />
          <br />
          {/* ICE Phone */}
          <label htmlFor="icePhone">Phone Number: </label>
          <input type="tel" className="form-control" name="icePhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={inputChange("icePhone")} value={values.icePhone} required />
          <br />
          {/* ICE Relationship */}
          <label htmlFor="iceRelationship">Relationship: </label>
          <input type="iceRelationship" className="form-control" name="iceRelationship" onChange={inputChange("iceRelationship")} value={values.iceRelationship} required />
          <br/>
        </div>
        <br/>
        <br/>
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

export default EmergencyContact;
