// Système de traductions complet
        const translations = {
            pt: {
                'title': 'Estudante de Engenharia de Software | Estagiário em Desenvolvimento de Sistemas',
                'badge': 'Disponível para oportunidades',
                'about': 'Sou estudante de Engenharia de Software e estagiário em Desenvolvimento de Sistemas, apaixonado por tecnologia e por transformar desafios em soluções eficientes. Com foco em desenvolvimento, bancos de dados, infraestrutura e automação, busco evoluir constantemente e contribuir para projetos que gerem impacto e resultados.',
                'contact-title': 'Contato',
                'email-label': 'ENVIAR EMAIL',
                'social-title': 'Redes Profissionais',
                'linkedin-label': 'LINKEDIN',
                'linkedin-desc': 'Conecte-se comigo',
                'github-label': 'GITHUB',
                'github-desc': 'Meus projetos e contribuições Open Source',
                'twitter-label': 'INSTAGRAM',
                'twitter-desc': 'Conteúdo sobre tecnologia, projetos e carreira',
                'tiktok-label': 'PORTFÓLIO',
                'tiktok-desc': 'Projetos, estudos e informações profissionais',
                'footer': '© 2026 Matheus Marks. Todos os direitos reservados.'
            },
            en: {
                'title': 'Software Engineering Student | Systems Development Intern',
                'badge': 'Open to opportunities',
                'about': 'I\'m a Software Engineering student and Systems Development intern, passionate about technology and turning challenges into efficient solutions. With a focus on development, databases, infrastructure, and automation, I constantly seek to grow and contribute to projects that create impact and results.',
                'contact-title': 'Contact',
                'email-label': 'SEND EMAIL',
                'social-title': 'Professional Networks',
                'linkedin-label': 'LINKEDIN',
                'linkedin-desc': 'Connect with me',
                'github-label': 'GITHUB',
                'github-desc': 'My projects and Open Source contribution',
                'twitter-label': 'INSTAGRAM',
                'twitter-desc': 'Technology, projects, and career content',
                'tiktok-label': 'PORTFÓLIO',
                'tiktok-desc': 'Projects, studies, and professional information',
                'footer': '© 2026 Matheus Barcelli Marques de Lima. All rights reserved.'
            }
        };

        // Função para mudar idioma
        function setLanguage(lang) {
            localStorage.setItem('preferredLanguage', lang);
            document.documentElement.lang = lang === 'en' ? 'en-US' : 'pt-BR';
            
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    const isHTML = key === 'about';
                    if (isHTML) {
                        element.innerHTML = translations[lang][key];
                    } else {
                        element.textContent = translations[lang][key];
                    }
                }
            });
        }

        // Language selector
        document.querySelectorAll('.language-item').forEach(item => {
            item.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                document.querySelectorAll('.language-item').forEach(li => li.classList.remove('active'));
                this.classList.add('active');
                setLanguage(lang);
            });
        });

        // Carregar idioma salvo ao iniciar
        window.addEventListener('DOMContentLoaded', function() {
            const savedLanguage = localStorage.getItem('preferredLanguage') || 'pt';
            const langElement = document.querySelector(`[data-lang="${savedLanguage}"]`);
            if (langElement) {
                langElement.click();
            }
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Intersection Observer para animações ao scroll
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

        document.querySelectorAll('.social-box, .contact-box').forEach(element => {
            observer.observe(element);
        });

        // Loading Screen Handler
        window.addEventListener('load', function() {
            const loadingScreen = document.getElementById('loadingScreen');
            // Remove loading screen after 2.5 seconds
            setTimeout(function() {
                loadingScreen.classList.add('hidden');
            }, 2500);
        });

        // Fallback: remove loading screen after 4 seconds if page doesn't fully load
        setTimeout(function() {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
                loadingScreen.classList.add('hidden');
            }
        }, 4000);
