import { apiSlice } from "../api/apiSlice";

export const appointmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAppointments: builder.query({
      query: () => ({
        url: "/appointment-lists",
      }),
    }),
    createAppointment: builder.mutation({
      query: (data) => ({
        url: "/create-appointment",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateAppointmentMutation } = appointmentApi;
