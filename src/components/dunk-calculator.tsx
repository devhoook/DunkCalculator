"use client";

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, Target } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Confetti from './confetti';

const optionalPositiveNumber = z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.coerce.number().positive().optional()
);

const formSchema = z.object({
  height: z.coerce.number({ required_error: 'Height is required' }).positive('Must be positive'),
  standingReach: optionalPositiveNumber,
  verticalLeap: z.coerce.number({ required_error: 'Vertical leap is required' }).positive('Must be positive'),
  rimHeight: z.coerce.number().positive('Must be positive'),
});

type FormValues = z.infer<typeof formSchema>;
type UnitSystem = 'imperial' | 'metric';

interface Result {
  canDunk: boolean;
  needed: number;
  maxReach: number;
  targetReach: number;
  unit: 'inches' | 'cm';
}

const INCHES_TO_CM = 2.54;
const CM_TO_INCHES = 1 / 2.54;
const DUNK_BUFFER_INCHES = 6;

export default function DunkCalculator() {
  const [unit, setUnit] = useState<UnitSystem>('imperial');
  const [result, setResult] = useState<Result | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rimHeight: 120,
      height: undefined,
      standingReach: undefined,
      verticalLeap: undefined,
    },
  });

  useEffect(() => {
    form.reset({
      height: undefined,
      standingReach: undefined,
      verticalLeap: undefined,
      rimHeight: unit === 'imperial' ? 120 : 305
    });
    setResult(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit]);
  
  const onSubmit = (values: FormValues) => {
    const toInches = (val: number | undefined) => {
        if (val === undefined || isNaN(val)) return undefined;
        return unit === 'metric' ? val * CM_TO_INCHES : val;
    }

    const heightInches = toInches(values.height)!;
    const verticalLeapInches = toInches(values.verticalLeap)!;
    const rimHeightInches = toInches(values.rimHeight)!;

    const standingReachInches = values.standingReach
      ? toInches(values.standingReach)!
      : heightInches * 1.31;

    const maxReachInches = standingReachInches + verticalLeapInches;
    const targetReachInches = rimHeightInches + DUNK_BUFFER_INCHES;
    const neededInches = targetReachInches - maxReachInches;
    const canDunk = maxReachInches >= targetReachInches;

    const displayUnit = unit === 'metric' ? 'cm' : 'inches';
    const resultMaxReach = unit === 'metric' ? maxReachInches * INCHES_TO_CM : maxReachInches;
    const resultNeeded = unit === 'metric' ? neededInches * INCHES_TO_CM : neededInches;
    const resultTargetReach = unit === 'metric' ? targetReachInches * INCHES_TO_CM : targetReachInches;
    
    setResult({
      canDunk,
      needed: resultNeeded,
      maxReach: resultMaxReach,
      targetReach: resultTargetReach,
      unit: displayUnit,
    });
  };

  return (
    <section id="calculator">
      <Card className="max-w-2xl mx-auto overflow-hidden shadow-lg">
        <CardContent className="pt-6">
          <Tabs value={unit} onValueChange={(v) => setUnit(v as UnitSystem)} className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="imperial">Imperial (in)</TabsTrigger>
              <TabsTrigger value="metric">Metric (cm)</TabsTrigger>
            </TabsList>
          </Tabs>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Height</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 72" {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormDescription>{unit === 'imperial' ? 'inches' : 'cm'}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="standingReach"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Standing Reach (optional)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Leave blank to estimate" {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormDescription>{unit === 'imperial' ? 'inches' : 'cm'}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="verticalLeap"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vertical Jump</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder={unit === 'imperial' ? 'e.g., 24' : 'e.g., 61'} {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormDescription>{unit === 'imperial' ? 'inches' : 'cm'}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rimHeight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rim Height</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormDescription>{unit === 'imperial' ? 'inches' : 'cm'}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full !mt-6" size="lg">
                Can I Dunk?
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
                    Your max reach of <span className="font-bold">{result.maxReach.toFixed(1)} {result.unit}</span> is enough to dunk! Time to hit the court.
                  </p>
                </div>
              ) : (
                <div className="text-center p-6 bg-secondary rounded-lg">
                  <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-headline">You are close!</h3>
                  <p className="text-foreground/80 mt-2 mb-4">
                    You need <span className="font-bold text-primary">{result.needed.toFixed(1)} more {result.unit}</span> on your vertical leap to dunk.
                  </p>
                  <div className="space-y-2">
                     <div className="flex justify-between text-sm font-medium text-muted-foreground">
                        <span>Current Max Reach: {result.maxReach.toFixed(1)} {result.unit}</span>
                        <span>Dunk Target: {result.targetReach.toFixed(1)} {result.unit}</span>
                     </div>
                    <Progress value={(result.maxReach / result.targetReach) * 100} className="h-4" />
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
