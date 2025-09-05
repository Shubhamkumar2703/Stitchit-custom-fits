import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  Camera, 
  Download, 
  Ruler, 
  Bot,
  PlayCircle,
  FileText,
  Smartphone
} from "lucide-react";

const MeasurementGuide = () => {
  const measurementSteps = [
    {
      title: "Bust Measurement",
      description: "Measure around the fullest part of your bust",
      videoId: "bust-measurement",
      duration: "2:30"
    },
    {
      title: "Waist Measurement", 
      description: "Measure around your natural waistline",
      videoId: "waist-measurement",
      duration: "1:45"
    },
    {
      title: "Hip Measurement",
      description: "Measure around the fullest part of your hips",
      videoId: "hip-measurement", 
      duration: "2:00"
    },
    {
      title: "Shoulder & Length",
      description: "Shoulder width and garment length measurements",
      videoId: "shoulder-length",
      duration: "3:15"
    }
  ];

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Perfect Fit Guaranteed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get accurate measurements at home with our easy video guides or upcoming AI measurement technology
          </p>
        </div>

        {/* Measurement Options */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Video Guide Option */}
          <Card className="group hover:shadow-elegant transition-all duration-300">
            <CardHeader className="text-center">
              <div className="inline-flex p-4 rounded-full bg-gold/10 mb-4 mx-auto">
                <Video className="w-8 h-8 text-gold" />
              </div>
              <CardTitle className="text-2xl text-primary">Video Guide</CardTitle>
              <p className="text-muted-foreground">
                Step-by-step video tutorials to take accurate measurements at home
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {measurementSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold text-primary font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <PlayCircle className="w-4 h-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{step.duration}</span>
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="golden">
                <PlayCircle className="w-4 h-4 mr-2" />
                Watch All Videos
              </Button>
            </CardContent>
          </Card>

          {/* AI Measurement Option */}
          <Card className="group hover:shadow-elegant transition-all duration-300 relative">
            <Badge className="absolute top-4 right-4 bg-gold text-primary">Coming Soon</Badge>
            <CardHeader className="text-center">
              <div className="inline-flex p-4 rounded-full bg-maroon/10 mb-4 mx-auto">
                <Bot className="w-8 h-8 text-maroon" />
              </div>
              <CardTitle className="text-2xl text-primary">AI Smart Measurement</CardTitle>
              <p className="text-muted-foreground">
                Upload a short video or photos and get instant accurate measurements using AI
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
                  <Camera className="w-6 h-6 text-maroon" />
                  <div>
                    <h4 className="font-semibold text-primary">Upload Photos</h4>
                    <p className="text-sm text-muted-foreground">Front and side view pictures</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
                  <Smartphone className="w-6 h-6 text-maroon" />
                  <div>
                    <h4 className="font-semibold text-primary">AI Processing</h4>
                    <p className="text-sm text-muted-foreground">Advanced body measurement detection</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
                  <Ruler className="w-6 h-6 text-maroon" />
                  <div>
                    <h4 className="font-semibold text-primary">Instant Results</h4>
                    <p className="text-sm text-muted-foreground">Get precise measurements in seconds</p>
                  </div>
                </div>
              </div>
              <Button className="w-full" variant="outline" disabled>
                <Bot className="w-4 h-4 mr-2" />
                Launching Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Downloadable Resources */}
        <div className="text-center">
          <Card className="inline-block p-6 shadow-soft">
            <div className="flex items-center gap-4">
              <FileText className="w-8 h-8 text-gold" />
              <div className="text-left">
                <h3 className="font-semibold text-primary">Measurement Chart & Size Guide</h3>
                <p className="text-muted-foreground text-sm">Download our detailed measurement chart (PDF)</p>
              </div>
              <Button variant="golden" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Guide
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MeasurementGuide;