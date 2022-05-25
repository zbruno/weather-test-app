import * as React from 'react';
import Loader from 'react-content-loader';

// Types
type ContentLoaderProps = {
  speed?: number;
  height: number;
  width: number | string;
  backgroundColor?: string;
  foregroundColor?: string;
};

// React
const ContentLoader: React.FC<ContentLoaderProps> = ({
  speed = 2,
  height,
  width,
  backgroundColor = '#e5e7eb',
  foregroundColor = '#F3F4F6',
}) => {
  return (
    <Loader
      speed={speed}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
    >
      <rect x="0" y="0" rx="4" ry="4" width={width} height={height} />
    </Loader>
  );
};

export default React.memo(ContentLoader);
