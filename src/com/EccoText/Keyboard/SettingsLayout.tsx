import { useContext, useState } from "react";

import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';

import { Card } from "../../Card";
import { CanvasContext } from "../Canvas";

export const SettingsLayout = ({ disabled = false }) => {

  const canvas = useContext(CanvasContext);

  return (
    <div className={`
      flex-1 sm:flex-none
      w-full sm:w-[500px]
      flex flex-row
      mx-auto
    `}>
      <Card
        icon={ <img
          src="/icons/settings.png"
          alt='' className={`w-[24px]`} /> }
        title="Settings"
        size="small"
        color="solid">

        <div className={`flex flex-row items-center px-4 py-2`}>
          <div className={`flex-1 font-medium text-sm`}>Trim Spaces</div> 
          <div>
            <Switch color="default"
              classes={{ root: canvas.com.trimSpaces ? "darkSea-Switch" : "darkSea-Switch-disabled" }}
              checked={ canvas.com.trimSpaces }
              onChange={ () => canvas.toggleTrimSpaces() } />
          </div> 
          <div className={`pl-2 w-20 font-medium text-sm text-center`}>
            { canvas.com.trimSpaces ? "Enabled" : "Disabled" }
          </div> 
        </div>

        <div className={`flex flex-col px-4 py-2`}>
          <div className={`font-medium text-sm`}>Waveform</div>
          <div className={`flex flex-row`}> 
            <div className={`flex-1 px-8 font-medium`}>

              <Slider classes={{ root: "darksea-Slider" }}
                value={ canvas.waveformIndex } max={ 255 }
                onChange={ (event, value) => canvas.setWaveformIndex(value) }
              />

            </div>
            <div className={`w-6 font-medium text-right`}>
              { canvas.waveformIndex < 0 ? 0 : canvas.waveformIndex }
            </div> 
          </div>
        </div>

      </Card>
    </div>
  );
}

export default SettingsLayout;
