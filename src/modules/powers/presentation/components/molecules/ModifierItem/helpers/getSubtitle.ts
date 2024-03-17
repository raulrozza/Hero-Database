import { capitalize } from 'lodash';

import { getCostText } from '@/modules/powers/presentation/helpers';
import { IModifier } from '@/shared/domain/entities';

export default function getSubtitle(modifier: IModifier) {
  const cost = getCostText(modifier.cost, { showPositiveSign: false });
  const type = capitalize(modifier.cost.type);

  return `${type} • ${cost}`;
}
