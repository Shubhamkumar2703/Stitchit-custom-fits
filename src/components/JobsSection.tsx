import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  IndianRupee,
  Home,
  Building2,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Heart,
  Target
} from "lucide-react";

const JobsSection = () => {
  const jobOpportunities = [
    {
      title: "Work From Home Tailor",
      location: "Anywhere in India",
      type: "Remote",
      salary: "₹15,000 - ₹35,000/month",
      description: "Stitch garments from the comfort of your home. We provide orders, you deliver quality.",
      requirements: [
        "StitchIT certification or 2+ years experience",
        "Own sewing machine & basic tools",
        "Quality finishing skills",
        "Timely delivery commitment"
      ],
      benefits: [
        "Flexible working hours",
        "Regular order supply",
        "Weekly payments",
        "Material pickup & delivery"
      ],
      icon: Home,
      popular: true
    },
    {
      title: "StitchIT Center Tailor",
      location: "Mumbai, Delhi, Bangalore, Pune",
      type: "Full-time",
      salary: "₹18,000 - ₹45,000/month",
      description: "Join our growing network of StitchIT centers in major cities across India.",
      requirements: [
        "Advanced tailoring certification",
        "3+ years professional experience", 
        "Team collaboration skills",
        "Quality control expertise"
      ],
      benefits: [
        "Fixed monthly salary",
        "Health insurance",
        "Skill development programs",
        "Career growth opportunities"
      ],
      icon: Building2,
      popular: false
    },
    {
      title: "Franchise Partner",
      location: "Tier 2 & Tier 3 Cities",
      type: "Partnership", 
      salary: "₹50,000 - ₹2,00,000/month",
      description: "Start your own StitchIT franchise and build a tailoring business in your city.",
      requirements: [
        "StitchIT master certification",
        "Business investment capacity",
        "Local market knowledge",
        "Team management skills"
      ],
      benefits: [
        "Complete business setup support",
        "Brand recognition & marketing",
        "Continuous order flow",
        "Profit sharing model"
      ],
      icon: TrendingUp,
      popular: false
    }
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      city: "Jaipur",
      role: "Work From Home Tailor",
      income: "₹28,000/month",
      quote: "StitchIT changed my life. I can work while taking care of my family.",
      image: "PS"
    },
    {
      name: "Meera Patel", 
      city: "Ahmedabad",
      role: "Center Manager",
      income: "₹42,000/month",
      quote: "From student to manager in just 2 years. StitchIT believes in women empowerment.",
      image: "MP"
    },
    {
      name: "Kavitha Reddy",
      city: "Hyderabad", 
      role: "Franchise Owner",
      income: "₹1,20,000/month",
      quote: "My StitchIT franchise employs 15 women in my neighborhood.",
      image: "KR"
    }
  ];

  const joinProcess = [
    { step: 1, title: "Apply Online", desc: "Fill application form" },
    { step: 2, title: "Skill Assessment", desc: "Practical & interview" },
    { step: 3, title: "Training Program", desc: "StitchIT certification" },
    { step: 4, title: "Start Earning", desc: "Begin your journey" }
  ];

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-maroon/10">
            <Briefcase className="w-5 h-5 text-maroon" />
            <span className="text-sm font-medium text-maroon">Career Opportunities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            From Learners to Earners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join India's largest network of women tailors. Build your career, earn good income, 
            and empower other women in your community.
          </p>
        </div>

        {/* Job Opportunities */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {jobOpportunities.map((job, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 relative">
              {job.popular && (
                <Badge className="absolute -top-2 left-4 bg-maroon text-white z-10">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gold/10">
                    <job.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-primary mb-1">
                      {job.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {job.description}
                </p>
                
                <div className="flex items-center gap-2 text-lg font-bold text-gold">
                  <IndianRupee className="w-5 h-5" />
                  {job.salary}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-2">Requirements:</h4>
                  <div className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-3 h-3 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-2">Benefits:</h4>
                  <div className="space-y-1">
                    {job.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Heart className="w-3 h-3 text-maroon flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full group-hover:bg-gold group-hover:text-primary transition-all"
                  variant={job.popular ? "golden" : "outline"}
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-2xl font-bold text-gold mx-auto mb-4">
                    {story.image}
                  </div>
                  <h4 className="font-semibold text-primary mb-1">{story.name}</h4>
                  <div className="text-sm text-muted-foreground mb-2">
                    {story.role} • {story.city}
                  </div>
                  <div className="text-lg font-bold text-gold mb-3">{story.income}</div>
                  <p className="text-sm text-muted-foreground italic">
                    "{story.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Process */}
        <div className="bg-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            How to Join StitchIT Network
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {joinProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gold text-primary font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {process.step}
                </div>
                <h4 className="font-semibold text-primary mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
                {index < joinProcess.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gold mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="golden" size="lg">
              <Target className="w-5 h-5 mr-2" />
              Start Application
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;