"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

export default function Contactform() {
  const [isPending, startTransition] = useTransition();
  const form = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      message: "",
      privacy: false,
    },
  });

  const handleCreateSubscriber = async () => {
    console.log("Form submitted:");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateSubscriber)}
        className="space-y-4"
      >
        <div className="flex w-full flex-col gap-y-4 md:flex-row md:gap-x-2 mb-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="md:w-1/2">
                <FormLabel className="font-semibold">Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Inserisci il tuo nome"
                    {...field}
                    className="bg-white py-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="md:w-1/2">
                <FormLabel className="font-semibold">Cognome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Inserisci il tuo cognome"
                    {...field}
                    {...field}
                    className="bg-white py-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel className="font-semibold">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Inserisci la tua email"
                  {...field}
                  className="bg-white py-6"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="font-semibold">Messaggio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Inserisci il tuo messaggio"
                  {...field}
                  className="bg-white py-6"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Privacy</FormLabel>
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked)}
                    className="bg-white"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Ho letto e accetto l&apos;
                    <Link
                      href="/privacy"
                      className="px-1 underline text-primary"
                    >
                      Informativa sulla privacy
                    </Link>
                    .
                  </label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isPending}
          className="w-full border text-lg mt-4 bg-primary hover:bg-white hover:text-primary cursor-pointer hover:border-primary"
        >
          Invia
        </Button>
      </form>
    </Form>
  );
}
