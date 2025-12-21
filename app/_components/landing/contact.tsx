import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import ContactForm from "../forms/contact-form";

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
            <div className="flex gap-4">
              <Mail className="size-7 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold">Email</h3>
                <p>dipperlabknust@gmail.com</p>
              </div>
            </div>
            {/** contact item */}
            <div className="flex gap-4">
              <Phone className="size-7 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold">Phone</h3>
                <p>(233)-32-249-3435</p>
              </div>
            </div>
            {/** Follow Us */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
              <div className="flex flex-row gap-4">
                <Link href="https://www.linkedin.com/company/distributed-iot-platforms-privacy-and-edge-intelligence-research/posts/?feedView=all">
                  <Linkedin className="size-10" />
                </Link>
                <Link href="https://github.com/Dipper-Lab">
                  <Github className="size-10" />
                </Link>
                <Link href="https://twitter.com/dipperlabknust">
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
