import { FormEvent, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

const SimpleContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("idle");
    setErrorMessage("");

    if (!FORMSPREE_ENDPOINT) {
      setErrorMessage("Missing VITE_FORMSPREE_ENDPOINT. Add it in .env and restart the dev server.");
      setSubmitState("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const serverMessage = data?.errors?.[0]?.message ?? "Failed to submit form";
        throw new Error(serverMessage);
      }

      setSubmitState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Unexpected error while sending your message.");
      }
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-20">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-base text-primary max-w-2xl mx-auto">
            Available for internships, collaborations, and creative projects. 
            Let's create something amazing together!!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-soft">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Name</label>
                  <Input 
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name" 
                    className="border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Email</label>
                  <Input 
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Message</label>
                  <Textarea 
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell me about your project..." 
                    className="border-primary/20 focus:border-primary min-h-[120px]"
                    required
                  />
                </div>

                {submitState === "success" && (
                  <p className="text-sm text-green-600">Message sent successfully. Thank you!</p>
                )}

                {submitState === "error" && (
                  <p className="text-sm text-red-600">
                    Message could not be sent. {errorMessage || "Please check your Formspree endpoint and try again."}
                  </p>
                )}
                
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-primary">Let's Connect</h3>
              <p className="text-base text-primary leading-relaxed">
                I’m always happy to connect with people who share an interest in design, technology, and creative projects. 
                As I continue learning and developing my skills, I’m open to opportunities to collaborate, gain experience, and learn from others. 
                If you’d like to discuss a project or simply share ideas, feel free to reach out!!
              </p>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-primary">Find me on</h4>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/TevyTrial" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-primary">GitHub</span>
                </a>
                
                <a 
                  href="http://www.linkedin.com/in/tevy-ho" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-primary">LinkedIn</span>
                </a>
                
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=tevy.cl.ho@gmail.com&su=Portfolio%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-primary">Open Gmail</span>
                </a>
              </div>
            </div>
            
            {/* Availability */}
            <div className="bg-accent/20 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-primary mb-2">Current Status</h4>
              <p className="text-primary text-sm">
                Available for internships, part-time projects and grad jobs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleContactSection;