import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const NewsBlog = () => {
  const articles = [
    {
      id: 1,
      title: 'The Future of Business Technology: Trends to Watch in 2024',
      excerpt: 'Discover the emerging technologies that will shape the business landscape in the coming year.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Technology',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'How to Scale Your Business with Digital Solutions',
      excerpt: 'Learn proven strategies for leveraging technology to accelerate your business growth.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      author: 'Michael Chen',
      date: '2024-01-12',
      category: 'Business',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Security Best Practices for Modern Businesses',
      excerpt: 'Essential security measures every business should implement to protect their data and operations.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      category: 'Security',
      readTime: '6 min read'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'bg-main-green',
      'Business': 'bg-secondary-green',
      'Security': 'bg-accent-green'
    };
    return colors[category] || 'bg-main-green';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-16 bg-background-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Latest News & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest industry trends, insights, and company news
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${getCategoryColor(article.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{formatDate(article.date)}</span>
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-main-green transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <button className="flex items-center text-main-green font-medium hover:text-secondary-green transition-colors duration-300">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-main-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsBlog;