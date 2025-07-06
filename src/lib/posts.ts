import { type ComponentType } from 'react';
import { AverageVerticalJumpArticle } from '@/app/blog/posts/average-vertical-jump';

export interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    content: ComponentType;
}

export const posts: Post[] = [
    {
        slug: 'average-vertical-jump',
        title: "What's an Average Vertical Jump?",
        description: "Explore the data and factors behind average vertical jump heights for athletes and how you can measure up.",
        date: '2024-07-29',
        author: 'Adam',
        content: AverageVerticalJumpArticle,
    },
    // Add more posts here in the future
];

export function getPosts(): Post[] {
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
    return posts.find(post => post.slug === slug);
}
