import React from 'react';

import IOComponent from "./IOComponents";
import MasterList from "./MasterList";
import InventoryList from "./InventoryList";
import CustomItem from "./CustomItem";
import Cost from "./Cost";

const App = () => {
    return(
        <div>
            <h1>Overall App</h1>
            <IOComponent/>
            <MasterList/>
            <InventoryList/>
            <CustomItem/>
            <Cost/>
        </div>
    )
};

export default App;