import React from 'react';

const ReferencePage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <main className="h-full flex flex-col p-4 md:pb-6 md:pt-6 items-center">
    <section className="w-full md:h-full max-w-320 flex flex-col-reverse md:flex-row justify-center items-start gap-8">
      {children}
    </section>
  </main>
);

export default ReferencePage;
