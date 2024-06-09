import { DatePickerComponent } from "./DatePickerComponent";
import TimePickerComponent from "./TimePickerComponent";
import { Modal } from "flowbite-react";
import { useState } from "react";
import moment from "moment";

function modalReserva() {
  const [openModal, setOpenModal] = useState(true);

  const reserva = { fecha: "", hora_ini: "", hora_fin: "" };

  const handleChange = (event) => {
    if (event.target === undefined) {
      reserva.fecha = moment(event).format("YYYY-MM-DD");
    } else {
      if (event.target.name == "hora_ini") {
        reserva.hora_ini = event.target.value;
      }
      if (event.target.name == "hora_fin") {
        reserva.hora_fin = event.target.value;
      }
    }
    console.log(reserva);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fecha_ini = reserva.fecha + " " + reserva.hora_ini;
    fecha_fin = reserva.fecha + " " + reserva.hora_fin;

    // Aquí va el fetch
    
    console.log("Reserva creada");
    setOpenModal(false)
  };

  const customTheme = {
    root: {
      base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
      show: {
        on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
        off: "hidden",
      },
      sizes: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
      },
      positions: {
        "top-left": "items-start justify-start",
        "top-center": "items-start justify-center",
        "top-right": "items-start justify-end",
        "center-left": "items-center justify-start",
        center: "items-center justify-center",
        "center-right": "items-center justify-end",
        "bottom-right": "items-end justify-end",
        "bottom-center": "items-end justify-center",
        "bottom-left": "items-end justify-start",
      },
    },
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner:
        "relative flex max-h-[90dvh] flex-col rounded-2xl bg-white shadow dark:bg-gray-700",
    },
    body: {
      base: "flex-1",
      popup: "pt-0",
    },
    header: {
      base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
      popup: "border-b-0 p-2",
      title: "text-xl font-medium text-gray-900 dark:text-white",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5",
      },
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
      popup: "border-t",
    },
  };

  return (
    <Modal
      theme={customTheme}
      show={openModal}
      onClose={() => setOpenModal(false)}
      size={"5xl"}
    >
      <Modal.Body>
        <div className="mx-auto bg-[#EEF2FF] border-2 border-[#483AE7] rounded-2xl p-10">
          <button onClick={() => setOpenModal(false)}>
            <i className="fa-solid fa-x text-2xl absolute right-10 top-8"></i>
          </button>
          <h1 className="font-libre text-5xl font-bold py-3">
            Reservar <span className="text-primary">parrilla</span>
          </h1>

          <p className="text-lg">
            Para asegurar una experiencia agradable y segura, el uso de la
            parrilla en el edificio está sujeto a ciertas condiciones. Los
            residentes deben reservar la parrilla con anticipación a través de
            la aplicación de gestión y seguir las normas de limpieza, dejando el
            área en las mismas condiciones en que la encontraron.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h2 className="text-2xl font-medium">Seleccionar día</h2>
                <DatePickerComponent handleChange={handleChange} />
              </div>
              <div>
                <h2 className="text-2xl font-medium">
                  Seleccionar rango horario
                </h2>
                <TimePickerComponent handleChange={handleChange} />
                <div className="pt-10 relative left-40">
                  <input
                    // onClick={() => setOpenModal(false)}
                    className="btn btn-primary text-xl"
                    type="submit"
                    value="Confirmar Reserva"
                  />
                </div>
                <h2 className="text-2xl font-medium pt-12">
                  Reservas confirmadas
                </h2>
                <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-[#483AE7]">
                  <div>
                    <p className="text-xl font-medium text-gray-800">
                      Sebastián Gómez (5B)
                    </p>
                    <p className="text-xl text-gray-600">
                      18/04/2024 desde 12:00 hasta 16:30
                    </p>
                  </div>
                  <button className="text-red-500 hover:text-red-600 focus:outline-none">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default modalReserva;
