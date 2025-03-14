/**
 * `populate-skills` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  populate: {
    skills: {
      fields: ["skill", "tag"],
      populate: {
        icon: {
          fields: ["name", "url"],
        },
      },
    },
  },
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In populate-skills middleware.");
    ctx.query = {
      ...ctx.query,
      ...populate,
    };
    await next();
  };
};
