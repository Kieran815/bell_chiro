import withRoot from "../utils/withRoot";
import React from "react";
import Page from "../components/Page";
import Button from "@material-ui/core/Button";
import Card from "../components/Card"

class NotFoundPage extends React.Component {
  render() {
    return (
      <Page>
      <Card title="Page Not Found">
        <div style={{  display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p><b>Hey! You just hit a page that doesn't exist...</b></p>
          <Button variant="contained" color="primary" href="/">Back to Home</Button>
        </div>
      </Card>
      </Page>
    );
  }
}

export default withRoot(NotFoundPage);
