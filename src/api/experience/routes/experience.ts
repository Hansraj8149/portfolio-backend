/**
 * experince router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::experience.experience", {
  config: {
    find: {
      middlewares: ["api::experience.populate-experiences"],
    },
    findOne: {
      middlewares: ["api::experience.populate-experiences"],
    },
  },
});
