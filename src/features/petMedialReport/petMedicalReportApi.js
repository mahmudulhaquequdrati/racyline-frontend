import { apiSlice } from "../api/apiSlice";

export const PetMedicalReportApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPetInfo: builder.mutation({
      query: (data) => {
        console.log(data)
        return {
            url: `pets/report/`,
            method: "POST",
            body: data,
          }
      }
    }),
    // getAllAvailabilities: builder.query({
    //   query: ({ userId }) => ({
    //     url: `getAvailabilities/${userId}`,
    //   }),
    //   invalidatesTags: ["Availabilities"],
    // }),
  }),
});

export const { useCreatePetInfoMutation } =
PetMedicalReportApi;
