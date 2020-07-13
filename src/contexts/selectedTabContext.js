import React, { createContext, useState } from 'react'

export const SelectedTabContext  = createContext();

const SelectedTabContextProvider = (props) => {

    const [tab, changeTab] = useState(1);
    
        return (
            <SelectedTabContext.Provider value={{tab: tab, changeTab: changeTab}}>
                {props.children} {/*we're getting the header and all the other components that this provider wraps in App.js as props.children */}
            </SelectedTabContext.Provider>
        );
    
}
 
export default SelectedTabContextProvider;