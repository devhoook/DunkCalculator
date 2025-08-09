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
  name: z.string().min(2, { message: "नाम में कम से कम 2 अक्षर होने चाहिए।" }),
  email: z.string().email({ message: "कृपया एक मान्य ईमेल दर्ज करें।" }),
  message: z.string().min(10, { message: "संदेश में कम से कम 10 अक्षर होने चाहिए।" }),
});

export function ContactFormHi() {
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
      title: "संदेश भेजा गया!",
      description: "संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।",
    });
    form.reset();
  }

  return (
    <Card className="shadow-lg max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Mail className="h-6 w-6 text-primary" />
            हमें एक संदेश भेजें
        </CardTitle>
        <CardDescription>हमें आपसे सुनना अच्छा लगेगा। नीचे दिया गया फॉर्म भरें।</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>नाम</FormLabel>
                  <FormControl>
                    <Input placeholder="आपका नाम" {...field} />
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
                  <FormLabel>ईमेल</FormLabel>
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
                    <FormLabel>संदेश</FormLabel>
                  <FormControl>
                    <Textarea placeholder="आपका संदेश..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              संदेश भेजें
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
