import React from 'react';
import { func } from 'prop-types';

import {
  ColorSchemeWrapper, ColorSchemeTitle, ColorScheme, Input, Label,
} from './BgColorScheme.style';

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
        <Label htmlFor="defaultColor" title="default color scheme">
          <Input id="defaultColor" type="radio" name="colorScheme" value="hourBackgroundDefault" onClick={() => handleClick('hourBackgroundDefault')} />
          default
        </Label>
        <Label htmlFor="colorScheme1" title="choco colorscheme">
          <Input id="colorScheme1" type="radio" name="colorScheme" value="hourBackground1" onClick={() => handleClick('hourBackground3')} />
          choco
        </Label>
      </ColorScheme>
    </ColorSchemeWrapper>
  );
}

BgColorScheme.propTypes = {
  onBgColorSelect: func.isRequired,
};
export default BgColorScheme;
