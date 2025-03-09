import Footer from "../components/Footer/Footer.tsx";
import PageHeader from "../components/PageHeader/PageHeader.tsx";

export default function Newsletter() {
  return (
    <>
      <PageHeader title="Newsletter">
        <p>
          Want to stay updated on my latest articles, coding tutorials, and
          personal adventures? Sign up for my newsletter! It’s a simple way to
          keep track of new posts and occasional coding tips I discover. Just
          drop your email in the sign-up box, and I’ll send you updates whenever
          there’s something new to share.
        </p>
        <p>
          I’d love to have you along for the ride and also hear about your own
          journey!
        </p>
      </PageHeader>
      <Footer />
    </>
  );
}
