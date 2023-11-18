import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dogImg from "../../assets/pets/pets-dog.png";

const plusIcons = (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_457_2801)">
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

function AddPetsMedicalRecordsUploaded() {
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();

  // handle files submit
  const handleFils = (data) => {
    console.log("data -> ", data);
    // function here ...
  };

  //  handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // function here ...
  };

  // Edit Animal
  const EditRecord = () => {
    // function here....
  };

  // Remove Animal
  const removeHandle = () => {
    // function here....
  };

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

        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="Files"
              className="flex gap-3 justify-center items-center py-8 border border-dashed rounded-lg mb-4 cursor-pointer"
            >
              <span> {plusIcons} </span>
              <p className="text-center text-[15px] text-[#000000]">
                Aggiungi un nuovo animale
              </p>
              <input
                onChange={(e) => handleFils(e.target.files[0])}
                type="file"
                name="fils"
                className="hidden"
                id="Files"
              />
            </label>
          </div>

          <div className="p-3 rounded-lg border">
            <div className="flex gap-6 items-center justify-start ">
              <figure className="w-20 h-20 rounded-full overflow-hidden">
                <img className="w-full h-full" src={dogImg} alt="" />
              </figure>

              <article>
                <h2 className="text-base font-bold"> Rocky </h2>
                <p className="text-[15px] mt-1 text-[#00000066]">
                  {" "}
                  Cane . Labrador Retriever{" "}
                </p>
              </article>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => EditRecord()}
                className={`w-full rounded-lg py-3 px-4 outline-none text-secondary border-secondary border hover:bg-secondary hover:text-white transition duration-300`}
              >
                Modifica cartella clinica
              </button>
              <button
                onClick={() => removeHandle()}
                className={`max-w-max rounded-lg py-3 px-4 outline-none text-secondary border-secondary border hover:bg-secondary hover:text-white transition duration-300`}
              >
                Elimina
              </button>
            </div>
          </div>

          <button
            type="submit"
            className={`w-full rounded-lg py-3 px-4 outline-none bg-secondary text-white hover:text-secondary hover:bg-transparent hover:border hover:border-secondary transition duration-300`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 text-gray-100 animate-spin fill-secondary"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span>Loading...</span>
              </div>
            ) : (
              "Concludi la registrazione"
            )}
          </button>
        </form>

        <p className="text-center text-[15px] mt-10 text-[#00000066]">
          * I campi sono obbligatori
        </p>
      </div>
    </section>
  );
}

export default AddPetsMedicalRecordsUploaded;
