// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Language translations for demo-focused content
    const translations = {
        de: {
            demoBanner: "DEMO: Beispiel-Website-Layout – Stellen Sie sich Ihr Unternehmen hier vor!",
            businessName: "IhrBrand",
            tagline: "Exzellenz in jedem Detail",
            nav: ["Leistungen", "Portfolio", "Referenzen", "Blog", "Ressourcen"],
            heroTitle: "Exzellenz ist unser Handwerk",
            heroDesc: "Willkommen bei IhrBrand – Ihr Partner für kreative Lösungen, professionelle Umsetzung und echte Ergebnisse. Lassen Sie uns gemeinsam Ihr Projekt zum Erfolg führen!",
            heroBtn1: "Kontakt aufnehmen",
            heroBtn2: "Projekte entdecken",
            servicesTitle: "Unsere Leistungen",
            servicesSubtitle: "Individuelle Lösungen, die zu Ihnen passen",
            service1: {
                title: "Kreatives Design",
                desc: "Professionelle Design-Dienstleistungen, die Ihre Vision zum Leben erwecken. Von Branding bis zu digitalen Erlebnissen erstellen wir überzeugende visuelle Lösungen, die bei Ihrem Publikum Anklang finden.",
                features: ["Markenidentitäts-Design", "Web- & Mobile-Design", "Print- & Digitalmedien"],
                btn: "Erkunden"
            },
            service2: {
                title: "Web-Entwicklung",
                desc: "Maßgeschneiderte Web-Lösungen, die mit modernsten Technologien entwickelt wurden. Wir erstellen responsive, schnelle und benutzerfreundliche Websites, die Ergebnisse liefern und Ihre Online-Präsenz verbessern.",
                features: ["Individuelle Website-Entwicklung", "E-Commerce-Lösungen", "CMS-Integration"],
                btn: "Mehr Info"
            },
            service3: {
                title: "Digitales Marketing",
                desc: "Strategische Digital-Marketing-Lösungen für das Wachstum Ihres Unternehmens. Von SEO bis Social Media helfen wir Ihnen, Ihre Zielgruppe zu erreichen und Ihre Ziele zu erreichen.",
                features: ["SEO & Content Marketing", "Social Media Management", "Analytics & Reporting"],
                btn: "Jetzt Starten"
            },
            portfolioTitle: "Ausgewählte Projekte",
            portfolioSubtitle: "Präsentation unserer besten Arbeiten und erfolgreichen Kooperationen",
            project1: {
                title: "Beispielprojekt 1",
                desc: "Beschreiben Sie ein Projekt oder zeigen Sie, was ein Kunde hier bekommen könnte.",
                tag: "Web-Design"
            },
            project2: {
                title: "Beispielprojekt 2",
                desc: "Noch ein Beispielprojekt. Ersetzen Sie dies durch echte Arbeiten oder ein Mockup.",
                tag: "Branding"
            },
            project3: {
                title: "Beispielprojekt 3",
                desc: "Zeigen Sie ein weiteres Projekt oder eine angebotene Leistung.",
                tag: "Marketing"
            },
            projectBtn: "Mehr erfahren",
            testimonialsTitle: "Was unsere Kunden sagen",
            testimonialsSubtitle: "Erfolgsgeschichten und Testimonials von zufriedenen Kunden",
            testimonial1: {
                quote: "IhrBrand hat unser Unternehmen komplett transformiert. Ihre Expertise und Hingabe führten zu einer Website, die unsere Erwartungen übertraf. Unsere Online-Präsenz war noch nie stärker!",
                name: "Michael Johnson",
                role: "CEO, Innovation Corp"
            },
            testimonial2: {
                quote: "Die Zusammenarbeit mit IhrBrand war ein Game-Changer für unser Startup. Sie verstanden unsere Vision perfekt und lieferten eine Lösung, die unsere Marke perfekt repräsentiert.",
                name: "Sarah Williams",
                role: "Gründerin, StartupXYZ"
            },
            testimonial3: {
                quote: "Außergewöhnlicher Service und herausragende Ergebnisse. Das Team von IhrBrand ging über das Erwartete hinaus, um sicherzustellen, dass unser Projekt ein Erfolg wurde. Sehr empfehlenswert!",
                name: "David Chen",
                role: "Marketing-Direktor, Global Solutions"
            },
            blogTitle: "Neueste Erkenntnisse und Trends",
            blogSubtitle: "Bleiben Sie auf dem Laufenden mit Branchennachrichten und Expertenperspektiven",
            blog1: {
                category: "Design",
                title: "Design-Trends für 2024",
                desc: "Entdecken Sie die neuesten Design-Trends, die die digitale Landschaft prägen. Von minimalistischen Ästhetiken bis hin zu mutiger Typografie - entdecken Sie, was Innovation antreibt.",
                date: "15. März 2024"
            },
            blog2: {
                category: "Strategie",
                title: "Digitale Transformationsstrategien",
                desc: "Erfahren Sie, wie Unternehmen sich an das digitale Zeitalter anpassen und effektive Transformationsstrategien implementieren, um wettbewerbsfähig zu bleiben.",
                date: "12. März 2024"
            },
            blog3: {
                category: "Marketing",
                title: "Effektives Digital-Marketing",
                desc: "Entdecken Sie bewährte Strategien für erfolgreiches Digital-Marketing. Von Content-Marketing bis Social Media - lernen Sie, wie Sie Ihre Zielgruppe effektiv erreichen.",
                date: "10. März 2024"
            },
            blogAuthor: "Ihr Name",
            blogBtn: "Weiterlesen",
            resourcesTitle: "Hilfreiche Ressourcen und Werkzeuge",
            resourcesSubtitle: "Alles, was Sie für Ihren Erfolg brauchen",
            resource1: {
                title: "Dokumentation",
                desc: "Umfassende Anleitungen und Dokumentation für alle unsere Dienstleistungen und Lösungen.",
                features: ["Schritt-für-Schritt-Anleitungen", "Best Practices", "Code-Beispiele"],
                btn: "Zugreifen"
            },
            resource2: {
                title: "Video-Tutorials",
                desc: "Schritt-für-Schritt-Videoanleitungen für alle unsere Dienstleistungen. Von Anfänger bis Experte.",
                features: ["200+ Video-Tutorials", "HD-Qualitätsinhalte", "Interaktive Übungen"],
                btn: "Ansehen"
            },
            resource3: {
                title: "Kostenlose Ressourcen",
                desc: "Vorlagen, Tools und Ressourcen zum Download. Immer die neuesten Versionen.",
                features: ["Design-Vorlagen", "Entwicklungstools", "Marketing-Ressourcen"],
                btn: "Herunterladen"
            },
            resource4: {
                title: "Support",
                desc: "24/7-Kundensupport und Live-Chat. Unser Expertenteam ist hier, um Ihnen zum Erfolg zu verhelfen.",
                features: ["Live-Chat-Support", "Ticket-System", "Remote-Unterstützung"],
                btn: "Kontakt"
            },
            footerDescription: "IhrBrand ist Ihr Partner für kreatives Design, Webentwicklung und digitales Marketing. Seit 2018 unterstützen wir Unternehmen und Selbstständige dabei, ihre Ziele mit innovativen Lösungen zu erreichen.",
            footerQuickLinks: "Schnelllinks",
            footerServices: "Dienstleistungen",
            footerSupport: "Support",
            footerContact: "Kontaktieren Sie uns",
            newsletterTitle: "Immer auf dem Laufenden bleiben",
            newsletterDesc: "Abonnieren Sie unseren Newsletter für aktuelle Einblicke und Neuigkeiten.",
            newsletterPlaceholder: "Ihre E-Mail-Adresse eingeben",
            newsletterButton: "Abonnieren",
            copyright: "© 2024 IhrBrand. Alle Rechte vorbehalten.",
            legalPrivacy: "Datenschutzerklärung",
            legalTerms: "Nutzungsbedingungen",
            legalCookies: "Cookie-Richtlinie",
            legalImprint: "Impressum",
            legalAGB: "AGB",
            legalGDPR: "DSGVO",
            cookieTitle: "Cookie-Einstellungen",
            cookieDesc: "Wir verwenden Cookies und ähnliche Technologien, um Ihnen das beste Nutzererlebnis zu bieten. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.",
            cookieNecessary: "Notwendige Cookies (immer aktiv)",
            cookieAnalytics: "Analyse-Cookies (zur Verbesserung der Website)",
            cookieMarketing: "Marketing-Cookies (für personalisierte Inhalte)",
            cookieSettings: "Einstellungen",
            cookieAcceptAll: "Alle akzeptieren",
            overlayTitle: "Willkommen bei IhrBrand",
            overlayDesc: "Bitte akzeptieren Sie unsere Cookie-Einstellungen, um fortzufahren.",
            legalTitle: "Rechtliche Informationen"
        },
        en: {
            demoBanner: "DEMO: Example Website Layout – Imagine your business here!",
            businessName: "YourBrand",
            tagline: "Excellence in Every Detail",
            nav: ["Services", "Portfolio", "Testimonials", "Blog", "Resources"],
            heroTitle: "Excellence in Every Project",
            heroDesc: "Describe your main service or what makes you unique. This is your chance to make a great first impression!",
            heroBtn1: "Contact Me",
            heroBtn2: "See My Work",
            servicesTitle: "My Services",
            servicesSubtitle: "What I can do for you",
            service1: {
                title: "Web Design",
                desc: "Modern, responsive websites tailored to your needs. Clean, creative, and user-friendly design for any business.",
                features: ["Custom layouts", "Mobile-friendly", "Fast & SEO-ready"],
                btn: "Learn More"
            },
            service2: {
                title: "Branding",
                desc: "Logo design, color schemes, and brand guidelines to help your business stand out and be memorable.",
                features: ["Logo & identity", "Brand strategy", "Print & digital assets"],
                btn: "See Examples"
            },
            service3: {
                title: "Consulting",
                desc: "Expert advice on digital strategy, marketing, and technology to help your business grow and succeed.",
                features: ["Digital strategy", "Marketing tips", "Tech support"],
                btn: "Book a Call"
            },
            portfolioTitle: "Portfolio",
            portfolioSubtitle: "A few examples of what I can create for you",
            project1: {
                title: "Example Project 1",
                desc: "Describe a project you did, or show what a buyer could get here.",
                tag: "Web Design"
            },
            project2: {
                title: "Example Project 2",
                desc: "Another example project. Swap this for your real work or a mockup.",
                tag: "Branding"
            },
            project3: {
                title: "Example Project 3",
                desc: "Show off a third project or a type of work you offer.",
                tag: "Consulting"
            },
            projectBtn: "View Details",
            testimonialsTitle: "Testimonials",
            testimonialsSubtitle: "What my clients say",
            testimonial1: {
                quote: "This freelancer delivered exactly what I needed. Fast, professional, and creative!",
                name: "Jane Doe",
                role: "Small Business Owner"
            },
            testimonial2: {
                quote: "Great communication and top-notch results. Highly recommended!",
                name: "John Smith",
                role: "Startup Founder"
            },
            testimonial3: {
                quote: "Very helpful and knowledgeable. Will work with again!",
                name: "Emily R.",
                role: "Marketing Manager"
            },
            blogTitle: "Blog",
            blogSubtitle: "Tips, news, and updates",
            blog1: {
                category: "Web Design",
                title: "How to Make Your Website Stand Out",
                desc: "Share your expertise! Write about design, development, or business tips for your clients.",
                date: "Jan 1, 2024"
            },
            blog2: {
                category: "Branding",
                title: "Why Branding Matters for Small Businesses",
                desc: "Explain the value of branding and how you can help your clients build a strong identity.",
                date: "Feb 15, 2024"
            },
            blog3: {
                category: "Consulting",
                title: "Top 5 Digital Marketing Tips",
                desc: "Share actionable advice that shows your expertise and helps potential clients.",
                date: "Mar 10, 2024"
            },
            blogAuthor: "Your Name",
            blogBtn: "Read More",
            resourcesTitle: "Resources",
            resourcesSubtitle: "Helpful links and support",
            resource1: {
                title: "Documentation",
                desc: "Provide guides or FAQs for your clients, or link to useful resources.",
                features: ["Getting started guides", "FAQs", "How-to articles"],
                btn: "Access"
            },
            resource2: {
                title: "Video Tutorials",
                desc: "Share video walkthroughs or screencasts to help your clients.",
                features: ["Short tutorials", "Project walkthroughs", "Tips & tricks"],
                btn: "Watch"
            },
            resource3: {
                title: "Free Resources",
                desc: "Offer templates, checklists, or downloads to add value for your clients.",
                features: ["Templates", "Checklists", "Useful links"],
                btn: "Download"
            },
            resource4: {
                title: "Support",
                desc: "Let clients know how to reach you for help or support.",
                features: ["Email support", "Live chat", "Contact form"],
                btn: "Contact"
            }
        }
    };

    let currentLang = 'de';
    window.currentLang = currentLang;
    let currentSection = 'services';

    // Section navigation functionality
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Smooth scroll to target section
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fallback: ensure we reach the target position
                setTimeout(() => {
                    const currentPosition = window.pageYOffset;
                    const positionDifference = Math.abs(currentPosition - targetPosition);
                    
                    // If we're more than 50px away from target, force scroll
                    if (positionDifference > 50) {
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'instant'
                        });
                    }
                }, 1000);
                
                showNotification(`Navigating to ${targetSection} section`, 'info');
            }
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Update active navigation based on scroll position and blur other sections
    function updateActiveNavigation() {
        const scrollPosition = window.scrollY + 100;
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sections = document.querySelectorAll('.content-section');
        let activeSectionId = null;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            // Determine if this section is active
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navButtons.forEach(btn => btn.classList.remove('active'));
                const activeButton = document.querySelector(`[data-section="${sectionId}"]`);
                if (activeButton) {
                    activeButton.classList.add('active');
                }
                activeSectionId = sectionId;
            }
        });
    }

    // Update blur on navigation button click
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(updateActiveNavigation, 500); // Wait for scroll to finish
        });
    });

    // Update blur on scroll
    window.addEventListener('scroll', updateActiveNavigation);

    // Initial blur update on page load
    window.addEventListener('load', updateActiveNavigation);

    // Hero section buttons
    const heroButtons = document.querySelectorAll('.hero-actions .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Entdecken')) {
                const platformsSection = document.getElementById('platforms');
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = platformsSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                showNotification('Navigating to platforms section', 'info');
            } else if (this.textContent.includes('Erfahren')) {
                const productsSection = document.getElementById('products');
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = productsSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                showNotification('Navigating to products section', 'info');
            }
        });
    });

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Simple Style Switcher
    const themeButtons = document.querySelectorAll('.theme-btn');

    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = button.getAttribute('data-theme');
            
            // Remove active class from all buttons
            themeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Change theme
            changeTheme(theme);
            
            // Show notification
            const themeNames = {
                'modern': 'Modern',
                'minimalist': 'Minimalist',
                'nature': 'Nature',
                'corporate': 'Corporate',
                'creative': 'Creative'
            };
            showNotification(`Theme changed to ${themeNames[theme]}! 🎨`, 'success');
        });
    });

    // Theme switching function
    function changeTheme(theme) {
        document.documentElement.removeAttribute('data-theme');
        if (theme !== 'modern') {
            document.documentElement.setAttribute('data-theme', theme);
        }
        localStorage.setItem('preferred-theme', theme);
    }

    // Language switching function
    function changeLanguage(lang) {
        currentLang = lang;
        window.currentLang = lang;
        applyTranslations(lang);
        const t = translations[lang];
        
        // Header
        document.querySelector('.logo h1').textContent = t.businessName;
        document.querySelector('.logo .tagline').textContent = t.tagline;
        
        // Navigation
        document.querySelectorAll('.nav-btn .nav-text').forEach((el, i) => {
            if (t.nav[i]) el.textContent = t.nav[i];
        });
        
        // Hero section
        document.querySelector('.hero-title').innerHTML = t.heroTitle;
        document.querySelector('.hero-description').textContent = t.heroDesc;
        document.querySelector('.hero-actions .btn-primary').textContent = t.heroBtn1;
        document.querySelector('.hero-actions .btn-secondary').textContent = t.heroBtn2;
        
        // Services section
        document.querySelector('#services .section-title').textContent = t.servicesTitle;
        document.querySelector('#services .section-subtitle').textContent = t.servicesSubtitle;
        
        const serviceCards = document.querySelectorAll('#services .platform-card');
        if (serviceCards.length >= 3) {
            // Service 1
            serviceCards[0].querySelector('h3').textContent = t.service1.title;
            serviceCards[0].querySelector('p').textContent = t.service1.desc;
            serviceCards[0].querySelectorAll('li').forEach((li, i) => {
                li.innerHTML = `<i class="fas fa-check"></i> ${t.service1.features[i]}`;
            });
            serviceCards[0].querySelector('.btn').textContent = t.service1.btn;
            
            // Service 2
            serviceCards[1].querySelector('h3').textContent = t.service2.title;
            serviceCards[1].querySelector('p').textContent = t.service2.desc;
            serviceCards[1].querySelectorAll('li').forEach((li, i) => {
                li.innerHTML = `<i class="fas fa-check"></i> ${t.service2.features[i]}`;
            });
            serviceCards[1].querySelector('.btn').textContent = t.service2.btn;
            
            // Service 3
            serviceCards[2].querySelector('h3').textContent = t.service3.title;
            serviceCards[2].querySelector('p').textContent = t.service3.desc;
            serviceCards[2].querySelectorAll('li').forEach((li, i) => {
                li.innerHTML = `<i class="fas fa-check"></i> ${t.service3.features[i]}`;
            });
            serviceCards[2].querySelector('.btn').textContent = t.service3.btn;
        }
        
        // Portfolio section
        document.querySelector('#portfolio .section-title').textContent = t.portfolioTitle;
        document.querySelector('#portfolio .section-subtitle').textContent = t.portfolioSubtitle;
        
        const projectCards = document.querySelectorAll('#portfolio .product-card');
        if (projectCards.length >= 3) {
            // Project 1
            projectCards[0].querySelector('h4').textContent = t.project1.title;
            projectCards[0].querySelector('p').textContent = t.project1.desc;
            projectCards[0].querySelector('.product-price').textContent = t.project1.tag;
            projectCards[0].querySelector('.btn').textContent = t.projectBtn;
            
            // Project 2
            projectCards[1].querySelector('h4').textContent = t.project2.title;
            projectCards[1].querySelector('p').textContent = t.project2.desc;
            projectCards[1].querySelector('.product-price').textContent = t.project2.tag;
            projectCards[1].querySelector('.btn').textContent = t.projectBtn;
            
            // Project 3
            projectCards[2].querySelector('h4').textContent = t.project3.title;
            projectCards[2].querySelector('p').textContent = t.project3.desc;
            projectCards[2].querySelector('.product-price').textContent = t.project3.tag;
            projectCards[2].querySelector('.btn').textContent = t.projectBtn;
        }
        
        // Testimonials section
        document.querySelector('#testimonials .section-title').textContent = t.testimonialsTitle;
        document.querySelector('#testimonials .section-subtitle').textContent = t.testimonialsSubtitle;
        
        const testimonialCards = document.querySelectorAll('#testimonials .testimonial-card');
        if (testimonialCards.length >= 3) {
            // Testimonial 1
            testimonialCards[0].querySelector('.testimonial-content p').textContent = t.testimonial1.quote;
            testimonialCards[0].querySelector('h4').textContent = t.testimonial1.name;
            testimonialCards[0].querySelector('span').textContent = t.testimonial1.role;
            
            // Testimonial 2
            testimonialCards[1].querySelector('.testimonial-content p').textContent = t.testimonial2.quote;
            testimonialCards[1].querySelector('h4').textContent = t.testimonial2.name;
            testimonialCards[1].querySelector('span').textContent = t.testimonial2.role;
            
            // Testimonial 3
            testimonialCards[2].querySelector('.testimonial-content p').textContent = t.testimonial3.quote;
            testimonialCards[2].querySelector('h4').textContent = t.testimonial3.name;
            testimonialCards[2].querySelector('span').textContent = t.testimonial3.role;
        }
        
        // Blog section
        document.querySelector('#blog .section-title').textContent = t.blogTitle;
        document.querySelector('#blog .section-subtitle').textContent = t.blogSubtitle;
        
        const blogCards = document.querySelectorAll('#blog .blog-card');
        if (blogCards.length >= 3) {
            // Blog 1
            blogCards[0].querySelector('.blog-category').textContent = t.blog1.category;
            blogCards[0].querySelector('h3').textContent = t.blog1.title;
            blogCards[0].querySelector('p').textContent = t.blog1.desc;
            blogCards[0].querySelector('.blog-meta span').innerHTML = `<i class="fas fa-calendar"></i> ${t.blog1.date}`;
            blogCards[0].querySelectorAll('.blog-meta span')[1].innerHTML = `<i class="fas fa-user"></i> ${t.blogAuthor}`;
            blogCards[0].querySelector('.btn-text').innerHTML = `${t.blogBtn} <i class="fas fa-arrow-right"></i>`;
            
            // Blog 2
            blogCards[1].querySelector('.blog-category').textContent = t.blog2.category;
            blogCards[1].querySelector('h3').textContent = t.blog2.title;
            blogCards[1].querySelector('p').textContent = t.blog2.desc;
            blogCards[1].querySelector('.blog-meta span').innerHTML = `<i class="fas fa-calendar"></i> ${t.blog2.date}`;
            blogCards[1].querySelectorAll('.blog-meta span')[1].innerHTML = `<i class="fas fa-user"></i> ${t.blogAuthor}`;
            blogCards[1].querySelector('.btn-text').innerHTML = `${t.blogBtn} <i class="fas fa-arrow-right"></i>`;
            
            // Blog 3
            blogCards[2].querySelector('.blog-category').textContent = t.blog3.category;
            blogCards[2].querySelector('h3').textContent = t.blog3.title;
            blogCards[2].querySelector('p').textContent = t.blog3.desc;
            blogCards[2].querySelector('.blog-meta span').innerHTML = `<i class="fas fa-calendar"></i> ${t.blog3.date}`;
            blogCards[2].querySelectorAll('.blog-meta span')[1].innerHTML = `<i class="fas fa-user"></i> ${t.blogAuthor}`;
            blogCards[2].querySelector('.btn-text').innerHTML = `${t.blogBtn} <i class="fas fa-arrow-right"></i>`;
        }
        
        // Resources section
        document.querySelector('#resources .section-title').textContent = t.resourcesTitle;
        document.querySelector('#resources .section-subtitle').textContent = t.resourcesSubtitle;
        
        const resourceCards = document.querySelectorAll('#resources .resource-card');
        if (resourceCards.length >= 4) {
            // Resource 1
            resourceCards[0].querySelector('h3').textContent = t.resource1.title;
            resourceCards[0].querySelector('p').textContent = t.resource1.desc;
            resourceCards[0].querySelectorAll('li').forEach((li, i) => {
                li.textContent = t.resource1.features[i];
            });
            resourceCards[0].querySelector('.btn').textContent = t.resource1.btn;
            
            // Resource 2
            resourceCards[1].querySelector('h3').textContent = t.resource2.title;
            resourceCards[1].querySelector('p').textContent = t.resource2.desc;
            resourceCards[1].querySelectorAll('li').forEach((li, i) => {
                li.textContent = t.resource2.features[i];
            });
            resourceCards[1].querySelector('.btn').textContent = t.resource2.btn;
            
            // Resource 3
            resourceCards[2].querySelector('h3').textContent = t.resource3.title;
            resourceCards[2].querySelector('p').textContent = t.resource3.desc;
            resourceCards[2].querySelectorAll('li').forEach((li, i) => {
                li.textContent = t.resource3.features[i];
            });
            resourceCards[2].querySelector('.btn').textContent = t.resource3.btn;
            
            // Resource 4
            resourceCards[3].querySelector('h3').textContent = t.resource4.title;
            resourceCards[3].querySelector('p').textContent = t.resource4.desc;
            resourceCards[3].querySelectorAll('li').forEach((li, i) => {
                li.textContent = t.resource4.features[i];
            });
            resourceCards[3].querySelector('.btn').textContent = t.resource4.btn;
        }
        
        // Footer translations
        document.querySelector('.footer-logo h3').textContent = t.businessName;
        document.querySelector('.footer-logo .company-tagline').textContent = t.tagline;
        document.querySelector('.company-description').textContent = t.footerDescription;
        
        // Footer sections
        document.querySelectorAll('.footer-section h4').forEach((h4, i) => {
            if (i === 1) h4.textContent = t.footerQuickLinks;
            if (i === 2) h4.textContent = t.footerServices;
            if (i === 3) h4.textContent = t.footerSupport;
            if (i === 4) h4.textContent = t.footerContact;
        });
        
        // Newsletter section
        document.querySelector('.newsletter-content h4').textContent = t.newsletterTitle;
        document.querySelector('.newsletter-content p').textContent = t.newsletterDesc;
        document.querySelector('.newsletter-form input').placeholder = t.newsletterPlaceholder;
        document.querySelector('.newsletter-form button').innerHTML = `<i class="fas fa-paper-plane"></i> ${t.newsletterButton}`;
        
        // Copyright
        document.querySelector('.copyright p').textContent = t.copyright;
        
        // Legal links
        const legalLinks = document.querySelectorAll('.legal-links a');
        legalLinks[0].textContent = t.legalPrivacy;
        legalLinks[1].textContent = t.legalTerms;
        legalLinks[2].textContent = t.legalCookies;
        legalLinks[3].textContent = t.legalImprint;
        legalLinks[4].textContent = t.legalAGB;
        legalLinks[5].textContent = t.legalGDPR;
        
        // Cookie banner
        document.querySelector('.cookie-header h3').innerHTML = `<i class="fas fa-cookie-bite"></i> ${t.cookieTitle}`;
        document.querySelector('.cookie-body p').textContent = t.cookieDesc;
        document.querySelectorAll('.cookie-option span').forEach((span, i) => {
            if (i === 0) span.textContent = t.cookieNecessary;
            if (i === 1) span.textContent = t.cookieAnalytics;
            if (i === 2) span.textContent = t.cookieMarketing;
        });
        document.getElementById('cookie-settings').textContent = t.cookieSettings;
        document.getElementById('accept-all-cookies').textContent = t.cookieAcceptAll;
        
        // Cookie links
        const cookieLinks = document.querySelectorAll('.cookie-links a');
        cookieLinks[0].textContent = t.legalPrivacy;
        cookieLinks[1].textContent = t.legalCookies;
        cookieLinks[2].textContent = t.legalTerms;
        
        // Overlay
        document.querySelector('.overlay-logo h1').textContent = t.businessName;
        document.querySelector('.overlay-logo p').textContent = t.tagline;
        document.querySelector('.overlay-message h2').textContent = t.overlayTitle;
        document.querySelector('.overlay-message p').textContent = t.overlayDesc;
        
        // Legal modal
        document.getElementById('legal-title').textContent = t.legalTitle;
        
        // Update language switcher active state
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        document.querySelector(`.lang-btn[data-lang='${lang}']`).classList.add('active');
        
        window.dispatchEvent(new Event('languageChanged'));
        showNotification(`Language changed to ${lang.toUpperCase()}`, 'success');
    }

    // Button functionality with different actions
    const allButtons = document.querySelectorAll('.btn');
    
    allButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Handle different button actions
            const buttonText = this.textContent.trim();
            
            if (buttonText.includes('Erkunden') || buttonText.includes('Explore')) {
                showNotification('Opening Cloud Platform...', 'info');
                simulateLoading('Cloud Platform is loading...');
            } else if (buttonText.includes('Mehr Info') || buttonText.includes('More Info')) {
                showNotification('Opening Mobile Platform details...', 'info');
                simulateLoading('Mobile Platform details loading...');
            } else if (buttonText.includes('Demo')) {
                showNotification('Starting Desktop Platform demo...', 'info');
                simulateLoading('Demo is starting...');
            } else if (buttonText.includes('Kaufen') || buttonText.includes('Buy')) {
                showNotification('Redirecting to checkout...', 'success');
                simulateLoading('Preparing checkout...');
            } else if (buttonText.includes('Konfigurieren') || buttonText.includes('Configure')) {
                showNotification('Opening product configurator...', 'info');
                simulateLoading('Configurator loading...');
            } else if (buttonText.includes('Weiterlesen') || buttonText.includes('Read More')) {
                showNotification('Opening blog article...', 'info');
                simulateLoading('Article loading...');
            } else if (buttonText.includes('Öffnen') || buttonText.includes('Open')) {
                showNotification('Opening documentation...', 'info');
                simulateLoading('Documentation loading...');
            } else if (buttonText.includes('Ansehen') || buttonText.includes('Watch')) {
                showNotification('Opening video tutorials...', 'info');
                simulateLoading('Video player loading...');
            } else if (buttonText.includes('Herunterladen') || buttonText.includes('Download')) {
                showNotification('Starting download...', 'success');
                simulateLoading('Downloading files...');
            } else if (buttonText.includes('Kontakt') || buttonText.includes('Contact')) {
                showNotification('Opening support chat...', 'info');
                simulateLoading('Connecting to support...');
            }
        });
    });

    // Card hover effects
    const cards = document.querySelectorAll('.platform-card, .testimonial-card, .blog-card, .resource-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Product image hover effect
    const productImage = document.querySelector('.product-image');
    
    if (productImage) {
        productImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(1deg)';
        });
        
        productImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Simulate loading function
    function simulateLoading(message) {
        setTimeout(() => {
            showNotification('Action completed successfully!', 'success');
        }, 2000);
    }

    // Enhanced notification system
    function showNotification(message, type = 'info') {
        // Ensure notification container exists
        let container = document.getElementById('notification-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notification-container';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 12px;
                z-index: 10000;
                pointer-events: none;
            `;
            document.body.appendChild(container);
        }

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        const icon = type === 'success' ? 'fas fa-check-circle' : 
                    type === 'error' ? 'fas fa-exclamation-circle' : 
                    'fas fa-info-circle';
        notification.innerHTML = `
            <i class="${icon}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        const bgColor = type === 'success' ? 'rgba(16, 185, 129, 0.9)' : 
                       type === 'error' ? 'rgba(239, 68, 68, 0.9)' : 
                       'rgba(139, 92, 246, 0.9)';
        notification.style.cssText = `
            background: ${bgColor};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            gap: 1rem;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            font-weight: 500;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            pointer-events: auto;
            position: relative;
            z-index: 1;
        `;
        // Prepend so newest is on top
        container.prepend(notification);
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
            pointer-events: auto;
        `;
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        }, 5000);
    }

    // Add ripple effect styles
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .section {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }
        
        .section.active {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }
        
        /* Loading animation */
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255,255,255,.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any open notifications
            const notifications = document.querySelectorAll('.notification');
            notifications.forEach(notification => {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            });
            
            // Close legal modal if open
            const modal = document.getElementById('legal-modal');
            if (modal.classList.contains('active')) {
                closeLegalModal();
            }
        }
        
        // Arrow key navigation between sections
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const sections = ['platforms', 'products', 'customers', 'blog', 'resources'];
            const currentIndex = sections.indexOf(currentSection);
            let newIndex;
            
            if (e.key === 'ArrowRight') {
                newIndex = (currentIndex + 1) % sections.length;
            } else {
                newIndex = (currentIndex - 1 + sections.length) % sections.length;
            }
            
            const targetSection = sections[newIndex];
            const targetButton = document.querySelector(`[data-section="${targetSection}"]`);
            
            if (targetButton) {
                targetButton.click();
            }
        }
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.platform-card, .testimonial-card, .blog-card, .resource-card, .btn').forEach(el => {
        observer.observe(el);
    });

    // Add page load animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Set initial language to German since DE button is active by default
        changeLanguage('de');
        
        // Animate elements on page load
        const animatedElements = document.querySelectorAll('.section-title, .section-subtitle, .platform-card, .product-info, .product-image');
        
        animatedElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
        
        showNotification('Website loaded successfully!', 'success');
    });

    // Footer functionality
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                emailInput.value = '';
                simulateLoading('Processing subscription...');
            }
        });
    }

    // Social media links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.getAttribute('title');
            showNotification(`Opening ${platform}...`, 'info');
            simulateLoading(`Redirecting to ${platform}...`);
        });
    });

    // Footer navigation links
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent;
            
            if (this.getAttribute('href').startsWith('#')) {
                const targetSection = this.getAttribute('href').substring(1);
                const targetButton = document.querySelector(`[data-section="${targetSection}"]`);
                if (targetButton) {
                    targetButton.click();
                }
            } else {
                showNotification(`Opening ${linkText}...`, 'info');
                simulateLoading(`Loading ${linkText}...`);
            }
        });
    });

    // Legal links
    const legalLinks = document.querySelectorAll('.legal-links a');
    legalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const legalType = this.getAttribute('data-legal');
            showLegalModal(legalType);
        });
    });

    // Legal modal functionality
    function showLegalModal(legalType) {
        const modal = document.getElementById('legal-modal');
        const title = document.querySelector('.legal-header h2');
        const content = document.querySelector('.legal-body');
        
        // Update title based on legal type
        const titles = {
            'agb': 'AGB - Allgemeine Geschäftsbedingungen',
            'privacy': 'Datenschutzerklärung',
            'terms': 'Nutzungsbedingungen',
            'cookies': 'Cookie-Richtlinie',
            'imprint': 'Impressum',
            'gdpr': 'DSGVO - Ihre Rechte'
        };
        
        title.textContent = titles[legalType] || 'Rechtliche Informationen';
        
        // Update content based on legal type
        const legalContent = getLegalContent(legalType);
        content.innerHTML = legalContent;
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        showNotification(`Opening ${titles[legalType]}`, 'info');
    }

    // Get legal content based on type
    function getLegalContent(legalType) {
        const content = {
            'agb': `
                <h3>§1 Geltungsbereich</h3>
                <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen, die Verbraucher und Unternehmer über unseren Online-Shop bei der TechHub GmbH (nachfolgend "Verkäufer") aufgeben.</p>
                
                <h3>§2 Vertragsschluss</h3>
                <p>Der Kaufvertrag kommt durch elektronische Bestellung über unseren Online-Shop zustande. Die Bestellung stellt ein verbindliches Angebot auf Abschluss eines Kaufvertrags dar.</p>
                
                <h3>§3 Preise und Versandkosten</h3>
                <p>Alle Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer. Zusätzlich fallen Versandkosten an, die vor Abschluss der Bestellung angezeigt werden.</p>
                
                <h3>§4 Zahlung</h3>
                <p>Die Zahlung erfolgt per Kreditkarte, PayPal oder Banküberweisung. Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.</p>
                
                <h3>§5 Lieferung</h3>
                <p>Die Lieferung erfolgt innerhalb von 3-5 Werktagen nach Zahlungseingang. Bei Lieferverzögerungen werden Sie umgehend informiert.</p>
                
                <h3>§6 Widerrufsrecht</h3>
                <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter die Waren in Besitz genommen haben.</p>
                
                <h3>§7 Gewährleistung</h3>
                <p>Es gelten die gesetzlichen Gewährleistungsrechte. Bei Mängeln haben Sie das Recht auf Nacherfüllung, Minderung oder Rücktritt vom Vertrag.</p>
                
                <h3>§8 Haftung</h3>
                <p>Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach dem Produkthaftungsgesetz. Im Übrigen ist unsere Haftung auf die bei Vertragsschluss vorhersehbaren Schäden begrenzt.</p>
                
                <h3>§9 Datenschutz</h3>
                <p>Die Erhebung und Verarbeitung Ihrer personenbezogenen Daten erfolgt gemäß unserer Datenschutzerklärung und den geltenden datenschutzrechtlichen Bestimmungen.</p>
                
                <h3>§10 Schlussbestimmungen</h3>
                <p>Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist, soweit der Kunde Kaufmann ist, der Sitz des Verkäufers. Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam.</p>
            `,
            'privacy': `
                <h3>1. Datenschutz auf einen Blick</h3>
                <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf unserer Website.</p>
                
                <h3>2. Verantwortliche Stelle</h3>
                <p>TechHub GmbH<br>
                Musterstraße 123<br>
                12345 Musterstadt<br>
                E-Mail: datenschutz@techhub.de<br>
                Telefon: +49 123 456789</p>
                
                <h3>3. Erhebung und Verarbeitung von Daten</h3>
                <p>Bei Ihrem Besuch auf unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen umfassen:</p>
                <ul>
                    <li>IP-Adresse des zugreifenden Rechners</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Übertragene Datenmenge</li>
                    <li>Website, von der aus der Zugriff erfolgte</li>
                    <li>Verwendeter Browser und Betriebssystem</li>
                </ul>
                
                <h3>4. Cookies</h3>
                <p>Unsere Website verwendet Cookies. Diese dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</p>
                
                <h3>5. Ihre Rechte</h3>
                <p>Sie haben das Recht auf:</p>
                <ul>
                    <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                    <li>Berichtigung unrichtiger personenbezogener Daten</li>
                    <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten</li>
                    <li>Einschränkung der Datenverarbeitung</li>
                    <li>Datenübertragbarkeit</li>
                    <li>Widerspruch gegen die Verarbeitung Ihrer Daten</li>
                </ul>
            `,
            'cookies': `
                <h3>Was sind Cookies?</h3>
                <p>Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Computer gespeichert werden. Sie helfen dabei, die Website für Sie zu optimieren und Ihnen ein besseres Nutzererlebnis zu bieten.</p>
                
                <h3>Welche Cookies verwenden wir?</h3>
                
                <h4>Notwendige Cookies</h4>
                <p>Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. Sie enthalten keine persönlichen Informationen.</p>
                
                <h4>Analyse-Cookies</h4>
                <p>Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen anonym gesammelt und gemeldet werden.</p>
                
                <h4>Marketing-Cookies</h4>
                <p>Diese Cookies werden verwendet, um Besuchern relevante Anzeigen und Marketingkampagnen bereitzustellen. Diese Cookies verfolgen Besucher über Websites hinweg und sammeln Informationen, um maßgeschneiderte Anzeigen bereitzustellen.</p>
                
                <h3>Cookie-Verwaltung</h3>
                <p>Sie können Ihre Cookie-Einstellungen jederzeit über den Cookie-Banner oder in Ihren Browsereinstellungen ändern. Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität der Website beeinträchtigen kann.</p>
                
                <h3>Drittanbieter-Cookies</h3>
                <p>Unsere Website kann Cookies von Drittanbietern verwenden, um zusätzliche Funktionen bereitzustellen. Diese unterliegen den Datenschutzrichtlinien der jeweiligen Anbieter.</p>
            `,
            'imprint': `
                <h3>Angaben gemäß § 5 TMG</h3>
                <p>TechHub GmbH<br>
                Musterstraße 123<br>
                12345 Musterstadt</p>
                
                <h3>Vertreten durch</h3>
                <p>Geschäftsführer: Max Mustermann</p>
                
                <h3>Kontakt</h3>
                <p>Telefon: +49 123 456789<br>
                E-Mail: info@techhub.de</p>
                
                <h3>Registereintrag</h3>
                <p>Eintragung im Handelsregister<br>
                Registergericht: Amtsgericht Musterstadt<br>
                Registernummer: HRB 12345</p>
                
                <h3>Umsatzsteuer-ID</h3>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
                DE123456789</p>
                
                <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p>Max Mustermann<br>
                TechHub GmbH<br>
                Musterstraße 123<br>
                12345 Musterstadt</p>
                
                <h3>Haftungsausschluss</h3>
                <p>Haftung für Inhalte: Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
            `,
            'terms': `
                <h3>1. Nutzungsbedingungen</h3>
                <p>Durch die Nutzung unserer Website erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Diese gelten für alle Besucher und Nutzer der Website.</p>
                
                <h3>2. Nutzungsrecht</h3>
                <p>Wir gewähren Ihnen ein beschränktes, nicht übertragbares Recht zur Nutzung unserer Website ausschließlich für persönliche, nicht kommerzielle Zwecke.</p>
                
                <h3>3. Verbotene Nutzung</h3>
                <p>Es ist untersagt, die Website zu nutzen für:</p>
                <ul>
                    <li>Illegale oder rechtswidrige Zwecke</li>
                    <li>Verletzung von Rechten Dritter</li>
                    <li>Verbreitung von Schadsoftware</li>
                    <li>Störung der Website-Funktionalität</li>
                </ul>
                
                <h3>4. Geistiges Eigentum</h3>
                <p>Alle Inhalte der Website, einschließlich Texte, Bilder, Grafiken und Software, sind urheberrechtlich geschützt und gehören uns oder unseren Lizenzgebern.</p>
                
                <h3>5. Haftungsbeschränkung</h3>
                <p>Wir übernehmen keine Garantie für die ununterbrochene Verfügbarkeit der Website oder die Fehlerfreiheit der bereitgestellten Informationen.</p>
                
                <h3>6. Änderungen</h3>
                <p>Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Änderungen werden auf dieser Seite veröffentlicht.</p>
            `,
            'gdpr': `
                <h3>Ihre Rechte nach der DSGVO</h3>
                <p>Die Datenschutz-Grundverordnung (DSGVO) gewährt Ihnen umfassende Rechte im Umgang mit Ihren personenbezogenen Daten.</p>
                
                <h3>1. Recht auf Auskunft (Art. 15 DSGVO)</h3>
                <p>Sie haben das Recht zu erfahren, ob und welche personenbezogenen Daten wir von Ihnen verarbeiten, zu welchem Zweck und wie lange diese gespeichert werden.</p>
                
                <h3>2. Recht auf Berichtigung (Art. 16 DSGVO)</h3>
                <p>Sie können die Berichtigung unrichtiger oder unvollständiger personenbezogener Daten verlangen.</p>
                
                <h3>3. Recht auf Löschung (Art. 17 DSGVO)</h3>
                <p>Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, wenn bestimmte Voraussetzungen erfüllt sind.</p>
                
                <h3>4. Recht auf Einschränkung (Art. 18 DSGVO)</h3>
                <p>Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</p>
                
                <h3>5. Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
                <p>Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</p>
                
                <h3>6. Widerspruchsrecht (Art. 21 DSGVO)</h3>
                <p>Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.</p>
                
                <h3>7. Beschwerderecht (Art. 77 DSGVO)</h3>
                <p>Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten rechtswidrig erfolgt.</p>
                
                <h3>Kontakt</h3>
                <p>Für die Ausübung Ihrer Rechte kontaktieren Sie uns unter:<br>
                E-Mail: datenschutz@techhub.de<br>
                Telefon: +49 123 456789</p>
            `
        };
        
        return content[legalType] || '<p>Inhalt nicht verfügbar.</p>';
    }

    // Close legal modal
    const legalClose = document.querySelector('.legal-close');
    const legalModal = document.getElementById('legal-modal');
    
    if (legalClose) {
        legalClose.addEventListener('click', closeLegalModal);
    }
    
    if (legalModal) {
        legalModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLegalModal();
            }
        });
    }
    
    function closeLegalModal() {
        const modal = document.getElementById('legal-modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Contact information hover effects
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    console.log('TechHub Dark Theme website loaded successfully! 🚀');
    console.log('Features: Section navigation, Language switching, Interactive buttons, Dark theme with fade colors, Professional footer, Legal modal system');

    // Cookie Consent Management
    let cookiesAccepted = false;

    // Check if cookies were previously accepted
    function checkCookieConsent() {
        const consent = localStorage.getItem('cookieConsent');
        if (consent) {
            const consentData = JSON.parse(consent);
            cookiesAccepted = true;
            hideWebsiteOverlay();
            return true;
        }
        return false;
    }

    // Show cookie banner
    function showCookieBanner() {
        const banner = document.getElementById('cookie-banner');
        setTimeout(() => {
            banner.classList.add('show');
        }, 1000);
    }

    // Hide website overlay
    function hideWebsiteOverlay() {
        const overlay = document.getElementById('website-overlay');
        overlay.classList.add('hidden');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }

    // Accept all cookies
    function acceptAllCookies() {
        const consentData = {
            necessary: true,
            analytics: document.getElementById('analytics-cookies').checked,
            marketing: document.getElementById('marketing-cookies').checked,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('cookieConsent', JSON.stringify(consentData));
        cookiesAccepted = true;
        
        // Hide cookie banner
        const banner = document.getElementById('cookie-banner');
        banner.classList.remove('show');
        
        // Hide website overlay
        hideWebsiteOverlay();
        
        // Show notification
        showNotification('Cookie-Einstellungen wurden gespeichert!', 'success');
    }

    // Initialize cookie consent
    if (!checkCookieConsent()) {
        showCookieBanner();
    }
    
    // Cookie banner event listeners
    const acceptButton = document.getElementById('accept-all-cookies');
    if (acceptButton) {
        acceptButton.addEventListener('click', acceptAllCookies);
    }
    
    const settingsButton = document.getElementById('cookie-settings');
    if (settingsButton) {
        settingsButton.addEventListener('click', function() {
            // Toggle cookie options visibility or show detailed settings
            const options = document.querySelector('.cookie-options');
            if (options) {
                options.style.display = options.style.display === 'none' ? 'flex' : 'none';
            }
        });
    }
    
    // Cookie links event listeners
    document.querySelectorAll('.cookie-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const legalType = this.getAttribute('data-legal');
            showLegalModal(legalType);
        });
    });

    // Initialize all features
    initInteractiveDots();
    initScrollProgress();
    initScrollAnimations();
    initFloatingActionButton();
    initMagneticEffect();
    initParticleSystem();

    window.translations = translations;
    window.changeLanguage = changeLanguage;

    // Reload site when clicking the SVG logo only
    const headerLogo = document.getElementById('headerLogo');
    if (headerLogo) {
        headerLogo.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.reload();
        });
    }
});

// Interactive Dots Only
function initInteractiveDots() {
    const interactiveDots = document.querySelector('.interactive-dots');
    if (interactiveDots) {
        const dotCount = 20;
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'interactive-dot';
            dot.style.left = Math.random() * 100 + '%';
            dot.style.top = Math.random() * 100 + '%';
            dot.style.animationDelay = Math.random() * 5 + 's';
            interactiveDots.appendChild(dot);
        }
    }
}

// Scroll Progress Bar
function initScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// Scroll-triggered Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));
}

// Floating Action Button
function initFloatingActionButton() {
    const fab = document.getElementById('fab');
    
    fab.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide FAB based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            fab.style.opacity = '1';
            fab.style.pointerEvents = 'auto';
        } else {
            fab.style.opacity = '0';
            fab.style.pointerEvents = 'none';
        }
    });
}

// Magnetic Effect for Interactive Elements
function initMagneticEffect() {
    const magneticElements = document.querySelectorAll('.magnetic, .platform-card, .product-card, .btn');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });
}

// Enhanced Particle System
function initParticleSystem() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        // Randomize particle properties
        particle.style.animationDelay = (index * 2) + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.left = Math.random() * 100 + '%';
    });
}

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation Active State
function updateActiveNav() {
    const sections = document.querySelectorAll('.content-section');
    const navButtons = document.querySelectorAll('.nav-btn');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === currentSection) {
            btn.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Navigation Click Handlers
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetSection = btn.getAttribute('data-section');
        const targetElement = document.getElementById(targetSection);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Special offset for testimonials (Referenzen)
            if (targetSection === 'testimonials') {
                setTimeout(() => {
                    window.scrollBy({ top: -90, left: 0, behavior: 'instant' });
                }, 400);
            }
        }
        // Update active state
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Language Switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Initialize with saved theme or default
function initializeTheme() {
    const savedTheme = localStorage.getItem('preferred-theme') || 'modern';
    changeTheme(savedTheme);
    
    // Set active button
    themeButtons.forEach(button => {
        if (button.getAttribute('data-theme') === savedTheme) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Initialize everything
changeLanguage('de');
initializeTheme();

console.log('Style switcher ready! 🎨');

// Simple Style Switcher - Direct Theme Buttons
document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            
            // Remove active class from all buttons
            themeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Apply theme
            document.documentElement.removeAttribute('data-theme');
            if (theme !== 'modern') {
                document.documentElement.setAttribute('data-theme', theme);
            }
            
            // Save to localStorage
            localStorage.setItem('preferred-theme', theme);
            
            // Show success message
            const themeNames = {
                'modern': 'Modern',
                'minimalist': 'Minimalist', 
                'nature': 'Nature',
                'corporate': 'Corporate',
                'creative': 'Creative'
            };
            
            // Create a simple notification
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                z-index: 10000;
                font-weight: 500;
                transform: translateX(400px);
                transition: transform 0.3s ease;
            `;
            notification.textContent = `Theme: ${themeNames[theme]} 🎨`;
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);
            
            // Remove after 3 seconds
            setTimeout(() => {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        });
    });
    
    // Initialize saved theme
    const savedTheme = localStorage.getItem('preferred-theme') || 'modern';
    document.documentElement.removeAttribute('data-theme');
    if (savedTheme !== 'modern') {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    // Set active button
    themeButtons.forEach(button => {
        if (button.getAttribute('data-theme') === savedTheme) {
            button.classList.add('active');
        }
    });
    
    console.log('Simple theme switcher loaded! 🎨');
});

function applyTranslations(lang) {
    console.log('Applying translations for', lang); // Debug log
    const t = window.translations[lang] || window.translations['de'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = key.split('.').reduce((o, i) => (o ? o[i] : undefined), t);
        if (typeof value === 'string') {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = value;
            } else if (value.includes('<br>') || value.includes('<br/>')) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        }
    });
}

// On page load, apply initial translations
applyTranslations(window.currentLang || 'de');