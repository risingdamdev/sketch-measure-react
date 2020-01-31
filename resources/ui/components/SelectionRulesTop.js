import React from 'react';
import { createRuleTopStyles, createDimTopBottomStyles } from '../styles/selectionStyles';
const SelectionRulesTop = (props) => {
    const { selectionOrigin, hoverOrigin, artboardFrame, zoom } = props;
    return (React.createElement("div", { className: 'c-selection__rule c-selection__rule--t', style: createRuleTopStyles(selectionOrigin, hoverOrigin, zoom) },
        React.createElement("div", { className: 'c-selection__dim', style: createDimTopBottomStyles(selectionOrigin, artboardFrame, zoom) }, selectionOrigin.top <= hoverOrigin.bottom
            ? selectionOrigin.top - hoverOrigin.top
            : selectionOrigin.top - hoverOrigin.bottom)));
};
export default SelectionRulesTop;
