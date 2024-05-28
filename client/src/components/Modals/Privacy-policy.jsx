const PrivacyPolicy = () => {
  return (
    <>
      <p>
        He leído y acepto las{" "}
        <span
          className="cursor-pointer text-blue-600 hover:underline"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          políticas de privacidad
        </span>{" "}
        de este sitio web
      </p>
      <dialog id="my_modal_3" className="modal width-full">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Políticas de privacidad</h3>
          <p className="py-4">
            Estas son las políticas de privacidad de este sitio web: Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam libero fugiat
            soluta perferendis exercitationem aspernatur dicta voluptatem
            consequatur! Dolorum omnis illum, eaque sequi expedita impedit
            facere? Iste nam distinctio sed?
          </p>
        </div>
      </dialog>
    </>
  );
};

export default PrivacyPolicy;
