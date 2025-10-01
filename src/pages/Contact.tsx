import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-center">
            Contact Us
          </h1>
          
          <div className="flex flex-col gap-12 mt-16 max-w-2xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">H.No 16-876, DOOLAPALLY IDA JEEDIMETLA HYDERABAD 55, Telengana</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@kanstarbluechef.com</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
      
      {/* Partnership CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                INTERESTED IN<br />
                PARTNERING WITH<br />
                US?
              </h2>
              <button className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-colors">
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/97b455c6-31ac-4dd5-896a-ca82d36a14e9.png" 
                alt="Partnership Handshake" 
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;