import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto py-10">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My Next.js Homepage
        </motion.h1>
        <motion.div
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-2">About Us</h2>
              <p className="text-gray-600">
                Learn more about our mission, vision, and the team behind this project.
              </p>
              <Link href="/about">
                <Button className="mt-4">Learn More</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-2">Get Started</h2>
              <p className="text-gray-600">
                Ready to dive in? Check out our resources and guides.
              </p>
              <Link href="/start">
                <Button className="mt-4">Get Started</Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
