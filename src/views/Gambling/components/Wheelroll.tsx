import React, { useState, useRef } from 'react'
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


const Wheelroll: React.FC = () => {
    return (
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
                <img src="images/hyrule/roulcenter.png" alt="roulcenter" className="roulcenter" />
                <img src="images/hyrule/roulouter.png" alt="roulcenter" className="roulborder" />
            </div>
        </div>
    )
}

export default Wheelroll
