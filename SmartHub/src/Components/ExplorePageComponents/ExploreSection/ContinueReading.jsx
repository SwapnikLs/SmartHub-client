import React from 'react'
import Carousel from '../../GlobalComponents/Carousel/Carousel'
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import image3 from "../../../assets/3.jpg";
import image4 from "../../../assets/4.jpg";
import image5 from "../../../assets/5.jpg";
import image6 from "../../../assets/6.jpg";
import image7 from "../../../assets/7.jpg";
import image8 from "../../../assets/8.jpg";
import image9 from "../../../assets/9.jpg";
import image10 from "../../../assets/10.jpg";
import image11 from "../../../assets/11.jpg";
import image13 from "../../../assets/13.jpg";
import image14 from "../../../assets/14.jpg";
import image15 from "../../../assets/15.jpg";
import image16 from "../../../assets/16.jpg";
import image17 from "../../../assets/17.jpg";
// Array of images
const images = [
    {
      src: image1,
      alt: "Topic 1",
      title: "Origin",
      author: "Dan Brown",
      category: "Thriller / Suspense",
      rating: "4.5",
      total: "100",
      available: "42",
      description: "A mystery-thriller novel by Dan Brown, part of the Robert Langdon series.",
    },
    {
      src: image2,
      alt: "Topic 2",
      title: "Inferno",
      author: "Dan Brown",
      category: "Mystery",
      rating: "4.2",
      total: "80",
      available: "30",
      description: "A thrilling novel about symbology, Dante, and a deadly secret.",
    },
    {
      src: image3,
      alt: "Topic 3",
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction / Adventure",
      rating: "4.7",
      total: "150",
      available: "50",
      description: "A philosophical story about following your dreams and the journey of self-discovery.",
    },
    {
      src: image4,
      alt: "Topic 4",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Classic / Drama",
      rating: "4.8",
      total: "120",
      available: "60",
      description: "A novel about racial injustice and childhood innocence set in the American South.",
    },
    {
      src: image5,
      alt: "Topic 5",
      title: "1984",
      author: "George Orwell",
      category: "Dystopian / Political Fiction",
      rating: "4.6",
      total: "200",
      available: "90",
      description: "A chilling depiction of a totalitarian regime and the dangers of surveillance.",
    },
    {
      src: image6,
      alt: "Topic 6",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance / Classic",
      rating: "4.9",
      total: "110",
      available: "55",
      description: "A witty novel exploring love, social status, and expectations in the 19th century.",
    },
    {
      src: image7,
      alt: "Topic 7",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy / Adventure",
      rating: "4.8",
      total: "130",
      available: "70",
      description: "A prelude to 'The Lord of the Rings,' following Bilbo Baggins' adventure.",
    },
    {
      src: image8,
      alt: "Topic 8",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Classic / Drama",
      rating: "4.7",
      total: "140",
      available: "75",
      description: "A critique of the American Dream set in the Jazz Age.",
    },
    {
      src: image9,
      alt: "Topic 9",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Coming-of-Age / Fiction",
      rating: "4.4",
      total: "90",
      available: "35",
      description: "A novel about teenage alienation and rebellion.",
    },
    {
      src: image10,
      alt: "Topic 10",
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      category: "Fantasy / Young Adult",
      rating: "4.9",
      total: "300",
      available: "120",
      description: "The first book in the legendary Harry Potter series, following Harry’s magical journey.",
    },
    {
      src: image11,
      alt: "Topic 11",
      title: "Moby-Dick",
      author: "Herman Melville",
      category: "Adventure / Classic",
      rating: "4.3",
      total: "95",
      available: "45",
      description: "A tale of obsession and revenge set on the high seas.",
    },
    {
      src: image13,
      alt: "Topic 13",
      title: "Brave New World",
      author: "Aldous Huxley",
      category: "Dystopian / Science Fiction",
      rating: "4.5",
      total: "85",
      available: "40",
      description: "A disturbing vision of a future society controlled by technology and conditioning.",
    },
    {
      src: image14,
      alt: "Topic 14",
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      category: "Dystopian / Science Fiction",
      rating: "4.6",
      total: "75",
      available: "30",
      description: "A novel about censorship, book burning, and the power of knowledge.",
    },
    {
      src: image15,
      alt: "Topic 15",
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      category: "Psychological Fiction",
      rating: "4.8",
      total: "60",
      available: "25",
      description: "A deep dive into guilt, morality, and redemption.",
    },
    {
      src: image16,
      alt: "Topic 16",
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      category: "Gothic / Classic",
      rating: "4.7",
      total: "70",
      available: "30",
      description: "A dark tale about vanity, hedonism, and a cursed portrait.",
    },
    {
      src: image17,
      alt: "Topic 17",
      title: "Wuthering Heights",
      author: "Emily Brontë",
      category: "Gothic / Romance",
      rating: "4.5",
      total: "80",
      available: "40",
      description: "A tragic love story set on the Yorkshire moors.",
    },
  ];
  
function ContinueReading() {
  return (
    <>
    <div className="Carousel">
        <div className="all-books-section">
          <h3 className='all-books-heading'>Continue Reading</h3>
        </div>
        <Carousel images={images} />
      </div>
    </>
  )
}

export default ContinueReading;