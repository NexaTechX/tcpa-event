import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronRight } from "lucide-react"
import Image from "next/image"
import { SiteLayout } from "@/components/site-layout"

const pastEvents = [
  {
    year: "2024",
    title: "TPCA 2024",
    subtitle: "A Transformative Year of Innovation & Leadership",
    description: "The most recent edition of TPCA brought together Africa's brightest minds for an unprecedented gathering of innovation, leadership, and transformative thinking.",
    images: [
      { src: "/Past events/2024.jpg", alt: "TPCA 2024 Main Event" },
      { src: "/Past events/2024(1).jpg", alt: "TPCA 2024 Highlights" },
      { src: "/Past events/2024(2).jpg", alt: "TPCA 2024 Moments" }
    ]
  },
  {
    year: "2023",
    title: "TPCA 2023",
    subtitle: "Building Bridges Across Africa's Leadership Landscape",
    description: "A year of connection and collaboration, where leaders from across the continent came together to build lasting partnerships and share innovative solutions.",
    images: [
      { src: "/Past events/2023.jpg", alt: "TPCA 2023 Main Event" }
    ]
  },
  {
    year: "2022",
    title: "TPCA 2022",
    subtitle: "Empowering the Next Generation of African Leaders",
    description: "Focused on nurturing young talent and providing the tools and connections needed for the next wave of African leadership.",
    images: [
      { src: "/Past events/2022.jpg", alt: "TPCA 2022 Main Event" }
    ]
  },
  {
    year: "2021",
    title: "TPCA 2021",
    subtitle: "Navigating Challenges, Building Resilience",
    description: "A testament to Africa's resilience, where leaders adapted to new challenges and emerged stronger than ever.",
    images: [
      { src: "/Past events/2021.jpg", alt: "TPCA 2021 Main Event" }
    ]
  },
  {
    year: "2020",
    title: "TPCA 2020",
    subtitle: "The Beginning of a Remarkable Journey",
    description: "Where it all began - the inaugural TPCA conference that set the foundation for Africa's premier leadership gathering.",
    images: [
      { src: "/Past events/2020.jpg", alt: "TPCA 2020 Main Event" }
    ]
  }
]

export default function PastEventsPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">Our Legacy</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Past Events
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Relive the incredible moments, powerful connections, and transformative experiences from previous TPCA conferences. 
              Each year has been a testament to Africa's rising leadership and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Past Events Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {pastEvents.map((event, index) => (
              <div key={event.year} className="relative">
                {/* Year Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge variant="secondary" className="text-2xl px-8 py-3 bg-background border-2 border-primary/20 shadow-lg">
                    {event.year}
                  </Badge>
                </div>

                {/* Event Content */}
                <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-xl">
                  {/* Event Header */}
                  <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-card-foreground">
                      {event.title}
                    </h2>
                    <p className="text-xl lg:text-2xl text-primary font-semibold mb-6">
                      {event.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Images */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {event.images.map((image, imageIndex) => (
                      <Card key={imageIndex} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-transparent">
                        <CardContent className="p-0">
                          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-sm font-medium">Click to view</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Timeline Connector */}
                {index < pastEvents.length - 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="w-px h-16 bg-gradient-to-b from-primary/40 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Be Part of Our Next Chapter
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Join us at TPCA 2025 and create memories that will inspire future generations. 
                Your journey to redefinition starts here.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/tickets"
                className="group inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-2xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Get Your Tickets
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/tickets"
                className="group inline-flex items-center justify-center px-10 py-4 border-2 border-border text-foreground font-bold text-lg rounded-2xl hover:bg-accent/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                Learn More
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
