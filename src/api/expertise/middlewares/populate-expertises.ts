/**
 * `populate-expertises` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  populate: {
    expertises: {
      populate: {
        fields: ["title", "description", "level", "rating"],
        image: {
          populate: {
            fields: ["url", "name"],
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In populate-expertises middleware.");
    ctx.query = {
      ...ctx.query,
      ...populate,
    };
    await next();
  };
};
