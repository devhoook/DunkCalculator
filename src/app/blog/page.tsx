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
        <div className="bg-background text-foreground min-h-dvh flex flex-col">
            <header className="py-8 border-b">
                <div className="container mx-auto px-4 text-center">
                    <Link href="/" className="inline-block mb-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                            FreeDunkCalculator.com
                        </h1>
                    </Link>
                    <p className="text-lg text-muted-foreground">Blog</p>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        Tips, training advice, and stories to help you increase your vertical leap.
                    </p>
                </div>
            </header>
            <main className="container mx-auto px-4 py-12 flex-grow">
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
            </main>
            <footer className="text-center py-6 text-sm text-muted-foreground border-t">
                <div className="flex justify-center items-center gap-4 flex-wrap">
                    <Link href="/" className="hover:text-primary transition-colors">Back to Calculator</Link>
                    <span>&bull;</span>
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <span>&bull;</span>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    <span>&bull;</span>
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <span>&bull;</span>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
                    <span>&bull;</span>
                    <p>&copy; {new Date().getFullYear()} FreeDunkCalculator.com. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
