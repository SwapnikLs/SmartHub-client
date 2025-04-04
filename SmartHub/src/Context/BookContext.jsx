import axios from "axios";
import { createContext, useContext, useEffect,useState } from "react";
import { fetchSectionBooks } from "../Service/SectionFetchAPI";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [trendingBooks, setTrendingBooks] = useState([]);
  useEffect(() => {
    fetchSectionBooks("Trending").then(setTrendingBooks);
}, []);
  const [topPicks, setTopPicks] = useState([
    {
      id: 25,
      src: "https://images.penguinrandomhouse.com/cover/9780385682312",
      title: "The Girl on the Train",
      author: "Paula Hawkins",
      rating: 4.3,
      description: "A psychological thriller with unexpected twists."
    },
    {
      id: 26,
      src: "https://images.penguinrandomhouse.com/cover/9781101967668",
      title: "Verity",
      author: "Colleen Hoover",
      rating: 4.6,
      description: "A chilling romantic thriller."
    },
    {
      id: 27,
      src: "https://images.penguinrandomhouse.com/cover/9780307277678",
      title: "The Road Less Traveled",
      author: "M. Scott Peck",
      rating: 4.4,
      description: "A guide to personal and spiritual growth."
    },
    {
      id: 28,
      src: "https://images.penguinrandomhouse.com/cover/9781501124020",
      title: "Eleanor Oliphant Is Completely Fine",
      author: "Gail Honeyman",
      rating: 4.7,
      description: "A heartwarming and emotional novel."
    },
    {
      id: 29,
      src: "https://images.penguinrandomhouse.com/cover/9780385546027",
      title: "The Paper Palace",
      author: "Miranda Cowley Heller",
      rating: 4.5,
      description: "A story of love, family, and secrets."
    },
    {
      id: 30,
      src: "https://images.penguinrandomhouse.com/cover/9781524763169",
      title: "Becoming",
      author: "Michelle Obama",
      rating: 4.9,
      description: "The inspiring memoir of the former First Lady."
    },
    {
      id: 31,
      src: "https://images.penguinrandomhouse.com/cover/9781524796976",
      title: "The Vanishing Half",
      author: "Brit Bennett",
      rating: 4.6,
      description: "A novel about identity and family secrets."
    },
    {
      id: 32,
      src: "https://images.penguinrandomhouse.com/cover/9781250223180",
      title: "Circe",
      author: "Madeline Miller",
      rating: 4.8,
      description: "A retelling of Greek mythology through Circe’s eyes."
    },
    {
      id: 33,
      src: "https://images.penguinrandomhouse.com/cover/9780062834842",
      title: "Think Like a Monk",
      author: "Jay Shetty",
      rating: 4.7,
      description: "Ancient wisdom for a modern world."
    },
    {
      id: 34,
      src: "https://images.penguinrandomhouse.com/cover/9780385737951",
      title: "The Fault in Our Stars",
      author: "John Green",
      rating: 4.8,
      description: "A touching love story of two teenagers."
    },
    {
      id: 35,
      src: "https://images.penguinrandomhouse.com/cover/9780142414937",
      title: "Looking for Alaska",
      author: "John Green",
      rating: 4.5,
      description: "A coming-of-age novel about love and loss."
    },
    {
      id: 36,
      src: "https://images.penguinrandomhouse.com/cover/9780385545679",
      title: "The Guest List",
      author: "Lucy Foley",
      rating: 4.6,
      description: "A gripping murder mystery set at a wedding."
    },
    {
      id: 37,
      src: "https://images.penguinrandomhouse.com/cover/9781524763138",
      title: "Can’t Hurt Me",
      author: "David Goggins",
      rating: 4.9,
      description: "A story of resilience and mental toughness."
    },
    {
      id: 38,
      src: "https://images.penguinrandomhouse.com/cover/9781501161933",
      title: "The Tattooist of Auschwitz",
      author: "Heather Morris",
      rating: 4.7,
      description: "A historical novel based on a true story."
    },
    {
      id: 39,
      src: "https://images.penguinrandomhouse.com/cover/9780140186392",
      title: "Of Mice and Men",
      author: "John Steinbeck",
      rating: 4.6,
      description: "A classic novel of friendship and dreams."
    },
    {
      id: 40,
      src: "https://images.penguinrandomhouse.com/cover/9780141441149",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      rating: 4.9,
      description: "A timeless romance with wit and humor."
    },
    {
      id: 41,
      src: "https://images.penguinrandomhouse.com/cover/9780452284233",
      title: "Life of Pi",
      author: "Yann Martel",
      rating: 4.7,
      description: "A surreal tale of survival and spirituality."
    },
    {
      id: 42,
      src: "https://images.penguinrandomhouse.com/cover/9780060883286",
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      rating: 4.8,
      description: "A powerful story of friendship and redemption."
    },
    {
      id: 43,
      src: "https://images.penguinrandomhouse.com/cover/9781594631931",
      title: "Into the Wild",
      author: "Jon Krakauer",
      rating: 4.5,
      description: "A true story of adventure and self-discovery."
    },
    {
      id: 44,
      src: "https://images.penguinrandomhouse.com/cover/9780593099323",
      title: "Daisy Jones & The Six",
      author: "Taylor Jenkins Reid",
      rating: 4.6,
      description: "A rock ‘n’ roll story told in documentary style."
    }
  ]
  );

  const [smartPicks, setSmartPicks] = useState( [
    {
      id: 45,
      src: "https://images.penguinrandomhouse.com/cover/9780812981605",
      title: "Educated",
      author: "Tara Westover",
      rating: 4.8,
      description: "A memoir of resilience and self-discovery."
    },
    {
      id: 46,
      src: "https://images.penguinrandomhouse.com/cover/9780345803481",
      title: "The Night Circus",
      author: "Erin Morgenstern",
      rating: 4.7,
      description: "A magical love story set in a mysterious circus."
    },
    {
      id: 47,
      src: "https://images.penguinrandomhouse.com/cover/9780307595635",
      title: "Steve Jobs",
      author: "Walter Isaacson",
      rating: 4.9,
      description: "A biography of Apple's visionary co-founder."
    },
    {
      id: 48,
      src: "https://images.penguinrandomhouse.com/cover/9780140449334",
      title: "Meditations",
      author: "Marcus Aurelius",
      rating: 4.8,
      description: "Timeless wisdom from a Roman emperor."
    },
    {
      id: 49,
      src: "https://images.penguinrandomhouse.com/cover/9781101904229",
      title: "Grit",
      author: "Angela Duckworth",
      rating: 4.6,
      description: "Why perseverance matters more than talent."
    },
    {
      id: 50,
      src: "https://images.penguinrandomhouse.com/cover/9780525536291",
      title: "Atomic Habits",
      author: "James Clear",
      rating: 4.9,
      description: "Practical strategies for building good habits."
    },
    {
      id: 51,
      src: "https://images.penguinrandomhouse.com/cover/9780143127741",
      title: "Sapiens",
      author: "Yuval Noah Harari",
      rating: 4.8,
      description: "A brief history of humankind."
    },
    {
      id: 52,
      src: "https://images.penguinrandomhouse.com/cover/9780062316119",
      title: "The Alchemist",
      author: "Paulo Coelho",
      rating: 4.7,
      description: "A philosophical novel about following your dreams."
    },
    {
      id: 53,
      src: "https://images.penguinrandomhouse.com/cover/9780671027032",
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      rating: 4.7,
      description: "Lessons on wealth and financial literacy."
    },
    {
      id: 54,
      src: "https://images.penguinrandomhouse.com/cover/9781400069286",
      title: "The Power of Habit",
      author: "Charles Duhigg",
      rating: 4.6,
      description: "Why we do what we do in life and business."
    },
    {
      id: 55,
      src: "https://images.penguinrandomhouse.com/cover/9780307454543",
      title: "Outliers",
      author: "Malcolm Gladwell",
      rating: 4.7,
      description: "The story of success and what makes people great."
    },
    {
      id: 56,
      src: "https://images.penguinrandomhouse.com/cover/9780062457737",
      title: "The 5 AM Club",
      author: "Robin Sharma",
      rating: 4.6,
      description: "Morning routines for high achievers."
    },
    {
      id: 57,
      src: "https://images.penguinrandomhouse.com/cover/9780307588378",
      title: "The Lean Startup",
      author: "Eric Ries",
      rating: 4.6,
      description: "How entrepreneurs can innovate successfully."
    },
    {
      id: 58,
      src: "https://images.penguinrandomhouse.com/cover/9780553382563",
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      rating: 4.8,
      description: "How our minds make decisions."
    },
    {
      id: 59,
      src: "https://images.penguinrandomhouse.com/cover/9781101903918",
      title: "12 Rules for Life",
      author: "Jordan B. Peterson",
      rating: 4.7,
      description: "Life lessons for discipline and purpose."
    },
    {
      id: 60,
      src: "https://images.penguinrandomhouse.com/cover/9780062316097",
      title: "Man’s Search for Meaning",
      author: "Viktor E. Frankl",
      rating: 4.9,
      description: "A psychologist’s experience in a concentration camp."
    },
    {
      id: 61,
      src: "https://images.penguinrandomhouse.com/cover/9780735211292",
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      rating: 4.6,
      description: "A counterintuitive approach to living a good life."
    },
    {
      id: 62,
      src: "https://images.penguinrandomhouse.com/cover/9780143038412",
      title: "The Art of War",
      author: "Sun Tzu",
      rating: 4.6,
      description: "Timeless military and strategic wisdom."
    },
    {
      id: 63,
      src: "https://images.penguinrandomhouse.com/cover/9780451524934",
      title: "1984",
      author: "George Orwell",
      rating: 4.9,
      description: "A dystopian novel about surveillance and control."
    },
    {
      id: 64,
      src: "https://images.penguinrandomhouse.com/cover/9780812981605",
      title: "The Four Agreements",
      author: "Don Miguel Ruiz",
      rating: 4.7,
      description: "A guide to personal freedom and transformation."
    }
  ]);

  const [newArrivals, setNewArrivals] = useState( [
    {
      id: 65,
      src: "https://images.penguinrandomhouse.com/cover/9780062315007",
      title: "The Book Thief",
      author: "Markus Zusak",
      rating: 4.8,
      description: "A powerful story of a girl in Nazi Germany."
    },
    {
      id: 66,
      src: "https://images.penguinrandomhouse.com/cover/9780593338484",
      title: "The Missing Half",
      author: "Ashley Flowers",
      rating: 4.6,
      description: "Two women haunted by their sisters' unsolved disappearances band together."
    },
    {
      id: 67,
      src: "https://images.penguinrandomhouse.com/cover/9780593539125",
      title: "Dream Count",
      author: "Chimamanda Ngozi Adichie",
      rating: 4.7,
      description: "A story of four women navigating love, longings, and desires."
    },
    {
      id: 68,
      src: "https://images.penguinrandomhouse.com/cover/9780593442326",
      title: "Source Code",
      author: "Bill Gates",
      rating: 4.5,
      description: "The origin story of one of the most influential business leaders and philanthropists."
    },
    {
      id: 69,
      src: "https://images.penguinrandomhouse.com/cover/9780525555710",
      title: "Everything Is Tuberculosis",
      author: "John Green",
      rating: 4.3,
      description: "A deep dive into the history and impact of tuberculosis on humanity."
    },
    {
      id: 70,
      src: "https://images.penguinrandomhouse.com/cover/9780358252113",
      title: "The Untamed Mind",
      author: "Lisa Feldman Barrett",
      rating: 4.6,
      description: "Exploring the unpredictable nature of human emotions."
    },
    {
      id: 71,
      src: "https://images.penguinrandomhouse.com/cover/9780593215304",
      title: "Quantum Horizons",
      author: "Brian Greene",
      rating: 4.8,
      description: "An exploration of quantum mechanics and its impact on reality."
    },
    {
      id: 72,
      src: "https://images.penguinrandomhouse.com/cover/9781538719207",
      title: "Unfinished Business",
      author: "David Baldacci",
      rating: 4.4,
      description: "A high-stakes legal thriller with twists and turns."
    },
    {
      id: 73,
      src: "https://images.penguinrandomhouse.com/cover/9780593678770",
      title: "My Name Is Emilia del Valle",
      author: "Isabel Allende",
      rating: 4.7,
      description: "A tale of self-discovery and love set in 1866 San Francisco."
    },
    {
      id: 74,
      src: "https://images.penguinrandomhouse.com/cover/9780062060806",
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 4.9,
      description: "A historical epic about the Viking invasion of England."
    },
    {
    id: 65,
    src: "https://images.penguinrandomhouse.com/cover/9780062315007",
    title: "The Book Thief",
    author: "Markus Zusak",
    rating: 4.8,
    description: "A powerful story of a girl in Nazi Germany."
  },
  {
    id: 66,
    src: "https://images.penguinrandomhouse.com/cover/9780593338484",
    title: "The Missing Half",
    author: "Ashley Flowers",
    rating: 4.6,
    description: "Two women haunted by their sisters' unsolved disappearances band together."
  },
  {
    id: 67,
    src: "https://images.penguinrandomhouse.com/cover/9780593539125",
    title: "Dream Count",
    author: "Chimamanda Ngozi Adichie",
    rating: 4.7,
    description: "A story of four women navigating love, longings, and desires."
  },
  {
    id: 68,
    src: "https://images.penguinrandomhouse.com/cover/9780593442326",
    title: "Source Code",
    author: "Bill Gates",
    rating: 4.5,
    description: "The origin story of one of the most influential business leaders and philanthropists."
  },
  {
    id: 69,
    src: "https://images.penguinrandomhouse.com/cover/9780525555710",
    title: "Everything Is Tuberculosis",
    author: "John Green",
    rating: 4.3,
    description: "A deep dive into the history and impact of tuberculosis on humanity."
  },
  {
    id: 70,
    src: "https://images.penguinrandomhouse.com/cover/9780358252113",
    title: "The Untamed Mind",
    author: "Lisa Feldman Barrett",
    rating: 4.6,
    description: "Exploring the unpredictable nature of human emotions."
  },
  {
    id: 71,
    src: "https://images.penguinrandomhouse.com/cover/9780593215304",
    title: "Quantum Horizons",
    author: "Brian Greene",
    rating: 4.8,
    description: "An exploration of quantum mechanics and its impact on reality."
  },
  {
    id: 72,
    src: "https://images.penguinrandomhouse.com/cover/9781538719207",
    title: "Unfinished Business",
    author: "David Baldacci",
    rating: 4.4,
    description: "A high-stakes legal thriller with twists and turns."
  },
  {
    id: 73,
    src: "https://images.penguinrandomhouse.com/cover/9780593678770",
    title: "My Name Is Emilia del Valle",
    author: "Isabel Allende",
    rating: 4.7,
    description: "A tale of self-discovery and love set in 1866 San Francisco."
  },
  {
    id: 74,
    src: "https://images.penguinrandomhouse.com/cover/9780062060806",
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 4.9,
    description: "A historical epic about the Viking invasion of England."
  },
  {
    id: 75,
    src: "https://images.penguinrandomhouse.com/cover/9780385547345",
    title: "The Night Watchman",
    author: "Louise Erdrich",
    rating: 4.6,
    description: "A historical novel about Native American struggles and resistance."
  },
  {
    id: 76,
    src: "https://images.penguinrandomhouse.com/cover/9780593139134",
    title: "Atomic Habits",
    author: "James Clear",
    rating: 4.9,
    description: "A guide to building good habits and breaking bad ones."
  },
  {
    id: 77,
    src: "https://images.penguinrandomhouse.com/cover/9781984822185",
    title: "The Midnight Library",
    author: "Matt Haig",
    rating: 4.7,
    description: "A woman finds a library that lets her experience different versions of her life."
  },
  {
    id: 78,
    src: "https://images.penguinrandomhouse.com/cover/9780385546027",
    title: "Project Hail Mary",
    author: "Andy Weir",
    rating: 4.8,
    description: "A lone astronaut's struggle to save Earth from an extinction-level event."
  },
  {
    id: 79,
    src: "https://images.penguinrandomhouse.com/cover/9780735211292",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    rating: 4.7,
    description: "A mystery and coming-of-age novel set in the marshes of North Carolina."
  },
  {
    id: 80,
    src: "https://images.penguinrandomhouse.com/cover/9781501110368",
    title: "The Nightingale",
    author: "Kristin Hannah",
    rating: 4.9,
    description: "Two sisters in Nazi-occupied France fight for survival and resistance."
  },
  {
    id: 81,
    src: "https://images.penguinrandomhouse.com/cover/9780307277671",
    title: "The Road",
    author: "Cormac McCarthy",
    rating: 4.5,
    description: "A post-apocalyptic journey of a father and son through a devastated world."
  },
  {
    id: 82,
    src: "https://images.penguinrandomhouse.com/cover/9780735222359",
    title: "Circe",
    author: "Madeline Miller",
    rating: 4.8,
    description: "A fresh retelling of Greek mythology from the perspective of Circe."
  },
  {
    id: 83,
    src: "https://images.penguinrandomhouse.com/cover/9780679723165",
    title: "Beloved",
    author: "Toni Morrison",
    rating: 4.7,
    description: "A haunting story of slavery, love, and memory."
  }
  ]);

  const [youMayLike, setYouMayLike] = useState([
    {
      id: 65,
      src: "https://cdn.penguin.co.in/wp-content/uploads/2025/02/9780143475927-3.jpg",
      title: "The Book Thief",
      author: "Markus Zusak",
      rating: 4.8,
      description: "A powerful story of a girl in Nazi Germany."
    },
    {
      id: 66,
      src: "https://images.penguinrandomhouse.com/cover/9781501124020",
      title: "It Ends with Us",
      author: "Colleen Hoover",
      rating: 4.7,
      description: "An emotional novel about love and sacrifice."
    },
    {
      id: 67,
      src: "https://images.penguinrandomhouse.com/cover/9781594631931",
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      rating: 4.9,
      description: "A tale of friendship and redemption in Afghanistan."
    },
    {
      id: 68,
      src: "https://images.penguinrandomhouse.com/cover/9781400078776",
      title: "A Thousand Splendid Suns",
      author: "Khaled Hosseini",
      rating: 4.8,
      description: "A story of two women in war-torn Afghanistan."
    },
    {
      id: 69,
      src: "https://images.penguinrandomhouse.com/cover/9780385490818",
      title: "Tuesdays with Morrie",
      author: "Mitch Albom",
      rating: 4.8,
      description: "A touching memoir on life lessons."
    },
    {
      id: 70,
      src: "https://images.penguinrandomhouse.com/cover/9780451163966",
      title: "The Shining",
      author: "Stephen King",
      rating: 4.7,
      description: "A chilling horror classic."
    },
    {
      id: 71,
      src: "https://images.penguinrandomhouse.com/cover/9780735219090",
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      rating: 4.8,
      description: "A mystery novel with a stunning setting."
    },
    {
      id: 72,
      src: "https://images.penguinrandomhouse.com/cover/9780812993547",
      title: "Becoming",
      author: "Michelle Obama",
      rating: 4.9,
      description: "The memoir of a former First Lady."
    },
    {
      id: 73,
      src: "https://images.penguinrandomhouse.com/cover/9780345339700",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      rating: 4.9,
      description: "A fantasy adventure with Bilbo Baggins."
    },
    {
      id: 74,
      src: "https://images.penguinrandomhouse.com/cover/9780062658487",
      title: "Daisy Jones & The Six",
      author: "Taylor Jenkins Reid",
      rating: 4.7,
      description: "A fictional band’s rise to fame."
    },
    {
      id: 75,
      src: "https://images.penguinrandomhouse.com/cover/9780553296983",
      title: "Foundation",
      author: "Isaac Asimov",
      rating: 4.8,
      description: "A sci-fi masterpiece about the future of civilization."
    },
    {
      id: 76,
      src: "https://images.penguinrandomhouse.com/cover/9780060838676",
      title: "Brave New World",
      author: "Aldous Huxley",
      rating: 4.6,
      description: "A dystopian novel about a future society."
    },
    {
      id: 77,
      src: "https://images.penguinrandomhouse.com/cover/9780060850524",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      rating: 4.5,
      description: "A coming-of-age story about teenage rebellion."
    },
    {
      id: 78,
      src: "https://images.penguinrandomhouse.com/cover/9780061120084",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.9,
      description: "A classic novel about race and justice."
    },
    {
      id: 79,
      src: "https://images.penguinrandomhouse.com/cover/9780385737951",
      title: "The Maze Runner",
      author: "James Dashner",
      rating: 4.6,
      description: "A thrilling sci-fi mystery."
    },
    {
      id: 80,
      src: "https://images.penguinrandomhouse.com/cover/9780316769488",
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      rating: 4.7,
      description: "A dystopian novel about censorship."
    },
    {
      id: 81,
      src: "https://images.penguinrandomhouse.com/cover/9780385533225",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      rating: 4.8,
      description: "A psychological thriller with a shocking twist."
    },
    {
      id: 82,
      src: "https://images.penguinrandomhouse.com/cover/9780316769174",
      title: "Norwegian Wood",
      author: "Haruki Murakami",
      rating: 4.7,
      description: "A nostalgic love story set in Japan."
    },
    {
      id: 83,
      src: "https://images.penguinrandomhouse.com/cover/9780345538370",
      title: "Inferno",
      author: "Dan Brown",
      rating: 4.7,
      description: "A thrilling adventure with symbols and history."
    },
    {
      id: 84,
      src: "https://images.penguinrandomhouse.com/cover/9780441172719",
      title: "Dune",
      author: "Frank Herbert",
      rating: 4.9,
      description: "A sci-fi epic of politics, power, and prophecy."
    }
  ]);

  const [continueReading, setContinueReading] = useState( [
  {
    id: 85,
    src: "https://images.penguinrandomhouse.com/cover/9780385537858",
    title: "The Night Circus",
    author: "Erin Morgenstern",
    rating: 4.8,
    description: "A magical competition between two illusionists."
  },
  {
    id: 86,
    src: "https://images.penguinrandomhouse.com/cover/9781250316776",
    title: "Circe",
    author: "Madeline Miller",
    rating: 4.9,
    description: "A retelling of the life of the witch Circe."
  },
  {
    id: 87,
    src: "https://images.penguinrandomhouse.com/cover/9781501171345",
    title: "Verity",
    author: "Colleen Hoover",
    rating: 4.7,
    description: "A psychological thriller with dark secrets."
  },
  {
    id: 88,
    src: "https://images.penguinrandomhouse.com/cover/9780553213119",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.8,
    description: "A classic tale of love and misunderstandings."
  },
  {
    id: 89,
    src: "https://images.penguinrandomhouse.com/cover/9780385732550",
    title: "Looking for Alaska",
    author: "John Green",
    rating: 4.6,
    description: "A story of friendship, love, and loss."
  },
  {
    id: 90,
    src: "https://images.penguinrandomhouse.com/cover/9781400032716",
    title: "Life of Pi",
    author: "Yann Martel",
    rating: 4.8,
    description: "A young boy survives at sea with a tiger."
  },
  {
    id: 91,
    src: "https://images.penguinrandomhouse.com/cover/9780385341004",
    title: "The Help",
    author: "Kathryn Stockett",
    rating: 4.9,
    description: "A novel about race and women in the 1960s."
  },
  {
    id: 92,
    src: "https://images.penguinrandomhouse.com/cover/9780812995343",
    title: "The Goldfinch",
    author: "Donna Tartt",
    rating: 4.8,
    description: "A gripping novel of loss and obsession."
  },
  {
    id: 93,
    src: "https://images.penguinrandomhouse.com/cover/9780553573428",
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    rating: 4.9,
    description: "The first book in the epic fantasy series."
  },
  {
    id: 94,
    src: "https://images.penguinrandomhouse.com/cover/9780143128571",
    title: "Big Little Lies",
    author: "Liane Moriarty",
    rating: 4.7,
    description: "A suspenseful novel about friendships and secrets."
  },
  {
    id: 95,
    src: "https://images.penguinrandomhouse.com/cover/9780307588364",
    title: "Gone Girl",
    author: "Gillian Flynn",
    rating: 4.8,
    description: "A psychological thriller with shocking twists."
  },
  {
    id: 96,
    src: "https://images.penguinrandomhouse.com/cover/9780590353427",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    rating: 4.9,
    description: "The start of the legendary wizarding series."
  },
  {
    id: 97,
    src: "https://images.penguinrandomhouse.com/cover/9781524763169",
    title: "The 5 AM Club",
    author: "Robin Sharma",
    rating: 4.6,
    description: "A guide to productivity and personal growth."
  },
  {
    id: 98,
    src: "https://images.penguinrandomhouse.com/cover/9780345803485",
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    rating: 4.7,
    description: "A dystopian classic about women's rights."
  },
  {
    id: 99,
    src: "https://images.penguinrandomhouse.com/cover/9780812994520",
    title: "Educated",
    author: "Tara Westover",
    rating: 4.9,
    description: "A memoir of resilience and learning."
  },
  {
    id: 100,
    src: "https://images.penguinrandomhouse.com/cover/9780142437231",
    title: "Moby-Dick",
    author: "Herman Melville",
    rating: 4.5,
    description: "A classic story of obsession and revenge."
  },
  {
    id: 101,
    src: "https://images.penguinrandomhouse.com/cover/9780316769488",
    title: "Of Mice and Men",
    author: "John Steinbeck",
    rating: 4.7,
    description: "A powerful tale of friendship and dreams."
  },
  {
    id: 102,
    src: "https://images.penguinrandomhouse.com/cover/9780812995343",
    title: "The Secret History",
    author: "Donna Tartt",
    rating: 4.8,
    description: "A gripping novel of dark academia."
  },
  {
    id: 103,
    src: "https://images.penguinrandomhouse.com/cover/9780735219090",
    title: "The Light We Lost",
    author: "Jill Santopolo",
    rating: 4.6,
    description: "A love story filled with fate and decisions."
  },
  {
    id: 104,
    src: "https://images.penguinrandomhouse.com/cover/9780812976830",
    title: "Shantaram",
    author: "Gregory David Roberts",
    rating: 4.9,
    description: "An adventure set in the underworld of Mumbai."
  }
]);

  const [genres, setGenres] = useState( [
    {
      genre: "Science Fiction",
      books: [
        {
          title: "Dune",
          author: "Frank Herbert",
          description: "A sci-fi epic set in a desert world.",
          cover: "https://images.penguinrandomhouse.com/cover/9780441013593"
        },
        {
          title: "Neuromancer",
          author: "William Gibson",
          description: "A cyberpunk masterpiece.",
          cover: "https://images.penguinrandomhouse.com/cover/9780441569595"
        },
        {
          title: "Snow Crash",
          author: "Neal Stephenson",
          description: "A cyberpunk thriller about a virtual world.",
          cover: "https://images.penguinrandomhouse.com/cover/9780553380958"
        },
        {
          title: "The Hunger Games",
          author: "Suzanne Collins",
          description: "A survival thriller with deadly games.",
          cover: "https://images.penguinrandomhouse.com/cover/9780439023481"
        },
        {
          title: "Foundation",
          author: "Isaac Asimov",
          description: "A tale of the fall and rise of civilizations.",
          cover: "https://images.penguinrandomhouse.com/cover/9780553293357"
        },
        {
          title: "Brave New World",
          author: "Aldous Huxley",
          description: "A dystopian vision of a future society.",
          cover: "https://images.penguinrandomhouse.com/cover/9780060850522"
        },
        {
          title: "Ender's Game",
          author: "Orson Scott Card",
          description: "A young boy is trained to save humanity.",
          cover: "https://images.penguinrandomhouse.com/cover/9780812550702"
        },
        {
          title: "The Left Hand of Darkness",
          author: "Ursula K. Le Guin",
          description: "A deep exploration of gender and society.",
          cover: "https://images.penguinrandomhouse.com/cover/9780441478125"
        },
        {
          title: "Hyperion",
          author: "Dan Simmons",
          description: "A sci-fi Canterbury Tales set across the stars.",
          cover: "https://images.penguinrandomhouse.com/cover/9780553283686"
        },
        {
          title: "2001: A Space Odyssey",
          author: "Arthur C. Clarke",
          description: "A journey into space and beyond.",
          cover: "https://images.penguinrandomhouse.com/cover/9780451457998"
        }
      ]
    },
    {
      genre: "Fantasy",
      books: [
        {
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          description: "A journey through Middle-earth.",
          cover: "https://images.penguinrandomhouse.com/cover/9780345339683"
        },
        {
          title: "Harry Potter and the Sorcerer's Stone",
          author: "J.K. Rowling",
          description: "The story of a young wizard.",
          cover: "https://images.penguinrandomhouse.com/cover/9780590353427"
        },
        {
          title: "The Name of the Wind",
          author: "Patrick Rothfuss",
          description: "A lyrical fantasy novel of a young magician.",
          cover: "https://images.penguinrandomhouse.com/cover/9780756404741"
        },
        {
          title: "Mistborn",
          author: "Brandon Sanderson",
          description: "A world where the dark lord won.",
          cover: "https://images.penguinrandomhouse.com/cover/9780765311788"
        },
        {
          title: "A Game of Thrones",
          author: "George R.R. Martin",
          description: "A political and magical epic fantasy.",
          cover: "https://images.penguinrandomhouse.com/cover/9780553103540"
        },
        {
          title: "The Way of Kings",
          author: "Brandon Sanderson",
          description: "A grand fantasy epic full of magic and war.",
          cover: "https://images.penguinrandomhouse.com/cover/9780765326355"
        },
        {
          title: "American Gods",
          author: "Neil Gaiman",
          description: "A modern mythology tale.",
          cover: "https://images.penguinrandomhouse.com/cover/9780060558121"
        },
        {
          title: "The Lies of Locke Lamora",
          author: "Scott Lynch",
          description: "A fantasy heist novel.",
          cover: "https://images.penguinrandomhouse.com/cover/9780553588941"
        },
        {
          title: "The Poppy War",
          author: "R.F. Kuang",
          description: "A grim fantasy based on Chinese history.",
          cover: "https://images.penguinrandomhouse.com/cover/9780062662567"
        },
        {
          title: "The Priory of the Orange Tree",
          author: "Samantha Shannon",
          description: "A feminist epic fantasy with dragons.",
          cover: "https://images.penguinrandomhouse.com/cover/9781635570298"
        }
      ]
    },
    {
      genre: "Mystery",
      books: [
        {
          title: "The Girl with the Dragon Tattoo",
          author: "Stieg Larsson",
          description: "A journalist and hacker uncover a dark mystery.",
          cover: "https://images.penguinrandomhouse.com/cover/9780307949486"
        },
        {
          title: "Gone Girl",
          author: "Gillian Flynn",
          description: "A psychological thriller with a shocking twist.",
          cover: "https://images.penguinrandomhouse.com/cover/9780307588371"
        },
        {
          title: "The Da Vinci Code",
          author: "Dan Brown",
          description: "A symbologist unravels a historical conspiracy.",
          cover: "https://images.penguinrandomhouse.com/cover/9780307474278"
        },
        {
          title: "Big Little Lies",
          author: "Liane Moriarty",
          description: "A murder mystery among suburban mothers.",
          cover: "https://images.penguinrandomhouse.com/cover/9780425274866"
        },
        {
          title: "The No. 1 Ladies’ Detective Agency",
          author: "Alexander McCall Smith",
          description: "A detective solving cases in Botswana.",
          cover: "https://images.penguinrandomhouse.com/cover/9781400034772"
        },
        {
          title: "Sharp Objects",
          author: "Gillian Flynn",
          description: "A journalist investigates a disturbing hometown case.",
          cover: "https://images.penguinrandomhouse.com/cover/9780307341556"
        },
        {
          title: "The Silent Patient",
          author: "Alex Michaelides",
          description: "A woman stops speaking after a crime.",
          cover: "https://images.penguinrandomhouse.com/cover/9781250301697"
        },
        {
          title: "Murder on the Orient Express",
          author: "Agatha Christie",
          description: "Hercule Poirot solves a murder on a train.",
          cover: "https://images.penguinrandomhouse.com/cover/9780062693660"
        },
        {
          title: "The Woman in the Window",
          author: "A.J. Finn",
          description: "A recluse believes she witnessed a crime.",
          cover: "https://images.penguinrandomhouse.com/cover/9780062678414"
        },
        {
          title: "In the Woods",
          author: "Tana French",
          description: "A detective's past collides with a murder case.",
          cover: "https://images.penguinrandomhouse.com/cover/9780143113492"
        }
      ]
    },
      {
        genre: "Thriller",
        books: [
          {
            title: "The Girl on the Train",
            author: "Paula Hawkins",
            description: "A psychological thriller full of suspense.",
            cover: "https://images.penguinrandomhouse.com/cover/9781594633669"
          },
          {
            title: "The Silent Patient",
            author: "Alex Michaelides",
            description: "A woman stops speaking after a violent act.",
            cover: "https://images.penguinrandomhouse.com/cover/9781250301697"
          },
          {
            title: "Before I Go to Sleep",
            author: "S.J. Watson",
            description: "A woman with amnesia pieces her life together.",
            cover: "https://images.penguinrandomhouse.com/cover/9780062060561"
          },
          {
            title: "The Woman in the Window",
            author: "A.J. Finn",
            description: "A recluse believes she witnessed a murder.",
            cover: "https://images.penguinrandomhouse.com/cover/9780062678414"
          },
          {
            title: "I Am Watching You",
            author: "Teresa Driscoll",
            description: "A missing girl and multiple perspectives.",
            cover: "https://images.penguinrandomhouse.com/cover/9781542046596"
          },
          {
            title: "The Couple Next Door",
            author: "Shari Lapena",
            description: "A dinner party turns into a nightmare.",
            cover: "https://images.penguinrandomhouse.com/cover/9780735221109"
          },
          {
            title: "Into the Water",
            author: "Paula Hawkins",
            description: "Dark secrets emerge from a small town.",
            cover: "https://images.penguinrandomhouse.com/cover/9780735211209"
          },
          {
            title: "The Reversal",
            author: "Michael Connelly",
            description: "A defense attorney tackles a difficult case.",
            cover: "https://images.penguinrandomhouse.com/cover/9780316069489"
          },
          {
            title: "The Girl with the Dragon Tattoo",
            author: "Stieg Larsson",
            description: "A journalist and hacker uncover dark secrets.",
            cover: "https://images.penguinrandomhouse.com/cover/9780307949486"
          },
          {
            title: "Sharp Objects",
            author: "Gillian Flynn",
            description: "A journalist investigates disturbing crimes.",
            cover: "https://images.penguinrandomhouse.com/cover/9780307341556"
          }
        ]
      },
      {
        genre: "Romance",
        books: [
          {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            description: "A classic romance about love and class.",
            cover: "https://images.penguinrandomhouse.com/cover/9780143105428"
          },
          {
            title: "Me Before You",
            author: "Jojo Moyes",
            description: "A heartbreaking love story.",
            cover: "https://images.penguinrandomhouse.com/cover/9780143124542"
          },
          {
            title: "The Notebook",
            author: "Nicholas Sparks",
            description: "A tale of everlasting love.",
            cover: "https://images.penguinrandomhouse.com/cover/9780446676090"
          },
          {
            title: "It Ends with Us",
            author: "Colleen Hoover",
            description: "A powerful and emotional romance.",
            cover: "https://images.penguinrandomhouse.com/cover/9781501110368"
          },
          {
            title: "The Hating Game",
            author: "Sally Thorne",
            description: "A fun and steamy office romance.",
            cover: "https://images.penguinrandomhouse.com/cover/9780062439596"
          },
          {
            title: "Red, White & Royal Blue",
            author: "Casey McQuiston",
            description: "A royal romance with political drama.",
            cover: "https://images.penguinrandomhouse.com/cover/9781250316776"
          },
          {
            title: "Beach Read",
            author: "Emily Henry",
            description: "A summer romance with deep emotions.",
            cover: "https://images.penguinrandomhouse.com/cover/9781984806734"
          },
          {
            title: "Outlander",
            author: "Diana Gabaldon",
            description: "A historical romance with time travel.",
            cover: "https://images.penguinrandomhouse.com/cover/9780440212560"
          },
          {
            title: "One Day",
            author: "David Nicholls",
            description: "A love story told over two decades.",
            cover: "https://images.penguinrandomhouse.com/cover/9780340896982"
          },
          {
            title: "The Rosie Project",
            author: "Graeme Simsion",
            description: "A quirky romance involving a genetics professor.",
            cover: "https://images.penguinrandomhouse.com/cover/9781476729091"
          }
        ]
      },
      {
        genre: "Horror",
        books: [
          {
            title: "It",
            author: "Stephen King",
            description: "A terrifying novel about an evil entity.",
            cover: "https://images.penguinrandomhouse.com/cover/9781501142970"
          },
          {
            title: "The Shining",
            author: "Stephen King",
            description: "A haunted hotel and a descent into madness.",
            cover: "https://images.penguinrandomhouse.com/cover/9780345806789"
          },
          {
            title: "Dracula",
            author: "Bram Stoker",
            description: "A classic vampire novel.",
            cover: "https://images.penguinrandomhouse.com/cover/9780141439846"
          },
          {
            title: "Frankenstein",
            author: "Mary Shelley",
            description: "A tale of science and horror.",
            cover: "https://images.penguinrandomhouse.com/cover/9780143131847"
          },
          {
            title: "The Exorcist",
            author: "William Peter Blatty",
            description: "A chilling tale of demonic possession.",
            cover: "https://images.penguinrandomhouse.com/cover/9780061007222"
          },
          {
            title: "The Haunting of Hill House",
            author: "Shirley Jackson",
            description: "A terrifying haunted house story.",
            cover: "https://images.penguinrandomhouse.com/cover/9780143039984"
          },
          {
            title: "House of Leaves",
            author: "Mark Z. Danielewski",
            description: "A mind-bending horror novel.",
            cover: "https://images.penguinrandomhouse.com/cover/9780375703768"
          },
          {
            title: "Bird Box",
            author: "Josh Malerman",
            description: "A horror story of unseen terror.",
            cover: "https://images.penguinrandomhouse.com/cover/9780062259668"
          },
          {
            title: "Pet Sematary",
            author: "Stephen King",
            description: "A chilling story about death and resurrection.",
            cover: "https://images.penguinrandomhouse.com/cover/9781501156700"
          },
          {
            title: "The Silence of the Lambs",
            author: "Thomas Harris",
            description: "A psychological horror-thriller.",
            cover: "https://images.penguinrandomhouse.com/cover/9780312924584"
          }
        ]
      }    
  ]);
  const [borrowedBooks, setBorrowedBooks] = useState([
    {
      title: "Atomic Habits",
      author: "James Clear",
      description: "A guide to building good habits and breaking bad ones.",
      cover: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
      borrowDate: "2024-02-15",
      dueDate: "2024-03-01",
      status: "OVERDUE",
      progress:50
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "A story about following your dreams and listening to your heart.",
      cover: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
      borrowDate: "2024-02-25",
      dueDate: "2024-03-10",
      status: "PENDING",
      progress:30
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      description: "A self-help book that teaches you how to embrace life's challenges.",
      cover: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
      borrowDate: "2025-02-20",
      dueDate: "2025-03-00",
      status: "PAID",
      progress:89
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      cover: "https://images.penguinrandomhouse.com/cover/9780735219090",
      borrowDate: "2025-10-20",
      dueDate: "2025-11-10",
      status: "PAID",
      progress:50
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      cover: "https://images.penguinrandomhouse.com/cover/9781250301697",
      borrowDate: "2025-08-20",
      dueDate: "2025-09-10",
      status: "PAID",
      progress:99
    },
    
    
  ]);
  const [wishList,setwishList] = useState([
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      cover: "https://images.penguinrandomhouse.com/cover/9781250301697"
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      cover: "https://images.penguinrandomhouse.com/cover/9780735219090"
    },
    {
      title: "The Night Circus",
      author: "Erin Morgenstern",
      cover: "https://images.penguinrandomhouse.com/cover/9780385534635"
    },
    {
      title: "Becoming",
      author: "Michelle Obama",
      cover: "https://images.penguinrandomhouse.com/cover/9781524763138"
    },
    {
      title: "Educated",
      author: "Tara Westover",
      cover: "https://images.penguinrandomhouse.com/cover/9780399590504"
    },
    {
      title: "The Goldfinch",
      author: "Donna Tartt",
      cover: "https://images.penguinrandomhouse.com/cover/9780316248671"
    },
    {
      title: "Circe",
      author: "Madeline Miller",
      cover: "https://images.penguinrandomhouse.com/cover/9780316556347"
    },
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      cover: "https://images.penguinrandomhouse.com/cover/9781501161933"
    },
    {
      title: "A Little Life",
      author: "Hanya Yanagihara",
      cover: "https://images.penguinrandomhouse.com/cover/9780804172707"
    },
    {
      title: "Normal People",
      author: "Sally Rooney",
      cover: "https://images.penguinrandomhouse.com/cover/9781984822178"
    }
  ]);
  const [completed, setCompleted] = useState([
    {
      title: "The Exorcist",
      author: "William Peter Blatty",
      description: "A chilling tale of demonic possession.",
      cover: "https://images.penguinrandomhouse.com/cover/9780061007222",
      daysTaken: 10 // Example: number of days taken to complete the book
    },
    {
      title: "The Haunting of Hill House",
      author: "Shirley Jackson",
      description: "A terrifying haunted house story.",
      cover: "https://images.penguinrandomhouse.com/cover/9780143039984",
      daysTaken: 7
    },
    {
      title: "House of Leaves",
      author: "Mark Z. Danielewski",
      description: "A mind-bending horror novel.",
      cover: "https://images.penguinrandomhouse.com/cover/9780375703768",
      daysTaken: 12
    },
    {
      title: "Bird Box",
      author: "Josh Malerman",
      description: "A horror story of unseen terror.",
      cover: "https://images.penguinrandomhouse.com/cover/9780062259668",
      daysTaken: 8
    },
    {
      title: "Pet Sematary",
      author: "Stephen King",
      description: "A chilling story about death and resurrection.",
      cover: "https://images.penguinrandomhouse.com/cover/9781501156700",
      daysTaken: 14
    },
    {
      title: "The Silence of the Lambs",
      author: "Thomas Harris",
      description: "A psychological horror-thriller.",
      cover: "https://images.penguinrandomhouse.com/cover/9780312924584",
      daysTaken: 9
    }
  ]);
  const currentBook = {
    title: "The Silent Patient",
    status:"Currently Readint",
    author: "Alex Michaelides",
    cover: "https://images.penguinrandomhouse.com/cover/9781250301697"
  };
  const userStats = {
    readingBooks: 5,
    readBooks: 12,
    totalBooks: 17
  };
  
  // Function to add a borrowed book
  const borrowBook = (book) => {
    setBorrowedBooks((prev) => [...prev, book]);
  };

  // Function to return a book
  const returnBook = (bookId) => {
    setBorrowedBooks((prev) => prev.filter((book) => book.id !== bookId));
  };

  return (
    <BookContext.Provider value={{userStats,currentBook,completed,wishList,genres, trendingBooks, topPicks, smartPicks, newArrivals, youMayLike,setContinueReading,setYouMayLike,setNewArrivals,setSmartPicks,setTopPicks,setTrendingBooks, continueReading, borrowedBooks, borrowBook, returnBook }}>
      {children}
    </BookContext.Provider>
  );
};

// Custom Hook for easier access
export const useBooks = () => useContext(BookContext);
