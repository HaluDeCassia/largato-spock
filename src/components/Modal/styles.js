import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  display: flex;
  z-index: 2000;
  align-items: center;
  justify-content: center;
  transition: opacity linear 0.15s;

  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }

  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }

  .background {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
  }

  .box-dialog {
    z-index: 1;
    border: none;
    max-width: 90%;
    border-radius: 5px;
    background-color: #fefefe;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    
    .box-content {
      font-size: 0.85rem;
      padding: 0px 10px 5px;
    }
    
    .box-header {
      display: flex;
      padding: 5px 10px;
      align-items: center;
      justify-content: space-between;
      
      .box-title {
        margin: 0;
        display: flex;
        font-size: 1rem;
        font-weight: bold;
        align-items: center;
        
        .box-icon {
          font-size: 28px;
          margin-right: 10px;
        }
      }
    }
  }
`;