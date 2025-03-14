/**
 * `populate-works` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  populate: {
    filters: {
      populate: {
        skillTags: {
          fields: ["tag"],
        },
      },
    },
    works: {
      populate: {
        workTags: {
          populate: {
            fields: ["tag"],
          },
        },
        image: {
          populate: {
            fields: ["url", "name"],
          },
        },
        fields: ["title", "description", "liveLink", "githubLink"],
      },
    },
  },
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In populate-works middleware.");
    ctx.query = { ...ctx.query, ...populate };
    await next();
  };
};
