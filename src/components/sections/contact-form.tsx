"use client";

import { useActionState, useEffect, useId } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitContactForm, type ContactActionState } from "@/app/actions/contact";
import { contactSection, person } from "@/content/portfolio";

const initialState: ContactActionState = { status: "idle" };

const FIELD_ORDER = ["name", "email", "company", "project", "message"] as const;

function Field({
  id,
  name,
  label,
  type = "text",
  textarea = false,
  rows,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  rows?: number;
  error?: string;
}) {
  const errorId = `${id}-error`;
  const inputClassName =
    "w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]";

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows ?? 4}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={inputClassName}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={inputClassName}
        />
      )}
      {error ? (
        <p id={errorId} className="text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formId = useId();
  const fields = contactSection.form.fields;
  const fieldErrors = state.status === "invalid" ? state.fieldErrors : undefined;

  useEffect(() => {
    if (state.status !== "invalid") return;
    const firstInvalidField = FIELD_ORDER.find((name) => state.fieldErrors[name]);
    if (!firstInvalidField) return;
    document.getElementById(`${formId}-${firstInvalidField}`)?.focus();
  }, [state, formId]);

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      <div aria-hidden="true" className="hidden">
        <label htmlFor={`${formId}-website`}>Leave this field blank</label>
        <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${formId}-name`} name="name" label={fields.name} error={fieldErrors?.name} />
        <Field
          id={`${formId}-email`}
          name="email"
          type="email"
          label={fields.email}
          error={fieldErrors?.email}
        />
      </div>

      <Field id={`${formId}-company`} name="company" label={fields.company} error={fieldErrors?.company} />
      <Field
        id={`${formId}-project`}
        name="project"
        label={fields.project}
        textarea
        rows={3}
        error={fieldErrors?.project}
      />
      <Field
        id={`${formId}-message`}
        name="message"
        label={fields.message}
        textarea
        rows={5}
        error={fieldErrors?.message}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isPending} className="group">
          {isPending ? "Sending..." : contactSection.form.submit}
          <ArrowRight
            aria-hidden="true"
            className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 ${
              isPending ? "translate-x-1" : ""
            }`}
          />
        </Button>

        <div role="status" aria-live="polite" className="text-sm">
          {state.status === "success" ? (
            <p className="text-success">
              Thanks - your message is on its way. I&apos;ll get back to you soon.
            </p>
          ) : null}
          {state.status === "not_configured" ? (
            <p className="text-muted-foreground">
              Message received, but email sending isn&apos;t configured yet. Please reach out directly at{" "}
              <a className="underline" href={`mailto:${person.email}`}>
                {person.email}
              </a>
              .
            </p>
          ) : null}
          {state.status === "error" ? <p className="text-danger">{state.message}</p> : null}
        </div>
      </div>
    </form>
  );
}
