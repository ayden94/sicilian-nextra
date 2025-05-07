import metadata from "../../metadata";

export async function generateMetadata() {
  return {...metadata("ko")};
}

export default function Layout({ children }) {
  return (
    <>{children}</>
  );
}