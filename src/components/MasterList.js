import React from "react";
import "../style/MasterList.css";

const renderRows = (props) => {
    let masterData = props.masterData;

    if (masterData) {
        return Object.entries(masterData).map((item) => {
            let data = item[1];
            return (
                <tr className="masterlist-row" key={data.index}>
                    <td>{data.name}</td>
                    <td>{data.cost.quantity}</td>
                    <td>{data.cost.unit}</td>
                </tr>
            );
        });
    }
};

const MasterList = (props) => {
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
                        {renderRows(props)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MasterList;