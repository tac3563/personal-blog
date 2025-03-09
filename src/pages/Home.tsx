import PageHeader from "../components/PageHeader/PageHeader.tsx";
import Footer from "../components/Footer/Footer.tsx";

export default function Home() {
  return (
    <>
      <PageHeader hasSocialLinks={true} title="Hi, I'm Paulina 👋">
        <p>
          I’m on a journey to become a front-end web developer. I love building
          little projects, trying out new coding techniques, and sharing what I
          learn along the way. When I’m not at my desk, you’ll find me reading,
          hiking through the mountains, or challenging myself on rock-climbing
          walls.
        </p>
        <p>
          I started this blog to document my progress, keep myself accountable,
          and hopefully inspire anyone else who’s learning to code. Welcome to
          my corner of the internet, and thanks for stopping by!
        </p>
      </PageHeader>
      <Footer />
    </>
  );
}
