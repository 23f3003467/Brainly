import  api  from "./axios"

export async function getContent() {

    const { data } = await api.get("/api/content")

    return data.content

}

export async function createContent(Content:any) {

    const { data } = await api.post("/api/content/add", Content)

    return data

}
export async function deleteContent(id: string) {
    const { data } = await api.delete(`/api/content/${id}`);
    return data;
}