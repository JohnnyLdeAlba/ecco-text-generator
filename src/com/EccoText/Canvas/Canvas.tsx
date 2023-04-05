import {
  useEffect,
  createContext, useContext,
  useRef, useState } from "react";

import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

import { t_hook } from "../../../com/lib/hook";
import { Button } from "../../../com/Button/Button";
import { Card } from "../../../com/Card";
import { Backdrop } from "../../../com/Backdrop";
import { useClipboard } from "../Clipboard";

import { CanvasContext } from "./useCanvas";
import { ThemeContext } from "../../../com/theme";

export const ProgressDialog = ({
  title = '',
  show = false,
  progressIndex = 0,
  onAbort
}) => {

  show = true;
  progressIndex = 50;

  return (
    <Backdrop show={ show }>
      <div className={`
        sm:mx-auto sm:my-4
        w-full sm:w-[500px]
        flex-1 h-full`}>
        <Card title={ title }
          className={`h-full sm:h-fit`}>
          <div className={`flex flex-col items-end m-4`}>
            <div className={`w-full mb-2`}>
              <LinearProgress
                variant="determinate"
                value={ progressIndex }
                classes={{ root: "mui-darksea-LinearProgress" }} />
            </div>
            <div className={`mb-4 font-medium text-lg`}>
              { progressIndex }%
            </div>
            <Button
              title="Cancel"
              rounded="full"
              onClick={ onAbort } />
          </div>
        </Card>
      </div>
    </Backdrop>
  );
}

export const CanvasLoading = () => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`relative pb-[75%] w-full bg-[#030712]`}>
      <div className={`
        absolute z-[9]
        top-[calc(50%-30px)] left-[calc(50%-30px)]
        ${ theme.circularProgress }`}>
        <CircularProgress size={ 60 } thickness={ 6 } color="inherit" />
      </div>
    </div>
  );
}

export const Canvas = ({ loading }) => {

  const ref = useRef();
  const canvas = useContext(CanvasContext);
  loading = loading ? loading : canvas.loading

  useEffect(() => {
    canvas.process({ canvas: ref.current });
  });

  return (<>
    <div className={`sm:rounded-lg overflow-hidden`}>

    { !loading ? null : 
      <CanvasLoading /> }

    <canvas
      width={ 320 } height={ 240 }
      ref={ ref }
      className={`
        pixelated w-full
        ${ loading ? "hidden" : '' }`} />

    </div> 
  </>);
}

export default Canvas;
