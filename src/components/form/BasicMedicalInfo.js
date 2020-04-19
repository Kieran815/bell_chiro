import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class BasicMedicalInfo extends Component {

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

    // conditions: "",
    // takingMeds: false,
    // perscriptions: "",
    // knownAllergies: "",
    // ailments: "",
    // comments: ""

    return(
      <div className="form-container" title="Patient Registration" style={{display: "center"}}>
      <h2 style={{ textAlign: 'center' }}>Patient Registration Form</h2>
        <h3>Basic Medical Information (Continued)</h3>
  {/*begin Conditions*/}
        <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
          <h3>Conditions:</h3>
          <form onChange={inputChange("conditions")} value={values.conditions} required>

          <input type="checkbox" id="cancer" name="conditions" value="cancer" />
          <label htmlfor="cancer">Cancer</label>

          </form>
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

export default BasicMedicalInfo;
