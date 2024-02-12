import { countries, languages, sorts, categories } from "@/components/FilterForm"

export const getParams = (searchParams, isApi= false) => {
    let category = searchParams.get("category")
    let country = searchParams.get("country")
    let q = searchParams.get("q")
    let dateFrom = searchParams.get("dateFrom")
    let dateTo = searchParams.get("dateTo")
    let sortBy = searchParams.get("sortBy")
    let language = searchParams.get("language")
    let pageSize = searchParams.get("pageSize")
    let page = searchParams.get("page")

    let params = {}

    if (!!q)
        params.q = q

    if (!!country)
        if(isApi)
            params.source = country
        else
            params.country = countries.find(c => c.id == country)

    if (!!dateFrom && !!dateTo)
        if (isApi) {
            params.from = dateFrom
            params.to = dateTo
        } else{
            params.dateFrom = dateFrom
            params.dateTo = dateTo
        }

    if (!!category)
        if(isApi)
            params.sortBy = category
        else
            params.sortBy = categories.find(s => s.id == category)

    if (!!sortBy)
        if(isApi)
            params.sortBy = sortBy
        else
            params.sortBy = sorts.find(s => s.id == sortBy)

    if (!!language)
        if(isApi)
            params.language = language
        else
            params.language = languages.find(l => l.id == language)


    if (!!pageSize)
        params.pageSize = pageSize

    if (!!page)
        params.from = page

    return params
}