import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const events = [
  {
    id: 1,
    name: "Digital Marketing Summit",
    slug: "digital-marketing-summit",
    city: "Lagos",
    location: "Lagos Business Center",
    date: "2030-10-15T00:00:00.000Z",
    organizerName: "Marketing Innovators",
    imageUrl:
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Join us at the Digital Marketing Summit to learn the latest trends and strategies in the digital marketing world. Network with industry leaders and gain insights to boost your marketing efforts.",
  },
  {
    id: 2,
    name: "Environmental Sustainability Forum",
    slug: "environmental-sustainability-forum",
    city: "Abuja",
    location: "Abuja Eco Center",
    date: "2030-10-30T00:00:00.000Z",
    organizerName: "Green Earth Initiative",
    imageUrl:
      "https://images.unsplash.com/photo-1616791151653-a84311a1ae75?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Participate in the Environmental Sustainability Forum to discuss pressing environmental issues and solutions. Engage with experts and activists dedicated to creating a sustainable future.",
  },
  {
    id: 3,
    name: "Contemporary Dance Showcase",
    slug: "contemporary-dance-showcase",
    city: "Lagos",
    location: "Lagos Dance Theater",
    date: "2030-11-15T00:00:00.000Z",
    organizerName: "Dance Expressions",
    imageUrl:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Experience the artistry and creativity of contemporary dance at the Contemporary Dance Showcase. Enjoy performances by talented dancers and choreographers.",
  },
  {
    id: 4,
    name: "Gastronomy Festival",
    slug: "gastronomy-festival",
    city: "Abuja",
    location: "Abuja Food Park",
    date: "2030-12-01T00:00:00.000Z",
    organizerName: "Foodie Events",
    imageUrl:
      "https://images.unsplash.com/photo-1636044995743-6e6c619eb236?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Indulge in a culinary journey at the Gastronomy Festival. Sample exquisite dishes from top chefs, attend cooking workshops, and enjoy food-themed entertainment.",
  },
  {
    id: 5,
    name: "Historical Reenactment Fair",
    slug: "historical-reenactment-fair",
    city: "Lagos",
    location: "Lagos Historical Park",
    date: "2030-11-20T00:00:00.000Z",
    organizerName: "History Enthusiasts",
    imageUrl:
      "https://images.unsplash.com/photo-1550533105-d412cbf5bfcc?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Travel back in time at the Historical Reenactment Fair. Watch live reenactments of historical events, explore period exhibits, and learn about history in an engaging way.",
  },
  {
    id: 6,
    name: "Innovative Startups Pitch",
    slug: "innovative-startups-pitch",
    city: "Abuja",
    location: "Abuja Tech Hub",
    date: "2030-10-25T00:00:00.000Z",
    organizerName: "Startup Pitch",
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Attend the Innovative Startups Pitch to witness groundbreaking ideas and businesses. Support budding entrepreneurs and discover the future of innovation.",
  },
  {
    id: 7,
    name: "Interactive Science Fair",
    slug: "interactive-science-fair",
    city: "Lagos",
    location: "Lagos Science Museum",
    date: "2030-12-08T00:00:00.000Z",
    organizerName: "Science Explorers",
    imageUrl:
      "https://images.unsplash.com/photo-1526930382372-67bf22c0fce2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Discover the wonders of science at the Interactive Science Fair. Participate in hands-on experiments, interactive exhibits, and science demonstrations.",
  },
  {
    id: 8,
    name: "Book Lovers Fair",
    slug: "book-lovers-fair",
    city: "Abuja",
    location: "Abuja Book Plaza",
    date: "2030-11-18T00:00:00.000Z",
    organizerName: "Literary Enthusiasts",
    imageUrl:
      "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Celebrate your love for books at the Book Lovers Fair. Meet authors, attend book signings, and explore a wide range of literary genres.",
  },
  {
    id: 9,
    name: "Robotics Expo",
    slug: "robotics-expo",
    city: "Lagos",
    location: "Lagos Tech Arena",
    date: "2030-12-10T00:00:00.000Z",
    organizerName: "Tech Innovators",
    imageUrl:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Explore the future of robotics at the Robotics Expo. See the latest advancements in robotics technology, watch live demonstrations, and interact with cutting-edge robots.",
  },
  {
    id: 10,
    name: "Music Production Workshop",
    slug: "music-production-workshop",
    city: "Abuja",
    location: "Abuja Music Studio",
    date: "2030-11-05T00:00:00.000Z",
    organizerName: "Sound Creators",
    imageUrl:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Learn the art of music production at the Music Production Workshop. Gain hands-on experience with professional equipment and software, guided by experienced music producers.",
  },
  {
    id: 11,
    name: "Fashion Forward Runway",
    slug: "fashion-forward-runway",
    city: "Lagos",
    location: "Lagos Fashion District",
    date: "2030-11-05T00:00:00.000Z",
    organizerName: "Fashionista Events",
    imageUrl:
      "https://images.unsplash.com/photo-1554882195-8cf792f9a571?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Experience the latest trends in fashion at the Fashion Forward Runway show. Witness stunning collections from top designers, enjoy glamorous runway presentations, and immerse yourself in the world of high fashion.",
  },
  {
    id: 12,
    name: "Wellness and Yoga Retreat",
    slug: "wellness-and-yoga-retreat",
    city: "Abuja",
    location: "Abuja Wellness Center",
    date: "2030-12-10T00:00:00.000Z",
    organizerName: "Holistic Wellness Co.",
    imageUrl:
      "https://images.unsplash.com/photo-1488228469209-c141f8bcd723?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Rejuvenate your mind, body, and spirit at the Wellness and Yoga Retreat. Participate in guided yoga sessions, meditation workshops, and wellness activities designed to promote holistic health and well-being.",
  },
  {
    id: 13,
    name: "Film Festival Abuja",
    slug: "film-festival-abuja",
    city: "Abuja",
    location: "Abuja Cinemas",
    date: "2030-10-25T00:00:00.000Z",
    organizerName: "Cinema Lovers Society",
    imageUrl:
      "https://images.unsplash.com/photo-1657556215165-3d1b9af18370?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Celebrate the art of filmmaking at the Film Festival Abuja. Enjoy screenings of acclaimed films, participate in panel discussions with filmmakers, and explore the diverse world of cinema. Join us for a cinematic experience like no other.",
  },
  {
    id: 14,
    name: "Sculpture Art Exhibition",
    slug: "sculpture-art-exhibition",
    city: "Lagos",
    location: "Lagos Art Gallery",
    date: "2030-11-28T00:00:00.000Z",
    organizerName: "Artistic Creations",
    imageUrl:
      "https://images.unsplash.com/photo-1666714050233-330632ee32d5?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Discover the beauty and intricacy of sculpture art at the Sculpture Art Exhibition. Explore captivating sculptures from talented artists, learn about the creative process, and appreciate the artistry of three-dimensional forms.",
  },
  {
    id: 15,
    name: "Cultural Heritage Festival",
    slug: "cultural-heritage-festival",
    city: "Abuja",
    location: "Abuja Cultural Center",
    date: "2030-11-12T00:00:00.000Z",
    organizerName: "Heritage Foundation",
    imageUrl:
      "https://images.unsplash.com/photo-1718219155759-3d5fb012419f?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Celebrate the rich cultural heritage of Nigeria at the Cultural Heritage Festival. Enjoy traditional music, dance performances, craft exhibitions, and cultural showcases that highlight the diversity and beauty of Nigerian culture.",
  },
  {
    id: 16,
    name: "Street Food Carnival",
    slug: "street-food-carnival",
    city: "Lagos",
    location: "Lagos Street Market",
    date: "2030-12-05T00:00:00.000Z",
    organizerName: "Food Carnival Events",
    imageUrl:
      "https://images.unsplash.com/photo-1523618784137-244cc2eeeaa0?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Indulge in a culinary adventure at the Street Food Carnival. Savor delicious street food from local vendors, enjoy live music and entertainment, and experience the vibrant atmosphere of a bustling street market.",
  },
  {
    id: 17,
    name: "Literary Writers Conference",
    slug: "literary-writers-conference",
    city: "Abuja",
    location: "Abuja Writers Center",
    date: "2030-10-18T00:00:00.000Z",
    organizerName: "Writers Guild",
    imageUrl:
      "https://images.unsplash.com/photo-1630320778004-ffd02f18f93f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Join fellow writers at the Literary Writers Conference. Attend workshops, panel discussions, and networking events focused on the craft of writing, publishing, and storytelling. Gain insights from renowned authors and industry experts.",
  },
  {
    id: 18,
    name: "Tech and Innovation Fair",
    slug: "tech-and-innovation-fair",
    city: "Abuja",
    location: "Abuja Expo Center",
    date: "2030-11-10T00:00:00.000Z",
    organizerName: "Innovate Nigeria",
    imageUrl:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Explore the latest advancements in technology and innovation at the Tech and Innovation Fair. Discover cutting-edge products, attend tech talks, and connect with industry leaders and tech enthusiasts.",
  },
  {
    id: 19,
    name: "Classical Music Concert",
    slug: "classical-music-concert",
    city: "Lagos",
    location: "Lagos Symphony Hall",
    date: "2030-12-15T00:00:00.000Z",
    organizerName: "Symphony Productions",
    imageUrl:
      "https://images.unsplash.com/photo-1519683384663-c9b34271669a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Immerse yourself in the timeless beauty of classical music at the Classical Music Concert. Enjoy performances by renowned orchestras and soloists, and experience the elegance and grandeur of classical compositions.",
  },
  {
    id: 20,
    name: "Fitness and Wellness Expo",
    slug: "fitness-and-wellness-expo",
    city: "Lagos",
    location: "Lagos Fitness Center",
    date: "2030-11-22T00:00:00.000Z",
    organizerName: "FitLife Events",
    imageUrl:
      "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Discover the latest trends in fitness and wellness at the Fitness and Wellness Expo. Attend fitness classes, health seminars, and explore products and services that promote a healthy and active lifestyle.",
  },
  {
    id: 21,
    name: "Art and Culture Symposium",
    slug: "art-and-culture-symposium",
    city: "Abuja",
    location: "Abuja Cultural Forum",
    date: "2030-10-21T00:00:00.000Z",
    organizerName: "Cultural Insights",
    imageUrl:
      "https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Engage in thought-provoking discussions on art and culture at the Art and Culture Symposium. Join artists, scholars, and cultural enthusiasts in exploring the intersections of art, history, and society.",
  },
  {
    id: 22,
    name: "Music and Dance Fiesta",
    slug: "music-and-dance-fiesta",
    city: "Lagos",
    location: "Lagos Performance Arena",
    date: "2030-12-20T00:00:00.000Z",
    organizerName: "Rhythm Events",
    imageUrl:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Experience the vibrant energy of music and dance at the Music and Dance Fiesta. Enjoy performances by talented musicians and dancers, and immerse yourself in a celebration of rhythm and movement.",
  },
  {
    id: 23,
    name: "Nature Photography Workshop",
    slug: "nature-photography-workshop",
    city: "Abuja",
    location: "Abuja Nature Reserve",
    date: "2030-11-07T00:00:00.000Z",
    organizerName: "Nature Photographers Guild",
    imageUrl:
      "https://images.unsplash.com/photo-1699891440622-eedf2a3a3eb5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Capture the beauty of nature at the Nature Photography Workshop. Learn from professional photographers, improve your photography skills, and explore stunning natural landscapes.",
  },
  {
    id: 24,
    name: "Street Art Festival",
    slug: "street-art-festival",
    city: "Lagos",
    location: "Lagos Art District",
    date: "2030-10-29T00:00:00.000Z",
    organizerName: "Urban Art Collective",
    imageUrl:
      "https://images.unsplash.com/photo-1542051933538-8b0e74c77ee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Celebrate urban creativity at the Street Art Festival. Witness live mural paintings, graffiti art, and street performances. Experience the dynamic and ever-evolving world of street art.",
  },
];


async function main() {
  console.log(`Start seeding ...`);

  for (const event of events) {
    const result = await prisma.eventoEvent.upsert({
      where: { id: event.id },
      update: {},
      create: event,
    });
    console.log(`Created event with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
