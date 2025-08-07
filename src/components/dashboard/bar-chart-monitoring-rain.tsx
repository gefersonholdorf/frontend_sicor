import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    CardContent
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export interface ChartBarDefaultProps {
    data: {
        hour: string
        value: string
    }[]
}

export function ChartBarDefault({ data }: ChartBarDefaultProps) {
    return (
        <CardContent>
            <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={data} className="max-h-20">
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="hour"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="value" fill="#1E3A8A" radius={8} height={60} />
                </BarChart>
            </ChartContainer>
        </CardContent>
    )
}
