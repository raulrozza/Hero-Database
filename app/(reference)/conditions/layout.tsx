import { LayoutProps } from '.next/types/app/(reference)/conditions/layout';

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="h-full flex flex-col p-4 md:pb-6 md:pt-6 items-center">
      <section className="w-full md:h-full max-w-320 flex flex-col-reverse md:flex-row justify-center gap-8">
        <div>List</div>

        {children}
      </section>
    </main>
  );
}
