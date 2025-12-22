import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Lightbulb, Target } from "lucide-react";

const teamInfo = {
  name: "Quantum Crew",
  hackathon: "UHACK 4.0",
  problemStatement: "D12-S01",
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4" variant="secondary">
            {teamInfo.hackathon}
          </Badge>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Meet the Team</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We're {teamInfo.name}, a passionate team building solutions to combat misinformation.
          </p>
        </motion.div>

        {/* Team Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <Card className="overflow-hidden">
            <div className="bg-gradient-hero p-8 text-center text-primary-foreground">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground/20">
                <Users className="h-10 w-10" />
              </div>
              <h2 className="mb-2 text-3xl font-bold">{teamInfo.name}</h2>
              <p className="text-primary-foreground/80">Problem Statement: {teamInfo.problemStatement}</p>
            </div>
            <CardContent className="p-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                    <Trophy className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="mb-1 font-bold">Hackathon</h3>
                  <p className="text-sm text-muted-foreground">{teamInfo.hackathon}</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                    <Lightbulb className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="mb-1 font-bold">Focus</h3>
                  <p className="text-sm text-muted-foreground">AI & ML Solutions</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                    <Target className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="mb-1 font-bold">Mission</h3>
                  <p className="text-sm text-muted-foreground">Combat Misinformation</p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-muted/50 p-6">
                <h3 className="mb-3 text-center font-bold">Our Vision</h3>
                <p className="text-center text-muted-foreground">
                  We believe in a world where everyone has access to verified, trustworthy information. 
                  NEWZEE is our contribution to fighting the spread of misinformation and building a 
                  more informed society.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { label: "Hours of Development", value: "48+" },
              { label: "Lines of Code", value: "5000+" },
              { label: "AI Models Used", value: "3" },
              { label: "Cups of Coffee", value: "∞" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border bg-card p-6 text-center"
              >
                <div className="mb-2 text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
