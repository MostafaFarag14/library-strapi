'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async findOne(ctx) {
    const { code } = ctx.params
    const order = await strapi.services.order.findOne({ code })
    return sanitizeEntity(order, { model: strapi.models.order })
  },
};