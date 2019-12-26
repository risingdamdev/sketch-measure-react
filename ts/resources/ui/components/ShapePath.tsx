import React from 'react';
import { createShapePathStyles } from '../../utils/layerStyles';

interface ShapePathProps {
  layer: any;
  images: any;
  onClick(): void;
  onMouseOver(): void;
  onMouseOut(): void;
}

class ShapePath extends React.Component<ShapePathProps, {}> {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
        data-layer-name={this.props.layer.name}
        className='c-layer c-layer--shape-path'
        // @ts-ignore
        style={createShapePathStyles(this.props.layer, this.props.images)}>
      </div>
    );
  }
}

export default ShapePath;
