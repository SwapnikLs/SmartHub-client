import { useState, useRef } from "react";
import React from "react";
import "../Components/CommunityExchange/CommunityExchange.css";
import Button from "../Components/GlobalComponents/Button/Button";

const CommunityExchange = () => {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "Best Fiction Books to Read in 2024?",
      description: "Looking for recommendations for must-read fiction books this year!",
      upvotes: 76,
      comments: 18,
      tags: ["Fiction", "Recommendations"],
      author: "Alice Johnson",
      date: "2024-02-01",
      views: 1450,
    },
    {
      id: 2,
      title: "Is ‘Atomic Habits’ worth reading?",
      description: "I've heard a lot about this book. Should I give it a read?",
      upvotes: 64,
      comments: 22,
      tags: ["Self-Help", "Productivity"],
      author: "Brian Smith",
      date: "2024-02-05",
      views: 1230,
    },
    {
      id: 3,
      title: "What are the best sci-fi books of all time?",
      description: "Looking for some mind-blowing sci-fi recommendations!",
      upvotes: 89,
      comments: 34,
      tags: ["Sci-Fi", "Space", "Futuristic"],
      author: "Emily Carter",
      date: "2024-01-28",
      views: 2100,
    },
    {
      id: 4,
      title: "The Psychology Behind Procrastination",
      description: "Why do we procrastinate, and how can we overcome it?",
      upvotes: 55,
      comments: 14,
      tags: ["Psychology", "Self-Improvement"],
      author: "David Wilson",
      date: "2024-02-08",
      views: 980,
    },
    {
      id: 5,
      title: "Best Personal Finance Books for Beginners",
      description: "What books should I read to improve my financial literacy?",
      upvotes: 73,
      comments: 19,
      tags: ["Finance", "Money Management"],
      author: "Sophia Brown",
      date: "2024-01-25",
      views: 1575,
    },
    {
      id: 6,
      title: "Will AI replace human creativity?",
      description: "AI is getting advanced, but can it truly replace human creativity?",
      upvotes: 91,
      comments: 42,
      tags: ["Technology", "AI", "Creativity"],
      author: "Michael Lee",
      date: "2024-02-12",
      views: 2340,
    },
    {
      id: 7,
      title: "Must-Read Mystery Novels",
      description: "Looking for some thrilling mystery novels with unexpected twists.",
      upvotes: 62,
      comments: 17,
      tags: ["Mystery", "Thriller"],
      author: "Olivia Martinez",
      date: "2024-01-30",
      views: 1255,
    }
  ]);

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Self-Help",
    "Sci-Fi",
    "Mystery",
    "Psychology",
    "Finance",
    "Technology",
  ];

  // Handle upvotes
  const handleUpvote = (id) => {
    setDiscussions((prev) =>
      prev.map((disc) =>
        disc.id === id ? { ...disc, upvotes: disc.upvotes + 1 } : disc
      )
    );
  };

  // Handle new comments
  const handleAddComment = (id) => {
    setDiscussions((prev) =>
      prev.map((disc) =>
        disc.id === id ? { ...disc, comments: disc.comments + 1 } : disc
      )
    );
  };

  // Add new discussion
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const formRef = useRef(null);

  const handleNewDiscussion = () => {
    if (!newTitle || !newDescription) return;
    const newDiscussion = {
      id: discussions.length + 1,
      title: newTitle,
      description: newDescription,
      upvotes: 0,
      comments: 0,
      tags: ["New"],
      author: "Anonymous",
      date: new Date().toISOString().split("T")[0],
      views: 0,
    };
    setDiscussions([...discussions, newDiscussion]);
    setNewTitle("");
    setNewDescription("");
  };

  // Scroll to new discussion form
  const scrollToForm = () => {
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };
  

  return (
    <div className="community-container">
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
        <div  onClick={() => {
  console.log("Button Clicked!"); // Debugging step
  scrollToForm();
}}>
        <Button text="Start Discussion"/>
        </div>
      </aside>

      {/* Main Section */}
      <main className="discussion-section">
        <h2>Community Discussions</h2>
        {discussions.map((discussion) => (
          <div key={discussion.id} className="discussion-card">
            <h3>{discussion.title}</h3>
            <p>{discussion.description}</p>
            <div className="discussion-meta">
              <span>👤 {discussion.author}</span>
              <span>📅 {discussion.date}</span>
              <span>👀 {discussion.views} views</span>
            </div>
            <div className="discussion-tags">
              {discussion.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <div className="discussion-actions">
              <button onClick={() => handleUpvote(discussion.id)}>👍 {discussion.upvotes}</button>
              <button onClick={() => handleAddComment(discussion.id)}>💬 {discussion.comments} Comments</button>
              <button className="report-btn">⚠️ Report</button>
            </div>
          </div>
        ))}

        {/* New Discussion Form */}
        <div ref={formRef} className="new-discussion-form">
          <h3>Start a New Discussion</h3>
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleNewDiscussion}>Add Discussion</button>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <h3>Popular Discussions</h3>
        <ul>
          {discussions.slice(0, 3).map((discussion) => (
            <li key={discussion.id}>{discussion.title}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default CommunityExchange;
