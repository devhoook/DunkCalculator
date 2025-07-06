"use client";

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Plus, TrendingUp } from 'lucide-react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DatePicker } from '@/components/ui/date-picker';
import { useToast } from '@/hooks/use-toast';
import { type ProgressEntry } from '@/lib/types';
import { ChartTooltip, ChartTooltipContent, ChartContainer } from '@/components/ui/chart';

export default function ProgressTracker() {
  const [entries, setEntries] = useState<ProgressEntry[]>([]);
  const [newLeap, setNewLeap] = useState<string>('');
  const [newDate, setNewDate] = useState<Date | undefined>(new Date());
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem('progressEntries');
      if (saved) {
        const parsed = JSON.parse(saved) as ProgressEntry[];
        parsed.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        setEntries(parsed);
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage", error);
    }
  }, []);

  const addEntry = () => {
    const leapValue = parseFloat(newLeap);
    if (!newDate || isNaN(leapValue) || leapValue <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid date and a positive leap value.",
        variant: "destructive",
      });
      return;
    }

    const newEntry: ProgressEntry = {
      date: newDate.toISOString(),
      leap: leapValue,
    };

    const updatedEntries = [...entries, newEntry].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    setEntries(updatedEntries);
    localStorage.setItem('progressEntries', JSON.stringify(updatedEntries));
    setNewLeap('');
    toast({
        title: "Success",
        description: "New progress entry added!",
      });
  };
  
  const chartData = entries.map(entry => ({
    date: format(new Date(entry.date), 'MMM d'),
    leap: entry.leap,
  }));

  return (
    <section id="progress" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Progress Tracker</h2>
        <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">Log your vertical leap to see your improvement over time.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Add New Measurement</CardTitle>
            <CardDescription>Log your latest vertical leap.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="leap-input">Vertical Leap (inches)</Label>
              <Input
                id="leap-input"
                type="number"
                value={newLeap}
                onChange={(e) => setNewLeap(e.target.value)}
                placeholder="e.g., 32.5"
              />
            </div>
            <div className="space-y-2">
              <Label>Date</Label>
              <DatePicker date={newDate} setDate={setNewDate} />
            </div>
            <Button onClick={addEntry} className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Add Entry
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Your Progress
            </CardTitle>
            <CardDescription>
                {entries.length > 1 ? "A visual look at your journey." : "Add at least two entries to see a chart."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isClient && entries.length > 1 ? (
              <ChartContainer config={{ leap: { label: "Vertical Leap", color: "hsl(var(--primary))" } }} className="h-64 w-full">
                <ResponsiveContainer>
                  <LineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis unit="&quot;" tickLine={false} axisLine={false} tickMargin={8} domain={['dataMin - 2', 'dataMax + 2']} />
                     <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                    <Line type="monotone" dataKey="leap" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--primary))" }} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            ) : (
              <div className="h-64 flex items-center justify-center text-muted-foreground bg-secondary rounded-lg">
                <p>No chart data yet.</p>
              </div>
            )}
            {isClient && entries.length > 0 && (
              <div className="mt-6 max-h-60 overflow-y-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Vertical Leap (inches)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[...entries].reverse().map(entry => (
                      <TableRow key={entry.date}>
                        <TableCell>{format(new Date(entry.date), 'MMMM d, yyyy')}</TableCell>
                        <TableCell className="text-right font-medium">{entry.leap.toFixed(1)}&quot;</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
