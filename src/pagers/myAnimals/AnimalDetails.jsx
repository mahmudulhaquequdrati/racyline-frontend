import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultPetImage from "../../assets/pets/pets-dog.png";
import moment from "moment";

export default function AnimalDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_LINK}/pets/report/${id}`)
      .then((res) => {
        setData(res?.data?.data[0]);
      });
  }, []);
  const openImage = (url) => {
    window.open(url, "_blank");
  };
  return (
    <section>
      <div className="w-[80%] mx-auto my-20">
        <p className="font-bold">Cartella clinica dell’animale</p>
        <div className="mt-2">
          <figure className="w-20 h-20 object-cover rounded-full overflow-hidden">
            <img
              className="w-full h-full"
              src={
                data?.general_information?.pet_photo
                  ? data?.general_information?.pet_photo
                  : defaultPetImage
              }
              alt=""
            />
          </figure>
        </div>
        <div className="mt-3">
          <h2 className="font-bold text-lg">Dati generali</h2>
          <table className="w-[70%]">
            <thead>
              <tr>
                <td>
                  <span className="text-gray-400 text-sm">Name</span>
                </td>
                <td>
                  <span className="text-gray-400 text-sm">Specie</span>
                </td>
                <td>
                  <span className="text-gray-400 text-sm">Razza</span>
                </td>
                <td>
                  <span className="text-gray-400 text-sm">Data di nascita</span>
                </td>
                <td>
                  <span className="text-gray-400 text-sm">Sesso</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data?.general_information?.animal_name}</td>
                <td>{data?.general_information?.species}</td>
                <td> {data?.general_information?.race}</td>
                <td>
                  {moment(data?.general_information?.date_of_birth).format(
                    "DD/MM/YYYY"
                  )}
                </td>
                <td> {data?.general_information?.sex?.gender}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3">
          <h2 className="font-bold text-lg">Microchip</h2>
          <table className="w-[70%]">
            <thead>
              <tr>
                <td>
                  <span className="text-gray-400 text-sm">
                    Numero del microchip
                  </span>
                </td>
                <td>
                  <span className="text-gray-400 text-sm">
                    Data di implantazione
                  </span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {data?.general_information?.microchip_number}</td>
                <td>
                  {" "}
                  {moment(data?.general_information?.implantation_date).format(
                    "DD/MM/YYYY"
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3">
          <h2 className="font-bold text-lg">Anamnesi</h2>
          <p>{data?.medical_history?.medical_history}</p>
        </div>
        <div className="mt-3">
          <h2 className="font-bold text-lg my-4">Diario Medico</h2>
          {data?.medical_history?.medical_diary?.map((res, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-3 border rounded w-1/2"
            >
              <div>
                <p>{res?.description}</p>
                {res?.report_file?.map((f) => (
                  <button
                    onClick={() => openImage(f?.url)}
                    className="text-primary border border-secondary rounded px-10 py-1"
                  >
                    {f?.name}
                  </button>
                ))}
              </div>
              <div>{moment(res?.date).format("DD/MM/YYYY")}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 ">
          <h2 className="font-bold text-lg">Note aggiuntive</h2>
          <p>{data?.medical_history?.additional_notes}</p>
        </div>
      </div>
    </section>
  );
}
