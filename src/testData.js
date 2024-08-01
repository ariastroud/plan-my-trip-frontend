const testTravelPlansData = {
  destination: "Seattle",
  latitude_destination: 47.6062,
  longitude_destination: -122.3321,
  start_date: "2024-03-20",
  end_date: "2024-03-22",
  budget: 600,
  itinerary: [
    {
      day: 1,
      activities: [
        {
          activity: "Visit Pike Place Market",
          latitude: 47.6097,
          longitude: -122.3419,
          description:
            "Explore this iconic market, known for its fresh produce, seafood, and crafts.",
        },
        {
          activity: "Space Needle",
          latitude: 47.6205,
          longitude: -122.3493,
          description:
            "Enjoy panoramic views of Seattle from this famous observation tower.",
        },
      ],
      placesToEat: [
        {
          place: "The Pink Door",
          latitude: 47.6093,
          longitude: -122.3421,
          description:
            "A popular spot for Italian cuisine with live entertainment.",
        },
        {
          place: "Elliott's Oyster House",
          latitude: 47.6077,
          longitude: -122.341,
          description:
            "Known for its seafood, especially oysters and clam chowder.",
        },
      ],
    },
    {
      day: 2,
      activities: [
        {
          activity: "Chihuly Garden and Glass",
          latitude: 47.621,
          longitude: -122.3493,
          description:
            "Experience stunning glass art installations by Dale Chihuly.",
        },
        {
          activity: "Museum of Pop Culture (MoPOP)",
          latitude: 47.6217,
          longitude: -122.348,
          description:
            "Explore exhibits on music, science fiction, and pop culture.",
        },
      ],
      placesToEat: [
        {
          place: "Canlis",
          latitude: 47.6395,
          longitude: -122.3469,
          description:
            "A high-end restaurant offering contemporary American cuisine.",
        },
        {
          place: "Bacco Cafe",
          latitude: 47.6224,
          longitude: -122.335,
          description:
            "A cozy spot for Italian dishes and a relaxed atmosphere.",
        },
      ],
    },
    {
      day: 3,
      activities: [
        {
          activity: "Seattle Aquarium",
          latitude: 47.6068,
          longitude: -122.3364,
          description:
            "Discover the marine life native to the Pacific Northwest.",
        },
        {
          activity: "Kerry Park",
          latitude: 47.6281,
          longitude: -122.3534,
          description:
            "Enjoy a scenic view of the Seattle skyline and Mount Rainier.",
        },
      ],
      placesToEat: [
        {
          place: "Poppy",
          latitude: 47.619,
          longitude: -122.3178,
          description:
            "A restaurant offering innovative Indian cuisine in a modern setting.",
        },
        {
          place: "Bacco Cafe",
          latitude: 47.6224,
          longitude: -122.335,
          description:
            "A cozy spot for Italian dishes and a relaxed atmosphere.",
        },
      ],
    },
  ],
};

// const testTravelPlansData = {
//   destination: "Paris",
//   latitudeDestination: "48.8566",
//   longitudeDestination: "2.3522",
//   startDate: "2022-08-20",
//   endDate: "2022-08-21",
//   budget: 2000,
//   itinerary: [
//     {
//       day: 1,
//       activities: [
//         {
//           activity: "Visit the Eiffel Tower",
//           latitude: "48.8584",
//           longitude: "2.2945",
//           description:
//             "Iconic landmark offering city views from its observation decks.",
//         },
//         {
//           activity: "Explore Louvre Museum",
//           latitude: "48.8606",
//           longitude: "2.3376",
//           description:
//             "Home to thousands of works of art, including the Mona Lisa and Venus de Milo.",
//         },
//       ],
//       placesToEat: [
//         {
//           place: "Le Procope",
//           latitude: "48.8538",
//           longitude: "2.3409",
//           description:
//             "Oldest cafe in Paris with a historic ambiance and traditional French cuisine.",
//         },
//         {
//           place: "L'Avenue",
//           latitude: "48.8661",
//           longitude: "2.3062",
//           description:
//             "Upscale restaurant known for its celebrity sightings and elegant atmosphere.",
//         },
//       ],
//     },
//     {
//       day: 2,
//       activities: [
//         {
//           activity: "Cruise on the Seine River",
//           latitude: "48.8583",
//           longitude: "2.2945",
//           description:
//             "Enjoy a scenic boat tour passing by iconic landmarks like Notre Dame Cathedral.",
//         },
//       ],
//       placesToEat: [
//         {
//           place: "Les Deux Magots",
//           latitude: "48.8549",
//           longitude: "2.3338",
//           description:
//             "Historic cafe once frequented by intellectuals like Hemingway and Picasso.",
//         },
//       ],
//     },
//   ],
// };

export default testTravelPlansData;
