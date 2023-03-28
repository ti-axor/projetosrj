/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Tooltip as Tip } from 'react-bootstrap';
import './styles.css';

function Tooltip(name, email) {
  return (
    <Tip placement="bottom" className="in" id="tooltip-top">
      {name !== '' ? (
        <div>
          <h5>Usuário</h5>
          <div>
            Nome:
            {name}
          </div>
          <div>
            E-mail:
            {email}
          </div>
        </div>
      ) : <div>Usuário não logado</div>}
    </Tip>
  );
}

export default Tooltip;
