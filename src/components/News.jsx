// src/components/Articles.js

import React from 'react';

const articles = [
  {
    title: "How to set your boundaries and live happy after",
    category: "Cognitive psychology",
    author: "John Doe",
    date: "September 2023",
    imageUrl: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJvdW5kYXJpZXMlMjBhbmQlMjBsaXZlJTIwaGFwcHklMjBhZnRlfGVufDB8fDB8fHww", // Replace with actual image URL
  },
  {
    title: "How to live with chronic depression",
    category: "Cognitive psychology",
    author: "John Doe",
    date: "September 2023",
    imageUrl: "https://images.unsplash.com/photo-1523495338267-31cbca7759e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNocm9uaWMlMjBkZXByZXNzaW9ufGVufDB8fDB8fHww", // Replace with actual image URL
  },
  {
    title: "How to fight anxiety",
    category: "PTSD psychology",
    author: "John Doe",
    date: "September 2023",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661597198268-2a07b37b69a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpZ2h0JTIwYW54aWV0eXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
  },
];

const Articles = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Our <span className="text-green-600">recent</span> articles
        </h2>
        <div className="text-gray-500 mb-8">

        <q >
        Understanding why people suffer, how they change, and how to help them live satisfying lives is a fascinating and important undertaking.
        </q>
        </div>
    
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={article.imageUrl} alt={article.title} />
              <div className="p-4">
                <p className="text-green-500 text-sm font-medium">{article.category}</p>
                <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                <div className="mt-2 text-sm text-gray-500">
                  <span>By {article.author}</span> &middot; <span>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
