import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";

const CardBusiness = ({
  residentName,
  profileImage,
  businessImage,
  reportTitle,
  description,
  apartament,
  date,
  address,
  contact,
}) => {
  return (
    <article className="p-4  bg-base-100 space-y-3 rounded-l-3xl lg:p-6">
      {
        <figure>
          <img src={businessImage} alt="Foto producto" />
        </figure>
      }
      <div className="flex items-center justify-between">
        <h6 className=" font-semibold lg:text-xl">{reportTitle}</h6>
        <div className=" flex items-center text-xl space-x-3">
          <button>
            <RiEdit2Fill className=" text-blue-500" />
          </button>
          <button>
            <RiDeleteBin6Line className=" text-red-500" />
          </button>
        </div>
      </div>
      <div className=" text-sm text-base-content lg:text-base">
        <p>{description}</p>
        <p className=" text-xs pt-2 ">Apartamento: {address}</p>
        <p className=" text-xs pt-2">Contacto: {contact}</p>
      </div>
    </article>
  );
};

export default CardBusiness;
