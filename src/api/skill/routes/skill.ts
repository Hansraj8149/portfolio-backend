/**
 * skill router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::skill.skill", {
  config: {
    find: {
      middlewares: ["api::skill.populate-skills"],
    },
    findOne: {
      middlewares: ["api::skill.populate-skills"],
    },
  },
});
