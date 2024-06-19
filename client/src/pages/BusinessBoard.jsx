import axios from "axios";
import ButtonModalIncidentAndBusiness from "../components/ButtonModalIncidentAndBusiness/ButtonModalIncidentAndBusiness";
import ButtonModalNews from "../components/ButtonModalNews/ButtonModalNews";
import CardBusiness from "../components/CardBusiness/CardBusiness";
import CardIncidentsAndNews from "../components/CardIncidentsAndNews/CardIncidentsAndNews";
import { useEffect, useState } from "react";

const BusinessBoard = () => {
	
	const [newsList, setNewsList] = useState([])
	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(true)

	const URL = 'https://api-test.brangerbriz.com/api'

	const getNewsList = async () => {
		try {
			const response = await axios.get(URL + '/anuncio/list')
			const newsListData = await response.data
			setNewsList(newsListData)
			if (newsListData.length === 0) setMessage('No hay anuncios')
		} catch (error) {
			setMessage('Error al cargar los anuncios')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getNewsList()
	}, [])

	return (
		<section className='px-3 min-h-screen pb-8 md:w-[90%] md:mx-auto md:py-6 xl:py-10'>
			<h2 className=' font-libre font-bold py-3 text-2xl xl:text-4xl'>Sala de <span className=' text-primary'>negocios</span></h2>
			<p className="text-sm text-base-300">Este espacio está diseñado para fomentar el espíritu emprendedor y la colaboración entre los residentes, brindando una plataforma donde pueden promocionar sus servicios, productos y eventos especiales, así como mantenerse informados sobre las iniciativas locales.</p>
			<section className=" py-6 space-y-5 lg:space-y-0">
				<section className=' border space-y-4 border-primary rounded-md p-5 bg-base-200'>
					<div className=' space-y-3 md:flex items-center justify-between md:space-y-0'>
						<h4 className="font-semibold">Anuncios y novedades</h4>
						<ButtonModalNews
							getNewsList={getNewsList}
						/>
					</div>
					<div className='space-y-5'>
						{ loading ? 
							<div className=" flex justify-center">
								<p className="loading loading-bars loading-lg text-primary"></p>
							</div> 
						: 
							message ? <p className=" text-lg text-center font-medium">{ message }</p>
						:
							newsList.map((item) => {
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
			</section>
		</section>
	);
};

export default BusinessBoard;
