import withRoot from "../../utils/withRoot";
import React from "react";
import { Link, graphql, withPrefix } from "gatsby";
import Typography from "@material-ui/core/Typography";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import { Rocket } from "mdi-material-ui";

const Team = props => {
  const teams = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Meet the Team">
      <SEO title="Meet the Team" />
      <Typography paragraph>
        <p>
          Some text about how great yall are and some other shit about your call
          to action or whatever you want to do to introduce yourselves to
          potential clients or people who don't know you or haven't done
          business with you or whatever I'm still typing because fake paragraph
          to play with font spacing in mobile vs tablet vs laptop vs desktop.
        </p>
      </Typography>

      <GridList cellHeight={500} cols={3}>
        {teams.map(edge => {
          const {
            node: {
              frontmatter: {
                path,
                title,
                image: { publicURL },
                jobtitle
              }
            }
          } = edge;
          return (
            <Link key={path} to={path}>
              <GridListTile cols={1}>
                <img src={withPrefix(publicURL)} alt={title} />
                <GridListTileBar
                  title={title}
                  subtitle={jobtitle}
                  actionIcon={
                    <IconButton
                      className="teamIcon"
                      style={{ color: "rgba(255, 255, 255, 0.54)" }}
                    >
                      <Rocket />
                    </IconButton>
                  }
                />
              </GridListTile>
            </Link>
          );
        })}
      </GridList>
    </Page>
  );
};

export const query = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            image {
              publicURL
            }
            title
            path
            jobtitle
          }
        }
      }
    }
  }
`;

export default withRoot(Team);
