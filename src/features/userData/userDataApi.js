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
    deleteUser: builder.mutation({
      query: (userId) => {
        return {
          url: `/delete-user/${userId}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useUpdateUserDataMutation, useDeleteUserMutation } =
  updateUserDataApi;
