import withRoot from "../utils/withRoot";
import React from 'react';
import Page from '../components/Page';
import Card from '../components/Card';
import Form2 from "../components/form2/form2";

const ReactHookForm = props => {

  return(
    <Page>
      <Card>
        <Form2 />
      </Card>
    </Page>
  );
};

export default withRoot(ReactHookForm);
