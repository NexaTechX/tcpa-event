import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">T</span>
              </div>
              <span className="text-lg font-bold">TPCA 2025</span>
            </Link>
            <p className="text-muted-foreground">
              The Pacesetters Conference Africa - Where new ideas meet real action.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/tickets" className="block text-muted-foreground hover:text-primary transition-colors">
                Tickets
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>pacesetters887@gmail.com</p>
              <p>@pacesetters887</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 The Pacesetters Conference Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
