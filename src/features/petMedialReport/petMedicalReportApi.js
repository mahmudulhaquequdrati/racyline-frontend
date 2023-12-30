import { apiSlice } from "../api/apiSlice";

export const PetMedicalReportApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPetInfo: builder.mutation({
      query: (data) => {
        return {
          url: `pets/report/`,
          method: "POST",
          body: data,
        };
      },
    }),
    getPetMedicalReportByUserId: builder.query({
      query: (id) => ({
        url: `/pets/report/byuser/${id}`,
      }),
    }),
    deletePetInfo: builder.mutation({
      query: (_id) => {
        return {
          url: `pets/report/${_id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useCreatePetInfoMutation,
  useGetPetMedicalReportByUserIdQuery,
  useDeletePetInfoMutation,
} = PetMedicalReportApi;
