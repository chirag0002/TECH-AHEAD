import React from 'react';
import Article from './Hblog';
import blog01 from '../Images/blog01.jpeg'
import blog02 from '../Images/blog02.png'
import blog03 from '../Images/blog03.webp'
import blog04 from '../Images/blog4.jpeg'
import blog05 from '../Images/blog05.png'
import '../Styling/Blogs.css'

const Blogs = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <a href="https://wearebrain.com/blog/ai-data-science/ai-trends-for-2022/" target="_blank" rel="noreferrer"><Article imgUrl={blog01} date="Dec 20, 2021" text="Artificial Intelligence (AI) continues to be a powerful change catalyst for global industries and businesses as we edge deeper into the digitally transformed society. " link="Click to Read Full Article" /></a>
      </div>
      <div className="gpt3__blog-container_groupB">
        <a href="https://www.getsmarter.com/blog/market-trends/the-future-of-blockchain-technology-in-2022/" target="_blank" rel="noreferrer"><Article imgUrl={blog02} date="Jan 7, 2022" text="The Future of Blockchain in Business" link="Click to Read Full Article" /></a>
        <a href="https://blog.qasource.com/devops-trends-to-look-out-for-in-2022" target="_blank" rel="noreferrer"><Article imgUrl={blog03} date="Nov 23, 2021" text="DevOps Trends To Look Out for in 2022" link="Click to Read Full Article" /></a>
        <a href="https://medium.muz.li/2022-the-year-of-the-metaverse-9979ee1ab403" target="_blank" rel="noreferrer"><Article imgUrl={blog04} date="Jan 2, 2022" text="2022: The Year of the Metaverse" link="Click to Read Full Article" /></a>
        <a href="https://economictimes.indiatimes.com/tech/technology/top-tech-trends-to-watch-out-for-in-2022/articleshow/88477054.cms" target="_blank" rel="noreferrer"><Article imgUrl={blog05} date="Sep 26, 2021" text="Top tech trends to watch out for in 2022" link="Click to Read Full Article" /></a>
      </div>
    </div>
  </div>
);

export default Blogs;