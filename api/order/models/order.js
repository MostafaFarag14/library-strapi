'use strict';
const { getRandomNumber } = require('../../../utils/helpers')
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  /**
   * Triggered before order creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      const date = new Date()
      const code = 
      `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`
      data.code = code

    },
  },
};
