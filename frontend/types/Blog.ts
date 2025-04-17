export interface Blog {
    id: number;

    image: string;
    banner: string;

    title: string;
    slug: string;
    content: string;

    views: number;
    likes: number;
    dislikes: number;

    status: string;

    published_date: string;
    created_at: string;
    updated_at: string;

    category: {
        name: string;
        slug: string;
        image: string;
    };
}