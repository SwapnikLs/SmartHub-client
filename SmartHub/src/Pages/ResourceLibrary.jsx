import React from 'react'
import TrendingBooks from '../Components/ExplorePageComponents/TrendingBooks/TrendingBooks'
import AllBooks from "../Components/ExplorePageComponents/AllBooks/AllBooks"
import Header from '../Components/ExplorePageComponents/Header/Header'
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/7.jpg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/9.jpg";
import image10 from "../assets/10.jpg";
import image11 from "../assets/11.jpg";
import image13 from "../assets/13.jpg";
import image14 from "../assets/14.jpg";
import image15 from "../assets/15.jpg";
import image16 from "../assets/16.jpg";
import image17 from "../assets/17.jpg";
import BookDetails from '../Components/ExplorePageComponents/ExploreSection/BookDetails'

const images = [
  { src: image1, alt: "Topic 1", title: "The Quantum Realm", author: "Dr. Richard Feynman", category: "Science" },
  { src: image2, alt: "Topic 2", title: "The Art of War", author: "Sun Tzu", category: "Strategy" },
  { src: image3, alt: "Topic 3", title: "Into the Cosmos", author: "Carl Sagan", category: "Astronomy" },
  { src: image4, alt: "Topic 4", title: "Python for Beginners", author: "Guido van Rossum", category: "Programming" },
  { src: image5, alt: "Topic 5", title: "Designing the Future", author: "Elon Musk", category: "Technology" },
  { src: image6, alt: "Topic 6", title: "Deep Learning Mastery", author: "Yann LeCun", category: "AI & ML" },
  { src: image7, alt: "Topic 7", title: "A Brief History of Time", author: "Stephen Hawking", category: "Physics" },
  { src: image8, alt: "Topic 8", title: "Mindset: The New Psychology", author: "Carol S. Dweck", category: "Self-Development" },
  { src: image9, alt: "Topic 9", title: "The Lean Startup", author: "Eric Ries", category: "Business" },
  { src: image10, alt: "Topic 10", title: "Zero to One", author: "Peter Thiel", category: "Entrepreneurship" },
  { src: image11, alt: "Topic 11", title: "The Innovators", author: "Walter Isaacson", category: "Biography" },
  { src: image13, alt: "Topic 13", title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance" },
  { src: image14, alt: "Topic 14", title: "The Pragmatic Programmer", author: "Andy Hunt", category: "Programming" },
  { src: image15, alt: "Topic 15", title: "Atomic Habits", author: "James Clear", category: "Self-Improvement" },
  { src: image16, alt: "Topic 16", title: "Clean Code", author: "Robert C. Martin", category: "Software Development" },
  { src: image17, alt: "Topic 17", title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "History" }
];
function explore() {
  return (
    <>
    <BookDetails/>
    <TrendingBooks/>
    <AllBooks books={images}/>
    </>
  )
}

export default explore