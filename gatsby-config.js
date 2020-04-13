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
        name: "About",
        link: "/team"
      }
    ],
    serviceLinks: [
      {
        name: "View All Services",
        link: "/products/services/"
      },
      {
        name: "Primary Care Services",
        link: "/products/services/primary_care"
      },
      {
        name: "Decompression",
        link: "/products/services/decompression"
      },
      {
        name: "Testosterone  Replacement Therapy",
        link: "/products/services/low_t_therapy"
      },
      {
        name: "Car Accidents",
        link: "/products/services/accident"
      },
      {
        name: "Medical Marijuana Certification",
        link: "/products/services/med_cert_eval"
      },

      {
        name: "Telemedicine",
        link: "/products/services/telemedicine"
      },

      {
        name: "Decompression",
        link: "/products/services/decompression"
      },

      {
        name: "DOT Physicals",
        link: "/products/services/DOT_physicals"
      }
    ],
    itemLinks: [
      {
        name: "View All Items",
        link: "/products/items/"
      },
      {
        name: "Bath Bombs",
        link: "/products/items/bath_bomb_150"
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
