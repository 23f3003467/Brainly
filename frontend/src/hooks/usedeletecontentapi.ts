import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteContent } from "../api/getcontentapi"

export default function useDeleteContent() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteContent,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["Content"],
            })
        },
    })
}