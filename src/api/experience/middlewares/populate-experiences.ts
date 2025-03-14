/**
 * `populate-experiences` middleware
 */

import type { Core } from "@strapi/strapi";
const populate = {
  populate: {
    experiences: {
      fields: [
        "role",
        "company",
        "description",
        "fromDate",
        "toDate",
        "location",
      ],
    },
  },
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In populate-experiences middleware.");
    ctx.query = {
      ...ctx.query,
      ...populate,
    };
    await next();
  };
};
