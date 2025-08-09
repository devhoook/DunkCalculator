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
  height: z.coerce.number({ required_error: '身高是必填项' }).positive('必须为正数'),
  standingReach: optionalPositiveNumber,
  verticalLeap: z.coerce.number({ required_error: '垂直弹跳是必填项' }).positive('必须为正数'),
  rimHeight: z.coerce.number().positive('必须为正数'),
});

type FormValues = z.infer<typeof formSchema>;
type UnitSystem = 'imperial' | 'metric';

interface Result {
  canDunk: boolean;
  needed: number;
  maxReach: number;
  targetReach: number;
  unit: '英寸' | '厘米';
}

const INCHES_TO_CM = 2.54;
const CM_TO_INCHES = 1 / 2.54;
const DUNK_BUFFER_INCHES = 6;

export default function DunkCalculatorZh() {
  const [unit, setUnit] = useState<UnitSystem>('metric');
  const [result, setResult] = useState<Result | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rimHeight: 305,
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

    const displayUnit = unit === 'metric' ? '厘米' : '英寸';
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
              <TabsTrigger value="imperial">英制 (in)</TabsTrigger>
              <TabsTrigger value="metric">公制 (cm)</TabsTrigger>
            </TabsList>
          </Tabs>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>您的身高</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="例如, 183" {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormDescription>{unit === 'imperial' ? '英寸' : '厘米'}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="standingReach"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>站立摸高 (可选)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="留空以估算" {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormDescription>{unit === 'imperial' ? '英寸' : '厘米'}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="verticalLeap"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>垂直弹跳</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder={unit === 'imperial' ? '例如, 24' : '例如, 61'} {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormDescription>{unit === 'imperial' ? '英寸' : '厘米'}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rimHeight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>篮筐高度</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormDescription>{unit === 'imperial' ? '英寸' : '厘米'}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full !mt-6" size="lg">
                我能扣篮吗？
              </Button>
            </form>
          </Form>

          {result && (
            <div className="mt-8">
              {result.canDunk ? (
                <div className="relative text-center p-6 bg-accent/20 rounded-lg border border-accent">
                  <Confetti />
                  <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-headline text-accent-foreground">恭喜！</h3>
                  <p className="text-accent-foreground/90 mt-2">
                    您的最大摸高达到了 <span className="font-bold">{result.maxReach.toFixed(1)} {result.unit}</span>，足以扣篮！是时候上场了。
                  </p>
                </div>
              ) : (
                <div className="text-center p-6 bg-secondary rounded-lg">
                  <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-headline">您就快成功了！</h3>
                  <p className="text-foreground/80 mt-2 mb-4">
                    您的垂直弹跳还需要增加 <span className="font-bold text-primary">{result.needed.toFixed(1)} {result.unit}</span> 才能扣篮。
                  </p>
                  <div className="space-y-2">
                     <div className="flex justify-between text-sm font-medium text-muted-foreground">
                        <span>当前最大摸高: {result.maxReach.toFixed(1)} {result.unit}</span>
                        <span>扣篮目标: {result.targetReach.toFixed(1)} {result.unit}</span>
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
