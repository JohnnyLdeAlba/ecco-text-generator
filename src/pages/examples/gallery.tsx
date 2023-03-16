import { useContext } from "react";

import { Gallery } from "../../com/Gallery/Gallery"; 
import { ThemeContext } from "../../com/theme";

export const Index = () => {

  return (
    <div className={`flex flex-col h-screen`}>
      <Gallery />
    </div>
  );
}

export default Index;
