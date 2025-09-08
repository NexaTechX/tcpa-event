import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Users, Crown, Building2, Mail, Instagram, Star } from "lucide-react"
import { SiteLayout } from "@/components/site-layout"

export default function TicketsPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary font-semibold text-sm">TPCA 2025 Tickets</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Choose Your
                <br />
                <span className="text-primary">Conference Experience</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Select the perfect ticket that matches your goals and budget. Choose from in-person attendance (FREE), 
                virtual streaming (₦5,000), VIP experience (₦15,000), or corporate packages (₦70,000).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

            {/* Regular Pass */}
            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <Users className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground">Regular Pass</CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-muted-foreground line-through">₦10,000</span>
                    <span className="text-4xl font-bold text-accent">FREE</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Access to all keynote sessions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Live panel discussions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Networking with fellow attendees</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Digital conference materials</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground line-through">No access to masterclasses or VIP lounge</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-transform">
                  <a href="https://selar.com/4436a6" target="_blank" rel="noopener noreferrer">
                    Get Free Access
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Virtual Pass */}
            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Star className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground">Virtual Pass</CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-muted-foreground line-through">₦10,000</span>
                    <span className="text-4xl font-bold text-primary">₦5,000</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Live streaming of all sessions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Virtual networking rooms</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Access to recorded sessions (30 days)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Digital conference materials</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Virtual certificate of attendance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground line-through">No physical swag or in-person networking</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform">
                  <a href="https://selar.com/mj10s2" target="_blank" rel="noopener noreferrer">
                    Get Virtual Access – ₦5,000
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* VIP Pass */}
            <Card className="bg-card border-primary relative scale-105 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1 animate-pulse">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Crown className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground">VIP Pass</CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-muted-foreground line-through">₦20,000</span>
                    <span className="text-4xl font-bold text-primary">₦15,000</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">All Regular Pass benefits, plus:</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Branded swag pack</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Food pack</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Exclusive TPCA T-shirt</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Bloom and Build Workbook</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Reserved VIP seating area</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Professional headshot</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Certificate of attendance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Priority booking for future TPCA events</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform shadow-lg">
                  <a href="https://selar.com/16v915" target="_blank" rel="noopener noreferrer">
                    Get VIP Access – ₦15,000
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Corporate Pass */}
            <Card className="bg-card border-border relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <Building2 className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground">Corporate Pass</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Admits 5 People</p>
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-muted-foreground line-through">₦100,000</span>
                    <span className="text-4xl font-bold text-primary">₦70,000</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center">
                  Perfect for companies, startups, or organisations investing in their team's development.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Admission for 5 team members</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Access to everything in the VIP package</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Certificates of attendance for all 5 participants</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Discounted group rate</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Recognition on our Corporate Board (optional)</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-transform">
                  <a href="https://selar.com/61m9w9" target="_blank" rel="noopener noreferrer">
                    Get Corporate Access – ₦70,000
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-card-foreground">Need Help Choosing a Ticket?</h2>
            <p className="text-lg text-muted-foreground">
              Contact our support team or send a DM on Instagram @pacesetters887@gmail.com
            </p>
            <p className="text-lg text-muted-foreground">
              Let's help you make the most of your TPCA experience.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-background border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-semibold text-foreground">Email Support</h3>
                  <p className="text-muted-foreground">pacesetters887@gmail.com</p>
                  <Button variant="outline" className="w-full bg-transparent hover:bg-primary/5">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-background border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-semibold text-foreground">Instagram DM</h3>
                  <p className="text-muted-foreground">@pacesetters887</p>
                  <Button variant="outline" className="w-full bg-transparent hover:bg-primary/5">
                    Send DM
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:border-primary/30 group">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    Can I upgrade my ticket later?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade from Regular to Virtual Pass or VIP pass at any time before the event, subject to
                    availability.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:border-primary/30 group">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    What's the difference between Virtual and Regular Pass?
                  </h3>
                  <p className="text-muted-foreground">
                    The Virtual Pass (₦5,000) gives you online access to all sessions with live streaming and virtual networking, 
                    while the Regular Pass (FREE) is for in-person attendance. Virtual attendees get 30-day access to recorded sessions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:border-primary/30 group">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    What's included in the Corporate Pass?
                  </h3>
                  <p className="text-muted-foreground">
                    The Corporate Pass admits 5 people and includes all VIP benefits for each attendee, plus group
                    discounts and optional corporate recognition.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:border-primary/30 group">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    Is the Regular Pass really free?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! We believe in making transformative content accessible. The Regular Pass gives you access to
                    all keynote sessions and networking opportunities at no cost.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
