import React, { useState } from 'react';
import { array } from 'prop-types';

import { cellBackgroundColorMap, cellHighlight } from '../config';
import { Cell } from './PostsTable.style';

function CellWrapper({ postsInHour }) {
  const numPosts = postsInHour.length;
  function getCellBGColor() {
    return cellBackgroundColorMap[numPosts] || cellBackgroundColorMap[10];
  }
  const cellDefaultStyle = {
    border: 'unset',
    backgroundColor: `${getCellBGColor()}`,
  };

  const [cellStyle, setCellStyle] = useState(cellDefaultStyle);
  const [isSelected, setIsSelected] = useState(false);

  function handleCellClick() {
    setCellStyle(
      { ...cellStyle, border: '1px solid red' },
    );
    setIsSelected(true);
  }

  function handleOnMouseEnter(event) {
    if (event.target.style.border !== cellHighlight) {
      // eslint-disable-next-line no-param-reassign
      event.target.style.border = cellHighlight;
    }
  }

  function handleOnMouseLeave(event) {
    if (!isSelected) {
      // eslint-disable-next-line no-param-reassign
      event.target.style.border = 'none';
    }
  }

  return (
    <Cell
      style={cellStyle}
      onClick={handleCellClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className="cell"
    >
      {numPosts}
    </Cell>
  );
}

CellWrapper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  postsInHour: array.isRequired,
};

export default CellWrapper;
