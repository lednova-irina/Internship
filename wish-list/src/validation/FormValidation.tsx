import * as yup from "yup";

export const FormSchema = yup
  .object()
  .shape(
    {
      title: yup
        .string().max(30,"validations_max_length")
        .required("validations_required_field")
        .matches(/^[а-яА-ЯёЁa-zA-Z0-9\s]+$/i, {
          message: "validations_only_letters",
        }),
      description: yup.string().required("validations_required_field"),
      link: yup.string().nullable().url("validations_only_url"),
      price: yup
        .number()
        .nullable()
        .typeError("validations_only_numbers")
        .transform((value: number, originalValue: number) =>
          originalValue.toString().trim() === "" ? null : value
        )
        .when("currency", {
          is: (currency: string) => !!currency,
          then: yup
            .number()
            .nullable()
            .required("validations_required_field")
            .typeError("validations_only_numbers")
            .positive("validations_only_positive_price"),
        }),

      currency: yup
        .string()
        .nullable()
        .when("price", {
          is: (price: number) => !!price,
          then: yup.string().required("validations_required_field"),
        }),
    },
    [["price", "currency"]]
  )
  .required();
