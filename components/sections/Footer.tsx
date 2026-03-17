import { COMPANY } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand */}
          <div>
            <p className="font-heading font-normal text-lg">
              {COMPANY.name}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Growth & paywall designs for consumer apps.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <p className="font-heading font-normal text-sm mb-3">Quick Links</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="#framework"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Framework
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p className="font-heading font-normal text-sm mb-3">Contact</p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          &copy; 2026 {COMPANY.legalName} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
