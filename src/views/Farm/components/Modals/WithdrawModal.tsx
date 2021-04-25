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
        maxWidth: "550px",
        width: "100%"
    }
};
const { forwardRef, useRef, useImperativeHandle } = React;

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const WithdrawModal = forwardRef((props, ref) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    useImperativeHandle(ref, () => ({

        someExposedProperty: () => {
            openModal()
          }
    }));
    function openModal() {
        console.log("dfgf")
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
            parentSelector={() => document.querySelector('.farmrowblockouter')}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            <div className="bgbxl homecards">
                <img src="images/hyrule/close.png" alt="close" className="modalclose" onClick={closeModal} />
                <KingHeader heading={"Withdraw RUPEE-BNB LP Tokens"} font={"13px"} />
                <div className="infoouter" style={{ color: "#ddc6ab", textAlign: "center", flexDirection: "column" }}>
                    <div className="mb-3" style={{ marginTop: "-10px" }}>0 RUPEE-BNB LP Available</div>
                    <div className="inputouter">
                        <input />
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center mx-3">
                                RUPEE-BNB LP
                            </div>
                            <div style={{ color: "#cf9837" }}>
                                Max
                            </div>
                        </div>
                    </div>

                </div>
                <div className="d-flex mx-auto mt-3 justify-content-center">
                    <a className="btn-main btnbrown mx-3" onClick={closeModal}>Cancel</a>
                    <a className="btn-main btnbrown" onClick={closeModal}>Confirm</a>
                </div>

            </div>
        </Modal>
    )
})

export default WithdrawModal
