import { apiSlice } from "../api/apiSlice";

export const updateUserDataApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserData: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/user/updateUserData/${data?._id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
});

export const { useUpdateUserDataMutation } = updateUserDataApi;
