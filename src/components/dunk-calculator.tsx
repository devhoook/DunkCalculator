"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowRight, CheckCircle, Target } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import Confetti from './confetti';

const formSchema = z.object({
  standingReach: z.coerce.number({ invalid_type_error: 'Must be a number' }).positive('Must be positive'),
  verticalLeap: z.coerce.number({ invalid_type_error: 'Must be a number' }).positive('Must be positive'),
});

type FormValues = z.infer<typeof formSchema>;

interface Result {
  canDunk: boolean;
  inchesNeeded: number;
  maxReach: number;
}

const RIM_HEIGHT = 120;
const DUNK_BUFFER = 6;
const TARGET_REACH = RIM_HEIGHT + DUNK_BUFFER;

export default function DunkCalculator() {
  const [result, setResult] = useState<Result | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      standingReach: undefined,
      verticalLeap: undefined,
    },
  });

  const onSubmit = (values: FormValues) => {
    const maxReach = values.standingReach + values.verticalLeap;
    const inchesNeeded = TARGET_REACH - maxReach;
    const canDunk = maxReach >= TARGET_REACH;
    setResult({ canDunk, inchesNeeded, maxReach });
  };

  return (
    <section id="calculator">
      <Card className="max-w-2xl mx-auto overflow-hidden shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-center">Can You Dunk?</CardTitle>
          <CardDescription className="text-center">Enter your measurements in inches to find out.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="standingReach"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Standing Reach (inches)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 90" {...field} step="0.1" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="verticalLeap"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Vertical Leap (inches)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 30" {...field} step="0.1" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Calculate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Form>

          {result && (
            <div className="mt-8">
              {result.canDunk ? (
                <div className="relative text-center p-6 bg-accent/20 rounded-lg border border-accent">
                  <Confetti />
                  <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-headline text-accent-foreground">Congratulations!</h3>
                  <p className="text-accent-foreground/90 mt-2">
                    Your max reach of <span className="font-bold">{result.maxReach.toFixed(1)} inches</span> is enough to dunk! Time to hit the court.
                  </p>
                </div>
              ) : (
                <div className="text-center p-6 bg-secondary rounded-lg">
                  <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-headline">You are close!</h3>
                  <p className="text-foreground/80 mt-2 mb-4">
                    You need <span className="font-bold text-primary">{result.inchesNeeded.toFixed(1)} more inches</span> on your vertical leap to dunk.
                  </p>
                  <div className="space-y-2">
                     <div className="flex justify-between text-sm font-medium text-muted-foreground">
                        <span>Current Max Reach: {result.maxReach.toFixed(1)}"</span>
                        <span>Dunk Target: {TARGET_REACH}"</span>
                     </div>
                    <Progress value={(result.maxReach / TARGET_REACH) * 100} className="h-4" />
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
