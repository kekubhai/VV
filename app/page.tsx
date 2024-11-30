import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SparklesIcon, CalendarIcon, HashIcon, School } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            VibeVerse-AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Create perfect Instagram captions for any holiday or occasion with AI
          </p>
          <Link href="/pages/generate">
            <Button size="lg" className="animate-pulse">
              <SparklesIcon className="mr-2 h-5 w-5" />
              Generate Captions
            </Button>
          </Link>
        </div>

        {/* How it Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CalendarIcon className="h-12 w-12 mb-4 mx-auto text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-center">Choose Your Date</h3>
              <p className="text-muted-foreground text-center">
                Select any holiday or special occasion
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <HashIcon className="h-12 w-12 mb-4 mx-auto text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-center">Pick Your Vibe</h3>
              <p className="text-muted-foreground text-center">
                Choose from festive, romantic, adventurous, or humorous styles
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <School className="h-12 w-12 mb-4 mx-auto text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-center">Get Your Caption</h3>
              <p className="text-muted-foreground text-center">
                Instantly generate the perfect caption for your post
              </p>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">✨ AI-Powered Creativity</h3>
              <p className="text-muted-foreground">
                Leverage advanced AI to generate unique and engaging captions
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">🎯 Customizable Output</h3>
              <p className="text-muted-foreground">
                Control caption length and style to match your preferences
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">💡 Inspiration Quotes</h3>
              <p className="text-muted-foreground">
                Get relevant quotes from famous personalities
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">🔄 Edit & Customize</h3>
              <p className="text-muted-foreground">
                Fine-tune generated captions to make them perfectly yours
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}