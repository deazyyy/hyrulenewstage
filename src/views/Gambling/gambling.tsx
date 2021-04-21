import React from 'react';
import Heading from 'components/Header/Header'
import Playerrow from './components/Playerrow'
import Wheelroll from './components/Wheelroll'
import Howworks from './components/Howworks'
import Tnc from './Modals/Tnc'
import Amount from './Modals/Amount'
import AfterUnlock from './components/AfterUnlock'
import BeforeUnlock from './components/BeforeUnlock'





const Gambling: React.FC = () => {
  
    return (
        <>
         
            
            <Amount/>
            <Tnc/>
            <div className="roulettehero">
                <div className="rouletteherow rouletteherow1">
                    <Heading heading={"ROULETTE"} brief={"Play to earn RUPEEs"} />
                    <div className="roulecont">
                        <div>Total Burned with Gambling: 1471 RUPEE</div>
                        <div className="roulrowouter">
                            <Playerrow amount={15} players={17} perc={400} bordercolor={"#cf9737"} />
                            <Playerrow amount={15} players={17} perc={400} bordercolor={"#554137"} />
                            <Playerrow amount={15} players={17} perc={400} bordercolor={"#3a3532"} />
                            
                        </div>
                    </div>
                </div>
                <div className="rouletteherow2">
                    <Wheelroll />
                </div>

            </div>

            <div style={{ position: "relative" }}>
                <BeforeUnlock/>
                    <AfterUnlock/>
                    
                <div className="homecardouter roulettehomeouter">
                    
                    <Howworks />
                </div>
            </div>
        </>
    );
}


export default Gambling;
