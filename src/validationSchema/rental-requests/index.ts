import * as yup from 'yup';

export const rentalRequestValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  tool_id: yup.string().nullable().required(),
});
