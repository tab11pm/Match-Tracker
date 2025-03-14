import avatar from '@assets/avatar.png'
const PlayerCard = ({ player, item }) => {
	return (
		<>
			<div className="flex gap-4 items-center justify-between bg-[var(--card-bg)] p-2 rounded-md p-4">
				<div className="flex gap-2 items-center">
					<div className="size-8">
						<img src={avatar} alt="" className="size-full" />
					</div>
					<span className="text-md">{player.username}</span>
				</div>

				<span className="text-xs">Убийств: {player.kills}</span>
			</div>
		</>
	)
}

export default PlayerCard
