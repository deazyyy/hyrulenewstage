import React, { useState, useRef } from 'react'
import UnlockButton from 'components/UnlockButton/UnlockButton'

const BeforeUnlock: React.FC = () => {
    return (
       <div className="afterunlock">
           <div className="Rowmain ">
    
                    <div className="box">
                        <div className="roulunlock">
                                <h4 className="mr-2">Unlock Wallet to bet</h4>
                                <UnlockButton background={"brown"} />
                            </div>
                    </div>
  
        
           </div>
       </div>
    )
}

export default BeforeUnlock
