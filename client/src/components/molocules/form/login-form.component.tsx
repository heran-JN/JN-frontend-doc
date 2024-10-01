"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "@/components/atoms/input/input";
import { Button } from "@/components/atoms/button/button";
import Link from "next/link";

const FormSchema = z.object({
  email: z.string().email({
    message: "Use a valid email",
  }),
  password: z.string(),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <div className="w-full h-full flex justify-center items-center p-10">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-half space-y-6 flex flex-col justify-center">
        <FormField
          control={form.control}
          name="email"
               
          render={({ field,fieldState:{error}  }) => (
            <FormItem>
              <FormControl>
                <Input  id="email" error={error?.message}  placeholder="Your email address" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
            
          render={({ field,fieldState:{error} }) => (
            <FormItem>
              <FormControl>
                <Input id="password" error={error?.message} type="password" placeholder="Your password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button variant="primary" type="submit">continue</Button>
        <p className="text-body2 font-body2 text-subtitle ">Don’t have an account? <Link href={"#"} className="text-link font-link text-accent underline" >Login</Link></p>
      </form>
    </Form>
    
    </div>
  );
}
