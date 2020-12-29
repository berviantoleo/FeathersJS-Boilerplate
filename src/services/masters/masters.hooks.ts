import { softDelete } from 'feathers-hooks-common';
import masterHook from '../../hooks/master-hook';

export default {
  before: {
    all: [
      softDelete({
        // context is the normal hook context
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deletedQuery: async (context) => {
          return { deletedAt: null };
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        removeData: async (context) => {
          return { deletedAt: new Date() };
        },
      }),
    ],
    find: [masterHook()],
    get: [masterHook()],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
