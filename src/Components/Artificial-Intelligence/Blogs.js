import React from 'react';
import Article from './Hblog';
import blog01 from '../../Images/blog01.jpeg'
import blog02 from '../../Images/blog02.png'
import blog03 from '../../Images/blog03.webp'
import blog04 from '../../Images/blog4.jpeg'
import computervision from '../../Images/computer-vision.png'
import '../../Styling/Blogs.css'

const Blogs = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Top Blogs in Artificial Intelligence</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <a href="https://wearebrain.com/blog/ai-data-science/ai-trends-for-2022/" target="_blank" rel="noreferrer"><Article imgUrl={blog01} date="Dec 20, 2021" text="Artificial Intelligence (AI) continues to be a powerful change catalyst for global industries and businesses as we edge deeper into the digitally transformed society. " link="Click to Read Full Article" /></a>
      </div>
      <div className="gpt3__blog-container_groupB">
        <a href="https://blogs.nvidia.com/blog/2021/12/17/top-5-edge-ai-trends-2022/" target="_blank" rel="noreferrer"><Article imgUrl={blog02} date="Dec 17, 2021" text="Top 5 trends in Artificial Intelligence" link="Click to Read Full Article" /></a>
        <a href="https://www.aitrends.com/ai-world-government/best-practices-for-building-the-ai-development-platform-in-government/" target="_blank" rel="noreferrer"><Article imgUrl={blog03} date="Oct 28 2021" text="Best Practices for Building the AI Development Platform in Government " link="Click to Read Full Article" /></a>
        <a href="https://neptune.ai/blog/the-best-regularly-updated-machine-learning-blogs-or-resources" target="_blank" rel="noreferrer"><Article imgUrl={blog04} date="Oct 25, 2021" text="What Are the Best, Regularly Updated Machine Learning Blogs or Resources Available?" link="Click to Read Full Article" /></a>
        <a href="https://klizos.com/computer-vision-trends-and-predictions-for-2022/" target="_blank" rel="noreferrer"><Article imgUrl={computervision} date="Dec 28, 2021" text="Top 9 Computer Vision Trends And Predictions For 2022" link="Click to Read Full Article" /></a>
      </div>
    </div>
  </div>
);

export default Blogs;