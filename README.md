# Loan Calculator Landing

Landing page for an online loan. The visitor picks an amount and a term, instantly sees the monthly payment, and submits an application through a validated form.

The interface is in Russian.

## Features

- **Loan calculator.** Amount (10,000–5,000,000 ₽) and term (3–60 months) sliders. The monthly payment, total cost and overpayment are recalculated on the fly with the annuity formula.
- **Application form** in five sections: personal info, contacts, financial info, loan parameters and purpose, with a live monthly payment preview.
- **Validation** with React Hook Form and a Yup schema: names, phone format, email, amount and term limits, minimum income.
- **State management** with Zustand: the store keeps the draft application, loading and error states.
- **Mock submission:** the request is simulated with a delay and returns an application with a generated id.
- Hero and benefits sections, plus a reusable UI kit (Button, Input, Select, Slider) built on Radix UI.

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui · Radix UI · Zustand · React Hook Form · Yup

## Architecture

The code follows [Feature-Sliced Design](https://feature-sliced.design/):

```
src/
├── app/        # Next.js App Router, global styles
├── widgets/    # page blocks: hero, benefits
├── features/   # loan-calculator, application-form, submit-loan
├── entities/   # loan: types and validators
├── shared/     # UI kit, finance helpers, hooks, utils
└── stores/     # Zustand store for loan applications
```

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Author

Jamshidbek Samandarov · [GitHub](https://github.com/Jamshid-1207) · [Telegram](https://t.me/Samandarov_2804)
