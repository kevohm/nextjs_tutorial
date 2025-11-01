import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-20 bg-linear-to-br from-muted/40 to-background">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center">
          <p className="text-primary font-semibold mb-2">Get in Touch</p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contact Us for Exceptional Care
          </h2>
          <p className="text-muted-foreground mb-8">
            We're here to address your healthcare needs and answer your
            questions.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
