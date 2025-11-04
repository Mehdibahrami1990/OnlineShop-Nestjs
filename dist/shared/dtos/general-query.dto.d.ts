export declare enum Sort {
    Title = "title",
    CreatedAt = "createdAt",
    UpdatedAt = "updatedAt"
}
export declare class GeneralQueryDto {
    page?: number;
    limit?: number;
    title?: string;
    sort?: Sort;
}
