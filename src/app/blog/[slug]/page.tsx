import { getPostBySlug, getPosts } from '@/lib/posts';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
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
        <div className="py-12">
            <div className="container mx-auto px-4">
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
            </div>
        </div>
    );
}
