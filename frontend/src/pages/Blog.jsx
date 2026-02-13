import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/bg_1.jpg';
import blog1 from '../assets/blog_1.jpg'; 
import blog2 from '../assets/blog_2.jpg'; 
import blog3 from '../assets/blog_3.jpg'; 
import blog4 from '../assets/blog_4.jpg';
import blog5 from '../assets/blog_5.jpg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      date: 'July 20, 2019',
      author: 'Admin',
      comments: 3,
      title: 'Even the all-powerful Pointing has no control about the blind texts',
      desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      id: 2,
      image: blog2,
      date: 'July 20, 2019',
      author: 'Admin',
      comments: 3,
      title: 'Even the all-powerful Pointing has no control about the blind texts',
      desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      id: 3,
      image: blog3,
      date: 'July 20, 2019',
      author: 'Admin',
      comments: 3,
      title: 'Even the all-powerful Pointing has no control about the blind texts',
      desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      id: 4,
      image: blog4,
      date: 'July 20, 2019',
      author: 'Admin',
      comments: 3,
      title: 'Even the all-powerful Pointing has no control about the blind texts',
      desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      id: 5,
      image: blog5,
      date: 'July 20, 2019',
      author: 'Admin',
      comments: 3,
      title: 'Even the all-powerful Pointing has no control about the blind texts',
      desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }
  ];
  const recentBlogs = [
    { id: 1, title: 'Even the all-powerful Pointing has no control about the blind texts', image: blog1, date: 'April 09, 2019', author: 'Admin', comments: 19 },
    { id: 2, title: 'Even the all-powerful Pointing has no control about the blind texts', image: blog3, date: 'April 09, 2019', author: 'Admin', comments: 19 },
    { id: 3, title: 'Even the all-powerful Pointing has no control about the blind texts', image: blog2, date: 'April 09, 2019', author: 'Admin', comments: 19 },
  ];

  return (
    <div className="font-sans w-full bg-white">
      <div 
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div> 
        <div className="relative z-10 text-center text-white">
          <p className="uppercase tracking-widest text-sm mb-3 font-light">
            <Link to="/" className="mr-2 hover:text-[#82ae46] transition-colors">Home</Link> 
            <span className="text-gray-300">Blog</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">Blog</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 gap-12">
              {blogPosts.map((post) => (
                <div key={post.id} className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="w-full md:w-5/12 h-64 overflow-hidden rounded">
                     <Link to="/blog-single">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" 
                        />
                     </Link>
                  </div>
                  <div className="w-full md:w-7/12">
                    <div className="flex items-center text-xs text-gray-400 mb-3 gap-3 uppercase tracking-wider">
                        <span>{post.date}</span>
                        <span className="text-[#82ae46]">{post.author}</span>
                        <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                            {post.comments}
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-4 hover:text-[#82ae46] transition-colors cursor-pointer leading-tight">
                        <Link to="/blog-single">{post.title}</Link>
                    </h3>
                    <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                        {post.desc}
                    </p>
                    <Link to="/blog-single">
                        <button className="bg-[#82ae46] text-white py-3 px-6 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#6f943a] transition-colors shadow-md">
                            Read more
                        </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-12">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all">&lt;</button>
                <button className="w-10 h-10 rounded-full bg-[#82ae46] text-white flex items-center justify-center border border-[#82ae46]">1</button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all">2</button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all">3</button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all">4</button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all">5</button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all">&gt;</button>
            </div>
          </div>
          <div className="w-full lg:w-1/3 pl-0 lg:pl-12">
            <div className="mb-12">
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="w-full border border-gray-300 py-3 px-4 pr-10 outline-none focus:border-[#82ae46] rounded-full text-sm"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-4 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
            <div className="mb-12">
                <h3 className="text-xl font-bold text-black mb-6">Categories</h3>
                <ul className="space-y-4 text-gray-500">
                    <li className="flex justify-between border-b border-gray-100 pb-2 hover:text-[#82ae46] cursor-pointer"><span>Vegetables</span> <span className="text-gray-300">(12)</span></li>
                    <li className="flex justify-between border-b border-gray-100 pb-2 hover:text-[#82ae46] cursor-pointer"><span>Fruits</span> <span className="text-gray-300">(22)</span></li>
                    <li className="flex justify-between border-b border-gray-100 pb-2 hover:text-[#82ae46] cursor-pointer"><span>Juice</span> <span className="text-gray-300">(37)</span></li>
                    <li className="flex justify-between border-b border-gray-100 pb-2 hover:text-[#82ae46] cursor-pointer"><span>Dries</span> <span className="text-gray-300">(42)</span></li>
                </ul>
            </div>
            <div className="mb-12">
                <h3 className="text-xl font-bold text-black mb-6">Recent Blog</h3>
                <div className="space-y-6">
                    {recentBlogs.map(blog => (
                        <div key={blog.id} className="flex gap-4 group cursor-pointer">
                            <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded">
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div>
                                <h4 className="text-black font-medium text-sm mb-2 group-hover:text-[#82ae46] transition-colors leading-snug">
                                    <Link to="/blog-single">{blog.title}</Link>
                                </h4>
                                <div className="text-xs text-gray-400 flex gap-2">
                                    <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> {blog.date}</span>
                                    <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> {blog.author}</span>
                                    <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg> {blog.comments}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-12">
                 <h3 className="text-xl font-bold text-black mb-6">Tag Cloud</h3>
                 <div className="flex flex-wrap gap-2">
                     {['Fruits', 'Tomato', 'Mango', 'Apple', 'Carrots', 'Orange', 'Pepper', 'Eggplant'].map(tag => (
                         <span key={tag} className="border border-gray-300 px-3 py-1 text-gray-500 text-xs uppercase rounded hover:border-[#82ae46] hover:text-[#82ae46] cursor-pointer transition-colors">
                             {tag}
                         </span>
                     ))}
                 </div>
            </div>
             <div>
                 <h3 className="text-xl font-bold text-black mb-6">Paragraph</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
                 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;