import React, { createContext, useState } from 'react'

export const ModalContext  = createContext();

const ModalContextProvider = (props) => {

    const [show, setShow] = useState(false);

        return (
            <ModalContext.Provider value={{show: show, setShow: setShow}}>
                {props.children} {/*we're getting the header and all the other components that this provider wraps in App.js as props.children */}
            </ModalContext.Provider>
        );
    
}
 
export default ModalContextProvider;