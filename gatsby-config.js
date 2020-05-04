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
      },
      {
        name: "Form",
        link: "/Patient_Form"
      }
    ],
    mobileMenuLinks: [
      {
        name: "Services",
        link: "/products/services"
      },
      {
        name: "Shop",
        link: "/products/items"
      },
      {
        name: "Meet Our Team",
        link: "/team"
      },
      {
        name: "Schedule an Appointment",
        link: "/Patient_Form"
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
        name: "Medical Certification",
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
        name: "View All Health & Wellness Products",
        link: "/products/items/"
      },
      {
        name: "Neuro-Pro 250",
        link: "/products/items/np_250"
      },
      {
        name: "Neuro-Pro 500",
        link: "/products/items/np_500"
      },
      {
        name: "Neuro-Pro CoCo 500",
        link: "/products/items/np_coco_500"
      },
      {
        name: "Neuro-Pro 1000",
        link: "/products/items/np_1000"
      },
      {
        name: "Neuro-Pro CoCo 1000",
        link: "/products/items/np_coco_1000"
      },
      {
        name: "Neuro-Pro 3000",
        link: "/products/items/np_3000"
      },
      {
        name: "Neuro-Pro 6000",
        link: "/products/items/np_6000"
      },
      {
        name: "Neuro-Pro Gold Capsules (30 ct)",
        link: "/products/items/np_cap_gold"
      },
      {
        name: "Neuro-Pro Platinum Capsules (30 ct)",
        link: "/products/items/np_cap_plat"
      },
      {
        name: "Neuro-Pro Night Capsules (30 ct)",
        link: "/products/items/np_cap_night"
      },
      {
        name: "Bath Bombs",
        link: "/products/items/bath_bombs"
      },
      {
        name: "Neuro-Pro Massage Lotion 1000",
        link: "/products/items/np_lotion_1000"
      },
      {
        name: "Neuro-Pro Massage Oil 1000",
        link: "/products/items/np_massage_oil_1000"
      },
      {
        name: "Neuro-Pro Pet 500",
        link: "/products/items/np_pet_500"
      },
      {
        name: "Neuro-Pro Pet 1000",
        link: "/products/items/np_pet_1000"
      },
      {
        name: "Neuro-Pro Farm",
        link: "/products/items/np_pet_farm"
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
