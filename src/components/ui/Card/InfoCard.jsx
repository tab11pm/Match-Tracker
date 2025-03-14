import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import PlayerCard from './PlayerCard'
import PlayerSubCard from './PlayerSubCard'

const InfoCard = ({ item }) => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between gap-4">
			<div className="w-full md:w-1/2 flex flex-col gap-4">
				<Swiper
					spaceBetween={10}
					slidesPerView={1}
					pagination={{ clickable: true }}
					modules={[Pagination]}
					className="w-full"
					effect="fade"
				>
					{item.awayTeam.players.map((player, index) => (
						<SwiperSlide key={index}>
							<PlayerCard player={player} />
						</SwiperSlide>
					))}
				</Swiper>
				<PlayerSubCard item={item.awayTeam} />
			</div>

			<div className="w-full md:w-1/2 flex flex-col gap-4">
				<Swiper
					spaceBetween={10}
					slidesPerView={1}
					pagination={{ clickable: true }}
					modules={[Pagination]}
					className="w-full h-full"
					effect="fade"
				>
					{item.homeTeam.players.map((player, index) => (
						<SwiperSlide key={index}>
							<PlayerCard player={player} />
						</SwiperSlide>
					))}
				</Swiper>
				<PlayerSubCard item={item.homeTeam} />
			</div>
		</div>
	)
}

export default InfoCard
