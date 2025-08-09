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
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự." }),
  email: z.string().email({ message: "Vui lòng nhập một email hợp lệ." }),
  message: z.string().min(10, { message: "Tin nhắn phải có ít nhất 10 ký tự." }),
});

export function ContactFormVi() {
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
      title: "Đã gửi tin nhắn!",
      description: "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ sớm liên hệ lại với bạn.",
    });
    form.reset();
  }

  return (
    <Card className="shadow-lg max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Mail className="h-6 w-6 text-primary" />
            Gửi tin nhắn cho chúng tôi
        </CardTitle>
        <CardDescription>Chúng tôi rất muốn nghe từ bạn. Điền vào biểu mẫu dưới đây.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên</FormLabel>
                  <FormControl>
                    <Input placeholder="Tên của bạn" {...field} />
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
                  <FormLabel>Email</FormLabel>
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
                    <FormLabel>Tin nhắn</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tin nhắn của bạn..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Gửi tin nhắn
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
