import React from 'react';

const ErrorBarStyle = {
  cont: {
    backgroundColor: 'red',
    padding: '10px',
    color: 'white',
    fontSize: '20px',
    display: 'table',
    width: '100%',
    textAlign: 'left',
  },
  buttonCont: {
    display: 'table-cell',
    paddingRight: '5px',
  },
  textCont: {
    display: 'table-cell',
    textAlign: 'left',
    width: '100%',
  },
};

const ErrorBar = ({ onClose, text }) => (
  <div style={ErrorBarStyle.cont} >
    <div style={ErrorBarStyle.buttonCont}>
      <span onClick={onClose} > [X]</span>
    </div>
    <div style={ErrorBarStyle.textCont}>
      {text}
    </div>
  </div>
);
ErrorBar.propTypes = {
  text: React.PropTypes.string.isRequired,
  onClose: React.PropTypes.func,
};

export default ErrorBar;
