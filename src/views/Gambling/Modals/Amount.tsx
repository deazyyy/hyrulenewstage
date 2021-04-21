import React from 'react'
import Modal from 'react-modal';
import KingHeader from 'components/Header/KingHeader'


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background : 'transparent',
      maxWidth: "600px"
    }
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const Amount: React.FC = () => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    // references are now sync'd and can be accessed.
    }

    function closeModal(){
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
            <div className="bgbxl homecards">
                <KingHeader heading={"Enter amount to bet"} />
                <div className="infoouter" style={{color:"#ddc6ab",textAlign:"center"}}>
                    <div className="inputouter">
                        <input />
                        <div className="d-flex align-items-center">
                            <div  className="d-flex align-items-center mx-3">
                                <img src="images/hyrule/gem.png" alt="tri" className="gem" />
                                RUPEE
                            </div>
                            <div style={{color:"#cf9837"}}>
                                Max
                            </div>
                        </div>
                    </div>
                   <div className ="mt-2 mb-3">1827.35 RUPEE Available</div>
                   <div className ="mb-2">
                        Your bet must be rounded <br/>
                        Minimum bet = 1 RUPEE  <br/>
                        Maximum bet = 50 RUPEE
                   </div>
                   <div style={{color:"#f15451"}}>
                    Bets are final. Your RUPEE can not be returned to you if you lose.
                   </div>
                </div>
                <div className="d-flex mx-auto mt-2">
                    <a className="btn-main btnbrown mx-3"  onClick={closeModal}>Confirm</a>
                    <a className="btn-main btnbrown"  onClick={closeModal}>Cancel</a>
                </div>
                
            </div>
        </Modal>
    )
}

export default Amount
