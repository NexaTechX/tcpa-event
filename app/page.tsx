import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Network, BookOpen, TrendingUp } from "lucide-react"
import Image from "next/image"
import { SiteLayout } from "@/components/site-layout"
import { CountdownTimer } from "@/components/countdown-timer"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-primary font-semibold text-sm">TPCA 2025 Theme</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-primary">REDEFINITION:</span>
                  <br />
                  Stepping Beyond the Usual
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join hundreds of Africa's boldest thinkers, builders, and changemakers at The Pacesetters Conference
                  Africa. Unlock fresh ideas, spark purposeful connections, and redefine what's possible for you, your
                  business, and your community.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                  <a href="/tickets">Register Now</a>
                </Button>
                <Button asChild
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-accent/10 px-8 py-3 bg-transparent"
                >
                  <a href="/tickets">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <Image
                  src="/home/IMG_1226.JPG"
                  alt="TPCA 2025 Conference - Empowering Africa's Next Generation"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <CountdownTimer />
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground">
              Welcome to The Pacesetters Conference Africa
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every year, The Pacesetters Conference Africa (TPCA) gathers ambitious young Africans who dare to lead
              differently, purposefully, proficiently, and productively. Whether you're a student, creative,
              entrepreneur, or professional, TPCA is where new ideas meet real action. Come connect with trailblazers,
              learn from industry leaders, and step out ready to set the pace in your field.
            </p>
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Capturing Moments of Impact</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every TPCA conference creates unforgettable moments of connection, learning, and inspiration. 
                These images capture the energy and passion that makes our events truly special.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-8">
                <Image
                  src="/home/IMG_1227.JPG"
                  alt="TPCA Conference Moments - Building Connections and Inspiring Growth"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Awaits You</h2>
            <p className="text-lg text-muted-foreground">
              Experience the power of purposeful connection and transformative learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Powerful Keynote Sessions</h3>
                <p className="text-muted-foreground">Learn from Africa's most influential leaders and changemakers</p>
                <CheckCircle className="w-5 h-5 text-primary" />
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Practical Masterclasses</h3>
                <p className="text-muted-foreground">Hands-on workshops that you can apply immediately</p>
                <CheckCircle className="w-5 h-5 text-primary" />
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Live Panels & Networking</h3>
                <p className="text-muted-foreground">
                  Connect with like-minded professionals and build lasting relationships
                </p>
                <CheckCircle className="w-5 h-5 text-primary" />
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Awards to Honour Real Pacesetters</h3>
                <p className="text-muted-foreground">
                  Celebrate and recognize outstanding achievements in various fields
                </p>
                <CheckCircle className="w-5 h-5 text-primary" />
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors lg:col-span-2">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  A Growing Community That Keeps You Moving Forward
                </h3>
                <p className="text-muted-foreground">
                  Join a network of ambitious individuals committed to continuous growth and mutual support
                </p>
                <CheckCircle className="w-5 h-5 text-primary" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Redefine Your Future?</h2>
            <p className="text-lg text-muted-foreground">
              Don't miss this opportunity to connect, learn, and grow with Africa's most ambitious leaders.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg">
              <a href="/tickets">Secure Your Spot Today</a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
