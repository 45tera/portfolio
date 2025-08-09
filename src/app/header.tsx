import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import ThemeSwitcher from "./ThemeSwitcher"


export default function Header() {

    return (<footer className="px-32 pb-4 pt-20">
        <div className="flex justify-between">
            <div>
                <ThemeSwitcher />
            </div>
            <div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="EN" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="english">EN</SelectItem>
                        <SelectItem value="chinese">CN</SelectItem>
                        <SelectItem value="japanese">JP</SelectItem>
                        <SelectItem value="thai">TH</SelectItem>
                    </SelectContent>
                </Select>
            </div>

        </div>

    </footer>)
}