import { apiSlice } from "../api/apiSlice";

export const updateUserDataApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserData: builder.mutation({
      query: (data) => {
        return {
          url: `/userInfoUpdate/${data?._id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
});

export const { useUpdateUserDataMutation } = updateUserDataApi;
