import { getPosts } from '@/lib/posts';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles and tips on how to improve your vertical jump and dunk a basketball.',
};

export default function BlogPage() {
    const posts = getPosts();

    return (
        <div>
            <div className="py-8 border-b">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                        Blog
                    </h1>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        Tips, training advice, and stories to help you increase your vertical leap.
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <Card key={post.slug} className="flex flex-col">
                            <CardHeader>
                                <Link href={`/blog/${post.slug}`}>
                                    <CardTitle className="font-headline text-2xl hover:text-primary transition-colors">{post.title}</CardTitle>
                                </Link>
                                <CardDescription>
                                    <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time> by {post.author}
                                </CardDescription>
                                <CardDescription className="pt-2">
                                    {post.description}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="mt-auto">
                                <Button asChild>
                                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
