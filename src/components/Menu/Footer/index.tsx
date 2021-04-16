import React from 'react'


const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="panelFooter">
                <button className="btn-main btnbrown">Connect</button>
                <div className="panelinfoouter">
                    <div className="panelprice">
                        <img src={'./images/hyrule/gem.png'} />
                            $0.45
                        </div>
                    <div className="panelsocial">
                        <img src={'./images/icons/twitter.png'} />
                        <img src={'./images/icons/telegram.png'} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
