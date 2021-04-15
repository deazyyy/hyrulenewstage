import React from 'react';
import Amountbx from './components/Amountbx'
import Gambling from './components/Gambling'
import Farmsbx from './components/Farms'
import Stats from './components/Stats'
import Heading from 'components/Header/Header'

const Home: React.FC = () => {
  return (
    <div className="home">
      <Heading heading={"Hyrule Swap"} brief={"The most advanced yield platform in the Kingdom."} />

      <div style={{ position: "relative" }}>
        <div className="homecardouter">
          <Farmsbx />
          <Gambling />
          <Amountbx header={"Winning up to"} middle={"512 RUPEE"} bottom={"with gambling"} />
          <Amountbx header={"Market Cap"} middle={"$775,210"} bottom={"with currently supply"} />
          <Stats />
          <Amountbx header={"Total Value Locked (TVL)"} middle={"$1,857,529"} bottom={"Across all Farms and Pools"} />
        </div>

      </div>
    </div>
  );
}


export default Home;
