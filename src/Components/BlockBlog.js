import React from 'react';
import '../Styling/BlockBlogs.css';
import Article from './Hblog';
import BBlog1 from '../Images/BBlog1.jpg'
import BBlog2 from '../Images/BBlog2.png'
import BBlog3 from '../Images/BBlog3.png'
import BBlog4 from '../Images/BBlog4.jpg'
import BBlog5 from '../Images/BBlog5.jpg'


const Blogs = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading blockblog">
      <h1 className="gradient__text">Top Blogs Posts</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <a href="https://worldfinancialreview.com/top-10-blockchain-blogs-people-should-read-in-2022/" target="_blank" rel="noreferrer"><Article imgUrl={BBlog1} date="Dec 27, 2021" 
          text="The growth of blockchain is projected to soar to $67.4 bn by 2026. While many consider it a technology to trade cryptocurrencies, several industries have started leveraging it for enhanced processes and security. With time, we see more and more blockchain use cases in our everyday lives. " link="Click to Read Full Article" /></a>
      </div>
      <div className="gpt3__blog-container_groupB">
        <a href="https://modex.tech/looking-ahead-blockchain-trends-in-2022/" target="_blank" rel="noreferrer"><Article imgUrl={BBlog2} date="Jan 7, 2022" text="Looking ahead: blockchain trends in 2022" link="Click to Read Full Article" /></a>
        <a href="https://blog.coinlist.co/five-crypto-trends-to-watch-in-2022/" target="_blank" rel="noreferrer"><Article imgUrl={BBlog3} date="Dec 10, 2021" text="Five Crypto Trends To Watch in 2022" link="Click to Read Full Article" /></a>
        <a href="https://www.investing.com/news/cryptocurrency-news/top-5-crypto-blogs-to-read-in-2022-2725858" target="_blank" rel="noreferrer"><Article imgUrl={BBlog4} date="Dec 28, 2021" text="Top 5 Crypto Blogs to Read in 2022" link="Click to Read Full Article" /></a>
        <a href="https://www.investindia.gov.in/team-india-blogs/implementing-blockchain-india" target="_blank" rel="noreferrer"><Article imgUrl={BBlog5} date="Jun 19, 2018" text="Implementing BlockChain In India" link="Click to Read Full Article" /></a>
      </div>
    </div>
  </div>
);

export default Blogs;