import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Award,
  Video,
  FileText,
  Star,
  CheckCircle,
  BookOpen,
  TrendingUp
} from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      title: "Basic Tailoring Foundation",
      level: "Beginner",
      duration: "4 weeks",
      price: "₹2,999",
      rating: 4.8,
      students: 150,
      description: "Learn fundamental tailoring skills from cutting to basic stitching",
      features: [
        "Hand stitching basics",
        "Pattern making fundamentals", 
        "Measuring techniques",
        "Basic alterations"
      ],
      popular: false
    },
    {
      title: "Advanced Blouse & Saree Tailoring",
      level: "Intermediate",
      duration: "6 weeks", 
      price: "₹4,999",
      rating: 4.9,
      students: 95,
      description: "Master the art of perfect-fitting blouses and saree draping",
      features: [
        "Different blouse styles",
        "Perfect fitting techniques",
        "Advanced stitching methods",
        "Finishing & quality control"
      ],
      popular: true
    },
    {
      title: "Bridal Wear & Embroidery",
      level: "Advanced",
      duration: "8 weeks",
      price: "₹7,999", 
      rating: 4.9,
      students: 67,
      description: "Create stunning bridal lehengas, suits with traditional embroidery",
      features: [
        "Bridal lehenga construction",
        "Heavy work techniques",
        "Zardozi & thread work",
        "Beading & embellishments"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Video,
      title: "Live & Recorded Classes", 
      description: "Interactive sessions with lifetime access to recordings"
    },
    {
      icon: Award,
      title: "StitchIT Certification",
      description: "Get certified and join our network of professional tailors"
    },
    {
      icon: TrendingUp,
      title: "Career Opportunities",
      description: "Job placement assistance in StitchIT centers or work-from-home"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a community of 500+ women entrepreneurs"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gold/10">
            <GraduationCap className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-gold">StitchIT Academy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Learn. Earn. Empower.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your passion for stitching into a thriving career. Learn from expert masters 
            and join India's fastest-growing tailoring network.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 relative">
              {course.popular && (
                <Badge className="absolute -top-2 left-4 bg-gold text-primary z-10">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {course.level}
                  </Badge>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      {course.students} students
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-xl text-primary mb-2">
                  {course.title}
                </CardTitle>
                
                <p className="text-muted-foreground text-sm">
                  {course.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-1 text-maroon">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="text-2xl font-bold text-gold">
                    {course.price}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary text-sm">What you'll learn:</h4>
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full group-hover:bg-gold group-hover:text-primary transition-all"
                  variant={course.popular ? "golden" : "outline"}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex p-3 rounded-full bg-gold/10 mb-4">
                <benefit.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-primary mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-accent rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Tailoring Journey?</h3>
          <p className="mb-6 opacity-90">
            Join 500+ women who've transformed their lives through StitchIT Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Video className="w-5 h-5 mr-2" />
              Book Free Demo Class
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <FileText className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;