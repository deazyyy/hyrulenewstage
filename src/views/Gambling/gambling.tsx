import React from 'react';
import Heading from 'components/Header/Header'
import Playerrow from './components/Playerrow'
import Wheelroll from './components/Wheelroll'
import Howworks from './components/Howworks'

const Gambling: React.FC = () => {
    return (
        <>
            <div className="roulettehero">
                <div className="rouletteherow rouletteherow1">
                    <Heading heading={"ROULETTE"} brief={"Play to earn RUPEEs"} />
                    <div className="roulecont">
                        <div>Total Burned with Gambling: 1471 RUPEE</div>
                        <div className="roulrowouter">
                            <Playerrow amount={15} players={17} perc={400} bordercolor={"#cf9737"} />
                            <Playerrow amount={15} players={17} perc={400} bordercolor={"#554137"} />
                            <Playerrow amount={15} players={17} perc={400} bordercolor={"#3a3532"} />
                            <div className="roulunlock">
                                <h4>Unlock Wallet to bet</h4>
                                <a className="btn-main btnbrown">Unlock Wallet</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rouletteherow2">
                    <Wheelroll />
                </div>

            </div>

            <div style={{ position: "relative" }}>
                <div className="homecardouter roulettehomeouter">
                    <Howworks />
                </div>
            </div>
        </>
    );
}


export default Gambling;
