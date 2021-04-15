import React from 'react';
import Kokbox from './components/kokbox'
import Heading from 'components/Header/Header'

interface Kokboxprop {
    value?: boolean
}


const kokiriboxes = []
for (let i = 0; i < 10; i++) {
    kokiriboxes.push(<Kokbox key={i} name={"RUPPEE"} val={500} />)
}

const Kokiri: React.FC = () => {
    return (
        <>
            <Heading heading={"KOKIRI SHOP"} brief={"The most advanced yield platform in the Kingdom."} />
            <div style={{ position: "relative" }}>
                <div className="kokiriouter framelgbg">
                    <div className="kokirinner">
                        {kokiriboxes}
                    </div>
                </div>
            </div>
        </>
    );
}


export default Kokiri;
