import { apiSlice } from "../api/apiSlice";

export const updateUserDataApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserData: builder.mutation({
      query: (data) => {
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
    googleCalenderInfo: builder.query({
      query: ({ userId }) => {
        return {
          url: `/guser/get-google-calender/${userId}`,
        };
      },
      providesTags: ["getUserData"],
      keepUnusedDataFor: 0,
    }),
    removeGoogleCalender: builder.mutation({
      query: ({ userId }) => {
        return {
          url: `/guser/remove-google-calender/${userId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["getUserData"],
    }),
  }),
});

export const {
  useGoogleCalenderInfoQuery,
  useUpdateUserDataMutation,
  useDeleteUserMutation,
  useRemoveGoogleCalenderMutation,
} = updateUserDataApi;
