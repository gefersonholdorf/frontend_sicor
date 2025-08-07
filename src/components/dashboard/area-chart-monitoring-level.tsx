import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import type { Historical } from "@/http/types/historical"
import { calculeMomentAreaChart } from "@/lib/moment"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
export const description = "A simple area chart"
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export interface ChartAreaDefaultProps {
    data: Historical[]
    riverRio: string
    city: string
}

export function ChartAreaDefault({ data, riverRio, city }: ChartAreaDefaultProps) {

    const historicalRain = data.map((item) => {
        return {
            t_stamp: calculeMomentAreaChart(item.timestamp),
            nivel: item.rio_nivel ?? 0
        }
    })
    return (
        <Card className="transition-transform duration-300 ease-in-out transform hover:scale-105">
            <CardHeader>
                <CardTitle>Histórico - Nível do Rio {riverRio} em {city} nas últimas 24 horas</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="max-h-40 w-full">
                    <AreaChart
                        accessibilityLayer
                        data={historicalRain}
                        margin={{
                            left: 10,
                            right: 10,
                        }}
                        height={50}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="t_stamp"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                            tickFormatter={(value) => value}
                            height={50}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Area
                            dataKey="nivel"
                            type="natural"
                            fill="#A3C9F1"
                            fillOpacity={0.4}
                            stroke="#A3C9F1"
                            height={50}
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}