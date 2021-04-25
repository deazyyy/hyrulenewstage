import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import Row from './Row';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'transparent',
        maxWidth: "500px",
        minWidth: "200px"
    }
};


interface Props {
    background?: string
    width?: string
}
const ButtonGreen = styled.button`
    background: url(images/hyrule/btn_bg.png);
    background-size: 100% 100%;
    color: #fff ;
    
`
const ButtonBrown = styled.button`
    background: url(images/hyrule/btnnavbg.png) !important;
    background-size: 100% 100% !important;
    color: #f3de9f !important;
`



const UnlockButton: React.FC<Props> = ({ background ,width}) => {
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
        <>
            {
                background == "brown" ?
                    <ButtonBrown className="btn-main" onClick={openModal} style={{width:width}}>Unlock Wallet</ButtonBrown> :
                    <ButtonGreen className="btn-main" onClick={openModal} style={{width:width}}>Unlock Wallet</ButtonGreen>
            }
            <Modal
                parentSelector={() => document.querySelector('body ')}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="unlockframe w-100" style={{ color: "#fff" }}>
                    <div className="d-flex justify-content-between mb-3">
                        Connect to wallet
                        <div className="" onClick={closeModal} style={{ cursor: "pointer" }}>X</div>
                    </div>
                    <div>
                        <Row name={"Metamask"} imgname={"metamask"} />
                        <Row name={"TrustWallet"} imgname={"metamask"} />
                        <Row name={"MathWallet"} imgname={"metamask"} />
                        <Row name={"TokenPocket"} imgname={"metamask"} />
                        <Row name={"Walletconnect"} imgname={"metamask"} />

                    </div>
                </div>
            </Modal>
        </>
    )
}

export default UnlockButton



