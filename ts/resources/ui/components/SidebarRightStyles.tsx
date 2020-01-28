import React from 'react';
import SidebarRightStylesValue from './SidebarRightStylesValue';
import SidebarRightStylesProp from './SidebarRightStylesProp';

import groupStyles from '../styles/groupStyles';
import artboardStyles from '../styles/artboardStyles';
import shapeStyles from '../styles/shapeStyles';
import shapePathStyles from '../styles/shapePathStyles';
import imageStyles from '../styles/imageStyles';
import { textContainerStyles, textStyles } from '../styles/textStyles';

interface SidebarRightStylesProps {
  selection: srm.AppLayer | null;
  images: srm.ImgAsset[];
  svgs: srm.SvgAsset[];
}

const SidebarRightStyles = (props: SidebarRightStylesProps) => {
  const { selection, images, svgs } = props;
  const getLayerStyles = () => {
    if (selection) {
      switch(selection.type) {
        case 'Group':
          return groupStyles(selection as srm.Group);
        case 'Shape':
          return shapeStyles(selection as srm.Shape, svgs);
        case 'ShapePath':
          return shapePathStyles(selection as srm.ShapePath, images, svgs);
        case 'Image':
          return imageStyles(selection as srm.Image, images);
        case 'Text':
          return {...textContainerStyles(selection as srm.Text), ...textStyles(selection as srm.Text)};
        case 'Artboard':
          return artboardStyles(selection as srm.Artboard);
        default:
          return {}
      }
    } else {
      return null;
    }
  }
  const selectionStyles: any = getLayerStyles();
  return (
    <div className='c-sidebar__section'>
      <div className='c-sidebar__header'>
        <span>Styles</span>
      </div>
      {
        selection
        ? <div className='c-sidebar-styles'>
            {
              Object.keys(selectionStyles).map((key: any, index: number) => (
                <div className='c-sidebar-styles__style' key={index}>
                  <SidebarRightStylesProp prop={key} />
                  <SidebarRightStylesValue value={selectionStyles[key]} />
                </div>
              ))
            }
          </div>
        : <div className='c-sidebar__placeholder'>
            <span>Click layer to see styles</span>
          </div>
      }
    </div>
  )
};

export default SidebarRightStyles;