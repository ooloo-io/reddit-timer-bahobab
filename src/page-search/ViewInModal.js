import React from 'react';
import { func } from 'prop-types';

import { Container, Input, Label } from './ViewInModal.style';

function ViewInModal({ viewInModalCheck }) {
  function handleClick(event) {
    // console.log('Show modal value', event.target.checked)
    viewInModalCheck(event.target.checked);
  }
  return (
    <Container>
      <Label htmlFor="viewInModal">
        Show Posts in Modal Windaow
        <Input id="viewInModal" type="checkbox" name="" onClick={handleClick} />
      </Label>
    </Container>
  );
}

ViewInModal.propTypes = {
  viewInModalCheck: func.isRequired,
};

export default ViewInModal;
