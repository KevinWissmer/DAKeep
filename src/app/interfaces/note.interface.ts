export interface Note {
    id: string;
    type: "note" | "trash";
    titel:string;
    content:string;
    liked:"liked" | "disliked";
}
