import { useEffect, useContext, useState } from "react";

import { styled } from '@mui/material/styles';
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';

import { Backdrop } from "../Backdrop";
import { Card } from "../Card";
import { Button, SmallButton } from "../Button";

import { ThemeContext } from "../theme";

export const Loading = ({ show, onClose }) => {

  const theme = useContext(ThemeContext);

  return (
    <Backdrop show={ show } onClose={ onClose }>
      <div className={`
        absolute z-[9]
        top-[calc(50%-30px)] left-[calc(50%-30px)]
        ${ theme.circularProgress }`}>
        <CircularProgress size={ 60 } thickness={ 6 } color="inherit" />
      </div>
    </Backdrop>
   );
}


export const DownloadDialog = ({
  show = false,
  imageURL = '',
  onClose
}) => {

  const [ loading, setLoading ] = useState(true);

  const onLoad = () => {

    setTimeout(() => {
      setLoading(false);
    }, 1000);

  }

  const _onClose = () => {

    setLoading(true);
    onClose();
  }

  const onDownload = () => {

    const link = document.createElement('a');

    link.download = "download.gif";

    link.href = imageURL;
    link.click();
    link.delete;

    _onClose();
  }

  return (<>
    <Loading show={ show && loading } onClose={ _onClose } />
    <Backdrop show={ show && !loading }>
      <div className={`
        w-full md:w-[600px]
        mx-auto px-4 pt-20 pb-4
        flex-col
        ${ loading ? "hidden" : "flex" }`}>
        <Card title={ "Download" }
          rounded={ true } color="light" className="flex-none">
          <img src={ imageURL } alt=''
            onLoad={ show ? onLoad : null }
            className={`pixelated w-full`} />
          <div className={`flex flex-row justify-center py-4`}>
            <SmallButton
              icon={ <div className={`pr-2`}><SaveIcon /></div> }
              title="Download"
              rounded="left"
              className={`pl-4`}
              onClick={ onDownload } />
            <SmallButton
              title="Close"
              rounded="right"
              className={`pr-4`}
              onClick={ _onClose } />
          </div>
        </Card>
      </div>
    </Backdrop>
  </>);
}



export default DownloadDialog;
