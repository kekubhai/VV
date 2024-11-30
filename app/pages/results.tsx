'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface ResultPageProps {
  date?: string;
  vibe?: string;
  wordLimit?: string;
}

export default function ResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<ResultPageProps>({});
  const { date, vibe, wordLimit } = router.query;

  useEffect(() => {
    if (date && vibe && wordLimit) {
      // Simulate fetching or processing the results
      setResults({ date: date as string, vibe: vibe as string, wordLimit: wordLimit as string });
    }
  }, [date, vibe, wordLimit]);

  if (!date || !vibe || !wordLimit) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 to-gray-100">
        <h1 className="text-3xl font-bold">No Results Available</h1>
        <p className="mt-4 text-lg text-gray-600">
          Please return to the <a className="text-blue-500 underline" href="/generate">Generate Page</a> and try again.
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Results</h1>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Date:</strong> {results.date}
            </p>
            <p className="text-lg">
              <strong>Vibe:</strong> {results.vibe}
            </p>
            <p className="text-lg">
              <strong>Word Limit:</strong> {results.wordLimit}
            </p>
          </div>
          <div className="mt-8">
            <a
              href="/generate"
              className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Generate Another Caption
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

