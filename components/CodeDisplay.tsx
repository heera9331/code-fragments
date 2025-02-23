"use client"
import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Clipboard } from "lucide-react";

const CodeDisplay = () => {
  const [activeTab, setActiveTab] = useState("jsx");

  const jsxCode = `
  import React from 'react';

  const Button = () => {
    return <button className='bg-blue-500 text-white p-2 rounded'>Click me</button>;
  };

  export default Button;
  `;

  const htmlCssCode = `
  <button class="bg-blue-500 text-white p-2 rounded">Click me</button>
  
  <style>
    .button {
      background-color: #3b82f6;
      color: white;
      padding: 0.5rem;
      border-radius: 0.25rem;
    }
  </style>
  `;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="max-w-4xl mx-auto py-4">
      <h2 className="text-xl font-semibold mb-4">Code and Image Display</h2>
      <Card>
        <CardContent className="p-4 flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2">
            <Image
              src="/assets/images/footer.png"
              alt="Example"
              width={500}
              height={300}
              className="rounded shadow h-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="jsx">JSX</TabsTrigger>
                <TabsTrigger value="html">HTML & CSS</TabsTrigger>
              </TabsList>
              <TabsContent value="jsx">
                <div className="relative">
                  <button
                    onClick={() => copyToClipboard(jsxCode)}
                    className="absolute top-2 right-2 p-1 bg-gray-700 text-white rounded"
                  >
                    <Copy size={16} />
                  </button>
                  <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
                    <code>{jsxCode}</code>
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="html">
                <div className="relative">
                  <button
                    onClick={() => copyToClipboard(htmlCssCode)}
                    className="absolute top-2 right-2 p-1 bg-gray-700 text-white rounded"
                  >
                    <Copy size={16} />
                  </button>
                  <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
                    <code>{htmlCssCode}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CodeDisplay;
