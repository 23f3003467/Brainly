import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createContent } from "../api/getcontentapi"

export default function useCreateContent() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createContent,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["Content"],
            })
        },
    })
}