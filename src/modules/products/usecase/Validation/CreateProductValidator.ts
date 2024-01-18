import { Joi, Segments } from 'celebrate';

const createProductValidator = {
  body: Joi.object({
    name: Joi.string().required().messages({'string.base': 'Name is required'}),
    description: Joi.string().optional(),
    price: Joi.number().optional(),
    type: Joi.string().required().messages({'string.base': 'Type is required'}),
    barcode: Joi.number().required().messages({'number.base': 'Bar code is required'}),
  }),
};

export { createProductValidator };
