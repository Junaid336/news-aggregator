import { useSearchParams } from "next/navigation";
import { getParams } from "@/helper";


export const useSearchParamValues = () => {
    const searchParams = useSearchParams()
    return getParams(searchParams)
}