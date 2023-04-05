import { useContext } from "react";
import { styled } from '@mui/material/styles';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import SaveIcon from '@mui/icons-material/Save';

import { Backdrop } from "./Backdrop";
import { Card } from "./Card";
import { Button, SmallButton } from "./Button";

import { ThemeContext } from "./theme";

export const Linear = ({ value }) => {

  const theme = useContext(ThemeContext);

  const WLinear = styled(LinearProgress)(() => ({
    height: 8,
    borderRadius: 10,

    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.linearProgress.backgroundColor
    },

    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: theme.linearProgress.bar
    }
  }));

  return <WLinear variant="determinate" value={ value } />;
}

export const ProgressDialog = ({
  title = '',
  show = false,
  progressIndex = 0,
  onAbort
}) => {

  return (
    <Backdrop show={ show }>
      <div className={`
        w-full sm:w-[500px]
        mt-20 mx-auto px-4
        flex flex-col`}>
        <Card title={ title } rounded={ true } color="light">
          <div className={`flex flex-col items-end m-4`}>
            <div className={`w-full mb-2`}>
              <Linear value={ progressIndex } />
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

export const DownloadDialog = ({
  show = false,
  resolution = '',
  type = '',
  blob = null,
  onClose
}) => {

  switch (resolution) {

    case "resUltraHigh": {

      resolution = "640x480 Ultra High";
      break;
    }

    case "resHigh": {

      resolution = "640x480 High";
      break;
    }

    case "resLow": {

      resolution = "320x240 Low";
      break;
    }

    default: {

      resolution = "320x240 Medium";
      break;
    }
  }

  if (type == "png")
    resolution = '';

  const imageURL = (blob => {

    if (!blob)
      return '';

    return URL.createObjectURL(blob);
  })(blob)

  const onDownload = () => {

    const link = document.createElement('a');

    link.download = "download.gif";

    link.href = imageURL;
    link.click();
    link.delete;

    onClose();
  }

  return (
    <Backdrop show={ show }>
      <div className={`
        w-full sm:w-[500px]
        mt-20 mx-auto px-4
        flex flex-col`}>
        <Card title={ "Download " + type.toUpperCase() }
          rounded={ true } color="light">
          <img src={ imageURL } alt='' className={`pixelated w-full`}/>
          <div className={`flex flex-row justify-center px-4 py-2 font-medium`}>
            <span className={`mr-4`}>File Type: { type.toUpperCase() }</span>
            { resolution == '' ? null : <span>Resolution: { resolution }</span> }
          </div>
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
              onClick={ onClose } />
          </div>
        </Card>
      </div>
    </Backdrop>
  );
}



export default ProgressDialog;
