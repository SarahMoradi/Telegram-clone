import {useState} from "react";
import { OffCanvas, OffCanvasBody, OffCanvasMenu } from "react-offcanvas";  
const Test = () => {
    
  const [state, setState] = useState(false);

  const handleClick = () => {
    // toggles the menu opened state
    setState(!state);
  };

  return (
    <>
      <button onClick={handleClick}>Open</button>
      <OffCanvas
        width={300}
        transitionDuration={300}
        isMenuOpened={state}
        position={"left"}
        effect={"overlay"}
      >
        
        
        <OffCanvasMenu
          className={"my-menu-class"}
          style={{ fontWeight: "bold", marginTop: "20px" }}
        >
          This is the canvas menu.
        </OffCanvasMenu>
      </OffCanvas>
    </>
  );
};
export default Test;
