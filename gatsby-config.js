module.exports = {
  pathPrefix: `/wang_chiro`,
  siteMetadata: {
    title: "Wang Chiropractic",
    contact: {
      phone: "555-555-5555",
      email: "info@example.com",
    },
    menuLinks: [
      {
        name: "About",
        link: "/team",
      },
    ],
    mobileMenuLinks: [
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "Shop",
        link: "/items",
      },
      {
        name: "Meet Our Team",
        link: "/team",
      },
    ],
    serviceLinks: [
      {
        name: "View All Services",
        link: "/services",
      },
      {
        name: "Primary Care Services",
        link: "/primary_care",
      },
      {
        name: "Decompression",
        link: "/decompression",
      },
      {
        name: "Testosterone  Replacement Therapy",
        link: "/low_t_therapy",
      },
      {
        name: "Car Accidents",
        link: "/accident",
      },
      {
        name: "Medical Certification",
        link: "/med_cert_eval",
      },

      {
        name: "Telemedicine",
        link: "/telemedicine",
      },

      {
        name: "Decompression",
        link: "/decompression",
      },

      {
        name: "DOT Physicals",
        link: "/DOT_physicals",
      },
    ],
    itemLinks: [
      {
        name: "View All Health & Wellness Products",
        link: "/items",
      },
      {
        name: "Neuro-Pro 250",
        link: "/np_250",
      },
      {
        name: "Neuro-Pro 500",
        link: "/np_500",
      },
      {
        name: "Neuro-Pro CoCo 500",
        link: "/np_coco_500",
      },
      {
        name: "Neuro-Pro 1000",
        link: "/np_1000",
      },
      {
        name: "Neuro-Pro CoCo 1000",
        link: "/np_coco_1000",
      },
      {
        name: "Neuro-Pro 3000",
        link: "/np_3000",
      },
      {
        name: "Neuro-Pro 6000",
        link: "/np_6000",
      },
      {
        name: "Neuro-Pro Gold Capsules (30 ct)",
        link: "/np_cap_gold",
      },
      {
        name: "Neuro-Pro Platinum Capsules (30 ct)",
        link: "/np_cap_plat",
      },
      {
        name: "Neuro-Pro Night Capsules (30 ct)",
        link: "/np_cap_night",
      },
      {
        name: "Bath Bombs",
        link: "/bath_bombs_150",
      },
      {
        name: "Neuro-Pro Massage Lotion 1000",
        link: "/np_lotion_1000",
      },
      {
        name: "Neuro-Pro Massage Oil 1000",
        link: "/np_massage_oil_1000",
      },
      {
        name: "Neuro-Pro Pet 500",
        link: "/np_pet_500",
      },
      {
        name: "Neuro-Pro Pet 1000",
        link: "/np_pet_1000",
      },
      {
        name: "Neuro-Pro Farm",
        link: "/np_pet_farm",
      },
    ],
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
        name: "pages",
      },
    },
  ],
}
