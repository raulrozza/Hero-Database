import React from 'react';

import { capitalize } from 'lodash';

import { getCostText } from '@/modules/powers/presentation/helpers';
import { IModifier } from '@/shared/domain/entities';
import {
  ItemCollapsible,
  ItemContent,
  ItemFooter,
  ItemHeader,
} from '@/shared/presentation/components/atoms';

import { getSubtitle } from './helpers';
import { Container, Subtitle, Variant } from './styles';

type TModifierItemProps = IModifier & {
  showTooltip?: boolean;
};

const ModifierItem: React.FC<TModifierItemProps> = ({
  showTooltip = true,
  ...modifier
}) => {
  const renderConfig = { showTooltip };

  return (
    <Container>
      <ItemHeader title={modifier.name} subtitle={getSubtitle(modifier)} />

      <Subtitle color={modifier.type === 'extra' ? 'secondary' : 'contrast'}>
        <h2>{capitalize(modifier.type)}</h2>
      </Subtitle>

      <ItemContent description={modifier.description} config={renderConfig} />

      {!!modifier.variants.length && (
        <ItemCollapsible title="Variants" defaultOpen={false}>
          {modifier.variants.map(variant => (
            <Variant key={variant.effect}>
              <ItemContent
                title={`${variant.effect} (${getCostText(variant.cost)})`}
                description={variant.description}
                config={renderConfig}
              />
            </Variant>
          ))}
        </ItemCollapsible>
      )}

      <ItemFooter source={modifier.source} />
    </Container>
  );
};

export default ModifierItem;
