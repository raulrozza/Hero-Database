import { capitalize } from 'lodash';

import { IModifier } from '@/domain/entities';
import getCostText from '@/presentation/helpers/getCostText';

export default function getSubtitle(modifier: IModifier) {
  if (modifier.cost.type === 'flat') {
    const cost = getCostText(modifier.cost, { showPositiveSign: false });
    const type = capitalize(modifier.cost.type);

    return `${type} • ${cost}`;
  }

  const cost = getCostText(modifier.cost, { showPositiveSign: true });

  return cost;
}
