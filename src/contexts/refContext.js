import React, { createContext, useState } from 'react'

export const RefContext  = createContext();

const RefContextProvider = (props) => {
    const [refHome, setRefHome] = useState(null);
    const [refPorfolio, setRefPortfolio] = useState(null);
    const [refAbout, setRefAbout] = useState(null);
    const [refContact, setRefContact] = useState(null);
    
    
        return (
            <RefContext.Provider value={
                {
                    refAbout: refAbout, setRefAbout: setRefAbout, 
                    refHome: refHome, setRefHome: setRefHome,
                    refPortfolio: refPorfolio, setRefPortfolio: setRefPortfolio,
                    refContact: refContact, setRefContact: setRefContact
                }
            
            }>

                {props.children} {/*we're getting the header and all the other components that this provider wraps in App.js as props.children */}
            </RefContext.Provider>
        );
    
}
 
export default RefContextProvider;