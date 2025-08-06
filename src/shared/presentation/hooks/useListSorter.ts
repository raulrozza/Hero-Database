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
    () =>
      list.sort(
        handleSortByKey(currentSortKey, {
          defaultKey: defaultKey.current,
          order,
        }),
      ),
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

type TSortConfig = {
  defaultKey: string;
  order: TSortOrder;
};

function handleSortByKey(key: string, config: TSortConfig) {
  return (a: unknown, b: unknown): number => {
    const [itemA, itemB] = config.order === 'asc' ? [a, b] : [b, a];

    const keyA = get(itemA, key) as string;
    const keyB = get(itemB, key) as string;

    if (keyA > keyB) return 1;

    if (keyA < keyB) return -1;

    if (key === config.defaultKey) return 0;

    return handleSortByKey(config.defaultKey, config)(a, b);
  };
}
