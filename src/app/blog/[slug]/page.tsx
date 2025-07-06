import { getPostBySlug, getPosts } from '@/lib/posts';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
    params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post not found',
    }
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export function generateStaticParams() {
    const posts = getPosts();
    return posts.map(post => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: Props) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const PostContent = post.content;

    return (
        <div className="bg-background text-foreground min-h-dvh flex flex-col">
            <header className="py-8 border-b">
                <div className="container mx-auto px-4 text-center">
                    <Link href="/" className="inline-block mb-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                            FreeDunkCalculator.com
                        </h1>
                    </Link>
                </div>
            </header>
            <main className="container mx-auto px-4 py-12 flex-grow">
                <article className="max-w-4xl mx-auto">
                    <header className="mb-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{post.title}</h1>
                        <p className="mt-4 text-muted-foreground">
                            Posted on <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time> by {post.author}
                        </p>
                    </header>
                    <Card className="shadow-lg">
                        <CardContent className="p-6 md:p-8">
                            <PostContent />
                        </CardContent>
                    </Card>
                </article>
            </main>
            <footer className="text-center py-6 text-sm text-muted-foreground border-t">
                <div className="flex justify-center items-center gap-4 flex-wrap">
                    <Link href="/blog" className="hover:text-primary transition-colors">Back to Blog</Link>
                    <span>&bull;</span>
                    <Link href="/" className="hover:text-primary transition-colors">Calculator</Link>
                    <span>&bull;</span>
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <span>&bull;</span>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    <span>&bull;</span>
                    <p>&copy; {new Date().getFullYear()} FreeDunkCalculator.com. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
