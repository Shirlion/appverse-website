import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with AppVerse.",
};

export default function ContactPage() {
  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-bold mb-2">Contact</h1>
      <p className="text-gray-400 mb-6">
        For press, support, or partnerships. You can also email{" "}
        <a className="text-sky-400" href="mailto:contact@appverse.com">contact@appverse.com</a>.
      </p>
      <ContactForm />
    </section>
  );
}
