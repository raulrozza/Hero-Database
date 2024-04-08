import { IEffect } from '@/shared/domain/entities';

export type MetaEffect = Omit<IEffect, 'key'>;

export const effects = new Map<string, MetaEffect>();
