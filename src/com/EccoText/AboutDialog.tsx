import { Backdrop } from "../../com/Backdrop";
import { Card } from "../../com/Card";

export const AboutText = () => {

  return (<>
    <div className={`font-medium text-xl text-center`}>
      Ecco Text Generator, Version 2.0
    </div>
    <div className={`text-center`}>
      Created By  Johnny L. de Alba, 2023
    </div>

    <br />
    <p className={`mb-2 font-medium`}>
      What is this?
    </p>

    <p>
      This is an Ecco the Dolphin Text Generator that creates animated gifs and static images using the
      ripple generating algorythm from Ecco 2: The Tides of Time.
    </p>

    <br />
    <p className={`mb-2 font-medium`}>
      Special Thanks
    </p>

    <p className={`mb-2`}>
      Jake ( Twitter: <a href="https://twitter.com/fiuefey">@fiuefey</a> ) for providing numbers and Icelandic character support.
    </p>
    <p className={`mb-2`}>
      Brad Corrupts ( YouTube: <a href="https://www.youtube.com/@BradCorrupts/videos">@BradCorrupts</a> ) who discovered that additional
      effects that could be done with the ripple generator.
    </p>
    <p>
      Foone Turing ( Twitter: <a href="https://twitter.com/Foone">@foone</a> )
      whose <a href="https://deathgenerator.com">Death Generator</a> was the inspiration for this.
    </p>
  </>)
}

export const AboutDialog = ({ show = false, onClose }) => {

  return (
    <Backdrop show={ show }>
      <div className={`
        flex-1 sm:flex-none
        sm:mx-4 md:mx-auto
        sm:my-8
        md:w-[600px]`}>
        <Card title="About" color="" size="small" onClose={ onClose } className={`
          flex-1 sm:flex-none
          h-full sm:h-fit`}>
          <div className={`flex-1 px-4 py-6 h-full`}>
            <AboutText />
          </div>
        </Card>
      </div>
    </Backdrop>
  );
}

