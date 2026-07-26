import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { notFoundPage } from "@/content/portfolio";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60svh] flex-col items-start justify-center py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {notFoundPage.heading}
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">{notFoundPage.body}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/">Return home</Button>
        <Button href="/work" variant="secondary">
          View selected work
        </Button>
      </div>
    </Container>
  );
}
