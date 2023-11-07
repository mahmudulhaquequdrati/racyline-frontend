import { apiSlice } from "../api/apiSlice";

export const appointmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAppointments: builder.query({
      query: ({ email }) => ({
        url: `/appointment-lists/${email}`,
      }),
    }),
    getAppointmentDetails: builder.query({
      query: (id) => ({
        url: `/appointment/${id}`,
      }),
    }),
    createAppointment: builder.mutation({
      query: (data) => ({
        url: "/create-appointment",
        method: "POST",
        body: data,
      }),
    }),
    editAppointment: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/edit-appointment/${id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
    deleteAppointment: builder.mutation({
      query: ({ id }) => {
        console.log(id);
        return {
          url: `/appointment/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAppointmentDetailsQuery,
  useCreateAppointmentMutation,
  useGetAllAppointmentsQuery,
  useEditAppointmentMutation,
  useDeleteAppointmentMutation,
} = appointmentApi;
