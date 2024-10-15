import React from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Button } from "@/components/ui"; // Adjusted import if necessary
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import FormCode from "./_components/form-code";
import { Toaster } from "react-hot-toast";
import TableCode from "./_components/home-table-code";
import { Metadata } from "next";
import { ArrowRight, LinkIcon } from "lucide-react"
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: "Code Fragments - Speedup Your Development Journey",
    template: "%s | Code Fragments",
  },
  description:
    "Code Fragments is a website designed for learners and developers, offering resources and tools to enhance your productivity.",
  keywords:
    "Code Fragments, react components, html and css components, html and css with tailwind, code examples, templates, web templates, free web templates",
  authors: [{ name: "Heera Singh Lodhi" }],
  openGraph: {
    title: "Code Fragments - Speedup Your Development Journey",
    description:
      "Code Fragments is a website designed for learners, offering resources and tools to enhance your education.",
    url: "https://www.edevhindi.com",
    siteName: "Code Fragments",
    type: "website",
    images: [
      {
        url: "https://www.edevhindi.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Code Fragments - Speedup Your Development Journey",
      },
    ],
  },
  // Todo: Add Twitter metadata
};

function HomePage() {
  return (
    <div className="page grid grid-cols-12 px-2">

      {/* ========= main =============== */}
      <div className="md:col-span-12 lg:col-span-8 col-span-12 pr-2">
        <Toaster position="top-center" />
        <section className="main-gradient2 min-h-[60vh] md:min-h-[90vh] flex flex-col justify-center items-center border-b">
          <h1 className="mb-2 text-center text-white">
            Most usable UI components for website/app
          </h1>
          <Button
            variant={"default"}
            className="bg-muted/5 border border/90 hover:border transition-all delay-50 ease-in-out bg-black text-white hover:bg-black/90"
          >
            <Link href={"#section-2"} className="flex gap-2">
              <span>Explore</span>
              <ArrowRight />
            </Link>
          </Button>
        </section>
        <section id="section-2" className="min-h-screen border-b">
          <h2 className="text-3xl pt-2">Forms</h2>
          <div className="py-2">
            <p className="text-gray-500 my-2">
              Forms are used in many places in our website/app, that are used
              for many purposes, for example, Registration Form, Survey Form,
              Login form, Register form, Job Application, Tickets, Reservation,
              etc.
            </p>
            <p>
              <strong className="pr-2">Note: </strong>
              <span className="text-gray-500 ">
                Make sure when you copy the form code, backgroun color should
                gradient or color.
              </span>
            </p>
          </div>
          <FormCode />

          <Button className="mb-4 bg-muted/5 border border/90 hover:border hover:bg-muted/5 transition-all delay-50 ease-in-out text-gray-500 hover:text-gray-600">
            <Link href={"#section-2"}>View More Forms Exaples</Link>
          </Button>
        </section>
        <section id="tables" className="min-h-screen border-b">
          <h2 className="text-3xl pt-2">Tables</h2>
          <div className="py-2">
            <p className="text-gray-500 my-2">
              Tables are used to display list of group of information and when
              we need to display wide information on page.
            </p>
          </div>
          <TableCode />

          <Button className="my-4 bg-muted/5 border border/90 hover:border hover:bg-muted/5 transition-all delay-50 ease-in-out">
            <Link
              href={"/react-components/tables"}
              className="text-gray-500 hover:text-gray-600"
            >
              View more tables
            </Link>
          </Button>
        </section>
        <section className="min-h-screen border-b py-2">
          <h2 className="text-3xl">HTML & CSS Blocks/Components</h2>

          <div>
            <p className="text-gray-500 my-2">
              We provide variety of pre build HTML & CSS Blocks/components, that
              is usefull for website/app and also save more time. you have to
              copy and paste the code in your project.
            </p>
          </div>

          <Button className="my-4 bg-muted/5 border border/90 hover:border hover:bg-muted/5 transition-all delay-50 ease-in-out text-gray-500 hover:text-gray-600">
            <Link href={"/html-and-css/"}>View HTML & CSS</Link>
          </Button>
        </section>

        {/* ================== Templates ==================== */}
        <section className="min-h-screen border-b py-2">
          <h2 className="text-3xl">Templates</h2>


          <p className="text-gray-500 my-2">
            Temlates are complete pages of website that is best fit for your next project, here are some template if you like it then download use in your next project
          </p>

          <h3 className="text-2xl mt-4">Portfolio Template</h3>

          <p>
            This is a sample portfolio template use it your own details.
          </p>
            
          <Image
          className="mb-4 rounded-lg hover:scale-[102%] transition transition-all delay-150"
          src={`https://edevhindi.com/wp-content/uploads/2024/10/Screenshot-from-2024-10-06-23-19-08.png`} alt="heera portfolio" width={1000} height={1000}></Image>
          <Image
          className="mb-4 rounded-lg hover:scale-[102%] transition transition-all delay-150"
          
            src={`https://edevhindi.com/wp-content/uploads/2024/10/Screenshot-from-2024-10-06-23-58-38.png`} 
            alt="heera singh portfolio" 
            width={1000} 
            height={1000}></Image>
             
          <Link 
            target="_blank"
            href={'https://edevhindi.com/portfolio'}
            className="flex gap-4  border px-4 py-2 rounded-xl"
          >
            <span className="flex items-center">
              Live Preview

              <LinkIcon className="pl-2 w-5 h-5"/>
            </span>
            
          </Link>
          <Button className="my-4 bg-muted/5 border border/90 hover:border hover:bg-muted/5 transition-all delay-50 ease-in-out text-gray-500 hover:text-gray-600">
            <Link href={"/templates/"}>View more templates</Link>
          </Button>
        </section>
      </div>

      {/* =================== content right sidebar ================ */}

      <div className="md:col-span-12 lg:col-span-4 border-l pl-2">
        <h2 className="font-semibold">New Updates</h2>
        <div className="text-gray-500">
          <p>1.0.1: background gradient</p>
          <p>1.0.1: back to normal theme</p>
          <p>1.0.1: 404 design</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
