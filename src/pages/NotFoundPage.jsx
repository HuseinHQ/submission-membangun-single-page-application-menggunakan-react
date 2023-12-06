import Lottie from "lottie-react";
import NotFoundAnimation from "../assets/404.json";

export default function NotFoundPage() {
  return (
    <section>
      <Lottie className="w-1/2 mx-auto mt-[10vh]" animationData={NotFoundAnimation} loop={true} />
    </section>
  );
}
