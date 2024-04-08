import { defineStore } from "pinia";

export type Service = {
  name: string,
  logo: string,
  enabled: boolean,
  items: ServiceItem[],
}

export type ServiceItem = {
  url: string,
  title: string,
  image: string
}

export const useServiceStore = defineStore('service', () => {
  const services: Service[] = [
    {
      name: 'Hulu',
      logo: '/logos/hulu-Green-digital.svg',
      enabled: true,
      items: [
        {
          url: 'https://www.hulu.com/series/fdeb1018-4472-442f-ba94-fb087cdea069',
          image: '/artwork/194031-2.jpg',
          title: "Bob's Burgers"
        },
        {
          url: 'https://www.hulu.com/series/374cdbc2-3b08-4b81-a68f-a45a70665849',
          image: '/artwork/6142120103f05.jpg',
          title: "The Great North"
        },
        {
          url: 'https://www.hulu.com/series/7c33eeb2-5d16-4a10-ad9e-ee31f9fff15c',
          image: '/artwork/65c46306b96cf.jpg',
          title: "Abbott Elementary"
        },
        {
          url: 'https://www.hulu.com/series/3a2b19ac-5717-4185-aa71-a229971d2c0b',
          image: '/artwork/657759f4a992c.jpg',
          title: "Married at First Sight"
        }
      ]
    },
    {
      name: 'Netflix',
      logo: '/logos/Netflix_Logo_RGB.png',
      enabled: true,
      items: [
        {
          url: 'https://www.netflix.com/browse?jbv=70155589',
          image: '/artwork/94571-7.jpg',
          title: 'Community'
        },
        {
          url: 'https://www.netflix.com/browse?jbv=80024232',
          image: '/artwork/281623-4.jpg',
          title: 'Madam Secretary'
        },
        {
          url: 'https://www.netflix.com/browse?jbv=81338328',
          image: '/artwork/5f24daa9b2d3c.jpg',
          title: 'Love on the Spectrum'
        },
        {
          url: "https://www.netflix.com/browse?jbv=80050008",
          image: '/artwork/306304-6.jpg',
          title: "A Series of Unfortunate Events"
        },
        {
          url: "https://www.netflix.com/browse?jbv=70155618",
          image: '/artwork/76568-9.jpg',
          title: "Gilmore Girls"
        },
        {
          url: "https://www.netflix.com/browse?jbv=80237957",
          image: "/artwork/65aeb86ad8b6a.jpg",
          title: "Avatar: The Last Airbender (2024)"
        },
        {
          url: "https://www.netflix.com/browse?jbv=80232398",
          image: "/artwork/625300b76b361.jpg",
          title: "Bridgerton"
        },
        {
          url: "https://www.netflix.com/browse?jbv=80996601",
          image: "/artwork/62072350.jpg",
          title: "Love is Blind and Stupid"
        }
      ]
    },
    {
      name: 'HBO Max',
      logo: '/logos/Max_logo.svg',
      enabled: true,
      items: [
        {
          url: "https://play.max.com/show/1bc3aff5-0d6a-4c0b-8ed0-5716ca30ab3b",
          image: '/artwork/79126-2.jpg',
          title: "The Wire"
        },
        {
          url: 'https://play.max.com/movie/0bbe998a-23b8-49a2-9729-976d53af74be',
          image: '/artwork/653b347a88747.jpg',
          title: 'The Color Purple'
        },
        {
          url: 'https://play.max.com/show/18a0993f-209a-4653-8f94-f3fb8422e678',
          image: '/artwork/616983a54e098.jpg',
          title: 'Curb Your Enthusiasm'
        },
        {
          url: "https://play.max.com/show/52dae4c7-2ab1-4bb9-ab1c-8100fd54e2f9",
          image: '/artwork/79168-27.jpg',
          title: "Friends"
        },
        {
          url: "https://play.max.com/show/818c3d9d-1831-48a6-9583-0364a7f98453",
          image: '/artwork/75299-17.jpg',
          title: "The Sopranos"
        },
        {
          url: "https://play.max.com/show/dcf05406-b0e2-458e-8a54-97acddf7ce21",
          image: '/artwork/76877-1.jpg',
          title: "A Different World"
        },
        {
          url: "https://play.max.com/show/2641fd06-387f-4d92-a322-accb8e180713",
          image: '/artwork/76648-18.jpg',
          title: "Sex and the City"
        },
      ]
    },
    {
      name: 'Disney Plus',
      logo: '/logos/Disney_Plus_logo.svg',
      enabled: true,
      items: [
        {
          url: 'https://www.disneyplus.com/series/bluey/1xy9TAOQ0M3r',
          image: '/artwork/5f97130be05dd.jpg',
          title: 'Bluey'
        },
        {
          url: 'https://www.disneyplus.com/series/phineas-and-ferb/1Vl0AKTYhC6U',
          image: '/artwork/81848-7.jpg',
          title: 'Phineas and Ferb'
        },
      ]
    },
    {
      name: 'Crunchyroll',
      logo: '/logos/Crunchyroll_2018_II.svg',
      enabled: true,
      items: [
        {
          url: 'https://www.crunchyroll.com/attack-on-titan',
          image: '/artwork/267440-16.jpg',
          title: 'Attack on Titan'
        },
        {
          url: 'https://www.crunchyroll.com/my-hero-academia',
          image: '/artwork/305074-5.jpg',
          title: 'My Hero Academia'
        },
        {
          url: 'https://www.crunchyroll.com/series/GY190DKQR/mob-psycho-100',
          image: '/artwork/307375-3.jpg',
          title: 'Mob Psycho 100'
        },
        {
          url: 'https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen',
          image: '/artwork/5ecb7bcccc897.jpg',
          title: 'Jujutsu Kaisen'
        },
        {
          url: 'https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter',
          image: '/artwork/62061583.jpg',
          title: 'Hunter x Hunter'
        },
        {
          url: 'https://www.crunchyroll.com/series/G79H23XX8/heaven-officials-blessing',
          image: '/artwork/5fa733bc82c63.jpg',
          title: 'Heaven Official\'s Blessing'
        },
        {
          url: 'https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba',
          image: '/artwork/60908d475f49a.jpg',
          title: 'Demon Slayer: Kimetsu no Yaiba'
        },
        {
          url: 'https://www.crunchyroll.com/series/GRE50KV36/black-clover',
          image: '/artwork/64c2cd7d875f8.jpg',
          title: 'Black Clover'
        },
        {
          url: "https://www.crunchyroll.com/series/GVDHX8QNW/chainsaw-man",
          image: '/artwork/62f8c21e4ea83.jpg',
          title: 'Chainsaw Man'
        },
        {
          url: "https://www.crunchyroll.com/series/GG5H5X3DE/buddy-daddies",
          image: '/artwork/6378ea2f88e3e.jpg',
          title: 'Buddy Daddies'
        },
        {
          url: "https://www.crunchyroll.com/series/G4PH0WXVJ/spy-x-family",
          image: '/artwork/622527d8f031d.jpg',
          title: 'Spy x Family'
        }
      ]
    },
    {
      name: 'PBS',
      logo: '/logos/PBS.svg',
      enabled: true,
      items: [
        {
          url: 'https://www.pbs.org/show/hotel-portofino/',
          image: '/artwork/61f52fc43f680.jpg',
          title: 'Hotel Portofino'
        },
        {
          url: 'https://www.pbs.org/show/all-creatures-great-and-small/',
          image: '/artwork/5f461d9a9dd00.jpg',
          title: 'All Creatures Great and Small'
        },
        {
          url: 'https://www.pbs.org/show/miss-scarlet-duke/',
          image: '/artwork/62a25ac637aaa.jpg',
          title: 'Miss Scarlet and the Duke'
        },
        {
          url: 'https://www.pbs.org/show/nova/',
          image: '/artwork/76119-1.jpg',
          title: 'NOVA'
        }
      ]
    },
    {
      name: 'Amazon Prime Video',
      logo: '/logos/prime-0.png',
      enabled: false,
      items: [
        {
          title: "Blah",
          url: 'https://www.amazon.com/gp/video/detail/B08GJ8XK7T',
          image: '',
        }
      ]
    }
  ]

  return { services }
})
