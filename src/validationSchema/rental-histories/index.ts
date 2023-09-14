import * as yup from 'yup';

export const rentalHistoryValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  tool_id: yup.string().nullable().required(),
});
