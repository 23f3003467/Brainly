// hooks/useTodos.js

import { useQuery } from "@tanstack/react-query"

import { getContent } from "../api/getcontentapi"

export default function useGetContent() {

    return useQuery({

        queryKey: ["Content"],

        queryFn: getContent

    })

}