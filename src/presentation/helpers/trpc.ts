import 'server-only'; // <-- ensure this file cannot be imported from the client

import { cache } from 'react';

import {
  createTRPCContext,
  createTRPCOptionsProxy,
} from '@trpc/tanstack-react-query';

import { makeQueryClient } from '@/infra/http/queryClient';
import { appRouter } from '@/infra/routes';

// IMPORTANT: Create a stable getter for the query client that
//            will return the same client during the same request.
export const getQueryClient = cache(makeQueryClient);
export const trpc = createTRPCOptionsProxy({
  ctx: createTRPCContext,
  router: appRouter,
  queryClient: getQueryClient,
});
