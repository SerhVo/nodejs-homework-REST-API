const { Schema, model } = require("mongoose");
const Joi = require("joi");

const joiSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(33).required(),
    email: Joi.string().email({ minDomainSegments: 2 }),
    phone: Joi.string().pattern(/^[0-9()]+$/, "numbers").required(),
    favorite: Joi.boolean().required()
});

const contactSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "Set Name for contact"]
        },
        email: {
            type: String
        },
        phone: {
            type: String
        },
        favorite: {
            type: Boolean,
            default: false
        }
    },
    { versionKey: false, timestamps: true }
);

const Contact = model("contacts", contactSchema);

module.exports = {
    Contact,
    joiSchema
};
