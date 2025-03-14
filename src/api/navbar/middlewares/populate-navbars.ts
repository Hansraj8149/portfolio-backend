/**
 * `populate-navbars` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  populate: {
    navbarLinks: {
      fields: ["name", "link"],
    },
  },
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In populate-navbars middleware.");
    ctx.query = {
      ...ctx.query,
      ...populate,
    };
    await next();
  };
};
