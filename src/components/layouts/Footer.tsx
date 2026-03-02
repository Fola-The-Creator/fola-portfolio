import { SectionDiv } from "./SectionDiv";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-grey-50 py-12">
      <SectionDiv>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-grey-500 text-sm tracking-wide">
            © {year} Fola The Creator. All rights reserved.
          </div>

          <div className="text-grey-500 text-sm tracking-wide">
            Built with <span className="text-grey-900">Next.js</span> +{" "}
            <span className="text-grey-900">Tailwind CSS</span>
          </div>
        </div>
      </SectionDiv>
    </footer>
  );
}
