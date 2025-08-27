import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Eye, Heart, GraduationCap, Briefcase, Palette, TrendingUp } from "lucide-react"
import Image from "next/image"
import { SiteLayout } from "@/components/site-layout"

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary font-semibold text-sm">About TPCA</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Empowering Africa's
                <br />
                <span className="text-primary">Next Generation</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover the story behind Africa's leading personal and professional development conference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">Who We Are</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Pacesetters Conference Africa is not just an event. It's a bold movement that inspires Africa's
                emerging leaders to break limits, challenge the status quo, and redefine success on their terms.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <Image
                  src="/home/IMG_1226.JPG"
                  alt="TPCA Community - Who We Are"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-8">
                <Image
                  src="/home/IMG_1227.JPG"
                  alt="TPCA Story - Our Journey and Growth"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground">Our Story</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a small gathering of passionate thinkers has grown into one of Africa's leading personal
                and professional development conferences, bringing together students, young professionals, founders, and
                future icons from every corner of the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To build a thriving generation of purpose-driven leaders who set new standards of excellence,
                  influence change, and inspire others to do the same.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To equip, connect, and celebrate Africans who are ready to live purposefully, work proficiently, and
                  deliver results that make a difference in their communities, industries, and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Attend Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4">Who Should Attend</h2>
              <p className="text-lg text-muted-foreground">
                TPCA is designed for ambitious individuals ready to take their next big step
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">Students & Graduates</h4>
                    <p className="text-muted-foreground">Hungry for guidance and ready to shape their future</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">Entrepreneurs & Founders</h4>
                    <p className="text-muted-foreground">Ready to scale their ventures and make greater impact</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">Professionals & Creatives</h4>
                    <p className="text-muted-foreground">Seeking growth and new opportunities in their careers</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Palette className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">Coaches & Change-makers</h4>
                    <p className="text-muted-foreground">Shaping the future and inspiring the next generation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TPCA Matters Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Why TPCA Matters</h2>
            <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed font-medium">
                "In a world where mediocrity is normal, TPCA calls you to step beyond the usual, to think bigger, act
                bolder, and lead better."
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                <a href="/tickets">Join the Movement</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-accent/10 px-8 py-3 bg-transparent">
                <a href="/tickets">View Tickets</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
