"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Dumbbell } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { exercises } from '@/lib/exercises';
import { type Exercise } from '@/lib/types';

type Difficulty = Exercise['difficulty'] | 'All';

export default function ExerciseLibrary() {
  const [filter, setFilter] = useState<Difficulty>('All');

  const filteredExercises = filter === 'All'
    ? exercises
    : exercises.filter(exercise => exercise.difficulty === filter);

  return (
    <section id="exercises" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Exercise Library</h2>
        <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
          Improve your vertical with these plyometric and strength exercises.
        </p>
      </div>
      <div className="flex justify-center">
        <Tabs value={filter} onValueChange={(value) => setFilter(value as Difficulty)}>
          <TabsList className="grid w-full grid-cols-4 max-w-md">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Beginner">Beginner</TabsTrigger>
            <TabsTrigger value="Intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="Advanced">Advanced</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map(exercise => (
          <Card key={exercise.name} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                        src={exercise.imageUrl}
                        alt={exercise.name}
                        fill
                        className="object-cover"
                        data-ai-hint={exercise.imageHint}
                    />
                </div>
              <div className="flex justify-between items-start">
                <CardTitle className="font-headline text-xl">{exercise.name}</CardTitle>
                <Badge variant={
                    exercise.difficulty === 'Beginner' ? 'secondary' :
                    exercise.difficulty === 'Intermediate' ? 'default' :
                    'destructive'
                } className="capitalize shrink-0 bg-primary/20 text-primary border-primary/30">
                  {exercise.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{exercise.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
