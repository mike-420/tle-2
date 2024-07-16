/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/loft-condo-buildings",
        destination: "/lofts-condos",
        permanent: true,
      },
      {
        source: "/downtown-la",
        destination: "/neighborhoods",
        permanent: true,
      },
      {
        source: "/la-history",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about-us/career-opportunities",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/la-history",
        destination: "/",
        permanent: true,
      },
      {
        source: "/historic-core",
        destination: "/neighborhoods/historic-core",
        permanent: true,
      },
      {
        source: "/toy-factory-lofts-for-sale-lease",
        destination: "/neighborhoods/arts-district/toy-factory-lofts",
        permanent: true,
      },
      {
        source: "/arts-district",
        destination: "/neighborhoods/arts-district",
        permanent: true,
      },
      {
        source: "/fashion-district",
        destination: "/neighborhoods/",
        permanent: true,
      },
      {
        source: "/little-tokyo",
        destination: "/neighborhoods/little-tokyo",
        permanent: true,
      },
      {
        source: "/south-park",
        destination: "/neighborhoods/south-park",
        permanent: true,
      },
      {
        source: "/central-city-west",
        destination: "/neighborhoods/central-city-west",
        permanent: true,
      },
      {
        source: "/la-live",
        destination: "/",
        permanent: true,
      },
      {
        source: "/financial-district",
        destination: "/neighborhoods/financial-district",
        permanent: true,
      },
      {
        source: "/el-pueblo",
        destination: "/",
        permanent: true,
      },
      {
        source: "/civic-center",
        destination: "/neighborhoods/civic-center",
        permanent: true,
      },
      {
        source: "/chinatown",
        destination: "/neighborhoods/chinatown",
        permanent: true,
      },
      {
        source: "/bunker-hill",
        destination: "/neighborhoods/bunker-hill",
        permanent: true,
      },
      {
        source: "/koreatown-wilshire",
        destination: "/",
        permanent: true,
      },
      {
        source: "/savoy-lofts-for-sale-lease",
        destination: "/neighborhoods/little-tokyo/savoy-condominiums",
        permanent: true,
      },
      {
        source: "/beacon-lofts-for-sale-lease",
        destination: "/neighborhoods/arts-district/beacon-lofts",
        permanent: true,
      },
      {
        source: "/940-east-2nd-street-lofts-for-sale-lease",
        destination: "/neighborhoods/arts-district/940-e-2nd-st-lofts",
        permanent: true,
      },
      {
        source: "/biscuit-company-lofts-for-sale-lease",
        destination: "/neighborhoods/arts-district/biscuit-company-lofts",
        permanent: true,
      },
      {
        source: "/molino-street-lofts-for-sale-lease",
        destination: "/neighborhoods/arts-district/molino-street-lofts",
        permanent: true,
      },
      {
        source: "/metropolis-downtownla",
        destination: "/neighborhoods/south-park/metropolis",
        permanent: true,
      },
      {
        source: "/toy-warehouse-lofts-for-sale-lease",
        destination: "/neighborhoods/arts-district/toy-warehouse-lofts",
        permanent: true,
      },
      {
        source: "/bunker-hill-tower-for-sale-lease",
        destination: "/neighborhoods/bunkerhill/bunker-hill-tower",
        permanent: true,
      },
      {
        source: "/promenade-condos-for-sale-lease",
        destination: "/neighborhoods/bunkerhill/the-promenade-condominiums",
        permanent: true,
      },
      {
        source: "/promenade-west-for-sale-lease",
        destination: "/neighborhoods/bunkerhill/promenade-west",
        permanent: true,
      },
      {
        source: "/1100-wilshire-lofts-for-sale-lease",
        destination: "/neighborhoods/central-city-west/1100-wilshire-lofts",
        permanent: true,
      },
      {
        source: "/vero-lofts-for-sale-lease",
        destination: "/neighborhoods/central-city-west/vero",
        permanent: true,
      },
      {
        source: "/santee-cornell-lofts-for-sale-lease",
        destination: "/neighborhoods/fashion-district/santee-village-cornell-lofts",
        permanent: true,
      },
      {
        source: "/santee-eckardt-lofts-for-sale-lease",
        destination: "/neighborhoods/fashion-district/santee-village-eckardt-lofts",
        permanent: true,
      },
      {
        source: "/textile-lofts",
        destination: "/neighborhoods/fashion-district/santee-village-textile-lofts",
        permanent: true,
      },
      {
        source: "/tomahawk-lofts-for-sale-lease",
        destination: "/neighborhoods/fashion-district/the-tomahawk-building-lofts",
        permanent: true,
      },
      {
        source: "/655-hope-street-lofts-for-sale-lease",
        destination: "/neighborhoods/financial-district/655-hope-lofts",
        permanent: true,
      },
      {
        source: "/roosevelt-lofts-lease",
        destination: "/",
        permanent: true,
      },
      {
        source: "/library-court-lofts-for-sale-lease",
        destination: "/neighborhoods/financial-district/library-court-lofts",
        permanent: true,
      },
      {
        source: "/sky-lofts-for-sale-lease",
        destination: "/neighborhoods/south-park/sky-lofts",
        permanent: true,
      },
      {
        source: "/douglas-lofts-for-sale-lease",
        destination: "/neighborhoods/historic-core/douglas-lofts",
        permanent: true,
      },
      {
        source: "/eastern-columbia-lofts-for-sale-lease",
        destination: "/neighborhoods/fashion-district/eastern-columbia-lofts",
        permanent: true,
      },
      {
        source: "/higgins-lofts-for-sale-lease",
        destination: "/neighborhoods/historic-core/higgins-lofts",
        permanent: true,
      },
      {
        source: "/pan-american-lofts-for-sale-lease",
        destination: "/neighborhoods/historic-core/pan-american-lofts",
        permanent: true,
      },
      {
        source: "/rowan-lofts-for-sale-lease",
        destination: "/neighborhoods/historic-core/rowan-lofts",
        permanent: true,
      },
      {
        source: "/ritz-carlton-for-sale-lease",
        destination: "/neighborhoods/south-park/ritz-carlton",
        permanent: true,
      },
      {
        source: "/little-tokyo-lofts-for-sale-lease",
        destination: "/neighborhoods/little-tokyo/little-tokyo-lofts",
        permanent: true,
      },
      {
        source: "/mura-condominiums-for-sale-lease",
        destination: "/neighborhoods/little-tokyo/mura-condominiums",
        permanent: true,
      },
      {
        source: "/apex-lofts",
        destination: "/",
        permanent: true,
      },
      {
        source: "/elleven-lofts-for-sale-lease",
        destination: "/neighborhoods/south-park/elleven-lofts",
        permanent: true,
      },
      {
        source: "/evo-lofts-for-sale-lease",
        destination: "/neighborhoods/south-park/evo-lofts",
        permanent: true,
      },
      {
        source: "/luma-lofts-for-sale-lease",
        destination: "/neighborhoods/south-park/luma-lofts",
        permanent: true,
      },
      {
        source: "/market-lofts-for-sale-lease",
        destination: "/",
        permanent: false,
      },
      {
        source: "/apex-lofts",
        destination: "/",
        permanent: false,
      },
      {
        source: "/concerto-lofts-for-sale-lease",
        destination: "/",
        permanent: false,
      },
      {
        source: "/barker-block-lofts-for-sale-lease",
        destination: "/neighborhoods/arts-district/barker-block-lofts",
        permanent: true,
      },
      {
        source: "/el-dorado-lofts-for-sale-lease",
        destination: "/neighborhoods/historic-core/el-dorado-lofts",
        permanent: true,
      },
      {
        source: "/la-city-seal",
        destination: "/",
        permanent: true,
      },
      {
        source: "/flower-street-lofts-for-sale-lease",
        destination: "/",
        permanent: true,
      },
      {
        source: "/grand-lofts-for-sale-lease",
        destination: "/neighborhoods/south-park/grand-lofts",
        permanent: true,
      },
      {
        source: "/bartlett-building-lofts-sale-lease",
        destination: "/neighborhoods/historic-core/bartlett-lofts",
        permanent: true,
      },
      {
        source: "/solair-lofts-for-sale-lease",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mercury-lofts-koreatown-for-sale-lease",
        destination: "/",
        permanent: true,
      },
      {
        source: "/favorites",
        destination: "/",
        permanent: true,
      },
      {
        source: "/717-olympic",
        destination: "/",
        permanent: true,
      },
      {
        source: "/thank-you",
        destination: "/",
        permanent: true,
      },
      {
        source: "/no-favorites",
        destination: "/",
        permanent: true,
      },
      {
        source: "/watermarke-tower-for-lease",
        destination: "/",
        permanent: true,
      },
    ];
  },




};


export default nextConfig;
