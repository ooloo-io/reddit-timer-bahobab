import React from 'react';
import { func } from 'prop-types';

import { ColorSchemeWrapper, ColorSchemeTitle, ColorScheme } from './BgColorScheme.style';

function BgColorScheme({ onBgColorSelect }) {
  function handleClick(bgcolor) {
    onBgColorSelect(bgcolor);
  }

  return (
    <ColorSchemeWrapper>
      <ColorSchemeTitle>
        Color Scheme
      </ColorSchemeTitle>
      <ColorScheme>
        <label htmlFor="defaultColor">
          <input id="defaultColor" type="radio" name="colorScheme" value="hourBackgroundDefault" onClick={() => handleClick('hourBackgroundDefault')} />
          default
        </label>
        <label htmlFor="colorScheme1">
          <input id="colorScheme1" type="radio" name="colorScheme" value="hourBackground1" onClick={() => handleClick('hourBackground3')} />
          choco
        </label>
      </ColorScheme>
    </ColorSchemeWrapper>
  );
}

BgColorScheme.propTypes = {
  onBgColorSelect: func.isRequired,
};
export default BgColorScheme;
