import { capitalize } from 'lodash';

import { getCostText } from '@/modules/powers/presentation/helpers';
import { IModifier } from '@/shared/domain/entities';

export default function getSubtitle(modifier: IModifier) {
  if (modifier.cost.type === 'flat') {
    const cost = getCostText(modifier.cost, { showPositiveSign: false });
    const type = capitalize(modifier.cost.type);

    return `${type} • ${cost}`;
  }

  const cost = getCostText(modifier.cost, { showPositiveSign: true });

  return cost;
}
