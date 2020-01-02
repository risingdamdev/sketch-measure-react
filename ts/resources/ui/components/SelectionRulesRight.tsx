import React from 'react';
import { createRuleRightStyles, createDimRightLeftStyles } from '../../utils/selectionStyles';

interface SelectionRulesRightProps {
  selectionOrigin: any;
  hoverOrigin: any;
  artboardFrame: any;
  inset?: any
}

const SelectionRulesRight = (props: SelectionRulesRightProps) => {
  const { selectionOrigin, hoverOrigin, artboardFrame, inset } = props;
  return (
    <div
      className='c-selection__rule c-selection__rule--r'
      style={createRuleRightStyles(selectionOrigin, hoverOrigin, inset)}>
      <div
        className='c-selection__dim'
        style={createDimRightLeftStyles(selectionOrigin, artboardFrame)}>
        {
          selectionOrigin.right >= hoverOrigin.left
          ? `${hoverOrigin.right - selectionOrigin.right}px`
          : `${hoverOrigin.left - selectionOrigin.right}px`
        }
      </div>
    </div>
  );
}

export default SelectionRulesRight;