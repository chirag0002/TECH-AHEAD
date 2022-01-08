import React from 'react';
import Header from './Header';
import '../Styling/BlockChain.css';
import Blockgif from '../Images/Blockchain.gif';
import Etherum from '../Images/Etherum.png';
import Ripple from '../Images/Ripple.png';
import Quorum from '../Images/Quorum.png';
import HyperLedger from '../Images/HyperLedger.png';
import R3Corda from '../Images/R3Corda.jpg';
import Direct from '../Images/Direct.png';
import BlockWhy from '../Images/BlockWhy.jpg';
import BitMax from '../Images/BitMax.png';
import ChainAlysis from '../Images/ChainAlysis.png';
import CoinMe from '../Images/CoinMe.png';
import SpringLabs from '../Images/SpringLabs.png';
import Republic from '../Images/Republic.png';
import Blocksteps from '../Images/Blocksteps.png';
import Blogs from './BlockBlog';
import Footer from './Footer';
import Projects from './BlockProjects';


const BlockChain = () => (
  <div className="Blockmain">
    <Header />
    <section className="s1">
      <h1 id="Rendering" className="gradient__text BlockC_heading">What Is BlockChain ?</h1>
      <div
        style={{
          backgroundColor: '#fff',
          paddingBottom: '2vh',
        }}
      >
        <div className="s1-1">
          <div className="BlockC_explain">
            <p>A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains arebest known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.
            </p>
            <br />
            <p>One key difference between a typical database and a blockchain is how the data is structured. A blockchain collects information together in groups, known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are closed and linked to the previously filled block, forming a chain of data known as the blockchain. All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled.
            </p>
          </div>
          <input onclick="this.value='Close Curtain'" type="button" value="Open Curtain" id="myButton1" />
          <div className="BlockC_gif">
            <img className="blockGif" src={Blockgif} alt="" />
          </div>
        </div>
        <div className="Block_last_p_div">
        <p className="Block_last_p">A database usually structures its data into tables, whereas a blockchain, like its name implies, structures its data into chunks (blocks) that are strung together. This data structure inherently makes an irreversible time line of data when implemented in a decentralized nature. When a block is filled, it is set in stone and becomes a part of this time line. Each block in the chain is given an exact time stamp when it is added to the chain.
        </p>
        </div>
      </div>
    </section>
    <section style={{ width: '80%',
      margin: '0 auto',
    }}
    >
      <h1 className="gradient__text s2-heading">
          Top 5 Blockchains
      </h1>
      <div className="s2">
        <div className="s2-1">
          <img className="HL" src={Etherum} alt="" />
          <div className="s2-1-text">
            <p>Ethereum is a decentralized, open source, and distributed computing platform that enables the creation of smart contracts and decentralized applications, also known as dapps. Smart contracts are computer protocols that facilitate, verify, or enforce the negotiation and performance of some sort of agreement.
            </p>
            <a target="blank" href="https://ethereum.org/en/">
              <img className="S2-1-link" src={Direct} alt="" title="Direct to Website" />
            </a>
          </div>
        </div>
        <div className="s2-1">
          <img
            className="HL"
            src={HyperLedger}
            alt=""/>
          <div className="s2-1-text">
            <p>Hyperledger is a global enterprise blockchain project that offers the necessary framework, standards, guidelines, and tools to build open-source blockchains and related applications for use across various industries.
            </p>
            <a target="blank" href="https://www.hyperledger.org/">
              <img className="S2-1-link" src={Direct} alt="" title="Direct to Website" />
            </a>
          </div>
        </div>
        <div className="s2-1">
          <img className="HL" src={R3Corda} alt="" />
          <div className="s2-1-text">
            <p>So, by definition, Corda is a blockchain—with one key differentiator. Corda does not periodically batch up transactions needing confirmation — into a block — and confirm them in one go. Instead, Corda confirms each transaction in real-time. ... So, Corda is both a blockchain and not a blockchain.
            </p>
            <a target="blank" href="https://www.r3.com/">
              <img className="S2-1-link" src={Direct} alt="" title="Direct to Website" />
            </a>
          </div>
        </div>
        <div className="s2-1">
          <img className="HL" src={Ripple} alt="" />
          <div className="s2-1-text">
            <p>Ripple is a blockchain-based digital payment network and protocol with its own cryptocurrency, XRP. ... Ripple transactions use less energy than bitcoin, are confirmed in seconds, and cost very little, whereas bitcoin transactions use more energy, take longer to confirm, and include higher transaction costs.
            </p>
            <a target="blank" href="https://ripple.com/">
              <img className="S2-1-link" src={Direct} alt="" title="Direct to Website" />
            </a>
          </div>
        </div>
        <div className="s2-1">
          <img className="HL" src={Quorum} alt="" />
          <div className="s2-1-text">
            <p>Fundamentally, Quorum is the public ethereum client which is enhanced with enterprise features. It provides privacy features, enterprise permissioning and improved performance in a permissioned network. A component called private transactions manager serves as an off-chain privacy mechanism.
            </p>
            <a target="blank" href="https://consensys.net/quorum/">
              <img className="S2-1-link" src={Direct} alt="" title="Direct to Website" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="s3">
      <div className="s3-1-image">
        <img className="s3image" src={BlockWhy} alt="" />
      </div>
      <div className="s3-1-explain">
        <h5 className="gradient__text">Why Blockchain?</h5>
        <p>Blockchain helps in the verification and traceability of multistep transactions needing verification and traceability. It can provide secure transactions, reduce compliance costs, and speed up data transfer processing. Blockchain technology can help contract management and audit the origin of a product.
        </p>
        <h5 className="gradient__text">Our Mission?</h5>
        <p>We are building the future of finance. Blockchain is the most trusted and fastest growing crypto company, helping millions across the globe from single individuals to the largest institutions have an easy and safe way to access cryptocurrency.
        </p>
        <h5 className="gradient__text">Our Purpose?</h5>
        <p>The purpose of the blockchain is to share information amongst all parties that access it via an application. Access to this ledger in terms of reading and writing may be unrestricted, or restricted.
        </p>
      </div>
    </section>
    <section className="s4">
        <img src={Blocksteps} alt="" className="s4_blocksteps" />
    </section>
    <Blogs />
    <Projects />
    <section className="s5">
      <h1 className="gradient__text s5-heading">Top Companies In Blockchain</h1>
      <div className="s5-1">
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" checked />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <main id="carousel">
          <div className="item">
            <img src={BitMax} alt="" />
          </div>
          <div className="item">
            <img src={ChainAlysis} alt="" />
          </div>
          <div className="item">
            <img src={CoinMe} alt="" />
          </div>
          <div className="item">
            <img src={SpringLabs} alt="" />
          </div>
          <div className="item">
            <img src={Republic} alt="" />
          </div>
        </main>
      </div>
    </section>
    <Footer />
  </div>

);
export default BlockChain;
