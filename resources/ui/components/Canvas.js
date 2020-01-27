import React, { useRef, useEffect } from 'react';
import Artboard from './Artboard';
import BackButton from './BackButton';
let startGestureZoom = 0;
let gestureZoom = 1;
const Canvas = (props) => {
    const { artboard, images, svgs, selection, setSelection, groupSelection, setGroupSelection, groupSelectionNest, setGroupSelectionNest, hover, setHover, setZoom, zoom, showNotes, edit, setEdit, notes, setNotes, composing, ready } = props;
    const canvas = useRef(null);
    const handleClick = () => {
        setSelection(null);
        setGroupSelection(null);
    };
    const handleMouseOver = () => {
        setHover(null);
    };
    const handleGestureStart = (e) => {
        e.preventDefault();
        startGestureZoom = gestureZoom;
    };
    const handleGestureChange = (e) => {
        e.preventDefault();
        setZoom(startGestureZoom * e.scale);
    };
    const handleGestureEnd = (e) => {
        e.preventDefault();
    };
    const handleWheel = (e) => {
        if (e.ctrlKey) {
            let nextZoom = gestureZoom - e.deltaY * 0.01;
            e.preventDefault();
            if (e.deltaY < 0 && nextZoom < 5) {
                setZoom(gestureZoom -= e.deltaY * 0.01);
            }
            else if (e.deltaY > 0 && nextZoom > 0) {
                setZoom(gestureZoom -= e.deltaY * 0.01);
            }
        }
    };
    useEffect(() => {
        var _a, _b, _c;
        (_a = canvas.current) === null || _a === void 0 ? void 0 : _a.addEventListener('gesturestart', handleGestureStart);
        (_b = canvas.current) === null || _b === void 0 ? void 0 : _b.addEventListener('gesturechange', handleGestureChange);
        (_c = canvas.current) === null || _c === void 0 ? void 0 : _c.addEventListener('gestureend', handleGestureEnd);
    }, []);
    useEffect(() => {
        gestureZoom = zoom;
    }, [zoom]);
    return (React.createElement("div", { className: 'c-canvas', id: 'canvas', ref: canvas, onWheel: handleWheel },
        groupSelectionNest
            ? React.createElement(BackButton, { setGroupSelection: setGroupSelection, groupSelectionNest: groupSelectionNest, setGroupSelectionNest: setGroupSelectionNest })
            : null,
        ready
            ? React.createElement(Artboard, { artboard: artboard, images: images, svgs: svgs, selection: selection, setSelection: setSelection, groupSelection: groupSelection, setGroupSelection: setGroupSelection, groupSelectionNest: groupSelectionNest, setGroupSelectionNest: setGroupSelectionNest, hover: hover, setHover: setHover, zoom: zoom, showNotes: showNotes, edit: edit, notes: notes, setNotes: setNotes, composing: composing })
            : null,
        React.createElement("div", { className: 'c-canvas__escape', onClick: handleClick, onMouseOver: handleMouseOver })));
};
export default Canvas;
