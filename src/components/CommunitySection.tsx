import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Heart, 
  Award,
  TrendingUp,
  MessageSquare,
  Star,
  Instagram,
  Facebook,
  Youtube,
  Phone
} from "lucide-react";

const CommunitySection = () => {
  const communityStats = [
    { number: "2,500+", label: "Active Members", icon: Users },
    { number: "15,000+", label: "Orders Completed", icon: Award },
    { number: "95%", label: "Customer Satisfaction", icon: Heart },
    { number: "50+", label: "Cities Covered", icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: "Anjali Gupta",
      role: "Work From Home Tailor",
      city: "Indore",
      rating: 5,
      text: "StitchIT gave me financial independence. I earn ₹25,000 monthly while taking care of my children.",
      avatar: "AG"
    },
    {
      name: "Sunita Devi", 
      role: "Center Manager",
      city: "Lucknow",
      rating: 5,
      text: "From a housewife to managing a team of 12 tailors. StitchIT truly empowers women.",
      avatar: "SD"
    },
    {
      name: "Rekha Sharma",
      role: "Franchise Owner",
      city: "Bhopal", 
      rating: 5,
      text: "My StitchIT franchise has become the talk of the town. Orders are pouring in daily!",
      avatar: "RS"
    },
    {
      name: "Customer - Pooja",
      role: "Regular Customer",
      city: "Mumbai",
      rating: 5,
      text: "Perfect fitting every time! StitchIT tailors understand exactly what we need.",
      avatar: "PK"
    },
    {
      name: "Mamta Jain",
      role: "Student Turned Entrepreneur",
      city: "Jaipur",
      rating: 5,
      text: "Learned advanced tailoring at StitchIT Academy. Now I run my own boutique!",
      avatar: "MJ"
    },
    {
      name: "Customer - Deepika",
      role: "Bride",
      city: "Delhi",
      rating: 5,
      text: "My wedding lehenga was absolutely stunning! Thank you StitchIT for making my day special.",
      avatar: "DV"
    }
  ];

  const socialLinks = [
    { platform: "Instagram", icon: Instagram, followers: "12K", handle: "@stitchit_official" },
    { platform: "Facebook", icon: Facebook, followers: "8K", handle: "StitchIT Tailoring" },
    { platform: "YouTube", icon: Youtube, followers: "5K", handle: "StitchIT Academy" }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-heart/10">
            <Heart className="w-5 h-5 text-maroon" />
            <span className="text-sm font-medium text-maroon">Our Community</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Stories of Empowerment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a thriving community of women who've transformed their lives through tailoring. 
            Every thread tells a story of empowerment, growth, and success.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="inline-flex p-3 rounded-full bg-gold/10 mb-4">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Voices from Our Community
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-soft transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center font-bold text-gold">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.city}</div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Follow Our Journey</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <Card key={index} className="hover:shadow-soft transition-all cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gold/10">
                      <social.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">{social.platform}</h4>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                    <Badge variant="outline">{social.followers}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Join Our Community</h3>
            <Card className="p-6 bg-gradient-elegant">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-gold" />
                  <div>
                    <h4 className="font-semibold text-primary">WhatsApp Community</h4>
                    <p className="text-sm text-muted-foreground">Connect with 1000+ women tailors</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-maroon" />
                  <div>
                    <h4 className="font-semibold text-primary">Monthly Meetups</h4>
                    <p className="text-sm text-muted-foreground">Learn & network in your city</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-gold" />
                  <div>
                    <h4 className="font-semibold text-primary">Recognition Programs</h4>
                    <p className="text-sm text-muted-foreground">Celebrate achievements together</p>
                  </div>
                </div>
                <Button className="w-full" variant="golden">
                  <Phone className="w-4 h-4 mr-2" />
                  Join WhatsApp Group
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-accent rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="mb-6 opacity-90">
            Join thousands of women who've found financial freedom and community through StitchIT
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Users className="w-5 h-5 mr-2" />
              Join Our Community
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <MessageSquare className="w-5 h-5 mr-2" />
              Share Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;