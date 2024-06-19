import { MdErrorOutline } from "react-icons/md";

const InputField = ({
  text,
  type,
  name,
  placeholder,
  register,
  error,
  validation,
  is_disabled,
  value,
  edited,
}) => {
  return (
    <label
      className={`${edited} form-control w-full ${
        is_disabled ? "border border-error rounded-lg" : ""
      }`}
    >
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
        defaultValue={value}
        className={` input input-bordered input-primary bg-base-200 w-full ${
          error ? "input-error" : ""
        } ${is_disabled ? "input-disabled bg-base-200" : ""} `}
        {...register(name, validation)}
        disabled={is_disabled}
      />
    </label>
  );
};

export default InputField;
