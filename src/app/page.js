import Image from 'next/image'
import styles from './page.module.css'
import SiderBar from '@/Components/SideBar/SiderBar'
import Navbar from '@/Components/Navbar/Navbar'
import './globals.css'
import Hero from '@/Components/Hero/Hero'
import GamesCard from '@/Components/GamesCard/GamesCard'
import coinmega from '@/Components/Assets/coinmega.png'
import coinleague from '@/Components/Assets/coinleague.png'
import portfolioleague from '@/Components/Assets/portfolioleague.png'
import highlow from '@/Components/Assets/highlow.png'
import TopWinnerCard from '@/Components/TopWinnerCard/TopWinnerCard'
import Refer from '@/Components/Refer/Refer'
import JoinVibrantCom from '@/Components/JoinVibrantCom/JoinVibrantCom'
import Footer from '@/Components/Footer/Footer'
export default function Home() {
  const gameCard = [
    {
      head: "COIN MEGA LEAGUE",
      imgsrc: coinmega,
      title: "Coin Mega League ",
      description: "Portfolio Leagues are where skill and strategy come together in an exhilarating crypto fantasy gameplay. Dive into an exciting adventure and make big returns, every 2 minutes!",
      btn: "Play Coin Mega League",
      bgclass: 'first'
    },
    {
      head: "COIN LEAGUE",
      imgsrc: coinleague,
      title: "Coin League  ",
      description: "Infamously known for their Double or Nothing nature, Coin Leagues are a Head to Head gameplay where you can make double returns if you dominate the league, in just 30 seconds!",
      btn: "Play Coin League ",
      bgclass: 'second'
    },
    {
      head: "PORTFOLIO LEAGUE",
      imgsrc: portfolioleague,
      title: "Portfolio League",
      description: "Portfolio Leagues are where skill and strategy come together in an exhilarating crypto fantasy gameplay. Dive into an exciting adventure and make big returns, every 2 minutes!",
      btn: "Play Portfolio League ",
      bgclass: 'third'
    },
    {
      head: "HIGH LOW",
      imgsrc: highlow,
      title: "High-Low",
      description: "High/Low is the ultimate Player vs Environment (PvE) game, where your knowledge and prediction skills together pave the way to winning the ultimate reward of 10 USDT.",
      btn: "Play High Low Game",
      bgclass: 'fourth'
    }
  ]

  return (
    <main className='home'>
      <SiderBar />
      <div className='right'>
        <Navbar />
        <Hero />
        <div className='games'>
          <div className='games-head'>
            Games on Kandle
          </div>
          <div className='game-wrapper'>
            {
              gameCard.map((i) =>
                <GamesCard key={i} head={i.head} bgcolor={i.bgclass} cardImg={i.imgsrc} title={i.title} description={i.description} btn={i.btn} />
              )}
          </div>
        </div>
        <div className='games'>
          <div className='games-head'>
            Top Winners
          </div>
          <div className='game-wrapper' style={{
            borderBottom: '1px solid  #656E78',
            paddingBottom: '16px',
            marginBottom: '16px'
          }}>
            <div className='winner-table-titles globalrank'>
              Global Rank
            </div>
            <div className='winner-table-titles player'>
              Player Name
            </div>
            <div className='winner-table-titles amount'>
              Amount won
            </div>
            <div className='winner-table-titles gamesplayed'>
              Games Played
            </div>
            <div className='winner-table-titles rate'>
              Win Rate
            </div>
            <div className='winner-table-titles favcoins'>
              Favorite Coins
            </div>
            <div className='winner-table-titles favgame'>
              Favorite Game
            </div>
          </div>
          {
            [1, 2, 3, 4, 5, 6, 7].map((i) =>
              <TopWinnerCard key={i} index={i}/>
            )
          }
        </div>
        <Refer/>
        <JoinVibrantCom/>
        <Footer/>
      </div>
    </main>
  )
}
