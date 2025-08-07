import { Card } from "@/components/ui/card"
import { Activity, CloudHail, MapPin } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { useStation } from "@/http/use-station"
import RiverLevel from "./river-level"
import { ChartBarDefault } from "@/components/dashboard/bar-chart-monitoring-rain"
import { SelectStation } from "./select-station"
import MapComponent from "@/components/map"
import { useState } from "react"
import { useHistorical } from "@/http/use-historical-rio"
import { ChartAreaDefault } from "@/components/dashboard/area-chart-monitoring-level"

export function Monitoring() {
    const [stationCod, setStationCod] = useState('DCSC-00007')
    const { data: stationData, isLoading, isFetching, isError } = useStation(stationCod)
    const { data: historicalData, isLoading: isLoadingHistorical, isFetching: isLoadingFetching, isError: isLoadingError } = useHistorical(stationCod)

    if (isLoading) {
        return (
            <Skeleton className="h-[20px] w-[100px] rounded-full" />
        )
    }

    if (isLoadingHistorical) {
        return (
            <Skeleton className="h-[20px] w-[100px] rounded-full" />
        )
    }

    { isFetching && <p className="text-sm text-gray-500">Atualizando dados...</p> }
    { isLoadingFetching && <p className="text-sm text-gray-500">Atualizando dados...</p> }

    if (isError) {
        return (
            <p>Erro ao carregar os dados.</p>
        )
    }

    if (isLoadingError) {
        return (
            <p>Erro ao carregar os dados.</p>
        )
    }

    const { data } = stationData!

    const rainList = [
        { hour: "6h", value: String(Number(data.tags[stationCod]["Data/Chuva/Chuva006h/Value"]).toFixed(2)) },
        { hour: "12h", value: String(Number(data.tags[stationCod]["Data/Chuva/Chuva012h/Value"]).toFixed(2)) },
        { hour: "24h", value: String(Number(data.tags[stationCod]["Data/Chuva/Chuva024h/Value"]).toFixed(2)) },
        { hour: "48h", value: String(Number(data.tags[stationCod]["Data/Chuva/Chuva048h/Value"]).toFixed(2)) },
    ]

    const latlng = { lat: data.tags[stationCod]["Position/Latitude"], lng: data.tags[stationCod]["Position/Longitude"] };

    function handleAlterStation(newStation: string): void {
        console.log(newStation)
        setStationCod(newStation)
    }

    return (
        <div className="">
            <h2 className="flex items-center gap-2 text-3xl font-bold mt-4"><Activity />Monitoramento em Tempo Real</h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <Card className="p-1">
                    <SelectStation value={stationCod} setAlterValue={handleAlterStation} />
                </Card>
                <Card className="w-full flex gap-2 items-center justify-center font-semibold text-sm p-3 border">
                    <div className="flex gap-2 items-center justify-center">
                        <MapPin size={15} />
                        <span className="font-semibold text-gray-700 text-sm">Local: {data.tags[stationCod]["Name/Local"]}</span>
                    </div>
                </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
                        <div className="flex flex-col gap-4 h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                            <RiverLevel station={data.tags[stationCod]} />
                        </div>
                        <Card className="p-3 transition-transform duration-300 ease-in-out transform hover:scale-105">
                            <div className="flex flex-col justify-between">
                                <h3 className="text-[1.1rem] font-semibold text-gray-800">Previsão de Chuva</h3>
                                <p className="text-sm text-gray-600">Nas próximas 48horas </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <CloudHail width={25} height={25} />
                                <span className="font-bold text-2xl">{data.tags[stationCod]["Data/Chuva/Chuva048h/Value"].toFixed(2)} mm</span>
                            </div>
                            <div>
                                <ChartBarDefault data={rainList} />
                            </div>
                        </Card>
                    </div>
                </div>
                <div>
                    <MapComponent
                        zoom={16}
                        center={latlng}
                        markerPosition={latlng}
                    />
                </div>
            </div>
            <div className="mt-4 mb-10">
                <ChartAreaDefault data={historicalData!.historico} riverRio={data.tags[stationCod]["Data/Rio/RioNome/Value"]} city={data.tags[stationCod]["Name/General"]} />
            </div>
        </div>
    )
}
