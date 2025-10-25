import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the web development landscape and how they impact business innovation.',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Learn essential patterns and techniques for creating maintainable and performant React applications.',
      date: '2024-01-10',
      readTime: '7 min read'
    },
    {
      title: 'The Role of AI in Modern Software Development',
      excerpt: 'Discover how artificial intelligence is transforming the way we build and deploy software solutions.',
      date: '2024-01-05',
      readTime: '6 min read'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Latest Updates & Insights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
