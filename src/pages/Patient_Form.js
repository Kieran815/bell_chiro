import withRoot from "../utils/withRoot";
import React from 'react';
import Page from '../components/Page';
import Card from '../components/Card';
import Form from "../components/form/Form";

const PatientForm = props => {

  return(
    <Page>
      <Card>
        <Form />
      </Card>
    </Page>
  );
};

export default withRoot(PatientForm);
