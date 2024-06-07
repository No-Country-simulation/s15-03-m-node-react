import ButtonModalIncidentAndBusiness from "../components/ButtonModalIncidentAndBusiness/ButtonModalIncidentAndBusiness";
import ButtonModalNews from "../components/ButtonModalNews/ButtonModalNews";
import CardBusiness from "../components/CardBusiness/CardBusiness";
import CardIncidentsAndNews from "../components/CardIncidentsAndNews/CardIncidentsAndNews";

const BusinessBoard = () => {
	const anunciosPrueba = [
		{
			id: 100,
			name: "Juanito",
			message:
				"Oferta de churros rellenos de marroc, envío no incluído en el cargo",
			date: "18/05/2024",
		},
		{
			id: 101,
			name: "Pepe",
			message: "3x2 en venta de libros usados",
			date: "18/05/2024",
		},
		{
			id: 102,
			name: "Juana",
			message: "A partir de la próxima semana puedo reparar celulares",
			date: "19/05/2024",
		},
	];

	const negociosPrueba = [
		{
			id: 200,
			name: "La Churrería",
			description:
				"Hago churros caseros rellenos de dulce de leche, pastelera, marroc, membrillo o nutela.",
			address: "3A",
			contact: "233348273",
		},
		{
			id: 201,
			name: "Tech Reparaciores",
			description: "Reparo celulares, tablets, notebooks, etc.",
			address: "5B",
			contact: "249582732",
		}
	];

	return (
		<section className='px-3 pb-8 md:w-[90%] md:mx-auto md:py-6 xl:py-10'>
			<h2 className=' font-libre font-bold py-3 text-2xl xl:text-4xl'>Sala de <span className=' text-primary'>negocios</span></h2>
			<p className="text-sm text-base-300">Este espacio está diseñado para fomentar el espíritu emprendedor y la colaboración entre los residentes, brindando una plataforma donde pueden promocionar sus servicios, productos y eventos especiales, así como mantenerse informados sobre las iniciativas locales.</p>
			<section className=" py-6 flex flex-col space-y-5 lg:space-y-0  lg:flex-row lg:justify-between">
				<section className=' border space-y-4 border-primary rounded-md p-5 bg-base-200 lg:w-[60%]'>
					<div className=' space-y-3 md:flex items-center justify-between md:space-y-0'>
						<h4 className="font-semibold">Anuncios y novedades</h4>
						<ButtonModalNews
							buttonName='Publicar anuncio'
							title='Publicar'
							spanTitle='anuncio'
						/>
					</div>
					<div className='space-y-5'>
						{
							anunciosPrueba && anunciosPrueba.map((item) => {
								const { id, name, message, date } = item
								return (
									<div key={id}>
										<CardIncidentsAndNews
											reportTitle={name}
											description={message}
											date={date}
										/>
									</div>
								)
							})
						}
					</div>
				</section>
				<section className=' border space-y-4 border-[#FF9337] rounded-md p-5 bg-[#fff7ed] lg:w-[35%]'>
					<div className=' space-y-3 md:flex items-center justify-between md:space-y-0'>
						<h4 className="font-semibold">Negocios</h4>
						<ButtonModalIncidentAndBusiness
							buttonName='Agregar negocio'
							title='Agregar'
							spanTitle='negocio'
							spanStyle='#F05806'
							buttonStyleSubmit='#FF9337'
							buttonNameSubmit='Agregar'
							backgroundColor='#fff7ed'

						/>
					</div>
					<div className='space-y-5'>

						{
							negociosPrueba && negociosPrueba.map((item) => {
								const { id, name, date, address, description, contact } = item
								return (
									<div key={id}>
										<CardBusiness
											reportTitle={name}
											description={description}
											date={date}
											address={address}
											contact={contact}
										/>
									</div>
								)
							})
						}
					</div>
				</section>
			</section>


		</section>
	);
};

export default BusinessBoard;
