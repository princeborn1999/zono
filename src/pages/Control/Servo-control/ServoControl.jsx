import React, { useState, useEffect } from 'react';
import { ConnectLight, DisconnectLight, PendingLight } from '../../../components/Unitlight';
import IRtranImage from '../../../assets/image/IRtransmitter.jpg'

function ServoControl(){
    return(
            <div className='m-5'>
                <h1 className='font-semibold text-xl'>Servo module</h1>
                <ConnectLight />
                <div className='w-48'>
                    <img src={IRtranImage} alt="IRreceiver" />
                </div>
                {/* 改成Unit 跟 Template */}
                https://www.amazon.ca/Infrared-Transmitter-Module-Digital-Receiver/dp/B09LVFT3HT?th=1
                {/* TODO: 燈號連接紅色或藍色 */}
                {/* TODO  動畫請連接裝置IR receiver, IR send */}

                {/* 目前支援sendRaw */}
                <div className='w-64 h-32 bg-gray-200'></div>
                {/* reconnection  */}
            </div>
    )
}
export default ServoControl