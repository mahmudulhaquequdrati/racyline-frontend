import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { Fragment, useEffect, useState } from "react";
import MakeAppointment from "./MakeAppointment";
import { Dialog, Transition } from "@headlessui/react";
import BloccaModal from "./BloccaModal";
import { useSelector } from "react-redux";
import { useGetVetAppointmentDetailsQuery } from "../../features/appointment/appointmentApi";
import axios from "axios";
import {
  notifyError,
  notifySuccess,
} from "../../components/common/Toast/Toast";
import moment from "moment";

const HomeCalender = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    data: allAppointmentList,
    isLoading: allAppointmentListLoading,
    isError: allAppointmentListError,
    refetch,
  } = useGetVetAppointmentDetailsQuery(user?._id);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  // function renderEventContent(eventInfo) {
  //   return (
  //     <>
  //       <b>{eventInfo.timeText}</b>
  //       <i>{eventInfo.event.title}</i>
  //     </>
  //   );
  // }
  const [position, setPosition] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [bloccaModal, setBloccaModal] = useState(false);
  const [singleDate, setSingleDate] = useState(null);
  const handleSelectDate = (info, e) => {
    // console.log(info);
    setSingleDate(info.date);
    setPosition({
      left: info.jsEvent.screenX - 10,
      top: info.jsEvent.screenY - 30,
    });
    setIsPopupVisible(true);
  };
  const [blockData, setBlockData] = useState({});

  const fetchBlockData = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_LINK}/blockcalender/${user._id}`)
      .then((res) => {
        setBlockData(res);
      });
  };

  useEffect(() => {
    fetchBlockData();
  }, []);

  let events = [];

  if (
    blockData &&
    blockData?.data !== undefined &&
    allAppointmentList &&
    allAppointmentList?.data !== undefined
  ) {
    events = transformAppointmentsToEvents([
      ...allAppointmentList?.data,
      ...blockData?.data,
    ]);
  }

  // console.log(events);
  const handleSingleDateBlock = (e) => {
    e.preventDefault();
    // console.log(singleDate);

    // if on the same day , there exists any appointment then do no block rather show a message else block the day
    const isAppointmentExists = allAppointmentList?.data?.some(
      (appointment) => {
        return (
          appointment.appointmentDate.split("T")[0].split("-")[2] ===
          new Date(singleDate).toLocaleString().split("/")[1]
        );
      }
    );

    if (isAppointmentExists) {
      // translate to italian
      notifyError(
        "Già un appuntamento è prenotato per questa data! Non puoi bloccare questa data!"
      );
      setIsPopupVisible(false);

      return;
    }

    const data = {
      blockStartDateTime: singleDate,
      vetId: user?._id,
    };

    // console.log(data);
    axios
      .post(`${import.meta.env.VITE_SERVER_LINK}/create-blockcalender`, data)
      .then((res) => {
        if (res?.data) {
          setIsPopupVisible(false);
          fetchBlockData();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // const deleteAppointment = (id) => {
  //   axios
  //     .delete(`${import.meta.env.VITE_SERVER_LINK}/appointment/delete/${id}`)
  //     .then((res) => {
  //       notifySuccess("Appuntamento eliminato con successo!");
  //       if (res?.data?.success) {
  //         refetch();
  //       }
  //     });
  // };
  const deleteBlockCalender = (id) => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_LINK}/blockcalender/${id}`)
      .then((res) => {
        notifySuccess("Appuntamento eliminato con successo!");
        if (res?.data?.success) {
          fetchBlockData();
        }
      });
  };

  const handleDeleteEvent = (id, title, canDelete) => {
    if (canDelete) {
      if (title === "Block") {
        const confirmation = window.confirm(
          `Are you sure you want to delete ?`
        );
        if (confirmation) {
          console.log(title, id, canDelete);
          if (title === "Block") {
            deleteBlockCalender(id);
          }
          // else {
          //   deleteAppointment(id);
          // }
        }
      } else {
        console.log("not possible to delete");
      }
    }
  };

  return (
    <div className=" w-full mx-auto bg-white p-6">
      {openModal && (
        <MakeAppointment
          isOpen={openModal}
          setIsOpen={setOpenModal}
          getData={refetch}
          singleDate={singleDate}
          allAppointmentList={allAppointmentList}
          blockData={blockData}
        />
      )}
      {bloccaModal && (
        <BloccaModal
          isOpen={bloccaModal}
          setIsOpen={setBloccaModal}
          getData={() => {
            refetch(), fetchBlockData();
          }}
          singleDate={singleDate}
        />
      )}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        // change the event color

        eventClassNames={(event) => {
          if (
            event?.event?._def?.extendedProps?.canDelete &&
            event?.event?.title === "Block"
          ) {
            return "bg-red-500 border-red-500 !m-0";
          } else {
          }
        }}
        eventBorderColor="transparent"
        eventMouseEnter={(e) => {
          if (e.event._def.title === "Block") {
            e.el.classList.add("!bg-red-500");
          } else {
            return;
          }
          // add hover effect in the e.el (event element)
          // e.el.style.backgroundColor = "red";
          e.el.classList.add("!bg-red-500");
        }}
        eventClick={(e) =>
          handleDeleteEvent(
            e.event._def.publicId,
            e.event._def.title,
            e.event._def.extendedProps.canDelete
          )
        }
        events={events}
        selectable={true}
        dateClick={(info) => handleSelectDate(info)}
        // select={(info, e) => handleSelectDate(info)}
        // eventContent={renderEventContent}
      />
      <Transition appear show={isPopupVisible} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsPopupVisible(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed "
              style={{ left: position.left, top: position.top }}
            />
          </Transition.Child>

          <div
            className="fixed overflow-y-auto"
            style={{ left: position.left, top: position.top }}
          >
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div>
                    <p
                      onClick={() => setOpenModal(true)}
                      className=" py-2 hover:bg-slate-100 px-4 cursor-pointer"
                    >
                      Aggiungi evento
                    </p>
                    <p
                      onClick={() => setBloccaModal(true)}
                      className=" py-2 hover:bg-slate-100 px-4 cursor-pointer"
                    >
                      Blocca un orario
                    </p>
                    <p
                      onClick={handleSingleDateBlock}
                      className=" py-2 hover:bg-slate-100 px-4 cursor-pointer"
                    >
                      Blocca tutta la giornata
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default HomeCalender;

const transformAppointmentsToEvents = (appointments) => {
  const events = [];

  appointments.forEach((appointment) => {
    if (appointment?.appointmentDate) {
      const startDateTime = new Date(
        `${appointment.appointmentDate.split("T")[0]}T${
          appointment.appointmentTime
        }:00`
      );
      // console.log(new Date(appointment.appointmentDate));
      const endDateTime = new Date(startDateTime.getTime() + 15 * 60000);

      events.push({
        id: appointment._id,
        title: `${appointment.firstName} ${appointment.lastName}`,
        start: startDateTime.toISOString(),
        end: endDateTime.toISOString(),
        extendedProps: {
          canDelete: appointment?.userId ? true : false,
        },
      });
    } else if (appointment?.vetId) {
      const startDateTime = new Date(appointment?.blockStartDateTime);
      const endDateTime = new Date(appointment?.blockEndDateTime);

      events.push({
        id: appointment._id,
        title: `Block`,
        start: startDateTime,
        end: endDateTime,
        extendedProps: {
          canDelete: true,
        },
      });
    }
  });

  return events;
};
