import { apiSlice } from "../api/apiSlice";

export const PetMedicalReportApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPetInfo: builder.mutation({
      query: (data) => {
        return {
          url: `pets/report/`,
          method: "POST",
          body: data,
        }
      }
    }),
    getPetMedicalReportByUserId: builder.query({
      query: (id) => ({
        url: `/pets/report/byuser/${id}`,
      }),
    }),
  }),
});

export const { useCreatePetInfoMutation, useGetPetMedicalReportByUserIdQuery } =
  PetMedicalReportApi;
