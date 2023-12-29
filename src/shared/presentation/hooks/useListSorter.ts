import { useMemo, useRef, useState } from 'react';

import { get } from 'lodash';

type TConfig<T extends string> = {
  sortKeys: T[];
};

export default function useListSorter<T extends any[], U extends string>(
  list: T,
  { sortKeys }: TConfig<U>,
) {
  const defaultKey = useRef(sortKeys[0]);

  const [currentSortKey, setSortKey] = useState<U>(defaultKey.current);

  const sortedList = useMemo(
    () => list.sort(handleSortByKey(currentSortKey, defaultKey.current)),
    [list, currentSortKey],
  );

  return {
    currentKey: currentSortKey,
    items: sortedList,
    sortBy: setSortKey,
  };
}

function handleSortByKey(key: string, defaultKey: string) {
  return (itemA: unknown, itemB: unknown): number => {
    const keyA = get(itemA, key);
    const keyB = get(itemB, key);

    if (keyA > keyB) return 1;

    if (keyA < keyB) return -1;

    if (key === defaultKey) return 0;

    return handleSortByKey(defaultKey, defaultKey)(itemA, itemB);
  };
}
