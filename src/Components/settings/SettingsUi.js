import React from 'react';
import './settings.css'
import CreateItem from './CreateItem'
import DisplayItem from './DisplayItems'

const SettingsUi = () => {


    return (
        <div className="settings-container">
            <CreateItem />
            <DisplayItem />
        </div>
    )
}

export default SettingsUi