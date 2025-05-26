import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Palette,
  Code,
  Megaphone,
  Calendar,
  MapPin,
  Mail,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ExternalLink,
  Star,
  Heart,
  Zap,
  Target,
  Clock,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

export default function GDGBabcockLanding() {
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Students",
      description: "Connect with like-minded peers and build lasting friendships in tech",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Designers",
      description: "Explore UI/UX design principles and create beautiful digital experiences",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Developers",
      description: "Learn cutting-edge technologies and build real-world applications",
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Leaders",
      description: "Develop leadership skills by organizing events and mentoring others",
    },
  ]

  const upcomingEvents = [
    {
      title: "Designer x Developer Hackathon",
      date: "May 28, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual",
      description:
        "We are thrilled to announce the Designer x Developer Hackathon 2025! A hackathon by the GDG Babcock University Product Design Track and Frontend Track.",
      status: "Registration Open",
      registrationLink: "https://forms.gle/2qs1QXwxairSMC819",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/PHOTO-2025-05-25-11-39-59_HsGSi0Z.jpeg",
    },
    {
      title: "Flutter Workshop Series",
      date: "June 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab 3",
      description: "Learn to build cross-platform mobile apps with Flutter",
      status: "Coming Soon",
      registrationLink: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const pastEvents = [
    {
      title: "Building an LLM and RAG-based chat application using AlloyDB AI and LangChain",
      date: "May 24, 2025",
      type: "Speaker Session / Tech Talk",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/PHOTO-2025-05-24-14-07-21_b63Zsyo.jpeg",
      attendees: "85+",
      location: "GDG on Campus Babcock University - Ilishan-Remo, Nigeria",
    },
    {
      title: "An evening with the Leads/Co-leads: Past and Present",
      date: "Apr 20, 2025",
      type: "Speaker Session / Tech Talk",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/PHOTO-2025-04-19-08-17-10_xBZnhoo.jpeg",
      attendees: "120+",
      location: "GDG on Campus Babcock University - Ilishan-Remo, Nigeria",
    },
    {
      title: "Day in the life of a data scientist",
      date: "Apr 6, 2025",
      type: "Speaker Session / Tech Talk",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/PHOTO-2025-04-05-15-29-48_RQ7Su6N.jpeg",
      attendees: "95+",
      location: "GDG on Campus Babcock University - Ilishan-Remo, Nigeria",
    },
    {
      title: "Cowrywise x GDG Babcock Skill Acquisition Programme",
      date: "Mar 2, 2025",
      type: "Speaker Session / Tech Talk",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Kems%201_A9fZJ5L.png",
      attendees: "150+",
      location: "GDG on Campus Babcock University - Ilishan-Remo, Nigeria",
    },
  ]

  const organizers = [
    {
      name: "Chukwuneku Akpotohwo",
      role: "Organizer",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/chukwuneku_akpotohwo_Rq84vnj.jpg",
      bio: "Organizer dedicated to building impactful and inclusive tech experiences.",
    },
    {
      name: "Ryan Offiong",
      role: "Event Manager",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/ryan_offiong_DIZ280p.jpg",
      bio: "Event Manager passionate about tech, design, and community-driven experiences.",
    },
    {
      name: "Opeseitan oyinkansola",
      role: "Assistant Event Manager",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/contentbuilder/GDG-Bevy-DefaultProfile_xY7OLAZ.png",
      bio: "Assistant Event Manager focused on seamless coordination of developer and design events.",
    },
    {
      name: "Favour Ajao-Rotimi",
      role: "Media and Marketing Co-Lead",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/favour_ajao-rotimi.jpg",
      bio: "Media and Marketing Co-Lead crafting stories and visuals that power tech community growth.",
    },
    {
      name: "Chibueze Muoneke",
      role: "Co-Organizer",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/contentbuilder/GDG-Bevy-DefaultProfile_xY7OLAZ.png",
      bio: "Co-Organizer collaborating to bring innovative tech experiences to life.",
    },
  ]

  const partners = [
    {
      name: "Datacamp donates",
      logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/sponsors/DC_Donates_logo_regular_x575jut.png",
    },
    {
      name: "Pallax",
      logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/sponsors/blob_XgGbIcr",
    },
    { name: "Google Developer Group", logo: "https://i.postimg.cc/8PC2YHpz/gdg.jpg" },
    { name: "Vercel", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Firebase", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Android", logo: "/placeholder.svg?height=60&width=120" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Registration Open":
        return "bg-green-100 text-green-800"
      case "Coming Soon":
        return "bg-blue-100 text-blue-800"
      case "Save the Date":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getButtonText = (status: string) => {
    switch (status) {
      case "Registration Open":
        return "Register Now"
      case "Coming Soon":
        return "Get Notified"
      case "Save the Date":
        return "Save the Date"
      default:
        return "Learn More"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/gdg-logo.png"
              alt="Google Developer Groups"
              width={200}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link href="#events" className="text-gray-600 hover:text-blue-500 transition-colors">
              Events
            </Link>
            <Link href="#team" className="text-gray-600 hover:text-blue-500 transition-colors">
              Team
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">
              Contact
            </Link>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600">Join Us</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gdg-hero-banner.png"
            alt="GDG Babcock Hero Banner"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="container mx-auto text-center max-w-4xl relative z-10 bg-black/30 rounded-2xl p-8 backdrop-blur-sm">
          <AnimatedSection animation="fadeIn" delay={200}>
            <div className="mb-6 flex justify-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-100 shadow-lg"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-200 shadow-lg"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-300 shadow-lg"></div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideInUp" delay={400}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Welcome to <span className="text-white">GDG On Campus</span>
              <br />
              <span className="text-blue-200">Babcock University</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="slideInUp" delay={600}>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              A community of student developers, designers, and builders shaping the future of tech through
              collaboration, learning, and innovation.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="slideInUp" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 shadow-lg">
                <Users className="mr-2 h-5 w-5" />
                Become a Member
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 backdrop-blur-sm"
              >
                <Calendar className="mr-2 h-5 w-5" />
                View Events
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              👋 Welcome to GDG On Campus – Babcock University
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="slideInUp" delay={200}>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We're a student-led tech community where anyone can learn, build, and grow — no matter your department or
              background.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At GDG On Campus, we focus on hands-on learning, collaboration, and real impact. Ready to join? Just hit
              the "JOIN US" button, hop into our{" "}
              <Link
                href="https://chat.whatsapp.com/JSfDzzCfiuI5WKHf4U5xzb"
                className="text-blue-500 hover:text-blue-600 underline"
              >
                WhatsApp group
              </Link>
              , and find the team that fits you best.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Got questions? Reach out at{" "}
              <Link href="mailto:gdscbabcock@gmail.com" className="text-blue-500 hover:text-blue-600 underline">
                gdscbabcock@gmail.com
              </Link>{" "}
              or DM us on social — we've got your back.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
              Let's make awesome things happen together! 🚀
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AnimatedSection animation="scaleIn" delay={300}>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-blue-500" />
                </div>
                <span className="text-sm font-medium text-gray-700">Learning</span>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scaleIn" delay={400}>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-red-500" />
                </div>
                <span className="text-sm font-medium text-gray-700">Community</span>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scaleIn" delay={500}>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Innovation</span>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scaleIn" delay={600}>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-green-500" />
                </div>
                <span className="text-sm font-medium text-gray-700">Growth</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Built for Every Tech Enthusiast
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="slideInUp" delay={index * 150}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Upcoming Events */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <AnimatedSection animation="fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                <p className="text-lg text-gray-600">Don't miss out on these exciting learning opportunities</p>
              </AnimatedSection>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {upcomingEvents.map((event, index) => (
                <AnimatedSection key={index} animation="slideInUp" delay={index * 150}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="relative">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className={`absolute top-3 right-3 ${getStatusColor(event.status)}`}>{event.status}</Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">{event.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                      <Link href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        <Button
                          className="w-full mt-4"
                          variant={event.status === "Registration Open" ? "default" : "outline"}
                          disabled={event.status === "Save the Date"}
                        >
                          {getButtonText(event.status)}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <div className="text-center mb-12">
              <AnimatedSection animation="fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
                <p className="text-lg text-gray-600">Highlights from our community gatherings and workshops</p>
              </AnimatedSection>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {pastEvents.map((event, index) => (
                <AnimatedSection key={index} animation="slideInUp" delay={index * 100}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="relative">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-3 right-3 bg-white text-gray-700">{event.attendees}</Badge>
                    </div>
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {event.date}
                      </div>
                      <p className="text-sm font-medium text-blue-600 mb-2">{event.type}</p>
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm leading-tight">{event.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{event.location}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection animation="fadeIn" delay={400}>
              <div className="text-center">
                <Button variant="outline" size="lg">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View All Highlights
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section id="team" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <AnimatedSection animation="fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
              <p className="text-lg text-gray-600">The passionate individuals driving our community forward</p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizers.map((organizer, index) => (
              <AnimatedSection key={index} animation="scaleIn" delay={index * 150}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <Image
                        src={organizer.image || "/placeholder.svg"}
                        alt={organizer.name}
                        width={150}
                        height={150}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{organizer.name}</h3>
                    <p className="text-blue-500 font-medium mb-3">{organizer.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{organizer.bio}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <AnimatedSection animation="fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
              <p className="text-lg text-gray-600">Supported by industry leaders and tech innovators</p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <AnimatedSection key={index} animation="fadeIn" delay={index * 100}>
                <div className="text-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <AnimatedSection animation="slideInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Movement?</h2>
          </AnimatedSection>
          <AnimatedSection animation="slideInUp" delay={200}>
            <p className="text-xl mb-8 opacity-90">
              Be part of a community that's building the future of technology, one project at a time.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="slideInUp" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900 border-0" />
              <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100">
                <Mail className="mr-2 h-5 w-5" />
                Register Now
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={600}>
            <p className="text-sm mt-4 opacity-75">Join 200+ students already part of our community</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/gdg-logo.png"
                  alt="Google Developer Groups"
                  width={200}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Building the next generation of tech leaders through community, learning, and innovation at Babcock
                University.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com/googledevgroups"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/showcase/community-groups-program-gdg/about/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://www.youtube.com/gdgs" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Babcock University, Ogun State
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  gdscbabcock@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 GDG On Campus Babcock University. Built with 💙 by{" "}
              <a
                href="https://github.com/byralax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Byralax
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
