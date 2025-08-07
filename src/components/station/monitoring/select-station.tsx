
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export interface SelectStationProps {
    value: string
    setAlterValue: (newStation: string) => void
}

export function SelectStation({ value, setAlterValue }: SelectStationProps) {
    return (
        <Select value={value} onValueChange={setAlterValue}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma estação..." />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Estações</SelectLabel>
                    <SelectItem value="DCSC-00004">Benedito Novo</SelectItem>
                    <SelectItem value="DCSC-00023">Timbó</SelectItem>
                    <SelectItem value="DCSC-00006">Indaial</SelectItem>
                    <SelectItem value="DCSC-00028">Doutor Pedrinho</SelectItem>
                    <SelectItem value="DCSC-00011">Rio dos Cedros</SelectItem>
                    <SelectItem value="DCSC-00007">Pomerode</SelectItem>
                    <SelectItem value="DCSC-00003">Ascurra</SelectItem>
                    <SelectItem value="DCSC-00026">Blumenau</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
