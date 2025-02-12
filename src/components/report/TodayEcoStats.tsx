import Wrapper from './ReportWrapper'
import ProgressBar from '../common/ProgressBar'

import { DateInfo } from '@/types/Date'

interface TodayEcoStatsProps {
  selectedDate: DateInfo | null
  goalKm: number
}

export default function TodayEcoStats(props: TodayEcoStatsProps) {
  const { selectedDate, goalKm } = props

  const isNoDistance = selectedDate?.distance === 0

  return (
    <Wrapper isNoDistance={isNoDistance}>
      <ProgressBar labelType="Km" currentProgress={selectedDate?.distance ?? 0} maxKm={goalKm} />
      <span className="inline-block text-center text-[15px] mt-[30px]">
        탄소배출량을 <span className="text-sky-blue">{selectedDate?.carbon ?? 0}kg CO₂e</span>{' '}
        줄였어요!
      </span>
    </Wrapper>
  )
}
