import React from 'react'
import '../Styling/BlockProjects.css';

const BlockProjects = () => {
    return (
        <div>
            <div className="project_main">  
                <h1 className="gradient__text project_main_heading">   
                    Few Projects To Build On Blockchain
                </h1>
                <div className="Project">
                    {/* first */}
                    <div className="project_card">
                        <h4 className="project_title gradient__text">Trusted Crowdfunding Platform Using a Smart Contract</h4>
                        <div className="project_bar">
                            <div className="project_emptybar"></div>
                            <div className="project_filledbar"></div>
                            <div className="project_explain">
                                <p>
                                    As per trusted reports, 85% of startups delay the delivery, and 14% don’t deliver at all what was promised to the angel investors. As of today, crowdfunding platforms have accountability and trust problems. In many cases, money from investors has gone into wrong campaigns and has been misused.
                                </p>
                                <p>
                                    Implementing a blockchain-based platform can bring in a change. With blockchain technology, investors can know to whom the money is going and how they are spending it. A smart contract helps to block the funds within blockchain until the project or startup founder makes progress in the project.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* second */}
                    <div className="project_card">
                        <h4 className="project_title gradient__text">Exact Shipment Location Data</h4>
                        <div className="project_bar">
                            <div className="project_emptybar"></div>
                            <div className="project_filledbar"></div>
                            <div className="project_explain">
                                <p>
                                    Most logistics companies today offer only the location details of main locations like collection centre, city hubs and sorting facilities. The exact live location details are never known, and if the system fails, the entire data is lost.
                                </p>
                                <p>
                                    Using blockchain, you can implement a system that collects location data from many interconnected systems and deliver exact location details to the customers. The application of this project can be extended to other areas like airlines to find lost baggage, car rentals for tracking rented car etc.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* three */}
                    <div className="project_card">
                        <h4 className="project_title gradient__text">Peer To Peer Ridesharing</h4>
                        <div className="project_bar">
                            <div className="project_emptybar"></div>
                            <div className="project_filledbar"></div>
                            <div className="project_explain">
                                <p>
                                    Most carpooling systems and radio cab facilities come with a middle man, the agency itself. So what if the agency like Uber decides to shut down business in the city? If ride-sharing and car hire are moved to the blockchain, without an intermediary, both riders and drivers can get connected directly. If the project is completed successfully, it can build a network that will provide safe, reliable transportation.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* four */}
                    <div className="project_card">
                        <h4 className="project_title gradient__text">A Fake Product Identification System</h4>
                        <div className="project_bar">
                            <div className="project_emptybar"></div>
                            <div className="project_filledbar"></div>
                            <div className="project_explain">
                                <p>
                                    Every popular brand has fake manufacturers selling a counterfeited item at cheaper rates. Even the company experts may not be able to distinguish between fake ones and real ones. What if the original manufacturer has embedded a 2D barcode on the product which is tied to a blockchain system.
                                </p>
                                <p>
                                    You can scan the 2D barcode using your smartphone, and your smartphone will tell you whether the product is fake or not. This is an outstanding project idea and if successfully implement big brands are going to knock at your doorstep, and you know why…
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* five */}
                    <div className="project_card">
                        <h4 className="project_title gradient__text">Blockchain-Based Voting System</h4>
                        <div className="project_bar">
                            <div className="project_emptybar"></div>
                            <div className="project_filledbar"></div>
                            <div className="project_explain">
                                <p>
                                    Electronic voting systems have replaced paper-based systems, but even now, people doubt the voting system’s ability to secure the data and defend against any attacks. The blockchain-based system can ensure transparent and publicly verifiable elections in the country. If implemented successfully, voting can be done using a mobile application that is attached to a blockchain system. 
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* six */}
                    <div className="project_card">
                        <h4 className="project_title gradient__text">Transparent and Genuine Charity Application</h4>
                        <div className="project_bar">
                            <div className="project_emptybar"></div>
                            <div className="project_filledbar"></div>
                            <div className="project_explain">
                                <p>
                                    Many fake charity organizations pose as genuine and loot money from innocent people in the name of charity. Most people want to donate money to a good cause of charity, but they are unsure if the money is going to reach the right hands of the destitute.  The blockchain system can bring transparency to online charity trusts. Contributors can see the journey of the donation in realtime and confirm if it’s reaching the deserving hands or not.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlockProjects
