import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLoggedOut } from "../../features/auth/authSlice";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function DropDown() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogut = () => {
    sessionStorage.clear();
    dispatch(userLoggedOut());
  };
  return (
    <div className=" w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={`inline-flex gap-2 items-center text-primary`}
          >
            Il mio profilo{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.9995 8.78145L11.2995 5.48145L12.2422 6.42411L7.9995 10.6668L3.75684 6.42411L4.6995 5.48145L7.9995 8.78145Z"
                fill={"#E8971F"}
              />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-3 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 py-1 ">
              {user?.role === "vet_admin" && (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/vets/accountsettings"
                        className={`${
                          active
                            ? "bg-[#e8981f26] text-gray-800"
                            : "text-gray-900"
                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                      >
                        Account Settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/vets/MyAvailabilities"
                        className={`${
                          active
                            ? "bg-[#e8981f26] text-gray-800"
                            : "text-gray-900"
                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                      >
                        Availability
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/vets/calender"
                        className={`${
                          active
                            ? "bg-[#e8981f26] text-gray-800"
                            : "text-gray-900"
                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                      >
                        Calendar
                      </Link>
                    )}
                  </Menu.Item>
                </>
              )}

              {user?.role === "user" && (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/user/accountsettings"
                        className={`${
                          active
                            ? "bg-[#e8981f26] text-gray-800"
                            : "text-gray-900"
                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                      >
                        Account Setting
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/user/my-appointment"
                        className={`${
                          active
                            ? "bg-[#e8981f26] text-gray-800"
                            : "text-gray-900"
                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                      >
                        My Appointments
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/user/my-appointment-editing"
                        className={`${
                          active
                            ? "bg-[#e8981f26] text-gray-800"
                            : "text-gray-900"
                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                      >
                        My Appointment Editing
                      </Link>
                    )}
                  </Menu.Item>
                </>
              )}

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogut}
                    className={`${
                      active ? "bg-[#e8981f26] text-gray-800" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
