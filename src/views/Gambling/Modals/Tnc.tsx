import React from 'react'
import Modal from 'react-modal';
import KingHeader from 'components/Header/KingHeader'


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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const Tnc: React.FC = () => {
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
        <Modal
            parentSelector={() => document.querySelector('.homecardouter ')}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="bgbxl homecards frameroulette">
                <img src="images/hyrule/close.png" alt="close" className="modalclose" onClick={closeModal}/>
                <KingHeader heading={"Warning"} />
                <div className="infoouter">
                    Bets are final! Your RUPEE will not be returned to you if you lose. Bet are only valid for one wheel turn.
                    Betting on a color does not guarantee you will win anything. <span>Please only participate once you understand the risks.</span>
                </div>
                <a className="btn-main btnbrown mx-auto mt-3" onClick={closeModal}>I Understand</a>
            </div>
        </Modal>
    )
}

export default Tnc
