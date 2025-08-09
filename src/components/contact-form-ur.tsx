"use client"

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "نام کم از کم 2 حروف کا ہونا چاہیے۔" }),
  email: z.string().email({ message: "براہ کرم ایک درست ای میل درج کریں۔" }),
  message: z.string().min(10, { message: "پیغام کم از کم 10 حروف کا ہونا چاہیے۔" }),
});

export function ContactFormUr() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "پیغام بھیج دیا گیا!",
      description: "رابطہ کرنے کے لیے شکریہ۔ ہم جلد ہی آپ سے رابطہ کریں گے۔",
    });
    form.reset();
  }

  return (
    <Card className="shadow-lg max-w-lg mx-auto" dir="rtl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Mail className="h-6 w-6 text-primary" />
            ہمیں ایک پیغام بھیجیں
        </CardTitle>
        <CardDescription>ہم آپ سے سننا پسند کریں گے۔ نیچے دیا گیا فارم پر کریں۔</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام</FormLabel>
                  <FormControl>
                    <Input placeholder="آپ کا نام" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ای میل</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                    <FormLabel>پیغام</FormLabel>
                  <FormControl>
                    <Textarea placeholder="آپ کا پیغام..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              پیغام بھیجیں
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
