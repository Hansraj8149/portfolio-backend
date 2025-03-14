/**
 * `populate-heroes` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  populate: {
    links: {
      fields: ["name", "link"],
    },
  },
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In populate-heroes middleware.");
    ctx.query = {
      ...ctx.query,
      ...populate,
    };
    await next();
  };
};
