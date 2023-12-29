import { useCallback, useMemo, useRef, useState } from 'react';

import { get } from 'lodash';

type TSortOrder = 'asc' | 'desc';

type TConfig<T extends string> = {
  sortKeys: T[];
};

export default function useListSorter<T extends any[], U extends string>(
  list: T,
  { sortKeys }: TConfig<U>,
) {
  const defaultKey = useRef(sortKeys[0]);

  const [currentSortKey, setSortKey] = useState<U>(defaultKey.current);
  const [order, setOrder] = useState<TSortOrder>('asc');

  const sortedList = useMemo(
    () => list.sort(handleSortByKey(currentSortKey, defaultKey.current, order)),
    [list, currentSortKey, order],
  );

  const handleSortBy = useCallback(
    (key: U) => {
      setSortKey(key);

      if (currentSortKey === key) {
        setOrder(order => (order === 'asc' ? 'desc' : 'asc'));
        return;
      }

      setOrder('asc');
    },
    [currentSortKey],
  );

  return {
    currentKey: currentSortKey,
    order,
    items: sortedList,
    sortBy: handleSortBy,
  };
}

function handleSortByKey(key: string, defaultKey: string, order: TSortOrder) {
  return (a: unknown, b: unknown): number => {
    const [itemA, itemB] = order === 'asc' ? [a, b] : [b, a];

    const keyA = get(itemA, key);
    const keyB = get(itemB, key);

    if (keyA > keyB) return 1;

    if (keyA < keyB) return -1;

    if (key === defaultKey) return 0;

    return handleSortByKey(defaultKey, defaultKey, order)(a, b);
  };
}
