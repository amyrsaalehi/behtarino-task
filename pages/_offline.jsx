import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className="bg-gradient-to-b from-cyan-700 to-cyan-600 w-full h-screen grid place-content-center">
      <div className="container">
        <h1 className="bg-gradient-to-tr text-transparent bg-clip-text from-teal-200 to-teal-300 font-bold text-2xl">
          You are offline click{" "}
          <Link href="/" className="text-white text-3xl">
            Here
          </Link>{" "}
          to go back to home page!
        </h1>
      </div>
    </div>
  );
}
