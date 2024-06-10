import adminImg from '../../assets/Frame 5.png';


function PostThumbnail() {
  return (
    <section id="postThumbnail" className="hero  bg-base-100 p-3">
      <div className="hero-content flex-col  lg:flex-row-reverse ">
        <img className='lg:max-h-[44rem] pt-14 min-w-[35rem] hidden lg:block border-[#483AE7]  ' src={adminImg} 
        alt="foto edificio" 
          
        />
        <div className="m-10">
          <h1 className="text-5xl font-bold font-libre">
            La solucion integral para la <span className="text-primary"> gestion de tu edificio</span>
          </h1>
          <p className="py-6 font-worksans ">
            Con nuestra plataforma intuitiva y poderosa, poderosa gestionar
            todas las tareas del dia a dia con facilidad.Ahora tiempo, reduce
            costos y mejora la calidad de vida en tu comunidad con una solucion
            que esta diseñada para hacer la gestion mas eficiente y efectiva que
            nunca.
          </p>
          <button className="btn bg-secondary font-semibold text-[#000] m-2">Inicia tu prueba gratis</button>
          <button className="btn bg-transparent border-secondary m-2">Contáctanos</button>
        </div>
      </div>
    </section>
  );
}

export default PostThumbnail;