import React, { useState, useRef } from 'react'
import Modal from 'react-modal';
import KingHeader from 'components/Header/KingHeader'
import Kokinfobox from './Modals/Kokinfobox'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'transparent',
        maxWidth: "900px"
    }
};


interface Kokboxprop {
    name: string
    val: number
}

const Kokbox: React.FC<Kokboxprop> = ({ name, val }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="kokbox">
            <img src="images/hyrule/kokgem.png" alt="kokiri gem" className="kokboximg" />
            <div>{name}</div>
            <button className="btn-main kokbtn" onClick={openModal} >
                <img src="images/hyrule/gem.png" alt="kokiri gem" />
                {val}
            </button>
            <Modal
                parentSelector={() => document.querySelector('.kokbox ')}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="bgbxl homecards kokboxmodal framelgbg">
                    <img src="images/hyrule/close.png" alt="close" className="modalclose" onClick={closeModal}/>
                    <KingHeader heading={"Buy NFT"} />
                    <div className="infoouter kokmodalouter" style={{ color: "#ddc6ab", textAlign: "center" }}>
                        <img src="images/hyrule/gamblemodal.png" alt="kokmodal" className="icon"></img>
                        <div>
                            <h3>
                                Hylian Shield
                            </h3>
                            <h4>Classic</h4>
                            <p style={{color:"#8d7e67",marginTop:"6px"}}>Item - Shield  - Core Set - 15010003</p>
                            <div className="my-4">
                                A shield passed down throught the Hyrulean royal family, along withthe legend of the hero who wielded it.
                            </div>
                            <div className="kokinfouter">
                                <Kokinfobox valuebx={56} namebx={"Vitality"} />
                                <Kokinfobox valuebx={56} namebx={"Vitality"} />
                                <Kokinfobox valuebx={56} namebx={"Vitality"} />
                                <Kokinfobox valuebx={56} namebx={"Vitality"} />
                                <Kokinfobox valuebx={56} namebx={"Vitality"} />
                                <Kokinfobox valuebx={56} namebx={"Vitality"} />
                               
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <button className="btn-main btnbrown mx-3"><img src="images/hyrule/gem.png" alt="kokiri gem" />250</button>
                        <div style={{color:"#f15451"}}>Purchases are final. Your RUPEE cannot be returned to you.</div>
                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default Kokbox
