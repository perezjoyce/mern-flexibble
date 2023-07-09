import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src="/logo-purple.svg" width={116} height={38} alt="logo" />

          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is a fantastic community for devs to showcase their work and get hired.
          </p>
        </div>

        <div className="text-sm footer_copyright">
          <p>@ 2023 Flexibble. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer