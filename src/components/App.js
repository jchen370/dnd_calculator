import React, { useEffect, useState } from "react";
import IOComponent from "./IOComponents";
import MasterList from "./MasterList";
import InventoryList from "./InventoryList";
import CustomItem from "./CustomItem";
import Cost from "./Cost";

const costTemplate = {
    pp: {
        quantity: 0,
        profit: 0,
        extra: 0
    },
    gp: {
        quantity: 0,
        profit: 0,
        extra: 0
    },
    sp: {
        quantity: 0,
        profit: 0,
        extra: 0
    },
    cp: {
        quantity: 0,
        profit: 0,
        extra: 0
    }
}

const getMasterData = async () => {
    let url = "http://www.dnd5eapi.co/api/equipment",
        parm = {
            method: "GET",
        };

    return await fetch(url, parm)
        .then((response) => {
            return response.json();
        })
        .then(async (json) => {
            //Convert array to object with index as key
            let results = json.results.reduce((previous, current) => {
                return {
                    ...previous,
                    [current['index']]: current
                };
            }, {});

            //Get cost of all items and set count to 1
            let fetches = [];

            for (let key in results) {
                let url = "http://www.dnd5eapi.co/api/equipment/" + key;
                fetches.push(
                    fetch(url, parm)
                        .then((response) => {
                            return response.json();
                        })
                        .then((json) => {
                            let result = results[json.index];

                            result.cost = json.cost;
                            result.count = 1;
                        })
                );
            }

            return await Promise.all(fetches).then(() => {
                return results;
            });
        });
};

const App = () => {
    const [masterData, setMasterData] = useState();

    useEffect(async () => {
        setMasterData(await getMasterData());
    }, []);

    return (
        <div>
            <h1>Overall App</h1>
            <IOComponent />
            <MasterList masterData={masterData} />
            <InventoryList />
            <CustomItem />
            <Cost />
        </div>
    )
};

export default App;