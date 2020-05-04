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

    const { values, inputChange, updateCondition, knownAllergies } = this.props;

    return(
      <div className="form-container" title="Patient Registration" style={{display: "center"}}>
      <h2 style={{ textAlign: 'center' }}>Patient Registration Form</h2>
        <h3>Basic Medical Information (Continued)</h3>
  {/*begin Conditions Radio Buttons*/}
        <div className="form-group" >
          <h3>Conditions:</h3>
          <form onChange={updateCondition()} value={values.conditions} style={{ display: "flex", flexDirection: "column" }}>
            <span>
              <input type="checkbox" id="cancer" name="conditions" value="Cancer" />
              <label htmlFor="cancer">Cancer</label>
            </span>

            <span>
              <input type="checkbox" id="epilepsy" name="conditions" value="Epilepsy" />
              <label htmlFor="epilepsy"> Epilepsy </label>
            </span>

            <span>
              <input type="checkbox" id="glaucoma" name="conditions" value="Glaucoma" />
              <label htmlFor="glaucoma">Glaucoma</label>
            </span>

            <span>
              <input type="checkbox" id="intractable_migraines" name="conditions" value="Intractable Migraines" />
              <label id="intractable_migraines" htmlFor="intractable_migraines">Intractable Migraines</label>
            </span>

            <span>
              <input type="checkbox" id="Chronic_Pain_Spasms" name="conditions" value="A Chronic Medical Condition that causes Severe Persistant Pain or Muscle Spasms" />
              <label id="chronic_pain_spasms" htmlFor="Chronic_Pain_Spasms"> A Chronic Medical Condition that causes Severe Persistant Pain or Muscle Spasms </label>
            </span>

            <span>
              <input type="checkbox" id="psyche_disorder" name="conditions" value="Debilitating Psychiatric Disorder" />
              <label id="psyche_disorder" htmlFor="psyche_disorder"> Debilitating Psychiatric Disorder </label>
            </span>

            <span>
              <input type="checkbox" id="HIV/AIDS" name="conditions" value="HIV/AIDS" />
              <label id="HIV/AIDS" htmlFor="HIV/AIDS"> HIV/AIDS </label>
            </span>

            <span>
              <input type="checkbox" id="potential_med_dependance" name="conditions" value="A Chronic Medical Condition normally treated with a medication that could lead to physical or psychological dependence" />
              <label id="potential_med_dependance" htmlFor="potential_med_dependance">A Chronic Medical Condition normally treated with a medication that could lead to physical or psychological dependence</label>
            </span>

            <span>
              <input type="checkbox" id="terminal_illness" name="conditions" value="Terminal Illness" />
              <label id="terminal_illness" htmlFor="terminal_illness"> Terminal Illness </label>
            </span>

            <span>
              <input type="checkbox" id="other_condition" name="conditions" value="Chronic Debilitating or Other Medical Condition" />
              <label id="other_condition" htmlFor="other_condition"> Chronic Debilitating or Other Medical Condition </label>
            </span>
            
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
