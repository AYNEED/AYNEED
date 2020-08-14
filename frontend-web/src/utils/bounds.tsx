import React, { useEffect, useRef, useState } from 'react';

import Bound from 'bounds.js';

type Props = {
  height: number;
  children: React.ReactNode;
  placeholder?: React.ReactNode;
  preloaderPx?: number;
};

enum BOUNDARY {
  INSIDE,
  OUTSIDE,
}

export const VirtualizedLoader: React.FC<Props> = ({
  height,
  children,
  placeholder = null,
  preloaderPx = 500,
}) => {
  const [position, setPosition] = useState<BOUNDARY>(BOUNDARY.INSIDE);
  const root = useRef(null);
  const notVisiblePlaceholder =
    position === BOUNDARY.OUTSIDE ? null : placeholder;

  useEffect(() => {
    let timeoutId: NodeJS.Timer | null = null;

    const preloaderBoundary = Bound({
      margins: {
        top: preloaderPx,
        bottom: preloaderPx,
      },
    });

    preloaderBoundary.watch(
      root.current,
      () => {
        timeoutId = setTimeout(() => {
          setPosition(
            preloaderBoundary.check(root.current)
              ? BOUNDARY.INSIDE
              : BOUNDARY.OUTSIDE
          );
        }, 300);
      },
      () => {
        setPosition(BOUNDARY.OUTSIDE);
      }
    );
    return () => {
      preloaderBoundary.clear();
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [preloaderPx]);

  return (
    <div ref={root} style={{ height }}>
      {position === BOUNDARY.INSIDE ? children : notVisiblePlaceholder}
    </div>
  );
};
