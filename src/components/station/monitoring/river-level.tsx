import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { calculeMoment } from "@/lib/moment";
import { Waves } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton"
import type { StationDetail } from "@/http/types/station";

export interface RiverLevelProps {
    station: StationDetail | undefined
}

export default function RiverLevel({ station }: RiverLevelProps) {

    if (!station) {
        return (
            <Skeleton className="h-[20px] w-[100px] rounded-full" />
        )
    }

    if (station) {
        return (
            <Card className="p-4 h-full flex flex-col justify-between">
                <div className="py-1 flex flex-col gap-4">
                    <h3 className="text-[1.2rem] font-semibold text-gray-800">Nível do Rio Atualizado</h3>
                    <Separator />
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <Waves />
                    <span className="font-bold text-3xl">{Number(station["Data/Rio/RioNivel/Value"]).toFixed(2)} m</span>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-col justify-between">
                        <h3 className="text-[1rem] font-medium text-gray-800">Última atualização</h3>
                        <p>{calculeMoment(station.TimeStamp)}</p>
                    </div>
                </div>
            </Card>
        )
    }
}