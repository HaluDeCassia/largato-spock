import React from "react";
import ReactDom from "react-dom";

import {  StyledModal } from "./styles";

const modalRoot = document.getElementById("modal-root"); // get div in html public

export default function Modal (props) {
  const background = React.createRef(); // create reference to component
  const [fadeType, setFadeType] = React.useState('');

  React.useEffect((prevProps) => { // sets fade in whenever isOpen is true
    setTimeout(() => setFadeType("in"), 0);

    if (!props.isOpen && prevProps.isOpen) {
      setFadeType("out");
    }
  }, [props.isOpen]);

  function transitionEnd (event) {
    if (event.propertyName !== "opacity" || fadeType === "in") return; // if not opacity, done

    if (fadeType === "out") { // if fade out, calls onClose function declared in App
      props.onClose();
    }
  };

  function handleClick (event) { // sets fade out when clicked outside the popup window
    event.preventDefault();
    setFadeType("out");
  };

  return ReactDom.createPortal( // makes a portal to render component outside DOM hierarchy
    <StyledModal
      id='popup-rules'
      role="dialog"
      className={`wrapper fade-${fadeType}`}
      onTransitionEnd={transitionEnd}
    >
      <div className="box-dialog">
        <div className="box-header">
          <h4 className="box-title">
            Regras
          </h4>
        </div>
        <div className="box-content">
          O jogo funciona da mesma forma que o jo-ken-po original. As regras são:
          <ul>
            <li>Tesoura corta papel</li>
            <li>Papel cobre pedra</li>
            <li>Pedra esmaga lagarto</li>
            <li>Lagarto envenena Spock</li>
            <li>Spock ou derrete tesoura</li>
            <li>Tesoura decapita lagarto</li>
            <li>Lagarto come papel</li>
            <li>Papel refuta Spock</li>
            <li>Spock vaporiza pedra</li>
            <li>Pedra amassa tesoura</li>
          </ul>
        </div>
      </div>
      <div
        className="background"
        onMouseDown={handleClick}
        ref={background}
      />
    </StyledModal>,
    modalRoot
  );
}