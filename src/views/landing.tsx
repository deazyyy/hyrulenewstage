import React from 'react';

const Home: React.FC = () => {
    return(
        <div className="home"> 
           <div className="homemainheading">
              <div className="text homeheading">
                <img src="images/hyrule/ribbonbg.png" alt="img" /> 
                <div>Hyrule Swap</div>
              </div>
              <div className="lgraycolor">The most advanced yield platform in the Kingdom.</div>
            </div>
           
            <div style={{position:"relative"}}>
              <div className="homecardouter">
                <div className="bgbxl homecards">
                  <div className="headingouterot">
                    <div className="headingouter">
                      <h4>Farms & Staking</h4>
                    </div>
                  </div>

                  <div className="infoouter">
                    <div className="rowouter green">
                      <div className="rowinner">RUPEE to Harvest</div>
                      <div className="rowinner">RUPEE to Wallet</div>
                    </div>
                    <div className="rowouter dbrown">
                      <div className="rowinner">Locked</div>
                      <div className="rowinner">Locked</div>
                    </div>
                    <div className="rowouter green">
                      <div className="rowinner">~$0.00</div>
                      <div className="rowinner">~$0.00</div>
                    </div>
                  </div>
                  <button className="btn-main btngreen">Unlock Wallet</button>
                </div>

                <div className="bgbxl homecards">
                  <div className="headingouterot">
                    <div className="headingouter">
                      <h4>Gambling</h4>
                    </div>
                  </div>

                  <div className="infoouter">
                    <div className="rowouter green">
                      <div className="rowinner">Your pending rewards</div>
                      <div className="rowinner">RUPEE needed before next spin</div>
                    </div>
                    <div className="rowouter dbrown">
                      <div className="rowinner">Locked</div>
                      <div className="rowinner">Locked</div>
                    </div>
                    <div className="rowouter green">
                      <div className="rowinner">~$0.00</div>
                      <div className="rowinner">~$0.00</div>
                    </div>
                  </div>
                  <button className="btn-main btngreen">Unlock Wallet</button>
                </div>


                <div className="bgbxl bgbxsm homecards">
                  <div className="infoouter">
                    <div className="rowouter dbrown ">
                      Winning up to
                    </div>
                    <div className="rowouter green">
                      <h3>512 RUPEE</h3>
                    </div>
                    <div className="rowouter dbrown">
                      with gambling
                    </div>
                  </div>
                </div>

                <div className="bgbxl bgbxsm homecards">
                  <div className="infoouter">
                    <div className="rowouter dbrown ">
                      Market Cap
                    </div>
                    <div className="rowouter green">
                      <h3>$775,210</h3>
                    </div>
                    <div className="rowouter dbrown">
                      with currently supply
                    </div>
                  </div>
                </div>

                <div className="bgbxl bgbxsm homecards">
                  <h2 className="dbrown">Rupee Stats</h2>
                  <div className="infoouter">
                    <div className="rowouter dbrown">
                      <div className="rowinner">Total RUPEE Supply</div>
                      <div className="rowinner">502,297</div>
                    </div>
                    <div className="rowouter dbrown">
                      <div className="rowinner">Total RUPEE Burned</div>
                      <div className="rowinner">73,041</div>
                    </div>
                    <div className="rowouter dbrown">
                      <div className="rowinner">Total RUPEE/Block</div>
                      <div className="rowinner">1</div>
                    </div>
                  </div>
                </div>

                <div className="bgbxl bgbxsm homecards">
                  <div className="infoouter">
                    <div className="rowouter dbrown ">
                      Total Value Locked (TVL)
                    </div>
                    <div className="rowouter green">
                      <h3>$1,857,529</h3>
                    </div>
                    <div className="rowouter dbrown">
                      Across all Farms and Pools
                    </div>
                  </div>
                </div>

              </div>
              
            </div>
        </div>
    );
  }


export default Home;
