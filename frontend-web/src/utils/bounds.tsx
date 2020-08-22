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

  useEffect(() => {
    let timeoutId: NodeJS.Timer | null = null;

    const preloaderBoundary = Bound({
      margins: {
        top: preloaderPx,
        bottom: preloaderPx,
      },
    });

    const onEnter = (): void => {
      timeoutId = setTimeout(
        () =>
          setPosition(
            preloaderBoundary.check(root.current)
              ? BOUNDARY.INSIDE
              : BOUNDARY.OUTSIDE
          ),
        300
      );
    };

    const onLeave = (): void => setPosition(BOUNDARY.OUTSIDE);

    preloaderBoundary.watch(root.current, onEnter, onLeave);

    return () => {
      preloaderBoundary.clear();

      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [preloaderPx]);

  return (
    <div ref={root} style={{ height }}>
      {position === BOUNDARY.INSIDE
        ? children
        : position === BOUNDARY.OUTSIDE
        ? null
        : placeholder}
    </div>
  );
};
