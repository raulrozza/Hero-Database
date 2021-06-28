// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import ConditionsController from '@api/conditions';
import type { NextApiRequest, NextApiResponse } from 'next';

import ICondition from '@/shared/domain/entities/ICondition';

const controller = new ConditionsController();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ICondition[]>,
) {
    switch (req.method) {
        case 'GET': {
            const conditions = await controller.get();

            return res.status(200).json(conditions);
        }
        default: {
            return res.status(404).end();
        }
    }
}
