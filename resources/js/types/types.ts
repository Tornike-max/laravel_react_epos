export interface Square {
    id: string;
    src: string;
}

export type ProductType = {
    image: string;
    video?: string;
    genre: string;
    title: string;
    release: string;
    for: string;
    description: string;
    id: string;
};

export interface PressRelease {
    id: number;
    date: string;
    info: string;
    product: Product;
    created_at: string;
    updated_at: string;
}

export type PressReleaseDataType = {
    id: number;
    date: string;
    info: string;
};

export type JobSearchType = {
    location: string;
    jobType: string;
    title: string;
};

export interface Product {
    id: number;
    title: string;
    genre: string;
    release: string;
    for: string;
    description: string;
    image: File | null;
    gameUrl: string | null;
}

export interface PaginationLinks {
    first: string;
    last: string;
    next?: string | null;
    prev?: string | null;
}

export interface PaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: PaginationMetaLinks;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface PaginationMetaLinks {
    label: string;
    url: string;
    active: boolean;
}

export interface PaginatedTypes {
    data: Product[] | PressRelease[];
    links: PaginationLinks;
    meta: PaginationMeta;
}

export interface PressReleaseTypes {
    data: PressRelease[];
    links: PaginationLinks;
    meta: PaginationMeta;
}

export interface CompanyType {
    data: AboutType | HistoryType;
    links: PaginationLinks;
    meta: PaginationMeta;
}

export type AboutType = {
    id: string | number;
    companyName: string;
    founded_at: string;
    Address: string;
    DUNS: string;
    businessDesc: string;
    TIN: string;
    created_at: string;
    updated_at: string;
};

export type HistoryType = {
    id: string | number;
    date: string;
    description: string;
    created_at: string;
    updated_at: string;
};
