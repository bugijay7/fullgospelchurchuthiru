import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Clock, DollarSign, Mail, Phone, Facebook, Instagram, Youtube, ChevronRight, Church, Users, BookOpen, Sparkles, Award, Flame } from 'lucide-react';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['about', 'services', 'sermons', 'giving'];
      const newVisible = {};
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          newVisible[section] = rect.top < window.innerHeight * 0.75;
        }
      });
      setIsVisible(newVisible);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white" data-theme="light">
      <div className={`navbar bg-white shadow-lg fixed top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-opacity-95' : ''}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a onClick={() => scrollToSection('sermons')}>Sermons</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold text-blue-800">
            <Flame className="mr-2" />
            FGC Uthiru
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a onClick={() => scrollToSection('home')} className="hover:text-blue-800 transition-colors">Home</a></li>
            <li><a onClick={() => scrollToSection('about')} className="hover:text-blue-800 transition-colors">About</a></li>
            <li><a onClick={() => scrollToSection('services')} className="hover:text-blue-800 transition-colors">Services</a></li>
            <li><a onClick={() => scrollToSection('sermons')} className="hover:text-blue-800 transition-colors">Sermons</a></li>
            <li><a onClick={() => scrollToSection('contact')} className="hover:text-blue-800 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button 
            onClick={() => scrollToSection('giving')}
            className="btn bg-blue-800 text-white border-none hover:bg-blue-900 hover:scale-105 transition-transform"
          >
            Give
          </button>
        </div>
      </div>

      <div 
        id="home"
        className="hero min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="hero-content text-center text-white z-10">
          <div className="max-w-4xl">
            <div 
              className="mb-8 transform transition-all duration-1000"
              style={{
                transform: `translateY(${Math.min(scrollY * 0.3, 100)}px)`,
                opacity: Math.max(0, 1 - scrollY / 600)
              }}
            >
              <div className="relative inline-block">
                <Church className="w-24 h-24 mx-auto mb-4" />
                <Sparkles className="w-8 h-8 absolute -top-2 -right-2 animate-pulse" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
              Full Gospel Church Uthiru
            </h1>
            <p className="text-xl md:text-3xl mb-4 font-light">
              Experience the Full Gospel of Christ
            </p>
            <p className="text-lg md:text-xl mb-10 opacity-90">
              A Spirit-Filled Community Where Lives Are Transformed
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('services')}
                className="btn btn-lg bg-white text-blue-800 border-none font-bold hover:scale-105 hover:shadow-2xl transition-all"
              >
                Join Us This Sunday
                <ChevronRight className="ml-2" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="btn btn-lg btn-outline text-white border-white border-2 hover:bg-white hover:text-blue-800 hover:scale-105 transition-all"
              >
                Discover More
              </button>
            </div>
            
            <div className="mt-12 flex justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Growing Community</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>Spirit-Led Worship</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Biblical Teaching</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div id="about" className={`py-24 bg-white transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <Church className="w-10 h-10 text-blue-800" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Welcome to Our Church
            </h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building a community rooted in faith, empowered by the Holy Spirit
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            <div className="card bg-gradient-to-br from-blue-50 to-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border-t-4 border-blue-800">
              <div className="card-body">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-800 rounded-lg mr-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="card-title text-3xl text-blue-900">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  To proclaim the Full Gospel of Jesus Christ through dynamic worship, sound biblical teaching, and Spirit-filled ministry. We are committed to reaching the lost, equipping the saints, and demonstrating God's love through practical service to our community in Uthiru and beyond.
                </p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-blue-50 to-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border-t-4 border-blue-800">
              <div className="card-body">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-800 rounded-lg mr-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="card-title text-3xl text-blue-900">Our Vision</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  To be a lighthouse of hope in Uthiru, raising Spirit-empowered believers who walk in their divine calling and impact the world with the transforming power of the Gospel. We envision a church where every member experiences authentic community, spiritual growth, and supernatural encounters with God.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="stats stats-vertical lg:stats-horizontal shadow-2xl bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <div className="stat">
                <div className="stat-figure text-blue-200">
                  <Users className="w-12 h-12" />
                </div>
                <div className="stat-title text-blue-100">Church Family</div>
                <div className="stat-value text-white">800+</div>
                <div className="stat-desc text-blue-200">Active Members</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-blue-200">
                  <Flame className="w-12 h-12" />
                </div>
                <div className="stat-title text-blue-100">Ministry Years</div>
                <div className="stat-value text-white">15+</div>
                <div className="stat-desc text-blue-200">Serving Uthiru</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-blue-200">
                  <Award className="w-12 h-12" />
                </div>
                <div className="stat-title text-blue-100">Impact</div>
                <div className="stat-value text-white">5K+</div>
                <div className="stat-desc text-blue-200">Lives Touched</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">What We Believe</h3>
            <div className="w-20 h-1 bg-blue-800 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: BookOpen, title: 'Biblical Truth', desc: 'Grounded in Scripture' },
              { icon: Flame, title: 'Spirit-Filled', desc: 'Empowered by the Holy Spirit' },
              { icon: Heart, title: 'Loving Community', desc: 'Authentic Fellowship' },
              { icon: Users, title: 'Kingdom Impact', desc: 'Transforming Lives' }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <value.icon className="w-10 h-10 text-blue-800" />
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="services" className={`py-24 bg-white transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <Clock className="w-10 h-10 text-blue-800" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Join Us for Worship
            </h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Experience powerful worship and life-changing ministry</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-t-4 border-blue-800">
              <div className="card-body items-center text-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <Church className="w-16 h-16 text-blue-800" />
                </div>
                <h3 className="card-title text-2xl mb-2 text-blue-900">Sunday Worship</h3>
                <div className="divider my-2"></div>
                <p className="text-2xl font-bold text-blue-800">8:00 AM & 10:30 AM</p>
                <p className="text-gray-600 mt-2">Main Celebration Service</p>
                <p className="text-sm text-gray-500 mt-4">Dynamic worship, powerful preaching, and Holy Spirit ministry</p>
              </div>
            </div>

            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-t-4 border-blue-800">
              <div className="card-body items-center text-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <BookOpen className="w-16 h-16 text-blue-800" />
                </div>
                <h3 className="card-title text-2xl mb-2 text-blue-900">Bible Study</h3>
                <div className="divider my-2"></div>
                <p className="text-2xl font-bold text-blue-800">Wednesday 6:30 PM</p>
                <p className="text-gray-600 mt-2">Midweek Teaching</p>
                <p className="text-sm text-gray-500 mt-4">Deep dive into God's Word with practical application</p>
              </div>
            </div>

            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-t-4 border-blue-800">
              <div className="card-body items-center text-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <Flame className="w-16 h-16 text-blue-800" />
                </div>
                <h3 className="card-title text-2xl mb-2 text-blue-900">Prayer Meeting</h3>
                <div className="divider my-2"></div>
                <p className="text-2xl font-bold text-blue-800">Friday 5:30 AM</p>
                <p className="text-gray-600 mt-2">Early Morning Prayer</p>
                <p className="text-sm text-gray-500 mt-4">Seek God's face and experience His presence</p>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-blue-800 to-blue-900 shadow-2xl max-w-4xl mx-auto text-white">
            <div className="card-body">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-white bg-opacity-20 rounded-lg">
                    <MapPin className="w-12 h-12" />
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4">Visit Us</h3>
                  <p className="text-xl mb-2">Full Gospel Church Uthiru</p>
                  <p className="text-lg mb-1 opacity-90">Uthiru Shopping Center, 2nd Floor</p>
                  <p className="text-lg mb-6 opacity-90">Uthiru, Nairobi, Kenya</p>
                  <button className="btn bg-white text-blue-800 border-none hover:scale-105 transition-transform">
                    <MapPin className="mr-2" />
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div
  id="sermons"
  className={`py-24 bg-gradient-to-br from-blue-50 to-white transition-all duration-1000 ${
    isVisible.sermons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
        <BookOpen className="w-10 h-10 text-blue-800" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
        Recent Messages
      </h2>
      <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
      <p className="text-xl text-gray-600">Catch up on life-transforming teachings</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        {
          title: 'The Power of Pentecost',
          speaker: 'Pastor David Kamau',
          link: 'https://www.youtube.com/watch?v=YOUTUBE_LINK_1',
        },
        {
          title: 'Walking in Divine Health',
          speaker: 'Pastor Grace Wanjiku',
          link: 'https://www.youtube.com/watch?v=YOUTUBE_LINK_2',
        },
        {
          title: 'Faith That Moves Mountains',
          speaker: 'Pastor David Kamau',
          link: 'https://www.youtube.com/watch?v=YOUTUBE_LINK_3',
        },
      ].map((sermon, idx) => {
        // Extract YouTube ID from link
        const url = new URL(sermon.link);
        const videoId = url.searchParams.get('v');

        return (
          <div key={idx} className="shadow-lg rounded-lg overflow-hidden">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={sermon.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-blue-900">{sermon.title}</h3>
              <p className="text-gray-600 mt-1">{sermon.speaker}</p>
            </div>
          </div>
        );
      })}
    </div>

    <div className="text-center mt-12">
      <button className="btn btn-lg btn-outline border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white hover:scale-105 transition-all">
        View All Messages
        <ChevronRight className="ml-2" />
      </button>
    </div>
  </div>
</div>


      <div id="giving" className={`py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden transition-all duration-1000 ${isVisible.giving ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block p-4 bg-white bg-opacity-20 rounded-full mb-6">
              <Heart className="w-16 h-16" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Partner in Ministry
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl mb-4 leading-relaxed">
              Your faithful giving enables us to spread the Full Gospel, strengthen our community, and impact lives throughout Uthiru and beyond.
            </p>
            <p className="text-lg mb-10 opacity-90">
              Every seed sown in faith produces a harvest of blessing and transformation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button className="btn btn-lg bg-white text-blue-800 border-none font-bold hover:scale-105 transition-transform shadow-xl">
                <DollarSign className="mr-2" />
                Give Online
              </button>
              <button className="btn btn-lg btn-outline text-white border-white border-2 hover:bg-white hover:text-blue-800 hover:scale-105 transition-all">
                Bank Details
              </button>
            </div>
            
            <div className="card bg-white bg-opacity-10 backdrop-blur-sm shadow-2xl max-w-2xl mx-auto">
              <div className="card-body">
                <div className="flex items-start gap-4 text-left">
                  <BookOpen className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-semibold mb-2">Give and it will be given to you. A good measure pressed down shaken together and running over will be poured into your lap.</p>
                    <p className="text-sm opacity-80">Luke 6:38 NIV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="contact" className="footer footer-center p-10 bg-base-200 text-base-content">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-10">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
                <Mail className="mr-2" />
                Get In Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center hover:text-blue-800 transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-blue-800" />
                  <span>+254 727 382 217</span>
                </div>
                <div className="flex items-center hover:text-blue-800 transition-colors">
                  <Mail className="w-5 h-5 mr-3 text-blue-800" />
                  <span>pstjkr@gmail.com</span>
                </div>
                <div className="flex items-start hover:text-blue-800 transition-colors">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-800 flex-shrink-0" />
                  <span>812 Uthiru Nairobi Kenya</span>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Quick Links</h3>
              <ul className="space-y-2">
                <li><a onClick={() => scrollToSection('about')} className="hover:text-blue-800 cursor-pointer transition-colors">About Us</a></li>
                <li><a onClick={() => scrollToSection('services')} className="hover:text-blue-800 cursor-pointer transition-colors">Service Times</a></li>
                <li><a onClick={() => scrollToSection('sermons')} className="hover:text-blue-800 cursor-pointer transition-colors">Sermons</a></li>
                <li><a onClick={() => scrollToSection('giving')} className="hover:text-blue-800 cursor-pointer transition-colors">Give</a></li>
              </ul>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Connect With Us</h3>
              <div className="flex gap-4 mb-6">
                <a className="btn btn-circle btn-outline border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white hover:scale-110 transition-all">
                  <Facebook />
                </a>
                <a className="btn btn-circle btn-outline border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white hover:scale-110 transition-all">
                  <Instagram />
                </a>
                <a className="btn btn-circle btn-outline border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white hover:scale-110 transition-all">
                  <Youtube />
                </a>
              </div>
              <div className="mt-4">
                <p className="text-sm mb-2">Subscribe to our newsletter</p>
                <div className="form-control">
                  <div className="input-group">
                    <input type="text" placeholder="Your email" className="input input-bordered w-full" />
                    <button className="btn bg-blue-800 text-white border-none hover:bg-blue-900">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div>
            <p className="font-bold text-xl mb-2 text-blue-900">
              Full Gospel Church Uthiru
            </p>
            <p className="text-sm">
              2025 FGC Uthiru. All rights reserved. Built with faith and purpose.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
// export default LandingPage;
// export default LandingPage;