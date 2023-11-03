import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAvailabilities: builder.mutation({
      query: ({ availabilities, userId }) => ({
        url: `createAvailabilities/${userId}`,
        method: "POST",
        body: { availabilities },
      }),
      providesTags: ["Availabilities"],
    }),
    getAllAvailabilities: builder.query({
      query: ({ userId }) => ({
        url: `getAvailabilities/${userId}`,
      }),
      invalidatesTags: ["Availabilities"],
    }),
  }),
});

export const { useCreateAvailabilitiesMutation, useGetAllAvailabilitiesQuery } =
  authApi;
