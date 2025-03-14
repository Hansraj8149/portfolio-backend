/**
 * hero router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::hero.hero", {
  config: {
    find: {
      middlewares: ["api::hero.populate-heroes"],
    },
    findOne: {
      middlewares: ["api::hero.populate-heroes"],
    },
  },
});
