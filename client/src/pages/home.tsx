import React from "react";
import { Wrench, Car, Disc, Activity, Clock, ShieldCheck, Phone, Mail, MapPin, Star, CheckCircle2, Award, Users, ThumbsUp, ArrowRight, Calendar, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// Reusing previously generated assets as they fit the theme perfectly
import heroBg from "@assets/generated_images/professional_auto_mechanic_workshop_interior_with_clean_lighting.png"; 
import mechanicBg from "@assets/generated_images/close_up_of_auto_mechanic_hands_working_on_a_car_engine_with_professional_tools.png";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-brand-dark p-2 rounded text-white">
              <Wrench className="h-6 w-6" />
            </div>
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-brand-dark">
              Auto Doktorāts
            </span>
          </div>
          <nav className="hidden md:flex gap-6 lg:gap-8">
            {["Piedāvājums", "Priekšrocības", "Uzticība", "Process", "Atsauksmes", "Pieteikties"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-").replace("ā", "a").replace("š", "s").replace("ī", "i").replace("ē", "e"))}
                className="text-sm font-bold text-gray-600 hover:text-brand-accent transition-colors uppercase tracking-wide"
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button 
              className="bg-brand-accent hover:bg-orange-600 text-white font-bold uppercase tracking-wider px-6"
              onClick={() => scrollToSection("pieteikties")}
            >
              Pieteikt vizīti
            </Button>
          </div>
          <div className="md:hidden">
             <Button variant="ghost" size="icon" onClick={() => scrollToSection("pieteikties")}>
               <Calendar className="h-6 w-6 text-brand-dark" />
             </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        
        {/* 1. SEKCIJA: “Kas tiek piedāvāts?” */}
        {/* Mērķis: Skaidri definēt pakalpojumu un aicināt uz rīcību */}
        <section id="piedavajums" className="relative h-[750px] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-brand-dark/75 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: `url(${heroBg})`,
            }}
          ></div>
          
          <div className="container relative z-20 px-4 md:px-6 text-center animate-in fade-in zoom-in duration-700 slide-in-from-bottom-4">
            <div className="inline-flex items-center gap-2 bg-brand-accent/90 px-4 py-1.5 mb-8 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
              <Star className="h-4 w-4 fill-white" />
              <span>Profesionāls auto serviss Rīgā</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-2xl font-heading">
              Profesionāls auto serviss – <br/>
              <span className="text-brand-accent">ātri, godīgi, precīzi.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-sans leading-relaxed drop-shadow-md">
              Pilna servisa apkope Jūsu sirdsmieram: eļļas maiņa, bremžu sistēmas remonts, precīza diagnostika, riepu montāža un tehniskā apkope vienuviet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-brand-accent hover:bg-orange-600 text-white text-lg px-10 py-8 uppercase font-bold shadow-xl hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 rounded-xl"
                onClick={() => window.location.href = "tel:+37120000000"}
              >
                <Phone className="mr-2 h-5 w-5" />
                Zvanīt tagad
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/5 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-brand-dark text-lg px-10 py-8 uppercase font-bold transition-all transform hover:-translate-y-1 rounded-xl"
                onClick={() => scrollToSection("pieteikties")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Pieteikt vizīti
              </Button>
            </div>
          </div>
        </section>

        {/* 2. SEKCIJA: “Kā šis piedāvājums atšķiras?” */}
        {/* Mērķis: Izcelt unikālās īpašības un vērtības piedāvājumu */}
        <section id="prieksrocibas" className="py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Kāpēc izvēlēties mūs?</h2>
              <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Mēs neesam tikai serviss – mēs esam Jūsu auto uzticamais partneris.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: Activity, 
                  title: "Precīza diagnostika", 
                  desc: "Izmantojam jaunākās paaudzes diagnostikas iekārtas, lai precīzi noteiktu problēmu un izvairītos no liekiem tēriņiem." 
                },
                { 
                  icon: ShieldCheck, 
                  title: "Godīgas cenas", 
                  desc: "Nekādu slēpto izmaksu. Visas cenas saskaņojam pirms darbu uzsākšanas. Jūs vienmēr zināsiet, par ko maksājat." 
                },
                { 
                  icon: Clock, 
                  title: "Ātrs serviss", 
                  desc: "Sīkākus remontdarbus un apkopes veicam tajā pašā dienā. Cienām Jūsu laiku un mobilitāti." 
                },
                { 
                  icon: Users, 
                  title: "Ģimenes uzņēmums", 
                  desc: "Personīga attieksme un atbildība. Mēs esam vietējais uzņēmums, kam rūp katra klienta apmierinātība." 
                }
              ].map((feature, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-50 hover:bg-white group overflow-hidden">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="mb-6 p-4 bg-white shadow-sm rounded-full group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                      <feature.icon className="h-8 w-8 text-brand-dark group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-brand-dark">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SEKCIJA: “Kāpēc varu uzticēties?” */}
        {/* Mērķis: Sniegt sociālos pierādījumus un garantijas */}
        <section id="uzticiba" className="py-24 bg-brand-dark relative overflow-hidden text-white">
          {/* Background texture/image overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-brand-accent text-white px-3 py-1 mb-6 rounded text-sm font-bold uppercase tracking-wider">
                  Mūsu Reputācija
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Pieredze, kas runā pati par sevi
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Mēs esam nozarē jau vairāk nekā 15 gadus. Mūsu komanda sastāv no sertificētiem meistariem, kuri regulāri papildina zināšanas par jaunākajām auto tehnoloģijām.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-4xl font-bold text-brand-accent mb-2">15+</div>
                    <div className="text-sm text-gray-300 uppercase tracking-wide font-bold">Gadi nozarē</div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-4xl font-bold text-brand-accent mb-2">98%</div>
                    <div className="text-sm text-gray-300 uppercase tracking-wide font-bold">Klientu atgriežas</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <Award className="h-8 w-8 text-green-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Drošības garantija</h4>
                    <p className="text-sm text-gray-300">Mēs dodam garantiju visiem veiktajiem darbiem un uzstādītajām detaļām.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-accent/20 rounded-2xl blur-xl transform rotate-3"></div>
                <img 
                  src={mechanicBg} 
                  alt="Professional mechanic working" 
                  className="relative rounded-2xl shadow-2xl border-4 border-white/10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. SEKCIJA: “Kā tas strādā?” */}
        {/* Mērķis: Izskaidrot procesu soli pa solim */}
        <section id="process" className="py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Kā notiek process?</h2>
              <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600">Vienkāršs un caurspīdīgs ceļš līdz salabota auto saņemšanai.</p>
            </div>

            <div className="relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { 
                    step: "01", 
                    icon: Phone, 
                    title: "Pieteikšanās", 
                    desc: "Zvaniet vai aizpildiet formu. Mēs vienosimies par Jums ērtāko vizītes laiku." 
                  },
                  { 
                    step: "02", 
                    icon: Settings, 
                    title: "Diagnostika", 
                    desc: "Veicam pārbaudi un saskaņojam ar Jums darbu izmaksas un termiņus." 
                  },
                  { 
                    step: "03", 
                    icon: Wrench, 
                    title: "Remonts", 
                    desc: "Meistari veic kvalitatīvu remontu vai apkopi, izmantojot atbilstošas detaļas." 
                  },
                  { 
                    step: "04", 
                    icon: CheckCircle2, 
                    title: "Auto saņemšana", 
                    desc: "Saņemiet auto ar paskaidrojumu par paveikto un garantiju darbiem." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-white border-4 border-brand-accent rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform relative z-10">
                      <item.icon className="h-7 w-7 text-brand-dark" />
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-dark text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. SEKCIJA: “Ko saka citi?” */}
        {/* Mērķis: Sociālie pierādījumi caur klientu atsauksmēm */}
        <section id="atsauksmes" className="py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Klientu pieredze</h2>
              <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  name: "Jānis Bērziņš", 
                  quote: "Beidzot atradu servisu, kur necenšas 'iesmērēt' nevajadzīgus remontus. Ļoti korekta attieksme un saprātīgas cenas.", 
                  rating: 5 
                },
                { 
                  name: "Zane Krūmiņa", 
                  quote: "Operatīvi salaboja manu auto pirms tālāka brauciena. Paldies meistariem par atsaucību un ātro darbu!", 
                  rating: 5 
                },
                { 
                  name: "Andris Liepiņš", 
                  quote: "Profesionāla pieeja. Diagnostikā parādīja visas problēmas un izskaidroja, kas ir steidzams un kas var pagaidīt.", 
                  rating: 5 
                }
              ].map((review, i) => (
                <Card key={i} className="bg-gray-50 border-none shadow-md hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, starI) => (
                        <Star 
                          key={starI} 
                          className={`h-5 w-5 ${starI < review.rating ? "text-brand-accent fill-brand-accent" : "text-gray-300"}`} 
                        />
                      ))}
                    </div>
                    <div className="mb-6">
                      <ThumbsUp className="h-8 w-8 text-brand-accent/20 mb-2" />
                      <p className="italic text-gray-600 font-serif text-lg">"{review.quote}"</p>
                    </div>
                    <div className="border-t pt-4 border-gray-200">
                      <p className="font-bold uppercase tracking-wide text-brand-dark">{review.name}</p>
                      <p className="text-xs text-gray-500">Verificēts klients</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SEKCIJA: “Kā varu pieteikties?” */}
        {/* Mērķis: Konversija - pieteikuma forma un kontakti */}
        <section id="pieteikties" className="py-24 bg-brand-dark relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-gray-900"></div>
          
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Contact Info & CTA Offer */}
              <div className="p-10 md:p-12 bg-brand-accent text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Piesakies vizītei jau šodien!</h2>
                  
                  {/* CTA Offer */}
                  <div className="bg-white/10 border border-white/20 p-6 rounded-xl mb-10 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="h-6 w-6 text-white" />
                      <h3 className="font-bold text-xl">Īpašais piedāvājums</h3>
                    </div>
                    <p className="text-white/90">
                      Bezmaksas ritošās daļas diagnostika, piesakoties uz apkopi šonedēļ!
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 mt-1" />
                      <div>
                        <p className="font-bold text-lg">Tālrunis</p>
                        <p className="text-white/80 text-lg">+371 20 000 000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 mt-1" />
                      <div>
                        <p className="font-bold text-lg">Adrese</p>
                        <p className="text-white/80">Brīvības gatve 123, Rīga</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 mt-1" />
                      <div>
                        <p className="font-bold text-lg">Darba laiks</p>
                        <p className="text-white/80">P.-Pk. 09:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-10 border-t border-white/20">
                  <p className="text-sm text-white/70">
                    Mēs sazināsimies ar Jums 30 minūšu laikā darba laikā.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-10 md:p-12 bg-white">
                <h3 className="text-2xl font-bold text-brand-dark mb-6">Aizpildiet pieteikumu</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-bold">Vārds</Label>
                    <Input id="name" placeholder="Jūsu vārds" className="bg-gray-50 h-12" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-bold">Telefons</Label>
                      <Input id="phone" placeholder="+371" type="tel" className="bg-gray-50 h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-bold">E-pasts</Label>
                      <Input id="email" placeholder="piemers@epasts.lv" type="email" className="bg-gray-50 h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-bold">Ziņojums / Problēma</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Īsi aprakstiet problēmu vai vēlamo pakalpojumu..." 
                      className="bg-gray-50 min-h-[100px]" 
                    />
                  </div>

                  <Button type="submit" className="w-full bg-brand-dark hover:bg-gray-800 text-white font-bold py-6 text-lg uppercase tracking-wide">
                    Pieteikt vizīti
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Nosūtot pieteikumu, Jūs piekrītat datu apstrādei saziņas nolūkos.
                  </p>
                </form>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-16 w-full h-[350px] bg-gray-200 rounded-2xl border-4 border-white shadow-lg flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png')] bg-cover bg-center opacity-10 grayscale"></div>
               <div className="z-10 text-center bg-white/80 p-6 rounded-xl backdrop-blur-md">
                 <MapPin className="h-10 w-10 text-brand-dark mx-auto mb-2" />
                 <span className="text-xl font-bold text-brand-dark uppercase tracking-wider">Kartes Vietturis</span>
               </div>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Wrench className="h-5 w-5 text-brand-accent" />
              <span className="text-lg font-bold uppercase tracking-wider">Auto Doktorāts</span>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Visas tiesības aizsargātas.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privātuma politika</a>
            <a href="#" className="hover:text-white transition-colors">Lietošanas noteikumi</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
