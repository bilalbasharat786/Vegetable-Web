import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/bg_1.jpg'; 
import postImg1 from '../assets/blog_1.jpg';
import postImg2 from '../assets/blog_2.jpg';
import postImg3 from '../assets/blog_3.jpg';
import authorImg from '../assets/person_1.jpg';
import userImg from '../assets/person_2.jpg';
import blog1 from '../assets/blog_1.jpg'; 
import blog2 from '../assets/blog_2.jpg'; 
import blog3 from '../assets/blog_3.jpg'; 

const BlogSingle = () => {
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
            <span className="mr-2">/</span>
            <Link to="/blog" className="mr-2 hover:text-[#82ae46] transition-colors">Blog</Link> 
            <span className="text-gray-300">Blog Single</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">Blog Single</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold text-black mb-6">Organic foods is good for your health</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.
            </p>
            <div className="mb-8">
                <img src={postImg1} alt="Organic Food" className="w-full h-auto object-cover rounded" />
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!
            </p>

            <h2 className="text-2xl font-bold text-black mb-6">#2. Creative WordPress Themes</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <img src={postImg2} alt="Salad" className="w-full h-64 object-cover rounded" />
                <img src={postImg3} alt="Peas" className="w-full h-64 object-cover rounded" />
            </div>

            <p className="text-gray-500 mb-8 leading-relaxed">
              Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil blanditiis quod ad, voluptatem odit, saepe rem inventore commodi sunt reprehenderit, quasi.
            </p>
            <div className="flex gap-2 mb-12">
                {['Life', 'Sport', 'Tech', 'Travel'].map(tag => (
                    <button key={tag} className="border border-gray-300 px-4 py-2 text-gray-500 text-sm uppercase rounded hover:border-[#82ae46] hover:text-[#82ae46] transition-colors">
                        {tag}
                    </button>
                ))}
            </div>
            <div className="bg-[#f7f6f2] p-8 flex flex-col sm:flex-row gap-6 items-start rounded mb-16">
                <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-full">
                    <img src={authorImg} alt="Author" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-black mb-4">Lance Smith</h3>
                    <p className="text-gray-500 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
                    </p>
                </div>
            </div>
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-black mb-8">6 Comments</h3>
                <ul className="space-y-8">
                    {[1, 2, 3].map((comment) => (
                        <li key={comment} className="flex gap-6">
                            <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                                <img src={userImg} alt="User" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-lg font-bold text-black">John Doe</h4>
                                    <button className="text-xs uppercase bg-gray-200 px-3 py-1 rounded hover:bg-[#82ae46] hover:text-white transition-colors">Reply</button>
                                </div>
                                <span className="text-xs text-gray-400 block mb-3">JUNE 27, 2018 AT 2:21PM</span>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure!
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-[#f7f6f2] p-8 rounded">
                <h3 className="text-2xl font-bold text-black mb-8">Leave a comment</h3>
                <form className="space-y-6">
                    <div>
                        <label className="block text-black mb-2 text-sm">Name *</label>
                        <input type="text" className="w-full border border-white bg-white p-4 outline-none focus:border-[#82ae46]" />
                    </div>
                    <div>
                        <label className="block text-black mb-2 text-sm">Email *</label>
                        <input type="email" className="w-full border border-white bg-white p-4 outline-none focus:border-[#82ae46]" />
                    </div>
                    <div>
                        <label className="block text-black mb-2 text-sm">Website</label>
                        <input type="text" className="w-full border border-white bg-white p-4 outline-none focus:border-[#82ae46]" />
                    </div>
                    <div>
                        <label className="block text-black mb-2 text-sm">Message</label>
                        <textarea rows="6" className="w-full border border-white bg-white p-4 outline-none focus:border-[#82ae46]"></textarea>
                    </div>
                    <button className="bg-[#82ae46] text-white py-4 px-10 rounded-full font-bold uppercase tracking-wider hover:bg-[#6f943a] transition-colors shadow-lg">
                        Post Comment
                    </button>
                </form>
            </div>
          </div>
          <div className="w-full lg:w-1/3 pl-0 lg:pl-12 mt-12 lg:mt-0">
            <div className="mb-12">
                <div className="relative">
                    <input type="text" placeholder="Search..." className="w-full border border-gray-300 py-3 px-4 pr-10 outline-none focus:border-[#82ae46] rounded-full text-sm" />
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

export default BlogSingle;