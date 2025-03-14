/**
 * `populate-contacts` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  populate: {
    contactDetails: {
      populate: {
        fields: ["name", "value", "link"],
        icon: {
          populate: {
            fields: ["url", "name"],
          },
        },
      },
    },
    form: {
      populate: {
        fields: ["title", "buttonText"],
        input: {
          populate: {
            fields: ["placeholder", "label", "type"],
          },
        },
      },
    },
  },
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In populate-contacts middleware.");
    ctx.query = { ...ctx.query, ...populate };
    await next();
  };
};
