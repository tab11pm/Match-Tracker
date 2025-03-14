import icon from '@assets/icon.png'
import { useState } from 'react'
import { statusPlay } from '../../../consts/status'
import './Card.css'
import InfoCard from './InfoCard'

const Card = ({ item, index }) => {
	const [openCard, setOpenCard] = useState({})
	return (
		<>
			<button
				onClick={e =>
					setOpenCard(prev => ({
						...prev,
						[`card${index}`]: prev[`card${index}`]
							? !prev[`card${index}`]
							: true,
					}))
				}
				key={item.title}
				className="card-btn flex gap-2 justify-between items-center bg-[#0b0e12] rounded-lg px-4"
			>
				<div className="flex gap-2 justify-center items-center">
					<img src={icon} alt="" className="size-8" />
					<span>{item.awayTeam.name}</span>
				</div>
				<div className="flex flex-col items-center p-2">
					<div className="text-xl font-semibold flex gap-2">
						<span>{item.awayScore}</span>
						<span>:</span>
						<span>{item.homeScore}</span>
					</div>
					<div
						className={`py-2 text-md font-semibold px-4 rounded-lg ${
							statusPlay[item.status]
						}`}
					>
						{item.status}
					</div>
				</div>
				<div className="flex gap-4 items-center">
					<div className="flex gap-2 justify-center items-center">
						<img src={icon} alt="" className="size-8" />
						<span>{item.homeTeam.name}</span>
					</div>
					<div
						className={`arrow ${openCard[`card${index}`] ? '_rotate' : ''}`}
					></div>
				</div>
			</button>

			{openCard[`card${index}`] && <InfoCard item={item} />}
		</>
	)
}

export default Card
