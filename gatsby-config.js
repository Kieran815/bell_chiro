module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "Bell Chiropractic & Pain Management",
    contact: {
      phone: "314-838-1983",
      email: "info@bellchirostl.com"
    },
    menuLinks: [
      {
        name: "Primary Care Services",
        link: "/products/primary_care"
      },
      {
        name: "Decompression",
        link: "/products/decompression"
      },
      {
        name: "Testosterone  Replacement Therapy",
        link: "/products/low_t_therapy"
      },
      {
        name: "Car Accidents",
        link: "/products/accident"
      },
      {
        name: "Medical Marijuana Certification",
        link: "/products/med_cert_eval"
      },

      {
        name: "Telemedicine",
        link: "/products/telemedicine"
      },

      {
        name: "Decompression",
        link: "/products/decompression"
      },

      {
        name: "DOT Physicals",
        link: "/products/DOT_physicals"
      },
      {
        name: "Team",
        link: "/team"
      }
    ]
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    }
  ]
};
