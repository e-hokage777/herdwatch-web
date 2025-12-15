import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 pb-8">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8  md:flex-row md:justify-center">
        <div className="md:max-w-[420] md:flex-1">
          <h2 className="text-4xl mb-10  text-start">
            Get in <span className="font-semibold">touch</span>
          </h2>
          <p className="mb-8">
            Use the details below to contact us directly, or fill out the form
            and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col gap-8 items-start">
            {/** contact item */}
            <div className="flex gap-4">
              <MapPin className="size-7 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold">Address</h3>
                <p>
                  Faculty of Electrical and Computer Engineering
                  <br />
                  KNUST - Kumasi
                  <br />
                  Ghana
                </p>
              </div>
            </div>
            {/** contact item */}
            {/* <div className="flex gap-4">
              <Mail className="size-7 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold">Email</h3>
                <p>dipperlabknust@gmail.com</p>
              </div>
            </div> */}
            {/** contact item */}
            {/* <div className="flex gap-4">
              <Phone className="size-7 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold">Phone</h3>
                <p>(233)-32-249-3435</p>
              </div>
            </div> */}
            {/** Follow Us */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
              <div className="flex flex-row gap-4">
                <Link href="#">
                  <Linkedin className="size-10" />
                </Link>
                <Link href="#">
                  <Github className="size-10" />
                </Link>
                <Link href="#">
                  <Twitter className="size-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-0.5 bg-black"></div>
        <div className=" w-full md:max-w-[420] md:flex-1">
          <h2 className="text-4xl mb-10  text-start">
            Send us a <span className="font-semibold">message</span>
          </h2>
          <form action="" className="div flex flex-col gap-4">
            <Input name="name" placeholder="Name" />
            <Input name="email" placeholder="Email" />
            <Input name="subject" placeholder="Subject" />
            <Textarea placeholder="Message" className="min-h-80"></Textarea>
            <Button className="text-xl py-6">Send Messsage</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
