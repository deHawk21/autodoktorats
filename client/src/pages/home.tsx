import React from "react";
import { Wrench, Car, Disc, Activity, Clock, ShieldCheck, Phone, Mail, MapPin, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
    <div className="min-h-screen flex flex-col">
      {/* 1. Fiksēta galvene (Sticky Header) */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-brand-dark p-2 rounded text-white">
              <Wrench className="h-6 w-6" />
            </div>
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-brand-dark cursor-pointer">
              Auto Doktorāts
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            {["Sākums", "Pakalpojumi", "Par mums", "Atsauksmes", "Kontakti"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-").replace("ā", "a"))}
                className="text-sm font-bold text-gray-600 hover:text-brand-accent transition-colors uppercase tracking-wide"
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
             {/* Mobile menu placeholder */}
             <Button variant="ghost" size="icon">
               <div className="space-y-1.5">
                 <span className="block w-6 h-0.5 bg-gray-600"></span>
                 <span className="block w-6 h-0.5 bg-gray-600"></span>
                 <span className="block w-6 h-0.5 bg-gray-600"></span>
               </div>
             </Button>
          </div>
          <div className="hidden md:block">
            <Button 
              className="bg-brand-accent hover:bg-orange-600 text-white font-bold uppercase tracking-wider px-6"
              onClick={() => scrollToSection("kontakti")}
            >
              Pieteikt vizīti
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 2. Hero sekcija */}
        <section id="sakums" className="relative h-[700px] flex items-center justify-center text-white overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 bg-brand-dark/70 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: `url(${heroBg})`,
            }}
          ></div>
          
          <div className="container relative z-20 px-4 md:px-6 text-center animate-in fade-in zoom-in duration-700">
            <div className="inline-block bg-brand-accent/90 px-4 py-1 mb-6 rounded text-sm font-bold uppercase tracking-widest">
              Labākais serviss Rīgā
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg">
              Uzticams auto serviss <br/><span className="text-brand-accent">Jūsu ikdienai</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-sans leading-relaxed drop-shadow-md">
              Ātrs, godīgs un profesionāls auto remonts. Mēs rūpējamies par Jūsu auto tehnisko stāvokli, lai Jūs varētu baudīt drošu braukšanu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-brand-accent hover:bg-orange-600 text-white text-lg px-10 py-7 uppercase font-bold shadow-lg hover:shadow-orange-500/20 transition-all transform hover:-translate-y-1"
                onClick={() => window.location.href = "tel:+37120000000"}
              >
                Zvanīt tagad
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-dark text-lg px-10 py-7 uppercase font-bold backdrop-blur-sm transition-all transform hover:-translate-y-1"
                onClick={() => scrollToSection("kontakti")}
              >
                Pieteikt vizīti
              </Button>
            </div>
          </div>
        </section>

        {/* 3. Pakalpojumu sekcija */}
        <section id="pakalpojumi" className="py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Mūsu Pakalpojumi</h2>
              <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Piedāvājam pilnu servisa ciklu no vienkāršas apkopes līdz sarežģītiem remontdarbiem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Disc, title: "Eļļas maiņa", desc: "Augstas kvalitātes eļļas un filtru maiņa. Izmantojam tikai sertificētus materiālus, kas atbilst ražotāja prasībām." },
                { icon: Activity, title: "Bremžu remonts", desc: "Bremžu kluču, disku maiņa un suportu profilakse. Jūsu drošība ir mūsu prioritāte." },
                { icon: Car, title: "Dzinēja diagnostika", desc: "Precīza datordiagnostika kļūdu nolasīšanai. Ātra problēmu identificēšana un novēršana." },
                { icon: Disc, title: "Riepu serviss", desc: "Riepu maiņa, balansēšana un remonts. Plašs jaunu un mazlietotu riepu piedāvājums uz vietas." },
                { icon: Wrench, title: "Ritošā daļa", desc: "Amortizatoru, sviru, gultņu un citu ritošās daļas elementu pārbaude, maiņa un remonts." },
                { icon: ShieldCheck, title: "Tehniskā apkope", desc: "Pilna auto sagatavošana tehniskajai apskatei (CSDD). Garantējam veiksmīgu iziešanu." },
              ].map((service, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden relative bg-white">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-8 flex flex-col items-start text-left h-full">
                    <div className="mb-6 p-4 bg-blue-50 rounded-2xl group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-brand-dark group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-brand-dark group-hover:text-brand-accent transition-colors">{service.title}</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Par mums sekcija */}
        <section id="par-mums" className="py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-blue-100 text-brand-dark px-3 py-1 mb-4 rounded text-sm font-bold uppercase tracking-wider">
                  Par Uzņēmumu
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8 leading-tight">
                  Mēs esam <span className="text-brand-accent">Auto Doktorāts</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 font-sans leading-relaxed">
                  Mēs esam ģimenes uzņēmums ar vairāk nekā 15 gadu pieredzi auto apkopē un remontā. 
                  Mūsu mērķis ir mainīt priekšstatu par auto servisiem, piedāvājot godīgu attieksmi, 
                  saprotamus paskaidrojumus un caurspīdīgas cenas.
                </p>
                <p className="text-lg text-gray-600 mb-8 font-sans leading-relaxed">
                  Mūsu komandā strādā tikai sertificēti meistari, kuri regulāri papildina savas zināšanas.
                  Mēs ticam, ka kvalitatīvs remonts nav tikai detaļu maiņa, bet gan rūpes par klienta sirdsmieru.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Ātra apkalpošana",
                    "Pieredzējuši meistari",
                    "Caurspīdīgas cenas",
                    "Garantija darbiem"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent flex-shrink-0" />
                      <span className="text-brand-dark font-bold font-sans">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-gray-100 group">
                 <img 
                   src={mechanicBg} 
                   alt="Auto mechanic working" 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Atsauksmju sekcija */}
        <section id="atsauksmes" className="py-24 bg-brand-dark text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Klientu Atsauksmes</h2>
              <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Jānis Bērziņš", role: "Pastāvīgais klients", text: "Lielisks serviss! Ātri atrada problēmu, ko citur nevarēja diagnosticēt. Cenas ļoti adekvātas un meistari zinoši.", stars: 5 },
                { name: "Anna Kalniņa", role: "Audi A4 īpašniece", text: "Ļoti laipna apkalpošana. Paskaidroja visu saprotamā valodā, parādīja vecās detaļas. Auto tagad brauc kā jauns!", stars: 5 },
                { name: "Māris Ozols", role: "Volvo XC60 īpašnieks", text: "Uzticams serviss. Vienmēr visu izdara laikā un bez slēptām izmaksām. Ērti pieteikties un laba lokācija.", stars: 4 },
              ].map((review, i) => (
                <Card key={i} className="bg-white/5 border border-white/10 text-white backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, starI) => (
                        <Star 
                          key={starI} 
                          className={`h-5 w-5 ${starI < review.stars ? "text-brand-accent fill-brand-accent" : "text-gray-600"}`} 
                        />
                      ))}
                    </div>
                    <p className="italic mb-8 text-gray-300 font-sans leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-brand-accent flex items-center justify-center font-bold text-brand-dark">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold uppercase tracking-wide text-white text-sm">{review.name}</p>
                        <p className="text-xs text-gray-400">{review.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Kontaktsekcija */}
        <section id="kontakti" className="py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <div>
                <div className="inline-block bg-brand-accent/10 text-brand-accent px-3 py-1 mb-4 rounded text-sm font-bold uppercase tracking-wider">
                  Sazinies
                </div>
                <h2 className="text-4xl font-bold text-brand-dark mb-8">Mēs esam šeit, lai palīdzētu</h2>
                <p className="text-gray-600 mb-10 font-sans">
                  Aizpildiet formu vai zvaniet mums tieši. Mēs atbildēsim uz visiem jautājumiem un atradīsim ērtāko laiku vizītei.
                </p>
                
                <div className="space-y-8 mb-8">
                  <div className="flex items-start gap-6 group">
                    <div className="bg-white border-2 border-gray-100 p-4 rounded-xl shadow-sm group-hover:border-brand-accent group-hover:shadow-md transition-all">
                      <Phone className="h-6 w-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-dark mb-1">Tālrunis</h4>
                      <p className="text-xl font-bold text-gray-800 mb-1">+371 20 000 000</p>
                      <p className="text-sm text-gray-500 font-sans">Zvaniet darba dienās 9:00 - 18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="bg-white border-2 border-gray-100 p-4 rounded-xl shadow-sm group-hover:border-brand-accent group-hover:shadow-md transition-all">
                      <Mail className="h-6 w-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-dark mb-1">E-pasts</h4>
                      <p className="text-lg text-gray-600 font-sans">info@autodoktorats.lv</p>
                      <p className="text-sm text-gray-500 font-sans">Atbildam 24h laikā</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="bg-white border-2 border-gray-100 p-4 rounded-xl shadow-sm group-hover:border-brand-accent group-hover:shadow-md transition-all">
                      <MapPin className="h-6 w-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-dark mb-1">Adrese</h4>
                      <p className="text-lg text-gray-600 font-sans">Brīvības gatve 123, Rīga, LV-1000</p>
                      <p className="text-sm text-gray-500 font-sans">Ērta piebraukšana no centra</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-1 rounded-2xl shadow-xl">
                <Card className="border-none shadow-none bg-white h-full rounded-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-brand-dark mb-6">Pieteikt Vizīti</h3>
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-bold text-brand-dark">Vārds</Label>
                          <Input id="name" placeholder="Jūsu vārds" required className="bg-gray-50 border-gray-200 focus:bg-white h-12" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-bold text-brand-dark">Telefons</Label>
                          <Input id="phone" placeholder="+371" required type="tel" className="bg-gray-50 border-gray-200 focus:bg-white h-12" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-bold text-brand-dark">E-pasts</Label>
                        <Input id="email" placeholder="vards@piemers.lv" type="email" className="bg-gray-50 border-gray-200 focus:bg-white h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-bold text-brand-dark">Ziņojums / Problēma</Label>
                        <Textarea id="message" placeholder="Īss apraksts par nepieciešamo remontu..." className="min-h-[120px] bg-gray-50 border-gray-200 focus:bg-white" />
                      </div>
                      <Button type="submit" className="w-full bg-brand-accent hover:bg-orange-600 text-white uppercase font-bold py-6 text-lg shadow-lg hover:shadow-orange-500/20 transition-all">
                        Sūtīt Ziņu
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

            </div>
            
            {/* Map Placeholder */}
            <div className="mt-20 w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center transition-colors group-hover:bg-gray-200">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-brand-dark opacity-50" />
                  <p className="font-bold text-2xl uppercase text-brand-dark opacity-70">Mēs atrodamies šeit</p>
                  <p className="text-gray-600">Rīga, Brīvības gatve 123</p>
                </div>
              </div>
              {/* Decorative map elements */}
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-brand-accent rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-brand-accent rounded-full opacity-20 animate-ping transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-brand-dark text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="h-6 w-6 text-brand-accent" />
                <span className="text-xl font-bold uppercase tracking-wider">
                  Auto Doktorāts
                </span>
              </div>
              <p className="text-gray-400 font-sans max-w-sm">
                Jūsu uzticamais partneris auto remontā. Mēs nodrošinām kvalitāti, ātrumu un godīgu attieksmi katrā darbā.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-accent">Pakalpojumi</h4>
              <ul className="space-y-2 text-gray-400 font-sans text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Eļļas maiņa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ritošā daļa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dzinēja remonts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Riepu serviss</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-accent">Kontakti</h4>
              <ul className="space-y-2 text-gray-400 font-sans text-sm">
                <li>+371 20 000 000</li>
                <li>info@autodoktorats.lv</li>
                <li>Brīvības gatve 123, Rīga</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
             <p className="font-sans text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Auto Doktorāts. Visas tiesības aizsargātas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
