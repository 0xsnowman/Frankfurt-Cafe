import React from "react";
import Lottie from "react-lottie";

// components
import Container from "../components/container";
import RoadMap from "../components/roadmap";
import Faq from "../components/faq";
import Swap from "../components/swap";
import Header from "../components/header";
import Footer from "../components/footer";
// import VideoPlayer from "../components/video-player";

// images
import TwoSectionImage from "../assets/images/image_1.webp";
import ThirdSectionImage from "../assets/images/image_2.webp";
import LiquidityImage from "../assets/images/liquidity.svg";
import MarketingImage from "../assets/images/marketing.svg";
import EtherscanImage from "../assets/images/etherscan.png";
import CoinmarketcapImage from "../assets/images/coinmarketcap.png";
import CoingeckoImage from "../assets/images/coingecko.png";
import UniswapImage from "../assets/images/uniswap.png";

// animations
import * as animationData from "../assets/animations/top.json";

const Home = () => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="page-home">
      <Header />
      {/* section-1 start */}
      <div className="page-home__section bg-1 bg-mountain" id="section-1">
        <Container className="page-home__section-1">
          <div className="page-home__section-1__lottie">
            <Lottie options={animationOptions} />
          </div>
          <div className="page-home__section-1__title">SHINOBI INU</div>
          <div className="page-home__section-1__subtitle">
            A SPECIALIZED PLATFORM FOR STEALTH LAUNCHED PROJECTS
          </div>
          <div className="page-home__section-1__btns">
            <a
              className="page-home__section-1__btns__btn-left"
              href="https://app.shinobiinu.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch DApp
            </a>
            <a
              className="page-home__section-1__btns__btn-right"
              href="https://t.me/shinobilaunch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>

          <div className="page-home__section-1__partners">
            <img src={CoinmarketcapImage} alt="coinmarketcap" />
            <img src={CoingeckoImage} alt="coingecko" />
            <img src={EtherscanImage} alt="etherscan" />
            <img src={UniswapImage} alt="uniswap" />
          </div>
        </Container>
        <div id="blossom_container"></div>
      </div>
      {/* section-1 end */}

      {/* section-2 start */}
      <div className="page-home__section bg-2" id="section-2">
        <Container className="page-home__section-2">
          <div className="page-home__section-2__text">
            <div className="page-home__section-2__text__title">
              ARCHETYPICAL NINJA
            </div>
            <div className="page-home__section-2__text__subtitle">
              (SHINOBI)
            </div>
            <br />
            <br />
            <div className="page-home__section-2__text__paragraph">
              Shinobi ($SNU) is the Ethereum token that empowers the Shinobi
              Clan. Investors will get access to early stage token sales and be
              able to participate in key governance votes at the Shinobi DAO by
              holding tokens.
              <br /> <br />
              In the same way ninja used fire tools and explosives in the art of
              war, $SNU uses a burn mechanism to increases its price by burning
              its own circulating supply. This means each token that remains in
              the liquidity pool becomes more expensive and then shoots up in
              price based on the percentage of the burned tokens. Simply holding
              tokens grants access to whitelist which allows holders to enter
              early stage projects at the lowest possible price and benefit from
              the maximum return.
            </div>
          </div>
          <div className="page-home__section-2__img">
            <img src={TwoSectionImage} alt="section-2-img" />
          </div>
        </Container>
      </div>

      {/* section-2 end */}

      {/* section-3 start */}
      <div className="page-home__section bg-1" id="section-3">
        <Container className="page-home__section-3">
          <div className="page-home__section-3__img">
            <img src={ThirdSectionImage} alt="section-3-img" />
          </div>
          <div className="page-home__section-3__text">
            <div className="page-home__section-3__text__title">
              ART OF STEALTH
            </div>
            <div className="page-home__section-3__text__subtitle">
              (NINJUTSU)
            </div>
            <br />
            <br />
            <div className="page-home__section-3__text__paragraph">
              A stealth launch is a technique in which contract addresses are
              advertised after the token is published on it launch date. The
              ninja were adept in the art of stealth and the Shinobi Clan get
              the advantage of getting into high quality projects, governed by
              the DAO, early before they public launch on the market.
              <br />
              <br />
              Holders of the Shinobi token will have the advantage of acquiring
              early stage tokens in highly sought-after projects that they voted
              for at the Shinobi DAO. Members of the Clan decide collectively on
              the projects that are incubated on Shinobi, and projects that win
              majority votes are then selected automatically when votes pass.
              Moreover, this strategy opens the doors to true decentralization
              which can only be achieved if the community is involved at every
              level of the project. Members make decisions from the bottom-up,
              governed by proposals and voting to ensure everyone in the Clan
              has a voice.
            </div>
            <div className="page-home__section-3__img-mobile">
              <img src={ThirdSectionImage} alt="section-3-img-mobile" />
            </div>
          </div>
        </Container>
      </div>
      {/* section-3 end */}

      {/* section-4 start */}
      <div className="page-home__section bg-2" id="section-4">
        <Container className="page-home__section-4">
          <div className="page-home__section-4__title">TEAM</div>
          <br />
          <div className="page-home__section-4__teams">
            <div className="page-home__section-4__teams__member">
              <div className="page-home__section-4__teams__member__box box-1"></div>
              <div className="page-home__section-4__teams__member__name">
                Fujibayashi
              </div>
            </div>

            <div className="page-home__section-4__teams__member">
              <div className="page-home__section-4__teams__member__box box-2"></div>
              <div className="page-home__section-4__teams__member__name">
                Ishikawa
              </div>
            </div>

            <div className="page-home__section-4__teams__member">
              <div className="page-home__section-4__teams__member__box box-3"></div>
              <div className="page-home__section-4__teams__member__name">
                Hattori
              </div>
            </div>

            <div className="page-home__section-4__teams__member">
              <div className="page-home__section-4__teams__member__box box-4"></div>
              <div className="page-home__section-4__teams__member__name">
                Kawazaki
              </div>
            </div>

            <div className="page-home__section-4__teams__member">
              <div className="page-home__section-4__teams__member__box box-5"></div>
              <div className="page-home__section-4__teams__member__name">
                Momochi
              </div>
            </div>

            <div className="page-home__section-4__teams__member">
              <div className="page-home__section-4__teams__member__box box-6"></div>
              <div className="page-home__section-4__teams__member__name">
                Kirigakure
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* section-4 end */}

      {/* section-5 start */}
      <div className="page-home__section bg-1" id="section-5">
        <Container className="page-home__section-5">
          <div className="page-home__section-5__title">TOKENOMICS</div>
          <div className="page-home__section-5__subtitle">(TAKKUSU)</div>
          <br />
          <br />
          <div className="page-home__section-5__tax">
            <div className="page-home__section-5__tax__buy">
              <div className="page-home__section-5__tax__buy__title">
                BUY TAX
              </div>
              <div className="page-home__section-5__tax__buy__group">
                <div className="page-home__section-5__tax__buy__group__item">
                  <img src={LiquidityImage} alt="liquidity" />
                  <div className="page-home__section-5__tax__buy__group__item__title">
                    5% LIQUIDITY
                  </div>
                  <br />
                  <div className="page-home__section-5__tax__buy__group__item__paragraph">
                    5% of the buy tax is added to liquidity pool. This pools
                    maintains a liquid market for the SNU token and helps with
                    price volatility.
                  </div>
                </div>

                <div className="page-home__section-5__tax__buy__group__item">
                  <img src={MarketingImage} alt="liquidity" />
                  <div className="page-home__section-5__tax__buy__group__item__title">
                    5% MARKETING
                  </div>
                  <br />
                  <div className="page-home__section-5__tax__buy__group__item__paragraph">
                    5% of the buy tax is used for marketing. This allows us to
                    fund project development and offset marketing costs to reach
                    a larger audience.
                  </div>
                </div>
              </div>
            </div>
            <div className="page-home__section-5__tax__sell">
              <div className="page-home__section-5__tax__sell__title">
                SELL TAX
              </div>
              <div className="page-home__section-5__tax__sell__group">
                <div className="page-home__section-5__tax__sell__group__item">
                  <img src={LiquidityImage} alt="liquidity" />
                  <div className="page-home__section-5__tax__sell__group__item__title">
                    10% LIQUIDITY
                  </div>
                  <br />
                  <div className="page-home__section-5__tax__sell__group__item__paragraph">
                    10% of the sell tax is added to liquidity pool. This pools
                    maintains a liquid market for the SNU token and helps with
                    price volatility.
                  </div>
                </div>

                <div className="page-home__section-5__tax__sell__group__item">
                  <img src={MarketingImage} alt="liquidity" />
                  <div className="page-home__section-5__tax__sell__group__item__title">
                    10% MARKETING
                  </div>
                  <br />
                  <div className="page-home__section-5__tax__sell__group__item__paragraph">
                    10% of the sell tax is used for marketing. This allows us to
                    fund project development and offset marketing costs to reach
                    a larger audience.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-home__section-5__text-disclaimer">
            <span className="page-home__section-5__text-disclaimer__title">
              Disclaimer:{" "}
            </span>
            <span className="page-home__section-5__text-disclaimer__paragraph">
              Shinobi taxes are subject to change according to market
              conditions. However, the contract is hard coded to never go above
              10% taxes on buys and 20% taxes on sells. Furthermore, taxes will
              be decreasing gradually as Shinobi grows in market-cap.
            </span>
          </div>
        </Container>
      </div>
      {/* section-5 end */}

      {/* section-6 start */}
      <div className="page-home__section bg-2" id="section-6">
        <Container className="page-home__section-6">
          <div className="page-home__section-6__title">ROADMAP</div>
          <div className="page-home__section-6__subtitle">(Rōdomappu)</div>
          <br />
          <div className="page-home__section-6__group">
            <div className="page-home__section-6__group__item">
              <div className="page-home__section-6__group__item__title">
                PHASE 1
              </div>
              <div className="page-home__section-6__group__item__list">
                <RoadMap isChecked>Website</RoadMap>
                <RoadMap isChecked>Launchpad Creation</RoadMap>
                <RoadMap isChecked>Whitepaper</RoadMap>
                <RoadMap isChecked>Shinobi DAO Initiation</RoadMap>
                <RoadMap>Token Launch</RoadMap>
                <RoadMap>Initiate Burn Mechanism</RoadMap>
                <RoadMap>CoinMarketCap Listing</RoadMap>
                <RoadMap>CoinGecko Listing</RoadMap>
                <RoadMap>5000 Holders</RoadMap>
              </div>
            </div>

            <div className="page-home__section-6__group__item">
              <div className="page-home__section-6__group__item__title">
                PHASE 2
              </div>
              <div className="page-home__section-6__group__item__list">
                <RoadMap>Project Applications</RoadMap>
                <RoadMap>Launch First Incubated Project</RoadMap>
                <RoadMap>Smart Contract Audits</RoadMap>
                <RoadMap>Community Building</RoadMap>
                <RoadMap>Marketing Campaign</RoadMap>
                <RoadMap>Partnerships</RoadMap>
                <RoadMap>CEX Listing</RoadMap>
                <RoadMap>Airdrop Competitions</RoadMap>
                <RoadMap>10,000 Holders</RoadMap>
              </div>
            </div>

            <div className="page-home__section-6__group__item">
              <div className="page-home__section-6__group__item__title">
                PHASE 3
              </div>
              <div className="page-home__section-6__group__item__list">
                <RoadMap>Launch Second Incubated Project</RoadMap>
                <RoadMap>KOL Campaigns</RoadMap>
                <RoadMap>Community Rewards</RoadMap>
                <RoadMap>Partners Program</RoadMap>
                <RoadMap>Mass Marketing</RoadMap>
                <RoadMap>Product Expansion</RoadMap>
                <RoadMap>Shinobi NFTS</RoadMap>
                <RoadMap>Feedback Based Improvements</RoadMap>
                <RoadMap>25,0000+ Holders</RoadMap>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* section-6 end */}

      {/* section-7 start */}
      <div className="page-home__section bg-1" id="section-7">
        <Container className="page-home__section-7">
          <div className="page-home__section-7__left">
            <div className="page-home__section-7__left__title">HOW TO BUY</div>
            <div className="page-home__section-7__left__subtitle">(ICHIBA)</div>
            <br /> <br />
            <div className="page-home__section-7__left__list">
              <div className="page-home__section-7__left__list__item">
                <div className="page-home__section-7__left__list__item__arrow"></div>
                <div className="page-home__section-7__left__list__item__content">
                  <div className="page-home__section-7__left__list__item__content__title">
                    CREATE A METAMASK WALLET
                  </div>
                  <div className="page-home__section-7__left__list__item__content__paragraph">
                    Create a MetaMask Wallet and send ETH to you wallet. You can
                    do directly on MetaMask or transfer it from an exchange like
                    Coinbase, Binance, etc
                  </div>
                </div>
              </div>
              <div className="page-home__section-7__left__list__item">
                <div className="page-home__section-7__left__list__item__arrow"></div>
                <div className="page-home__section-7__left__list__item__content">
                  <div className="page-home__section-7__left__list__item__content__title">
                    CONNECT YOUR WALLET
                  </div>
                  <div className="page-home__section-7__left__list__item__content__paragraph">
                    Connect your wallet to the dApp by clicking ‘Connect’ and
                    selecting MetaMask
                  </div>
                </div>
              </div>
              <div className="page-home__section-7__left__list__item">
                <div className="page-home__section-7__left__list__item__arrow"></div>
                <div className="page-home__section-7__left__list__item__content">
                  <div className="page-home__section-7__left__list__item__content__title">
                    SWAP ETH For SHINOBI
                  </div>
                  <div className="page-home__section-7__left__list__item__content__paragraph">
                    You can start swapping as soon as you have ETH available!
                    Once you are connected press ‘Swap’ to receive your SNU.
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="page-home__section-7__left__btns">
              <div className="page-home__section-7__left__btns__btn">
                Buy On Uniswap
              </div>
              <div className="page-home__section-7__left__btns__btn">
                Buy On Dextools
              </div>
            </div>
          </div>
          <div className="page-home__section-7__right">
            {/* <img src={FirstSectionImage} alt="swap" /> */}
            <Swap />
          </div>
        </Container>
      </div>
      {/* section-7 end */}

      {/* section-8 start */}
      {/* <div className="page-home__section bg-2">
        <Container className="page-home__section-8">
          <VideoPlayer
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            poster={FirstSectionImage}
          />
        </Container>
      </div> */}
      {/* section-8 end */}

      {/* section-9 start */}
      <div className="page-home__section bg-1" id="section-9">
        <Container className="page-home__section-9">
          <div className="page-home__section-9__title">FAQ</div>
          <br />
          <br />

          <div className="page-home__section-9__list">
            <Faq
              question="What Is Shinobi Inu?"
              answer="Shinobi Inu is a blockchain innovation platform with a DAO driven decentralized incubator and
launchpad. Any token developer can submit their projects to the Shinobi DAO, get voted by the
community and enter our incubation program by winning votes."
            />
            <Faq
              question="How Are Projects Selected?"
              answer="Projects are published into ‘Upcoming Project Proposals’ in the DAO. Once a project is scheduled
for DAO voting, token holders will have be able to cast their votes for the proposal. In order for a
proposal to be passed, the project will need to a majority of the votes at the end of their DAO
voting schedule."
            />
            <Faq
              question="How Does the DAO Work? "
              answer="Creating proposals and voting on Snapshot is user-friendly and does not cost gas as the process
is performed off-chain. Select ‘Upcoming Project Proposals’ and vote for the project you want to
be incubated on Shinobi."
            />
            <Faq
              question="How Do I Choose My Tier?"
              answer="Shinobi has a tier system where the more SNU you hold, the higher sizes of tokens you get from
IDOs. To learn more about our tier system you can click here."
            />
            <Faq
              question="Where Can I Buy SNU?"
              answer="SNU currently runs only on the Ethereum Network, which means it can be best purchased and
sold through Uniswap."
            />
            <Faq
              question="How Do I Get Started?"
              answer="Launch the Shinobi dApp and connect a Metamask wallet to the Shinobi Launchpad. Specify the
  amount of your swap according to your max allocation, and click on the ‘Contribute’ button. The
  tokens will be available to you at the moment of token listing either by airdrop or you can claim on
  the claim platform."
            />
          </div>
        </Container>
      </div>
      {/* section-9 end */}
      <Footer />
    </div>
  );
};

export default Home;
