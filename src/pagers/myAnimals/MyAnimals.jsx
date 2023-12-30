import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useDeletePetInfoMutation,
  useGetPetMedicalReportByUserIdQuery,
} from "../../features/petMedialReport/petMedicalReportApi";
import defaultPetImage from "../../assets/pets/pets-dog.png";
import { useNavigate } from "react-router-dom";

const plusIcons = (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_457_2801)">
      <path
        d="M16.5111 29.8328C9.14707 29.8328 3.17773 23.8634 3.17773 16.4994C3.17773 9.13543 9.14707 3.16609 16.5111 3.16609C23.8751 3.16609 29.8444 9.13543 29.8444 16.4994C29.8444 23.8634 23.8751 29.8328 16.5111 29.8328ZM15.1777 15.1661H9.8444V17.8328H15.1777V23.1661H17.8444V17.8328H23.1777V15.1661H17.8444V9.83276H15.1777V15.1661Z"
        fill="#339E9F"
      />
    </g>
    <defs>
      <clipPath id="clip0_457_2801">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0.5 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default function MyAnimals() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const {
    data: animalData,
    isLoading: animalLoading,
    isError: animalError,
    refetch,
  } = useGetPetMedicalReportByUserIdQuery(user?._id);
  const [deletePetInfo] = useDeletePetInfoMutation();
  //   console.log(animalData?.data?.data);
  const handleRedirectAddPet = () => {
    navigate("/user/single-pet-info", {
      state: "from_my_animal",
    });
  };
  useEffect(() => {
    refetch();
  }, [animalData?.data?.length]);
  const handleRemovePetsInfo = async (_id) => {
    deletePetInfo(_id).then((res) => {
      refetch();
    });
  };
  //   console.log(animalData);

  return (
    <section className=" bg-primary pb-16 px-4 pt-8 border-[1px] border-[#EAEAEB]">
      {/* Same as */}

      <div className="max-w-[1140px] w-full mx-auto  rounded-lg py-12 ">
        <h3 className="text-lg font-bold leading-10 mb-4">I miei animali</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white py-9 px-10 my-auto  w-full rounded-sm">
            <div
              className="flex justify-center items-center py-8 border border-dashed mb-4 cursor-pointer rounded-lg"
              onClick={handleRedirectAddPet}
            >
              <span> {plusIcons} </span>
              <span className="text-center text-[15px] text-[#000000]">
                Aggiungi un nuovo animale
              </span>
            </div>
          </div>

          {animalData?.data?.length > 0 &&
            animalData?.data?.map((petInfo, index) => {
              //   console.log(petInfo);
              return (
                <div key={index} className="p-3 rounded-lg border bg-white">
                  <div className="flex gap-6 items-center justify-start ">
                    <figure className="w-20 h-20 object-cover rounded-full overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={
                          petInfo?.data[0]?.general_information?.pet_photo ||
                          defaultPetImage
                        }
                        alt=""
                      />
                    </figure>

                    <article>
                      <h2 className="text-base font-bold">
                        {petInfo?.data[0]?.general_information?.animal_name}
                      </h2>
                      <p className="text-[15px] mt-1 text-[#00000066] flex gap-2 items-center">
                        <span>
                          {petInfo?.data[0]?.general_information?.species}
                        </span>
                        <span className="block w-[5px] h-[5px] rounded-full bg-[#E5E7EC]"></span>
                        <span>
                          {petInfo?.data[0]?.general_information?.race}
                        </span>
                      </p>
                    </article>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={(e) => handleEditPetsData(e, index)}
                      className={`w-full rounded-lg py-3 px-4 outline-none text-secondary border-secondary border hover:bg-secondary hover:text-white transition duration-300`}
                    >
                      Visualizza cartella clinica
                    </button>
                    <button
                      onClick={(e) => handleRemovePetsInfo(petInfo?._id)}
                      className={`max-w-max rounded-lg py-3 px-4 outline-none text-secondary border-secondary border hover:bg-secondary hover:text-white transition duration-300`}
                    >
                      Elimina
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        {/* <div className="mt-5">
          {animalData?.length > 0 ? (
            <button
              onClick={(e) => handleSubmit(e)}
              className={`w-full rounded-lg py-3 px-4 outline-none text-white bg-secondary border-secondary border hover:bg-white hover:text-secondary transition duration-300`}
            >
              Concludi la registrazione
            </button>
          ) : (
            <button
              onClick={(e) => handleSubmit(e)}
              className={`w-full rounded-lg py-3 px-4 outline-none text-secondary border-secondary border hover:bg-secondary hover:text-white transition duration-300`}
            >
              Salta e concludi la registrazione
            </button>
          )}
        </div> */}
      </div>
    </section>
  );
}
