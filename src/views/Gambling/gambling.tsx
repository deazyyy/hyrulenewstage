import React from 'react';
import { Wheel } from 'react-custom-roulette'

const data = [
    { option: '0', style: { backgroundColor: '#554137', textColor: 'transparent' } },
    { option: '1', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
    { option: '2', style: { backgroundColor: '#554137', textColor: 'transparent' } },
    { option: '3', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
    { option: '4', style: { backgroundColor: '#554137', textColor: 'transparent' } },
    { option: '5', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
    { option: '6', style: { backgroundColor: '#554137', textColor: 'transparent' } },
    { option: '7', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
    { option: '8', style: { backgroundColor: '#554137', textColor: 'transparent' } },
    { option: '9', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
    { option: '10', style: { backgroundColor: '#554137', textColor: 'transparent' } },
    { option: '11', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
    { option: '12', style: { backgroundColor: '#554137', textColor: 'transparent' } },
    { option: '13', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
    { option: '14', style: { backgroundColor: '#554137', textColor: 'transparent' } },
    { option: '15', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
    { option: '16', style: { backgroundColor: '#554137', textColor: 'transparent' } },
    { option: '17', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
    { option: '18', style: { backgroundColor: '#554137', textColor: 'transparent' } },
    { option: '19', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
    { option: '20', style: { backgroundColor: '#554137', textColor: 'transparent' } },
    { option: '21', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
    { option: '22', style: { backgroundColor: '#554137', textColor: 'transparent' } },
    { option: '23', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
    { option: '24', style: { backgroundColor: '#554137', textColor: 'transparent' } },
    { option: '25', style: { backgroundColor: '#cf9737', textColor: 'transparent' } },
  ]
  const mustSpin = true;
  const backgroundColors = ['#ff8f43', '#70bbe0', '#0b3351', '#f9dd50'];
  const textColors = ['#0b3351'];
  const outerBorderColor = '#2d291f';
  const outerBorderWidth = 4;
  const innerBorderColor = '#3a3532';
  const innerBorderWidth = 0;
  const innerRadius = 0;
  const radiusLineColor = '#2d291f';
  const radiusLineWidth = 4;
  const fontSize = 17;
  const textDistance = 0;
  
const Gambling: React.FC = () => {
    return(
        <>
            <div className="roulettehero"> 
                <div className="rouletteherow rouletteherow1">
                    <div className="homemainheading">
                    <div className="text homeheading">
                        <img src="images/hyrule/ribbonbg.png" alt="img" /> 
                        <div>ROULETTE</div>
                    </div>
                    <div className="lgraycolor">Play to earn RUPEEs</div>
                    </div>
                    <div className="roulecont">
                        <div>Total Burned with Gambling: 1471 RUPEE</div>
                        <div className="roulrowouter">
                            <div className="roulrow">
                                <div className="lbordder yellowb" />
                                <div >
                                    <img src="images/hyrule/gem.png" alt="tri" className="gem" />
                                    <div className="white">15</div>
                                </div>
                                <div>
                                    7 players
                                </div>
                                <div>
                                    4,00%
                                </div>
                            </div>
                            <div className="roulrow">
                                <div className="lbordder brown2b" />
                                <div >
                                    <img src="images/hyrule/gem.png" alt="tri" className="gem" />
                                    <div className="white">15</div>
                                </div>
                                <div>
                                    7 players
                                </div>
                                <div>
                                    4,00%
                                </div>
                            </div>
                            <div className="roulrow">
                                <div className="lbordder brown3b" />
                                <div >
                                    <img src="images/hyrule/gem.png" alt="tri" className="gem" />
                                    <div className="white">15</div>
                                </div>
                                <div>
                                    7 players
                                </div>
                                <div>
                                    4,00%
                                </div>
                            </div>
                            <div className="roulunlock">
                                <h4>Unlock Wallet to bet</h4>
                                <a className="btn-main btnbrown">Unlock Wallet</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rouletteherow2">
                    <div className="wheelouterpouter" >
                        <div className="wheelouter">
                        
                        <Wheel
                            mustStartSpinning={mustSpin}
                        prizeNumber={3}
                        data={data}
                        backgroundColors={backgroundColors}
                        textColors={textColors}
                        fontSize={fontSize}
                        outerBorderColor={outerBorderColor}
                        outerBorderWidth={outerBorderWidth}
                        innerRadius={innerRadius}
                        innerBorderColor={innerBorderColor}
                        innerBorderWidth={innerBorderWidth}
                        radiusLineColor={radiusLineColor}
                        radiusLineWidth={radiusLineWidth}
                        // perpendicularText
                        textDistance={textDistance}

                        />
                        <img src="images/hyrule/roulcenter.png" alt="roulcenter"  className="roulcenter"/>
                        <img src="images/hyrule/roulouter.png" alt="roulcenter"  className="roulborder"/>
                        </div>
                    </div>
                
                </div>

            </div>
        
            <div style={{position:"relative"}}>
                <div className="homecardouter roulettehomeouter">
                    <div className="bgbxl homecards">
                        <div className="headingouterot">
                            <div className="headingouter">
                                <h4>How it works</h4>
                            </div>
                        </div>

                        <div className="infoouter">              
                            Spend RUPEE to bet, contributing to the wheel pot. Win prizes if the color of your bet matches with the 
                            winning color! <span>Read more, if you have any issue, please send us an email at team@hyruleswap.com</span>
                        </div>
                        <img src="images/hyrule/triangle.png" alt="tri" className="triangle" />
                    </div>
                </div> 
            </div>
        </>
    );
  }


export default Gambling;
