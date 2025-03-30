/**
 * seo router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::seo.seo", {
  config: {
    find: {
      middlewares: ["api::seo.populate-seos"],
    },
    findOne: {
      middlewares: ["api::seo.populate-seos"],
    },
  },
});
