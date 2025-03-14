/**
 * `populate-abouts` middleware
 */

import type { Core } from "@strapi/strapi";
const populate = {
  populate: {
    aboutPoints: {
      populate: {
        fields: ["title", "description"],
      },
    },
    photoCard: {
      populate: {
        fields: ["heading", "subheading"],
        image: {
          populate: {
            fields: ["url", "name"],
          },
        },
        skillTags: {
          populate: {
            fields: ["tag"],
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In populate-abouts middleware.");
    ctx.query = { ...ctx.query, ...populate };
    await next();
  };
};
