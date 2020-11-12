import withRoot from "../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Page from "../components/Page";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withPrefix } from "gatsby";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  cardMedia: {
    height: "200px"
  }
};

const Detail = ({ classes, data }) => {
  const {
      title,
      image: { publicURL },
      price,
      oldPrice
    } = data.markdownRemark.frontmatter,
    { html } = data.markdownRemark;
  return (
    <Page>
      <SEO title={title} />
      <Card style={{ padding: "2em" }}>
        <CardMedia
          className={classes.cardMedia}
          image={withPrefix(publicURL)}
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="h2">
            {title}
          </Typography>
          <Typography dangerouslySetInnerHTML={{ __html: html }} />
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <p style={{ paddingRight:"1em"}}><b>Price:</b></p> {oldPrice === null ?
              <p>${price}</p> :
              <div style={{display: 'flex'}}>
                <p style={{textDecoration: "line-through", paddingRight: '1em'}}>${oldPrice}</p>
                <p><b>Now ${price}</b></p>
              </div>
            }
          </div>
          <b>Quantity: </b>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          style={{ width: "100%", marginRight: "auto", marginLeft: "auto" }}
        >
          Add to Cart
        </Button>
      </Card>
    </Page>
  );
};

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        image {
          publicURL
        }
        title
        price
        path
        oldPrice
      }
      html
    }
  }
`;

export default withRoot(withStyles(styles)(Detail));
