import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import defaultPetImage from "../../assets/pets/pets-dog.png";
import { useCreatePetInfoMutation } from "../../features/petMedialReport/petMedicalReportApi";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, userLoggedIn } from "../../features/auth/authSlice";
import { useUpdateMedicalForUserMutation } from "../../features/auth/authApi";
import emailjs from "@emailjs/browser";

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

function AddPetsMedicalRecords() {
  const [petsInfo, setPetsInfo] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useSelector((state) => state.auth);
  const [
    createPetInfo,
    { data: isCreatedPetResponse, isLoading, isError, isSuccess },
  ] = useCreatePetInfoMutation();
  const [
    updateMedicalForUser,
    {
      data: isUpdatedMedicalForUserResponse,
      isLoading: isLoadingUpdateMedicalForUser,
      isError: isErrorUpdateMedicalForUser,
      isSuccess: isSuccessUpdateMedicalForUser,
    },
  ] = useUpdateMedicalForUserMutation();
  const dispatch = useDispatch();
  const petsData = JSON.parse(localStorage.getItem("petsData"));
  // Saving the pet info
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      user_id: user?._id,
      data: petsInfo,
    };
    if (petsInfo?.length > 0) {
      createPetInfo(data);
    } else {
      // console.log("came");
      const data = {
        userId: user?._id,
        completed_medical_report: true,
      };
      updateMedicalForUser(data);
      dispatch(getUserInfo({ ...user, completed_medical_report: true }));
      localStorage.removeItem("petsData");
      emailjs
        .send(
          "service_is7aog9",
          "template_7jsih7q",
          {
            name: user?.first_name + " " + user.last_name,
            email: user?.email,
          },
          "user_x2aq1Ig2bYqnAn0XQwwE1"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          navigate("/user/vet-lists");
        });
    }
  };

  // Redirecting to add pet info page
  const handleRedirectAddPet = () => {
    if (petsData) {
      localStorage.setItem(
        "petsData",
        JSON.stringify([
          ...petsData,
          {
            general_information: {},
            medical_history: {},
          },
        ])
      );
    } else {
      localStorage.setItem(
        "petsData",
        JSON.stringify([
          {
            general_information: {},
            medical_history: {},
          },
        ])
      );
    }
    return navigate("/user/add-pet-info", {
      replace: true,
      state: {
        ...location,
        petInfoIndex: `${petsData ? petsData?.length : 0}`,
      },
    });
  };

  // Deleting a pets info
  const handleRemovePetsInfo = (event, petIndex) => {
    event.preventDefault();
    const previousPetsData = [...petsInfo];
    previousPetsData.splice(petIndex, 1);
    setPetsInfo(previousPetsData);
    localStorage.setItem("petsData", JSON.stringify(previousPetsData));
  };

  const handleEditPetsData = (event, petIndex) => {
    event.preventDefault();

    navigate("/user/add-pet-info", {
      replace: true,
      state: { ...location, petInfoIndex: `${petIndex}` },
    });
  };

  // Getting pets data
  useEffect(() => {
    setPetsInfo(petsData);
  }, [setPetsInfo?.length]);

  // Redirecet to vet lists page
  // console.log(isCreatedPetResponse);
  useEffect(() => {
    if (isSuccess) {
      dispatch(getUserInfo(isCreatedPetResponse));
      localStorage.removeItem("petsData");
      emailjs
        .send(
          "service_is7aog9",
          "template_7jsih7q",
          {
            name: user?.first_name + " " + user.last_name,
            email: user?.email,
          },
          "user_x2aq1Ig2bYqnAn0XQwwE1"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          navigate("/user/vet-lists");
        });
    }
  }, [isSuccess, dispatch]);

  return (
    <section className="flex flex-col justify-center items-center bg-primary pb-16 px-4 pt-8 border-[1px] border-[#EAEAEB]">
      {/* Same as */}

      <div className="max-w-[638px] w-full  rounded-lg px-4 py-12 md:p-8 lg:p-16 bg-white">
        <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold leading-10 text-center mb-6">
          Aggiungi le cartelle cliniche dei tuoi animali
        </h1>
        <p className="text-center text-[15px] pb-8 text-[#00000099]">
          Salva tutte le informazioni dei tuoi animali creando per ognuno una
          cartella clinica, in questo modo potrai aiutare anche il tuo
          veterinario.
        </p>

        <h3 className="text-lg font-bold leading-10 mb-4">I miei animali</h3>

        <div className="flex flex-col gap-y-4">
          <div
            className="flex gap-3 justify-center items-center py-8 border border-dashed mb-4 cursor-pointer rounded-lg"
            onClick={handleRedirectAddPet}
          >
            <span> {plusIcons} </span>
            <span className="text-center text-[15px] text-[#000000]">
              Aggiungi un nuovo animale
            </span>
          </div>

          {petsInfo?.length > 0 &&
            petsInfo?.map((petInfo, index) => (
              <div key={index} className="p-3 rounded-lg border">
                <div className="flex gap-6 items-center justify-start ">
                  <figure className="w-20 h-20 object-cover rounded-full overflow-hidden">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={
                        petInfo?.general_information?.pet_photo ||
                        defaultPetImage
                      }
                      alt=""
                    />
                  </figure>

                  <article>
                    <h2 className="text-base font-bold">
                      {petInfo?.general_information?.animal_name}
                    </h2>
                    <p className="text-[15px] mt-1 text-[#00000066] flex gap-2 items-center">
                      <span>{petInfo?.general_information?.species}</span>
                      <span className="block w-[5px] h-[5px] rounded-full bg-[#E5E7EC]"></span>
                      <span>{petInfo?.general_information?.race}</span>
                    </p>
                  </article>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={(e) => handleEditPetsData(e, index)}
                    className={`w-full rounded-lg py-3 px-4 outline-none text-secondary border-secondary border hover:bg-secondary hover:text-white transition duration-300`}
                  >
                    Modifica cartella clinica
                  </button>
                  <button
                    onClick={(e) => handleRemovePetsInfo(e, index)}
                    className={`max-w-max rounded-lg py-3 px-4 outline-none text-secondary border-secondary border hover:bg-secondary hover:text-white transition duration-300`}
                  >
                    Elimina
                  </button>
                </div>
              </div>
            ))}
          {petsData?.length > 0 ? (
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
        </div>

        <p className="text-center text-[15px] mt-10 text-[#00000066]">
          * I campi sono obbligatori
        </p>
      </div>
      <div className="mt-4">
        <Link to={"/vets/login"} className="no-underline">
          <p className="text-center text-[15px]">
            Sei un medico veterinario?
            <span className={`text-primary`}>Clicca qui</span>
          </p>
        </Link>
      </div>
    </section>
  );
}

export default AddPetsMedicalRecords;
