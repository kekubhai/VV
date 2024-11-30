'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import * as z from 'zod';


const captionSchema = z.object({
  date: z.string().min(1, 'Date is required.'),
  vibe: z.string().min(1, 'Vibe is required.'),
  wordLimit: z.number().min(10).max(100),
});

export default function GeneratePage() {
  const [date, setDate] = useState('');
  const [vibe, setVibe] = useState('');
  const [wordLimit, setWordLimit] = useState(30); // Single numeric value
  const [isLoading, setIsLoading] = useState(false);
  const [caption, setCaption] = useState(''); // For generated captions
  const { toast } = useToast();
  const router = useRouter();

  const handleGenerate = async () => {
    const validation = captionSchema.safeParse({
      date,
      vibe,
      wordLimit,
    });

    if (!validation.success) {
      toast({
        title: 'Validation Error',
        description: validation.error.errors[0]?.message || 'Invalid input',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/generate?date=${encodeURIComponent(date)}&vibe=${encodeURIComponent(
          vibe
        )}&wordLimit=${wordLimit}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch caption');
      }

      const data = await response.json();
      setCaption(data.caption);

      router.push(`/results?date=${date}&vibe=${vibe}&wordLimit=${wordLimit}`);
    } catch (error) {
      toast({
        title: 'Error',
        description: (error as Error).message || 'Failed to generate caption.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Generate Your Caption</h1>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="date">Holiday or Date</Label>
              <Input
                id="date"
                type="text"
                placeholder="e.g., Christmas, December 25"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vibe">Select Vibe</Label>
              <Select value={vibe} onValueChange={setVibe}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your vibe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="festive">Festive</SelectItem>
                  <SelectItem value="romantic">Romantic</SelectItem>
                  <SelectItem value="adventurous">Adventurous</SelectItem>
                  <SelectItem value="humorous">Humorous</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Word Limit: {wordLimit}</Label>
              <Slider
                value={[wordLimit]} // Wrap as an array
                onValueChange={(value) => setWordLimit(value[0])}
                min={10}
                max={100}
                step={5}
              />
            </div>

            <Button
              type="button"
              className="w-full"
              onClick={handleGenerate}
              disabled={isLoading}
            >
              {isLoading ? 'Generating...' : 'Generate Caption'}
            </Button>

            {caption && (
              <div className="mt-6">
                <h2 className="text-2xl font-bold">Generated Caption</h2>
                <p className="text-lg font-semibold">{caption}</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </main>
  );
}
