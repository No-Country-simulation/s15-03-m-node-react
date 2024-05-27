import { MdErrorOutline } from "react-icons/md";

const InputField = ({
  text,
  type,
  name,
  placeholder,
  register,
  error,
  validation,
}) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text flex items-center justify-evenly gap-1">
          {text}
        </span>
        {error && (
          <div
            className="tooltip relative tooltip-left tooltip-error top-[2.6rem] right-2 z-50"
            data-tip={error.message}
          >
            <MdErrorOutline className="text-red-500 text-xl" />
          </div>
        )}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input input-bordered input-primary w-full ${
          error ? "input-error" : ""
        }`}
        {...register(name, validation)}
      />
    </label>
  );
};

export default InputField;
