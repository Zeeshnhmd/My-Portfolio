import { Container } from "@/components/ui/container";
import { Metric } from "@/components/ui/metric";
import { credibilityMetrics } from "@/content/portfolio";

export function CredibilityMetrics() {
  return (
    <section aria-label="Credibility metrics" className="border-b border-border py-12">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {credibilityMetrics.map((metric) => (
            <Metric key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
