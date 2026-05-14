import { PrismaClient, CharacterStatus, CharacterGender } from '@prisma/client';

const prisma = new PrismaClient();

const characters = [
  {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: CharacterStatus.ALIVE,
    gender: CharacterGender.MALE,
    description: `Rick Sanchez is a genius scientist whose reckless, alcoholic nature keeps his family in constant peril. He travels across the universe and dimensions using his self-made portal gun.`,
  },
  {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    status: CharacterStatus.ALIVE,
    gender: CharacterGender.MALE,
    description: `Morty Smith is a young boy who goes on adventures with his grandfather Rick. Despite his anxiety and naivety, he often shows unexpected courage in dire situations.`,
  },
  {
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    status: CharacterStatus.ALIVE,
    gender: CharacterGender.FEMALE,
    description: `Summer Smith is Morty's older sister. She is a self-conscious teenager who tries to maintain her social standing while occasionally joining her grandfather on adventures.`,
  },
  {
    name: 'Beth Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    status: CharacterStatus.ALIVE,
    gender: CharacterGender.FEMALE,
    description: `Beth Smith is Rick's daughter and the mother of Summer and Morty. She is a horse heart surgeon who struggles with self-worth and questions whether she is a clone.`,
  },
  {
    name: 'Jerry Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    status: CharacterStatus.ALIVE,
    gender: CharacterGender.MALE,
    description: `Jerry Smith is Beth's husband and the father of Summer and Morty. He is an insecure man who often clashes with Rick but deeply loves his family.`,
  },
  {
    name: 'Abadango Cluster Princess',
    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    status: CharacterStatus.ALIVE,
    gender: CharacterGender.FEMALE,
    description: `The Abadango Cluster Princess is a mysterious royal figure from the Abadango Cluster, known for her regal presence and unique alien physiology.`,
  },
  {
    name: 'Abradolf Lincler',
    image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    status: CharacterStatus.UNKNOWN,
    gender: CharacterGender.MALE,
    description: `Abradolf Lincler is a failed experiment by Rick combining the DNA of Abraham Lincoln and Adolf Hitler in an attempt to create a morally neutral super leader.`,
  },
  {
    name: 'Adjudicator Rick',
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
    status: CharacterStatus.DEAD,
    gender: CharacterGender.MALE,
    description: `Adjudicator Rick is one of the many alternate versions of Rick Sanchez across the multiverse. He served as a judge in interdimensional matters before being killed.`,
  },
  {
    name: 'Agency Director',
    image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
    status: CharacterStatus.DEAD,
    gender: CharacterGender.MALE,
    description: `The Agency Director was the head of a shadowy interdimensional agency. He met his end after a confrontation with Rick Sanchez during one of his missions.`,
  },
  {
    name: 'Alan Rails',
    image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
    status: CharacterStatus.DEAD,
    gender: CharacterGender.MALE,
    description: `Alan Rails was a superhero with the power to summon ghost trains. A member of the Vindicators, he was killed during one of Rick's deadly games.`,
  },
  {
    name: 'Albert Einstein',
    image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
    status: CharacterStatus.DEAD,
    gender: CharacterGender.MALE,
    description: `Albert Einstein is the famous physicist who appeared in one of Rick's dimensional adventures. He retained his brilliant mind and curiosity about the universe.`,
  },
  {
    name: 'Alexander',
    image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
    status: CharacterStatus.DEAD,
    gender: CharacterGender.MALE,
    description: `Alexander is a warrior encountered during an interdimensional conflict. His fate was sealed during a chaotic battle involving multiple Rick variants.`,
  },
  {
    name: 'Alien Googah',
    image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
    status: CharacterStatus.UNKNOWN,
    gender: CharacterGender.UNKNOWN,
    description: `Alien Googah is a strange extraterrestrial creature of unknown origin. Its motivations and current whereabouts remain a mystery to the scientific community.`,
  },
  {
    name: 'Alien Morty',
    image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
    status: CharacterStatus.UNKNOWN,
    gender: CharacterGender.MALE,
    description: `Alien Morty is one of the countless Morty variants across the multiverse, but with distinctly alien characteristics. His origins remain largely unexplored.`,
  },
  {
    name: 'Alien Rick',
    image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
    status: CharacterStatus.UNKNOWN,
    gender: CharacterGender.MALE,
    description: `Alien Rick is a variant of Rick Sanchez from a different dimension where the human form of Rick evolved differently. He retains the same intellectual genius.`,
  },
  {
    name: 'Amish Cyborg',
    image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
    status: CharacterStatus.DEAD,
    gender: CharacterGender.MALE,
    description: `Amish Cyborg is a paradoxical being that blends 19th century Amish values with futuristic cybernetic enhancements. He rejected technology in principle but embodied it physically.`,
  },
  {
    name: 'Annie',
    image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
    status: CharacterStatus.ALIVE,
    gender: CharacterGender.FEMALE,
    description: `Annie is a young woman who met Morty during one of his interdimensional adventures. She showed remarkable bravery and resourcefulness during their encounter.`,
  },
  {
    name: 'Antenna Morty',
    image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
    status: CharacterStatus.ALIVE,
    gender: CharacterGender.MALE,
    description: `Antenna Morty is a Morty variant who has antennas growing from his head, suggesting his reality diverged from humans evolving with biological communication organs.`,
  },
  {
    name: 'Antenna Rick',
    image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    status: CharacterStatus.UNKNOWN,
    gender: CharacterGender.MALE,
    description: `Antenna Rick hails from the same dimension as Antenna Morty. Despite the biological differences, his intelligence and eccentric personality mirror the canonical Rick.`,
  },
  {
    name: 'Ants in my Eyes Johnson',
    image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
    status: CharacterStatus.UNKNOWN,
    gender: CharacterGender.MALE,
    description: `Ants in my Eyes Johnson is a bizarre TV salesman who, as his name suggests, has ants in his eyes. He cannot see or feel anything, which causes unique challenges in daily life.`,
  },
];

async function main(): Promise<void> {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  await prisma.character.deleteMany();
  console.log('🗑️  Cleared existing characters');

  // Seed characters
  const created = await prisma.character.createMany({
    data: characters,
  });

  console.log(`✅ Seeded ${created.count} characters successfully`);
}

main()
  .catch((error) => {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });