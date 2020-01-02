import React from 'react';
import { createRuleLeftStyles, createDimRightLeftStyles } from '../../utils/selectionStyles';

interface SelectionRulesLeftProps {
  selectionOrigin: any;
  hoverOrigin: any;
  artboardFrame: any;
  inset?: any
}

const SelectionRulesLeft = (props: SelectionRulesLeftProps) => {
  const { selectionOrigin, hoverOrigin, artboardFrame, inset } = props;
  return (
    <div
      className='c-selection__rule c-selection__rule--l'
      style={createRuleLeftStyles(selectionOrigin, hoverOrigin, inset)}>
      <div
        className='c-selection__dim'
        style={createDimRightLeftStyles(selectionOrigin, artboardFrame)}>
        {
          selectionOrigin.left <= hoverOrigin.right
          ? `${selectionOrigin.left - hoverOrigin.left}px`
          : `${selectionOrigin.left - hoverOrigin.right}px`
        }
      </div>
    </div>
  );
}

export default SelectionRulesLeft;