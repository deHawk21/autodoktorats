import React, { useState } from "react";
import { Wrench, Car, Disc, Activity, Clock, ShieldCheck, Phone, Mail, MapPin, Star, CheckCircle2, Award, Users, ThumbsUp, ArrowRight, Calendar, Settings, Menu, X, ChevronRight, ChevronDown, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// Assets
import heroBg from "@assets/generated_images/professional_auto_mechanic_workshop_interior_with_clean_lighting.png"; 
import mechanicBg from "@assets/generated_images/close_up_of_auto_mechanic_hands_working_on_a_car_engine_with_professional_tools.png";
// Updated assets for restoration
import restorationBefore1 from "@assets/WhatsApp_Image_2025-12-04_at_20.19.11_1764929640658.jpeg";
import restorationBefore2 from "@assets/WhatsApp_Image_2025-12-04_at_20.19.07_1764929640658.jpeg";
import restorationAfterVideo from "@assets/c83c1024-1036-45a0-b320-3d9b4921594c_1764929640655.MP4";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      
      {/* Top Bar (Accustoms style) */}
      <div className="bg-brand-dark text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+37125883638" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>+371 25883638</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Kalna iela 2a, Sigulda, LV-2150</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <span>P - Pk: 9:00 - 18:00</span>
             <span className="text-brand-accent font-bold">S-Sv: Pēc pieprasījuma</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur shadow-md border-b border-gray-100">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-brand-dark p-2 rounded text-white">
              <Wrench className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold uppercase tracking-wider text-brand-dark leading-none">
                Auto Doktorāts
              </span>
              <span className="text-xs text-gray-500 font-bold tracking-widest uppercase">Sigulda</span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8 items-center">
            {["Sākums", "Pakalpojumi", "Priekšrocības", "Atsauksmes", "Kontakti"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace("ā", "a").replace("š", "s").replace("ī", "i").replace("ē", "e"))}
                className="text-sm font-bold text-gray-800 hover:text-brand-accent transition-colors uppercase tracking-wide"
              >
                {item}
              </button>
            ))}
            <Button 
              className="bg-brand-accent hover:bg-orange-600 text-white font-bold uppercase tracking-wider px-6"
              onClick={() => scrollToSection("kontakti")}
            >
              SAZINĀTIES
            </Button>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-8 w-8 text-brand-dark" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-brand-dark text-white border-l-brand-accent">
                <div className="flex flex-col gap-8 mt-10">
                   {["Sākums", "Pakalpojumi", "Priekšrocības", "Atsauksmes", "Kontakti"].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        scrollToSection(item.toLowerCase().replace("ā", "a").replace("š", "s").replace("ī", "i").replace("ē", "e"));
                      }}
                      className="text-2xl font-bold text-left hover:text-brand-accent transition-colors uppercase"
                    >
                      {item}
                    </button>
                  ))}
                  <div className="mt-8 pt-8 border-t border-white/20">
                     <p className="text-brand-accent font-bold mb-2">Darba laiks</p>
                     <p>P - Pk: 9:00 - 18:00</p>
                     <p>S - Sv: Pēc pieprasījuma</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        
        {/* Hero Section - Accustoms style (Bold, Left Aligned text, Image right or bg) */}
        <section id="sakums" className="relative py-20 md:py-32 overflow-hidden bg-gray-900 text-white">
           <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent z-10"></div>
             <img src={heroBg} alt="Workshop" className="w-full h-full object-cover opacity-60" />
           </div>

           <div className="container relative z-20 px-4 md:px-6">
             <div className="max-w-3xl animate-in slide-in-from-left duration-700">
               <div className="inline-block bg-brand-accent px-3 py-1 mb-6 rounded-sm text-sm font-bold uppercase tracking-widest">
                 Sigulda
               </div>
               <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight uppercase italic">
                 Uzticams <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">autoserviss</span> <br/>
                 Siguldā
               </h1>
               
               <div className="flex flex-col gap-2 mb-10 text-lg md:text-xl font-bold text-gray-300">
                 <div className="flex items-center gap-3">
                   <CheckCircle2 className="text-brand-accent h-6 w-6" />
                   <span>Precīza diagnostika un remonts</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <CheckCircle2 className="text-brand-accent h-6 w-6" />
                   <span>Tehniskā palīdzība un konsultācijas</span>
                 </div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4">
                 <Button 
                   size="lg" 
                   className="bg-brand-accent hover:bg-orange-600 text-white text-lg px-10 py-7 uppercase font-bold rounded-none skew-x-[-10deg] hover:skew-x-0 transition-transform"
                   onClick={() => window.location.href = "tel:+37120000000"}
                 >
                   <span className="skew-x-[10deg] group-hover:skew-x-0 inline-block">Zvanīt Tagad</span>
                 </Button>
                 <Button 
                   size="lg" 
                   variant="outline" 
                   className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-dark text-lg px-10 py-7 uppercase font-bold rounded-none skew-x-[-10deg] hover:skew-x-0 transition-transform"
                   onClick={() => scrollToSection("kontakti")}
                 >
                   <span className="skew-x-[10deg] group-hover:skew-x-0 inline-block">Pieteikt Vizīti</span>
                 </Button>
               </div>
             </div>
           </div>
        </section>

        {/* Services Section - "Title +" style */}
        <section id="pakalpojumi" className="py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-8 uppercase italic">
                  Mūsu <span className="text-brand-accent">Pakalpojumi</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Lai dzinēji darbotos nevainojami, mēs izmantojam tikai sertificētas rezerves daļas un eļļas. 
                  Nodrošinām pilnu servisa ciklu no diagnostikas līdz sarežģītiem remontiem.
                </p>
                
                <div className="bg-gray-100 p-8 rounded-xl border-l-4 border-brand-accent">
                  <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Activity className="text-brand-accent" />
                    Mēs piedāvājam:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Eļļas un filtru maiņa",
                      "Ritošās daļas remonts",
                      "Bremžu sistēmas remonts",
                      "Dzesēšanas sistēmas remonts",
                      "Dzinēja diagnostika un remonts",
                      "Elektrosistēmas diagnostika",
                      "Auto virsbūves atjaunošana"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                        <div className="h-2 w-2 bg-brand-accent rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                 {/* Accordion style service cards */}
                 <Accordion type="single" collapsible className="w-full space-y-4">
                   {[
                     {
                       title: "Eļļas maiņa +",
                       content: "Kāpēc automašīnas dzinēja eļļa jānomaina? Regulāra eļļas maiņa nodrošina dzinēja ilgmūžību un efektivitāti. Mēs izmantojam tikai ražotāja ieteiktās eļļas.",
                       gradient: "from-blue-600 to-blue-800"
                     },
                     {
                       title: "Dzinēja remonts +",
                       content: "Dzinēja kapitālais un tekošais remonts. Jaudas zudums? Dūmi? Dīvainas skaņas? Mūsu meistari atradīs un novērsīs cēloni.",
                       gradient: "from-orange-500 to-red-600"
                     },
                     {
                       title: "Savirzes regulēšana +",
                       content: "Automašīna ir nestabila uz ceļa? Riepas nodilst nevienmērīgi? Precīza savirzes regulēšana uzlabo vadāmību un ietaupa degvielu.",
                       gradient: "from-gray-700 to-gray-900"
                     },
                     {
                        title: "Bremžu sistēma +",
                        content: "Jūsu drošība ir prioritāte. Bremžu kluču, disku maiņa, suportu profilakse un bremžu šķidruma maiņa.",
                        gradient: "from-brand-dark to-blue-900"
                     },
                     {
                        title: "Auto virsbūves atjaunošana +",
                        content: (
                          <div className="space-y-8">
                            <p className="text-gray-700 leading-relaxed">
                              Virsbūves remonts un metināšanas darbi. Mēs veicam sarežģītus virsbūves atjaunošanas darbus, 
                              izgriežot korozijas bojātās vietas un iemetinot jaunu metālu, pēc tam veicot kvalitatīvu apstrādi.
                              Zemāk redzams reāls piemērs no mūsu darbnīcas.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                               <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-black/10 cursor-pointer shadow-lg" onClick={() => window.open(restorationBefore1, '_blank')}>
                                  <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1.5 rounded z-10 shadow-md">Pirms</div>
                                  <img src={restorationBefore1} alt="Pirms remonta 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                               </div>
                               <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-black/10 cursor-pointer shadow-lg" onClick={() => window.open(restorationBefore2, '_blank')}>
                                  <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1.5 rounded z-10 shadow-md">Pirms</div>
                                  <img src={restorationBefore2} alt="Pirms remonta 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                               </div>
                               <div className="relative group overflow-hidden rounded-2xl aspect-video bg-black md:col-span-2 shadow-2xl border-2 border-gray-900">
                                  <div className="absolute top-4 left-4 bg-green-600 text-white text-sm font-bold px-3 py-1.5 rounded z-10 shadow-md animate-pulse">Pēc (Rezultāts)</div>
                                  <video src={restorationAfterVideo} className="w-full h-full object-cover" controls autoPlay loop muted playsInline />
                               </div>
                            </div>
                          </div>
                        ),
                        gradient: "from-green-600 to-green-800"
                     }
                   ].map((service, i) => (
                     <AccordionItem key={i} value={`item-${i}`} className="border-none rounded-lg overflow-hidden shadow-lg">
                       <AccordionTrigger className={`px-6 py-6 hover:no-underline bg-gradient-to-r ${service.gradient} text-white data-[state=open]:text-white`}>
                         <span className="text-xl font-bold uppercase tracking-wide">{service.title}</span>
                       </AccordionTrigger>
                       <AccordionContent className="bg-gray-50 px-6 py-6 text-gray-600 text-lg leading-relaxed border border-t-0 border-gray-200">
                         {service.content}
                       </AccordionContent>
                     </AccordionItem>
                   ))}
                 </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section - List Style */}
        <section id="prieksrocibas" className="py-24 bg-gray-50">
           <div className="container px-4 md:px-6 mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-brand-accent rounded-tr-[50px] rounded-bl-[50px] opacity-20"></div>
                  <img 
                    src={mechanicBg} 
                    alt="Why us" 
                    className="relative z-10 rounded-tr-[50px] rounded-bl-[50px] shadow-2xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-8 uppercase italic">
                    Kāpēc izvēlēties <br/><span className="text-brand-accent">Mūs?</span>
                  </h2>
                  
                  <div className="space-y-6">
                    {[
                      { title: "10 gadu pieredze", desc: "Uzkrāta pieredze un zināšanas garantē kvalitāti." },
                      { title: "Precīza diagnostika", desc: "Moderns aprīkojums kļūdu noteikšanai." },
                      { title: "Godīgas un caurspīdīgas cenas", desc: "Nekādu slēpto izmaksu, viss tiek saskaņots." },
                      { title: "Ātri reaģējam", desc: "Cienām Jūsu laiku un mobilitāti." },
                      { title: "Elastīgs darba laiks", desc: "Pielāgojamies klientu vajadzībām." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="h-12 w-12 bg-white border-2 border-brand-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors shadow-sm">
                           <span className="font-bold text-lg">{i + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-accent transition-colors">{item.title}</h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
           </div>
        </section>

        {/* Testimonials - "Klienti mūs novērtē" */}
        <section id="atsauksmes" className="py-24 bg-brand-dark text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12"></div>
           
           <div className="container px-4 md:px-6 mx-auto relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div>
                 <div className="flex items-center gap-2 mb-4 text-yellow-400">
                   <Star className="fill-yellow-400 h-6 w-6" />
                   <Star className="fill-yellow-400 h-6 w-6" />
                   <Star className="fill-yellow-400 h-6 w-6" />
                   <Star className="fill-yellow-400 h-6 w-6" />
                   <Star className="fill-yellow-400 h-6 w-6" />
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black uppercase italic">
                   Klienti mūs <span className="text-brand-accent">novērtē</span>
                 </h2>
               </div>
               <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark uppercase font-bold">
                 Lasīt visas atsauksmes Google
               </Button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 {
                   text: "Ļoti laipns un atsaucīgs meistars. Jūnija sākumā neizgāju skati, meistars piedāvāja novērst trūkumus. Vienojāmies par datumu, bet tika pat ātrāk.",
                   name: "Jānis Bērziņš",
                   car: "Audi A6"
                 },
                 {
                   text: "Great, fast service with affordable prices! My car broke at 2am near Sigulda, they helped me out immediately. Strongly recommend!",
                   name: "Normunds Blumbergs",
                   car: "Volvo XC90"
                 },
                 {
                   text: "Ļoti laipns un labsirdīgs cilvēks ar zelta rokām! Elastīgs darba laiks. Rūpīgs un atbildīgs darbs ar elektroniku.",
                   name: "Terēze",
                   car: "BMW 320"
                 }
               ].map((review, i) => (
                 <Card key={i} className="bg-white/10 border-none text-white backdrop-blur-md rounded-xl overflow-hidden">
                   <CardContent className="p-8 relative">
                     <div className="absolute top-4 right-4 text-brand-accent opacity-20">
                       <Star className="h-16 w-16 fill-white" />
                     </div>
                     <p className="italic text-gray-300 mb-6 leading-relaxed relative z-10">"{review.text}"</p>
                     <div className="border-t border-white/10 pt-4">
                       <p className="font-bold text-brand-accent uppercase">{review.name}</p>
                       <p className="text-xs text-gray-400">{review.car}</p>
                     </div>
                   </CardContent>
                 </Card>
               ))}
             </div>
           </div>
        </section>

        {/* Contact Section - Split Layout */}
        <section id="kontakti" className="bg-white">
           <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
             
             {/* Form Side */}
             <div className="p-12 md:p-24 flex flex-col justify-center bg-gray-50">
               <h2 className="text-4xl font-black text-brand-dark mb-2 uppercase italic">Sazinies ar mums</h2>
               <p className="text-gray-600 mb-8">Vieta Jūsu atsauksmei vai jautājumam!</p>
               
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="space-y-2">
                   <Label className="font-bold uppercase text-xs tracking-wider text-gray-500">Vārds*</Label>
                   <Input className="bg-white border-gray-200 h-12 focus:border-brand-accent transition-colors" />
                 </div>
                 <div className="space-y-2">
                   <Label className="font-bold uppercase text-xs tracking-wider text-gray-500">E-pasts</Label>
                   <Input className="bg-white border-gray-200 h-12 focus:border-brand-accent transition-colors" />
                 </div>
                 <div className="space-y-2">
                   <Label className="font-bold uppercase text-xs tracking-wider text-gray-500">Vieta atsauksmei vai jautājumam*</Label>
                   <Textarea className="bg-white border-gray-200 min-h-[150px] focus:border-brand-accent transition-colors" />
                 </div>
                 <Button className="w-full bg-brand-accent hover:bg-orange-600 text-white font-bold uppercase py-6 tracking-wider text-lg rounded-none skew-x-[-5deg]">
                   <span className="skew-x-[5deg]">Nosūtīt</span>
                 </Button>
               </form>
             </div>

             {/* Map/Info Side */}
             <div className="bg-gray-900 text-white relative flex flex-col justify-center p-12 md:p-24">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
               
               <div className="relative z-10 space-y-10">
                 <div>
                   <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider text-brand-accent">Atrodi mūs</h3>
                   <div className="space-y-4 text-lg">
                     <div className="flex items-start gap-4">
                       <MapPin className="text-brand-accent h-6 w-6 mt-1" />
                       <p>Kalna iela 2a, Sigulda, LV-2150</p>
                     </div>
                     <div className="flex items-center gap-4">
                       <Phone className="text-brand-accent h-6 w-6" />
                       <a href="tel:+37125883638" className="hover:text-brand-accent transition-colors">+371 25883638</a>
                     </div>
                     <div className="flex items-center gap-4">
                       <Mail className="text-brand-accent h-6 w-6" />
                       <a href="mailto:autodoktorats@inbox.lv" className="hover:text-brand-accent transition-colors">autodoktorats@inbox.lv</a>
                     </div>
                   </div>
                 </div>

                 <div className="w-full h-[250px] bg-gray-800 rounded-xl overflow-hidden border-4 border-gray-700 grayscale hover:grayscale-0 transition-all">
                   <iframe 
                     width="100%" 
                     height="100%" 
                     title="Google Maps Location"
                     frameBorder="0" 
                     scrolling="no" 
                     marginHeight={0} 
                     marginWidth={0} 
                     src="https://maps.google.com/maps?q=Kalna+iela+2a,+Sigulda,+LV-2150&t=&z=15&ie=UTF8&iwloc=&output=embed"
                     className="w-full h-full"
                   ></iframe>
                 </div>
               </div>
             </div>

           </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-2">
             <Wrench className="h-5 w-5 text-brand-accent" />
             <span className="font-bold uppercase tracking-wider">Auto Doktorāts © {new Date().getFullYear()}</span>
           </div>
           <div className="text-gray-500 text-sm">
             Made by <span className="text-white font-bold">Replit Agent</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
