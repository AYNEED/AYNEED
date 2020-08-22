import React, { useRef, useEffect } from 'react';
import Bound from 'bounds.js';

import { VirtualizedList } from 'src/components/wrappers/VirtualizedList';

type ListItem = {
  id: string;
};

type Props<T extends ListItem> = {
  data: T[];
  callback: () => void;
  children: React.LazyExoticComponent<React.FC<T>>;
};

export const LazyList = <T extends ListItem>({
  data,
  callback,
  children,
}: Props<T>): JSX.Element => {
  const activateRef = useRef(null);

  useEffect(() => {
    const boundary = Bound();

    boundary.watch(activateRef.current, (ratio) => {
      if (ratio !== null) {
        callback();
      }
    });

    return () => {
      boundary.clear();
    };
  }, [data, callback]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Card = children as any;

  return (
    <>
      {data.map((item, index, arr) => (
        <div
          className={`ii_${index}`}
          key={item.id}
          ref={arr.length - 1 === index ? activateRef : undefined}
        >
          <VirtualizedList height={100} children={<Card {...item} />} />
        </div>
      ))}
    </>
  );
};
