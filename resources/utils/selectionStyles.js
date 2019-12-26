import { createPosition, createWidth, createHeight, createBorder } from './layerStyles';
const getBorderOffset = (layer) => {
    const hasBorders = layer.style.borders.length > 0;
    const hasActiveBorders = layer.style.borders.some((border) => {
        return border.enabled;
    });
    const activeBorders = layer.style.borders.filter((border) => {
        return border.enabled;
    });
    if (hasBorders && hasActiveBorders) {
        const bordersMap = activeBorders.map((border) => {
            const { thickness, position } = border;
            if (position === 'Inside') {
                return 0;
            }
            else if (position === 'Center') {
                return thickness / 2;
            }
            else if (position === 'Outside') {
                return thickness;
            }
        });
        return Math.max(...bordersMap);
    }
    else {
        return 0;
    }
};
export const createSelectedStyles = (layer) => {
    const { frame } = layer;
    const position = createPosition(frame.x, frame.y);
    const width = createWidth(frame.width);
    const height = createHeight(frame.height);
    //const borderOffset = getBorderOffset(layer);
    const selectedBorder = createBorder({ thickness: 1, color: 'magenta', position: 'Outside' });
    return Object.assign(Object.assign(Object.assign(Object.assign({}, position), width), height), { boxShadow: selectedBorder });
};
export const createGroupSelectedStyles = (layer) => {
    const { frame } = layer;
    const position = createPosition(frame.x, frame.y);
    const width = createWidth(frame.width);
    const height = createHeight(frame.height);
    //const borderOffset = getBorderOffset(layer);
    const selectedBorder = createBorder({ thickness: 1, color: 'green', position: 'Outside' });
    return Object.assign(Object.assign(Object.assign(Object.assign({}, position), width), height), { boxShadow: selectedBorder });
};
export const createDimWidthStyles = (layer, artboard) => {
    const borderOffset = getBorderOffset(layer);
    const layerOriginY = layer.frame.y + layer.frame.height / 2;
    if (layerOriginY > artboard.frame.height / 2) {
        return {
            left: '50%',
            top: 0,
            transform: `translateY(calc(-100% - ${10 + borderOffset}px)) translateX(-50%)`
        };
    }
    else {
        return {
            left: '50%',
            bottom: 0,
            transform: `translateY(calc(100% + ${10 + borderOffset}px)) translateX(-50%)`
        };
    }
};
export const createDimHeightStyles = (layer, artboard) => {
    const borderOffset = getBorderOffset(layer);
    const layerOriginX = layer.frame.x + layer.frame.width / 2;
    if (layerOriginX > artboard.frame.width / 2) {
        return {
            top: '50%',
            left: 0,
            transform: `translateX(calc(-100% - ${10 + borderOffset}px)) translateY(-50%)`
        };
    }
    else {
        return {
            top: '50%',
            right: 0,
            transform: `translateX(calc(100% + ${10 + borderOffset}px)) translateY(-50%)`
        };
    }
};
export const createHoveredStyles = (layer) => {
    const { frame } = layer;
    const position = createPosition(frame.x, frame.y);
    const width = createWidth(frame.width);
    const height = createHeight(frame.height);
    //const borderOffset = getBorderOffset(layer);
    const hoveredBorder = createBorder({ thickness: 1, color: 'blue', position: 'Outside' });
    return Object.assign(Object.assign(Object.assign(Object.assign({}, position), width), height), { boxShadow: hoveredBorder });
};
export const createHoveredTRuleStyles = (layer, selection, artboard) => {
    return {};
};