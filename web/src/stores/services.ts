import { defineStore } from "pinia";

export type Service = {
  name: string,
  logo: string,
  items: ServiceItem[]
}

export type ServiceItem = {
  url: string,
  title: string
}

export const useServiceStore = defineStore('service', () => {
  const services: Service[] = [
    {
      name: 'Hulu',
      logo: '/logos/hulu-Green-digital.svg',
      items: [
        {
          url: 'https://www.hulu.com/series/fdeb1018-4472-442f-ba94-fb087cdea069',
          title: "Bob's Burgers"
        },
        {
          url: 'https://www.hulu.com/series/374cdbc2-3b08-4b81-a68f-a45a70665849',
          title: "The Great North"
        }
      ]
    },
    {
      name: 'Netflix',
      logo: '/logos/Netflix_Logo_RGB.png',
      items: [
        {
          url: 'https://www.netflix.com/browse?jbv=70155589',
          title: 'Community'
        },
        {
          url: 'https://www.netflix.com/browse?jbv=80024232',
          title: 'Madame Secretary'
        },
        {
          url: 'https://www.netflix.com/browse?jbv=81338328',
          title: 'Love on the Spectrum'
        },
        {
          url: "https://www.netflix.com/browse?jbv=80050008",
          title: "A Series of Unfortunate Events"
        },
        {
          url: "https://www.netflix.com/browse?jbv=70155618",
          title: "Gilmore Girls"
        }
      ]
    },
    {
      name: 'HBO Max',
      logo: '/logos/Max_logo.svg',
      items: [
        {
          url: 'https://play.max.com/movie/0bbe998a-23b8-49a2-9729-976d53af74be',
          title: 'The Color Purple'
        },
        {
          url: 'https://play.max.com/show/18a0993f-209a-4653-8f94-f3fb8422e678',
          title: 'Curb Your Enthusiasm'
        },
        {
          url: "https://play.max.com/show/52dae4c7-2ab1-4bb9-ab1c-8100fd54e2f9",
          title: "Friends"
        },
        {
          url: "https://play.max.com/show/818c3d9d-1831-48a6-9583-0364a7f98453",
          title: "The Sopranos"
        },
        {
          url: "https://play.max.com/show/dcf05406-b0e2-458e-8a54-97acddf7ce21",
          title: "A Different World"
        },
        {
          url: "https://play.max.com/show/2641fd06-387f-4d92-a322-accb8e180713",
          title: "Sex and the City"
        },
      ]
    },
    {
      name: 'Disney Plus',
      logo: '/logos/Disney_Plus_logo.svg',
      items: [
        {
          url: 'https://www.disneyplus.com/series/bluey/1xy9TAOQ0M3r',
          title: 'Bluey'
        },
        {
          url: 'https://www.disneyplus.com/series/phineas-and-ferb/1Vl0AKTYhC6U',
          title: 'Phineas and Ferb'
        },
      ]
    },
    {
      name: 'Crunchyroll',
      logo: '/logos/Crunchyroll_2018_II.svg',
      items: [
        {
          url: 'https://www.crunchyroll.com/attack-on-titan',
          title: 'Attack on Titan'
        },
        {
          url: 'https://www.crunchyroll.com/my-hero-academia',
          title: 'My Hero Academia'
        },
      ]
    },
    {
      name: 'PBS',
      logo: '/logos/PBS.svg',
      items: [
        {
          url: 'https://www.pbs.org/show/american-experience/',
          title: 'American Experience'
        },
        {
          url: 'https://www.pbs.org/show/american-masters/',
          title: 'American Masters'
        },
      ]
    },
    {
      name: 'Amazon Prime Video',
      logo: '/logos/prime-0.png',
      items: [
        {
          title: "Blah",
          url: 'https://www.amazon.com/gp/video/detail/B08GJ8XK7T',
        }
      ]
    }
  ]

  return { services }
})
