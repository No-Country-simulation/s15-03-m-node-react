const PrivacyPolicy = () => {
  return (
    <>
      <p>
        He leído y aceptado las{" "}
        <span
          className="link link-primary"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Políticas de Privacidad
        </span>{" "}
      </p>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box border border-blue-600 bg-slate-200">
          <form method="dialog">
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
