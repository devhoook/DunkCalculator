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
  name: z.string().min(2, { message: "이름은 2자 이상이어야 합니다." }),
  email: z.string().email({ message: "유효한 이메일을 입력하십시오." }),
  message: z.string().min(10, { message: "메시지는 10자 이상이어야 합니다." }),
});

export function ContactFormKo() {
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
      title: "메시지 전송됨!",
      description: "연락 주셔서 감사합니다. 곧 연락 드리겠습니다.",
    });
    form.reset();
  }

  return (
    <Card className="shadow-lg max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Mail className="h-6 w-6 text-primary" />
            메시지 보내기
        </CardTitle>
        <CardDescription>여러분의 의견을 듣고 싶습니다. 아래 양식을 작성하십시오.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input placeholder="이름" {...field} />
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
                  <FormLabel>이메일</FormLabel>
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
                    <FormLabel>메시지</FormLabel>
                  <FormControl>
                    <Textarea placeholder="메시지..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              메시지 보내기
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
