import * as yup from "yup";

export const FormSchema = yup
  .object()
  .shape(
    {
      title: yup
        .string()
        .required("Fill this field")
        .matches(/^[а-яА-ЯёЁa-zA-Z0-9]+$/i, {
          message: "Use only letters",
        }),
      description: yup.string().required("Fill this field"),
      link: yup.string().url("Use only url"),
      price: yup
        .number()
        .typeError("Use only numbers")
        .positive("Use only positive price")
        .nullable()
        .transform((value: number, originalValue: number) =>
          originalValue.toString().trim() === "" ? null : value
        )
        .when("currency", {
          is: (currency: string) => !!currency,
          then: yup.number().required("Price is required"),
        }),
      currency: yup.string().when("price", {
        is: (price: number) => !!price,
        then: yup.string().required("Fill this field"),
      }),
    },
    [["price", "currency"]]
  )
  .required();
