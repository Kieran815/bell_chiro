import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const S1PatientInfo = props => {

  const { state, action } = useStateMachine(updateAction);

  const { handleSubmit, errors, register } = useForm({
    defaultValues: state.patientInfo
  });

  const { push } = useHistory();

  const onSubmit = data => {
    action(data);
    push("/form2/S2ICE")
  }

  return (
    <div>
      <h2>Patient Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-between"}}>
        <div>
          <h3>Personal Information</h3>
          <label htmlFor="firstName">
            First Name:
            <input
              name="firstName"
              placeholder="First Name"
              ref={register({ required: "Enter First Name"})}
            />
            <ErrorMessage
              errors={errors}
              name="firstName"
              as="p"
            />
          </label>
          <br/>
          <label htmlFor="lastName">
            Last Name:
            <input
              name="lastName"
              placeholder="Last Name"
              ref={register({ required: true})}
            />
          </label>
          <br/>
          {errors.lastName && <span className="formError">*Enter Last Name</span>}
          <br/>
          <label htmlFor="dob">
            Date of Birth:
            <input
              name="dob"
              type="date"
              ref={register({ required: true })}
            />
          </label>
          <br/>
          {errors.dob && <span className="formError">*Select Date of Birth</span>}
          <br/>
          <label htmlFor="marital">
            Marital Status:
            <select
              name="marital"
              type="select"
              ref={register({ required: true })}
            >
              <option value="" hidden>Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
              <option value="Separated">Separated</option>
              <option value="Divorced">Divorced</option>
            </select>
          </label>
          <br/>
          {errors.marital && <span className="formError">*Select Marital Status</span>}
        </div>

        <div>
          <h3>Contact Information</h3>
          <label htmlFor="firstName">
            Phone Number:
            <input
              name="phone"
              type="tel"
              placeholder="555-555-5555"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              ref={register({ required: true})}
            />
          </label>
          <br/>
          {errors.phone && <span className="formError">*Enter Phone Number</span>}
          <br/>
          <label htmlFor="email">
            E-Mail:
            <input
              type="email"
              name="email"
              placeholder="info@bellchirostl.com"
              ref={register({ required: true })}
            />
          </label>
          <br/>
          {errors.email && <span className="formError">*Enter E-Mail</span>}
        </div>
        <div>
          <h3>Address</h3>
          <label htmlFor="address">
            Street:
            <input
              name="address"
              placeholder="Street Address"
              ref={register({ required: true })}
            />
          </label>
          <br/>
          {errors.address && <span className="formError">*Enter Street Address</span>}
          <br/>
          <label htmlFor="city">
            City:
            <input
              name="city"
              placeholder="City"
              ref={register({ required: true })}
            />
          </label>
          <br/>
          {errors.city && <span className="formError">*Enter City/Township</span>}
          <br/>
          <label htmlFor="state">
            State:
            <input
              name="state"
              placeholder="State"
              ref={register({ required: true })}
            />
          </label>
          <br/>
          {errors.state && <span className="formError">*Enter State</span>}
          <br/>
          <label htmlFor="zip">
            Zip Code:
            <input
              name="zip"
              placeholder="Zip Code"
              ref={register({ required: true })}
            />
          </label>
          <br/>
          {errors.zip && <span className="formError">*Enter Zip Code</span>}
          {/* End of Line */}
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}
