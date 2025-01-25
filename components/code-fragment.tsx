'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useState } from 'react';

interface CodeFragmentProps {
  title: string;
  description: string;
  language: string;
  code: string;
}

export function CodeFragment({ title, description, language, code }: CodeFragmentProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="relative">
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code className={`language-${language}`}>{code}</code>
          </pre>
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2"
            onClick={copyToClipboard}
          >
            <Copy className="h-4 w-4" />
            <span className="sr-only">Copy code</span>
          </Button>
          {copied && (
            <div className="absolute top-2 right-12 bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
              Copied!
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}