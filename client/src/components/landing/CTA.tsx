import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function CTA() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Launch Plan Sent!",
      description: "Check your email for your 30-day launch checklist.",
    });
    form.reset();
  }

  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Launch Without the Chaos?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join 100+ founders who launched faster, cheaper, and better. Get your free 30-day launch checklist today.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-2 rounded-full max-w-md mx-auto border border-white/20">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input 
                          placeholder="Enter your email address" 
                          {...field} 
                          className="bg-transparent border-none text-white placeholder:text-blue-200 focus-visible:ring-0 focus-visible:ring-offset-0 h-12 pl-6"
                        />
                      </FormControl>
                      {/* <FormMessage className="absolute -bottom-6 left-6" /> */}
                    </FormItem>
                  )}
                />
                <Button type="submit" className="rounded-full bg-accent text-primary hover:bg-accent/90 font-bold px-8 h-12">
                  Get Checklist
                </Button>
              </form>
            </Form>
          </div>
          <p className="text-xs text-blue-300 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
