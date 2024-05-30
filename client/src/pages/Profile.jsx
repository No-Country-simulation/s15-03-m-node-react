import { useState } from "react";
import PersonalInfo from "../components/Profile/PersonalInfo";
import MembersInfo from "../components/Profile/MembersInfo";
import PetsInfo from "../components/Profile/PetsInfo";
import CarsInfo from "../components/Profile/CarsInfo";

const Profile = () => {
  const tabs = ["Personal", "Miembros", "Mascotas", "Vehiculos"];

  const [activeTab, setActiveTab] = useState(0);

  const tabsContent = [
    <PersonalInfo key={0} />,
    <MembersInfo key={1} />,
    <PetsInfo key={2} />,
    <CarsInfo key={3} />,
  ]

  return (
    <div className="flex justify-center items-center gap-5 h-screen">
      <ul className="menu bg-base-200 w-60 min-h-[45rem] border-primary border rounded-l-xl">
        <li>
          <a className="">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.497 15.1746C8.184 15.1746 4.5 15.8546 4.5 18.5746C4.5 21.2956 8.161 21.9996 12.497 21.9996C16.81 21.9996 20.494 21.3206 20.494 18.5996C20.494 15.8786 16.834 15.1746 12.497 15.1746"
                fill="#483AE7"
              />
              <path
                opacity="0.4"
                d="M12.4971 12.5837C15.4351 12.5837 17.7891 10.2287 17.7891 7.29169C17.7891 4.35469 15.4351 1.99969 12.4971 1.99969C9.56008 1.99969 7.20508 4.35469 7.20508 7.29169C7.20508 10.2287 9.56008 12.5837 12.4971 12.5837"
                fill="#483AE7"
              />
            </svg>
            Mi perfil
          </a>
        </li>
        <li className="disabled">
          <a>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.2695 11.6453C19.539 10.7923 19.2071 10.0531 19.2071 8.79716V8.37013C19.2071 6.73354 18.8304 5.67907 18.0115 4.62459C16.7493 2.98699 14.6244 2 12.5442 2H12.4558C10.4194 2 8.36106 2.94167 7.077 4.5128C6.21333 5.58842 5.79293 6.68822 5.79293 8.37013V8.79716C5.79293 10.0531 5.48284 10.7923 4.73049 11.6453C4.17691 12.2738 4 13.0815 4 13.9557C4 14.8309 4.28723 15.6598 4.86367 16.3336C5.61602 17.1413 6.67846 17.6569 7.76375 17.7466C9.33505 17.9258 10.9063 17.9933 12.5005 17.9933C14.0937 17.9933 15.665 17.8805 17.2372 17.7466C18.3215 17.6569 19.384 17.1413 20.1363 16.3336C20.7118 15.6598 21 14.8309 21 13.9557C21 13.0815 20.8231 12.2738 20.2695 11.6453"
                fill="#483AE7"
              />
              <path
                opacity="0.4"
                d="M14.5088 19.2284C14.0088 19.1216 10.9627 19.1216 10.4627 19.2284C10.0354 19.3271 9.57324 19.5567 9.57324 20.0603C9.59809 20.5407 9.87935 20.9647 10.2689 21.2336L10.268 21.2346C10.7718 21.6274 11.3632 21.8771 11.9824 21.9668C12.3123 22.0121 12.6482 22.0101 12.9901 21.9668C13.6083 21.8771 14.1997 21.6274 14.7036 21.2346L14.7026 21.2336C15.0922 20.9647 15.3734 20.5407 15.3983 20.0603C15.3983 19.5567 14.9361 19.3271 14.5088 19.2284"
                fill="#483AE7"
              />
            </svg>
            Notificaciones
          </a>
        </li>
        <li>
          <a>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.2688 8.71381H16.7312C19.0886 8.71381 21 10.583 21 12.8885V17.8253C21 20.1308 19.0886 22 16.7312 22H8.2688C5.91136 22 4 20.1308 4 17.8253V12.8885C4 10.583 5.91136 8.71381 8.2688 8.71381ZM12.4949 17.3294C12.9928 17.3294 13.3891 16.9419 13.3891 16.455V14.2489C13.3891 13.7719 12.9928 13.3843 12.4949 13.3843C12.0072 13.3843 11.6109 13.7719 11.6109 14.2489V16.455C11.6109 16.9419 12.0072 17.3294 12.4949 17.3294Z"
                fill="#483AE7"
              />
              <path
                opacity="0.4"
                d="M18.023 7.39595V8.86667C17.6673 8.7673 17.2913 8.71761 16.9052 8.71761H16.2447V7.39595C16.2447 5.37868 14.5681 3.73903 12.5053 3.73903C10.4426 3.73903 8.76594 5.36874 8.75578 7.37608V8.71761H8.10545C7.70916 8.71761 7.33319 8.7673 6.97754 8.87661V7.39595C6.9877 4.41476 9.45692 2 12.485 2C15.5537 2 18.023 4.41476 18.023 7.39595"
                fill="#483AE7"
              />
            </svg>
            Seguridad
          </a>
        </li>
      </ul>
      <aside className="min-w-[50rem] min-h-[45rem] bg-base-200 ">
        <div className="flex flex-col gap-4 border-primary border rounded-tr-xl p-8">
          <h1 className=" font-libre text-5xl">
            Mi <span className="text-primary">perfil</span>
          </h1>
          <p className=" text-lg ">
            Actualiza tu información personal y la de tu departamento aquí.
          </p>
          <div role="tablist" className="tabs tabs-boxed gap-4">
            {tabs.map((t, i) => (
              <a
                key={i}
                className={
                  activeTab === i
                    ? "tab tab-active"
                    : "tab border border-primary"
                }
                onClick={() => setActiveTab(i)}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
        <div className="p-8 border border-primary rounded-br-lg border-t-0 h-full">
          { tabsContent[activeTab] }
        </div>
      </aside>
    </div>
  );
};

export default Profile;
