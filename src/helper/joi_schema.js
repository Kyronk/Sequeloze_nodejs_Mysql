import joi from 'joi'



export const name = joi.string().min(3).max(30).required();
export const email = joi.string()
                        .pattern(new RegExp('gmail.com$'))
                        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                        .required();

export const password = joi.string()
                        // .pattern(new RegExp('^[a-zA-Z0-9]$'))
                        .min(6)
                        .max(30)
                        .required();

export const title = joi.string();
export const price = joi.number().required();
export const available = joi.number().required();

export const category_code = joi.string().uppercase().alphanum().required();

export const image = joi.string().required();
export const description = joi.string().required()