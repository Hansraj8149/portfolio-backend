/**
 * `populate-seos` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  populate: {
    image: {
      fields: ["name", "url", "alternativeText"],
    },
  },
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In populate-seos middleware.");
    ctx.query = {
      ...ctx.query,
      ...populate,
    };
    await next();
  };
};
