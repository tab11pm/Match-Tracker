const PlayerSubCard = ({ item }) => {
	return (
		<div className="bg-[var(--card-bg)] flex justify-between items-center">
			<div className="flex gap-2 p-4 items-center">
				<span className="text-[#FAFAFA66]">Points:</span>
				<span className="text-[#F2F6F6] text-xl font-semibold">
					+{item.points}
				</span>
			</div>
			<div className="flex gap-2 p-4 items-center">
				<span className="text-[#FAFAFA66]">Место:</span>
				<span className="text-[#F2F6F6] text-xl font-semibold">
					{item.place}
				</span>
			</div>
			<div className="flex gap-2 p-4 items-center">
				<span className="text-[#FAFAFA66]">Всего убийств:</span>
				<span className="text-[#F2F6F6] text-xl font-semibold">
					{item.total_kills}
				</span>
			</div>
		</div>
	)
}

export default PlayerSubCard
