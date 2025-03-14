import axios from 'axios'
import { RefreshCw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { defaultToast } from '../consts/toast'
import Card from './ui/Card/Card'
import CardSkeleton from './ui/Card/CardSkeleton'
const Cards = () => {
	const [match, setMatch] = useState([])
	const [loader, setLoader] = useState(false)
	const handleData = async () => {
		setLoader(true)
		try {
			const response = await axios(
				'https://app.ftoyd.com/fronttemp-service/fronttemp'
			)
			const res = response.data
			setMatch(res.data.matches)
			toast.success('Success', defaultToast)
		} catch (error) {
			toast.error(
				error?.message || 'Ошибка: не удалось загрузить информацию',
				defaultToast
			)
		} finally {
			setLoader(false)
		}
	}

	useEffect(() => {
		handleData()
	}, [])

	return (
		<>
			<ToastContainer />

			{loader ? (
				<CardSkeleton />
			) : (
				<>
					<div className="w-full flex justify-between items-center mb-12">
						<h1 className="text-2xl font-bold">Match Tracker</h1>
						<button
							disabled={loader}
							onClick={e => handleData()}
							className="reload-btn bg-[#EB0237] transition-opacity duration-150 ease-in text-lg font-semibold px-8 py-4 rounded-lg flex gap-1 items-center"
						>
							Обновить
							<RefreshCw color="#fff" size={16} />
						</button>
					</div>
					<div className="flex flex-col gap-10 w-full">
						{match?.length > 0 ? (
							match.map(item => <Card item={item} />)
						) : (
							<div className="shadow-[0_0_4px_red] p-4 text-center rounded-lg animate-pulse">
								Empty
							</div>
						)}
					</div>
				</>
			)}
		</>
	)
}
export default Cards
