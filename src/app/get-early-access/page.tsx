"use client";

import GetEarlyAccess from "@/components/GetEarlyAccess";
import { Container } from "@/components/ui/container";
import { useRouter } from "next/navigation";

const GetEarlyAccessPage = () => {
  const router = useRouter();

  const handleSuccess = () => {
    // You can add any additional logic here after successful submission
    // For example, redirect after a delay
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-pure-black text-white">
      <Container className="flex items-center justify-center py-10 md:py-16">
        <GetEarlyAccess
          title="Get Early Access"
          description="Simulate your next user, uncover their real needs, and make smarter product decisions instantly."
          onSuccess={handleSuccess}
          className="py-0"
        />
      </Container>
    </div>
  );
};

export default GetEarlyAccessPage;
