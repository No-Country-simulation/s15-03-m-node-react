// Validaciones para los formularios de React Hook Form
export const VALIDATIONS_FORM = {
  email: {
    required: "Correo electrónico es requerido",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Correo electrónico no es válido",
    },
  },
  password: {
    required: "Contraseña es requerida",
    minLength: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message:
        "Contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número.",
    },
  },
  firstName: {
    required: "Nombres son requeridos",
    pattern: {
      value: /^.{1,40}$/,
      message: "Nombres son requeridos y no deben exceder los 40 caracteres",
    },
  },
  lastName: {
    required: "Apellidos son requeridos",
    pattern: {
      value: /^.{1,40}$/,
      message: "Apellidos son requeridos y no deben exceder los 40 caracteres",
    },
  },
  personalPhone: {
    required: "Telefono personal es requerido",
    pattern: {
      value: /^\d{3}-\d{3}-\d{4}$/,
      message: "Teléfono no es válido",
    },
  },
  documentNumber: {
    required: "Cedula/DNI es requerido",
    pattern: {
      value: /^\d{8,}$/,
      message:
        "Cedula/DNI es requerido y debe tener al menos 8 caracteres numéricos",
    },
  },
  compoundName: {
    required: "Nombre de la comunidad es requerido",
    pattern: {
      value: /^.{1,40}$/,
      message:
        "Nombre de la unidad es requerido y no debe exceder los 40 caracteres",
    },
  },
  nitOrCuit: {
    required: "Nit/CUIL/CUIT es requerido",
    pattern: {
      value: /^\d{2}-\d{8}-\d{1}$/,
      message:
        "Nit/CUIL/CUIT es requerido y debe seguir el formato xx-xxxxxxxx-x",
    },
  },
  address: {
    required: "Dirección es requerida",
    pattern: {
      value: /^.{1,40}$/,
      message: "Dirección es requerida y no debe exceder los 40 caracteres",
    },
  },
  compoundPhone: {
    required: "Telefono de la comunidad es requerido",
    pattern: {
      value: /^\d{3}-\d{3}-\d{4}$/,
      message: "Teléfono no es válido",
    },
  },
  towers: {
    required: "Cant. de torres/edificios es requerida",
    pattern: {
      value: /^[1-9]\d*$/,
      message:
        "Cantidad de torres/edificios es requerida y debe ser un número positivo",
    },
  },
  departments: {
    required: "Cant. de dptos por torre/edificio es requerida",
    pattern: {
      value: /^[1-9]\d*$/,
      message:
        "Cantidad de departamentos por torre/edificio es requerida y debe ser un número positivo",
    },
  },
  floors: {
    required: "Cant. de pisos por torres/edificios es requerida",
    pattern: {
      value: /^[1-9]\d*$/,
      message:
        "Cantidad de pisos por torres/edificios es requerida y debe ser un número positivo",
    },
  },
  terms: {
    required: "Debes aceptar los términos",
  },
};
