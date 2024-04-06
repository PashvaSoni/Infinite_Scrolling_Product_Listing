import React, { useContext, useState } from "react";

const masterDataContext = React.createContext();

export function useMasterData() {
    return useContext(masterDataContext);
}

const MasterContext = ({children}) => {
    const [masterData, setMasterData] = useState({
        discounts: {
            productTypeDiscounts: {
            },
            overallDiscount: 0
        },
        news: {
            message: "",
            link: "",
            images: []
        },
        rates: {
            gold: 1000,
            silver: 2000,
            platinum: 3000,
            imitation: 1,
            alloy: 1
        }
    })
    console.log(masterData);
    return (
        <masterDataContext.Provider value={{ masterData, setMasterData }}>
            {children}
        </masterDataContext.Provider>
    )
}

export default MasterContext;