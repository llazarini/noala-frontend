export interface Image {
    id: string;
    name: string;
    url: string;
    updatedAt: Date;
    createdAt: Date;
    deletedAt: Date;
    isFavorite?:boolean;
}
