import { apiSlice } from "../api/apiSlice";

export const updateUserDataApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserData: builder.mutation({
      query: (data) => {
        return {
          url: `/userInfoUpdate`,
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
});

export const { useUpdateUserDataMutation } = updateUserDataApi;
