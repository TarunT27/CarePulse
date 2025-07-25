import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, MapPin, Star, Stethoscope, Brain, Heart, Eye } from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  location: string;
  availableSlots: string[];
  avatar: string;
  specialtyIcon: React.ElementType;
}

const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "General Medicine",
    rating: 4.8,
    experience: "15 years",
    location: "Downtown Medical Center",
    availableSlots: ["Today 2:00 PM", "Tomorrow 10:00 AM", "Tomorrow 3:00 PM"],
    avatar: "",
    specialtyIcon: Stethoscope
  },
  {
    id: "2", 
    name: "Dr. Michael Chen",
    specialty: "Cardiology",
    rating: 4.9,
    experience: "12 years",
    location: "Heart Care Clinic",
    availableSlots: ["Today 4:00 PM", "Tomorrow 11:00 AM", "Tomorrow 2:00 PM"],
    avatar: "",
    specialtyIcon: Heart
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Psychiatry",
    rating: 4.7,
    experience: "10 years", 
    location: "Mental Health Center",
    availableSlots: ["Tomorrow 9:00 AM", "Tomorrow 1:00 PM", "Day after 10:00 AM"],
    avatar: "",
    specialtyIcon: Brain
  },
  {
    id: "4",
    name: "Dr. David Kim",
    specialty: "Ophthalmology",
    rating: 4.8,
    experience: "18 years",
    location: "Vision Care Institute",
    availableSlots: ["Today 3:00 PM", "Tomorrow 9:00 AM", "Tomorrow 4:00 PM"],
    avatar: "",
    specialtyIcon: Eye
  }
];

export default function ConsultDoctor() {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleBookAppointment = (doctorId: string, slot: string) => {
    setSelectedDoctor(doctorId);
    setSelectedSlot(slot);
    // Here you would typically integrate with a booking system
    alert(`Appointment booked with ${doctors.find(d => d.id === doctorId)?.name} for ${slot}`);
  };

  return (
    <div className="flex-1 p-8 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-accent text-accent-foreground text-sm font-medium shadow-glow">
            👨‍⚕️ Expert Healthcare
          </div>
          <div className="flex items-center justify-center gap-3">
            <Stethoscope className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Expert Consultations
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with verified healthcare professionals and book appointments with top specialists in your area
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {doctors.map((doctor) => {
            const IconComponent = doctor.specialtyIcon;
            return (
              <Card key={doctor.id} className="bg-gradient-card shadow-card border-0 transition-all duration-300 hover:shadow-soft">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={doctor.avatar} alt={doctor.name} />
                      <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{doctor.name}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="h-4 w-4 text-primary" />
                        <CardDescription className="text-base">{doctor.specialty}</CardDescription>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{doctor.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{doctor.experience}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{doctor.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Available Slots
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {doctor.availableSlots.map((slot, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleBookAppointment(doctor.id, slot)}
                          className="justify-start h-auto py-2 px-3"
                        >
                          <Clock className="h-3 w-3 mr-2" />
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <Button 
                      className="w-full"
                      onClick={() => handleBookAppointment(doctor.id, doctor.availableSlots[0])}
                    >
                      Book Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-primary" />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Choose Doctor</h3>
                <p className="text-sm text-muted-foreground">Browse specialists and select the best doctor for your needs</p>
              </div>
              <div className="text-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Book Appointment</h3>
                <p className="text-sm text-muted-foreground">Select an available time slot that works for your schedule</p>
              </div>
              <div className="text-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Get Treatment</h3>
                <p className="text-sm text-muted-foreground">Attend your consultation and receive professional medical care</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}