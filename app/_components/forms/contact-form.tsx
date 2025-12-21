"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form } from "@/components/ui/form";
import { sendMessage } from "@/app/_actions/message";

const formSchema = z.object({
  name: z.string().min(1, { error: "Name is required" }),
  email: z.email({ error: "Invalid email address" }),
  subject: z.string().min(1, { error: "Subject is required" }),
  message: z.string({ error: "Message is required" }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await sendMessage(values);

    if (response.success) {
      toast.success("Message sent successfully. We will get back to you soon.");
      form.reset();
    } else {
      toast.error("Failed to send message, please try again later");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" placeholder="" {...form.register("name")} />

          <FieldError>{form.formState.errors.name?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" placeholder="" {...form.register("email")} />

          <FieldError>{form.formState.errors.email?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="subject">Subject</FieldLabel>
          <Input id="subject" placeholder="" {...form.register("subject")} />

          <FieldError>{form.formState.errors.subject?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea id="message" placeholder="" {...form.register("message")} />

          <FieldError>{form.formState.errors.message?.message}</FieldError>
        </Field>
        <Button
          disabled={form.formState.isSubmitting}
          className="w-full py-6 text-xl"
          type="submit"
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
