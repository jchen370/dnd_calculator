import React from "react";
import useMasterData from "../hooks/useMasterList";
import "../style/MasterList.css";

const MasterList = () => {
    const {
        masterData,
        renderRows
    } = useMasterData();

    return (
        <div className="masterlist">
            <h1>Master Item List</h1>
            <div className="masterlist-table">
                <table cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows(masterData)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MasterList;