/**
 * expertise router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::expertise.expertise", {
  config: {
    find: {
      middlewares: ["api::expertise.populate-expertises"],
    },
    findOne: {
      middlewares: ["api::expertise.populate-expertises"],
    },
  },
});
