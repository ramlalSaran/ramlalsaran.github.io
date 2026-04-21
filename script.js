// ===========================
// DATA STORE (localStorage)
// ===========================

const defaultData = {
    profile: {
        profileImage: '',
        heroSubtitle: 'Full Stack Developer crafting premium websites and apps that transform businesses. Expertise in modern web technologies and user-centric design.',
        statProjects: '50+',
        statClients: '100+',
        statExperience: '5+',
        aboutIntro: "Hi, I'm Ram Saran, a passionate Full Stack Developer based in Sardarshahar, Churu, Rajasthan, India. I specialize in building modern, responsive, and high-performance websites and web applications that drive real business results.",
        aboutBody1: 'With strong expertise in technologies like HTML, CSS, JavaScript, PHP, Laravel, CodeIgniter, and React, I help businesses, students, and local clients establish a powerful online presence. My approach combines clean code architecture with stunning visual design to create digital solutions that users love.',
        aboutBody2: 'Every project I undertake is a commitment to excellence. I focus on creating websites and applications that are not only visually premium but also perform exceptionally well. From initial concept to final deployment, I ensure every detail is crafted with precision and care.',
        aboutClosing: "I'm always learning, experimenting with new technologies, and pushing the boundaries of what's possible in web development. When I'm not coding, you'll find me exploring the latest web trends or contributing to the developer community."
    },
    services: [
        {
            id: 1,
            icon: 'fas fa-globe',
            title: 'Business Website Development',
            description: 'Create a professional online presence with modern, responsive websites that showcase your business and convert visitors into customers.',
            features: ['Fully Responsive Design', 'SEO Optimized', 'Fast Loading Speed', 'Security Features']
        },
        {
            id: 2,
            icon: 'fas fa-briefcase',
            title: 'Portfolio Website Design',
            description: 'Showcase your work with a stunning personal or professional portfolio that leaves a lasting impression and attracts opportunities.',
            features: ['Custom Design', 'Project Showcase', 'Smooth Animations', 'Contact Integration']
        },
        {
            id: 3,
            icon: 'fas fa-mobile-alt',
            title: 'Web App Development',
            description: 'Build powerful, interactive web applications with modern technologies. From dashboards to complex systems, I create scalable solutions.',
            features: ['React & JavaScript', 'Database Integration', 'User Authentication', 'API Development']
        }
    ],
    experience: [
        {
            id: 1,
            title: 'Senior Full Stack Developer',
            company: 'Freelance',
            period: '2021 - Present',
            description: 'Developing premium web solutions for clients worldwide. Specializing in React, Laravel, and modern web technologies.'
        },
        {
            id: 2,
            title: 'Web Developer',
            company: 'Tech Solutions',
            period: '2019 - 2021',
            description: 'Built and maintained multiple client websites using PHP, Laravel, and JavaScript frameworks.'
        }
    ],
    skills: [
        {
            id: 1,
            name: 'Frontend Technologies',
            items: [
                { name: 'HTML5', level: 95 },
                { name: 'CSS3 & SCSS', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'React', level: 80 }
            ]
        },
        {
            id: 2,
            name: 'Backend Technologies',
            items: [
                { name: 'PHP', level: 88 },
                { name: 'Laravel', level: 85 },
                { name: 'CodeIgniter', level: 82 },
                { name: 'MySQL', level: 87 }
            ]
        },
        {
            id: 3,
            name: 'Other Skills',
            items: ['Git & GitHub', 'Responsive Design', 'UI/UX Design', 'Web Performance', 'SEO Optimization', 'Figma']
        }
    ],
    projects: [
        {
            id: 1,
            title: 'Modern Business Website',
            image: 'project-1',
            icon: 'fas fa-globe',
            description: 'A sleek, fully responsive website for an e-commerce business featuring product showcases, smooth navigation, and integrated payment gateway.',
            fullDescription: 'This modern business website was designed for an e-commerce company looking to establish a strong online presence. The website features a fully responsive design that looks perfect on all devices, from mobile phones to desktop computers.',
            features: ['Fully responsive and mobile-optimized design', 'Product showcase with filtering and search', 'Integrated shopping cart and checkout system', 'Fast loading speed (Lighthouse score 95+)', 'SEO optimized for better search rankings', 'Contact and inquiry forms'],
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']
        },
        {
            id: 2,
            title: 'Professional Portfolio Website',
            image: 'project-2',
            icon: 'fas fa-briefcase',
            description: 'Personal branding portfolio with smooth animations, dark theme, project showcase, and seamless contact integration for creative professionals.',
            fullDescription: 'A stunning personal portfolio website designed to showcase creative work and attract potential clients and employers. The site features smooth animations, dark theme, and elegant transitions that leave a lasting impression.',
            features: ['Smooth scroll animations and transitions', 'Dark luxury theme with gold accents', 'Project showcase with detailed descriptions', 'About section with personal branding', 'Contact form with email integration', 'Social media links and CTAs'],
            tags: ['React', 'CSS3', 'Animation', 'Portfolio'],
            technologies: ['React', 'CSS3 (SCSS)', 'JavaScript', 'Framer Motion']
        },
        {
            id: 3,
            title: 'Advanced App Dashboard',
            image: 'project-3',
            icon: 'fas fa-chart-line',
            description: 'Interactive web app dashboard with real-time analytics, user management, charts, and data visualization built with React and Laravel backend.',
            fullDescription: 'A comprehensive web application dashboard built with React and Laravel, designed for businesses to manage their operations, view analytics, and make data-driven decisions. The dashboard provides real-time insights and interactive visualizations.',
            features: ['Real-time analytics and data visualization', 'User management and authentication system', 'Interactive charts and graphs', 'Database-driven with MySQL', 'RESTful API backend with Laravel', 'Admin panel and user roles'],
            tags: ['React', 'Laravel', 'MySQL', 'Dashboard'],
            technologies: ['React', 'Laravel', 'MySQL', 'Chart.js', 'RESTful API']
        }
    ],
    contact: {
        description: 'Have a project in mind? Let\'s discuss how I can help you achieve your goals.',
        items: [
            { id: 1, icon: 'fas fa-envelope', label: 'Email', value: 'ramlalsaranoffical@gmail.com', link: 'mailto:ramlalsaranoffical@gmail.com' },
            { id: 2, icon: 'fas fa-phone', label: 'Phone', value: '+91 9376136511', link: 'tel:+919376136511' },
            { id: 3, icon: 'fab fa-whatsapp', label: 'WhatsApp', value: '+91 9376136511', link: 'https://wa.me/919376136511' },
            { id: 4, icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Sardarshahar, Churu, Rajasthan, India', link: '' }
        ]
    },
    social: {
        followMeTitle: 'Follow Me',
        links: [
            { id: 1, icon: 'fab fa-github', url: 'https://github.com/ramlalSaran', title: 'GitHub' },
            { id: 2, icon: 'fab fa-instagram', url: 'https://www.instagram.com/ram.jaat.1327/', title: 'Instagram' },
            { id: 3, icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/ramlal-saran-5950a7304/', title: 'LinkedIn' },
            { id: 4, icon: 'fab fa-whatsapp', url: 'https://wa.me/919376136511', title: 'WhatsApp' }
        ]
    },
    footer: {
        name: 'Ram Saran',
        description: 'Full Stack Developer crafting premium digital solutions',
        copyright: '© 2026 Ram Saran. All rights reserved.',
        madeWith: 'Designed & Developed with <span class="heart">❤️</span> in Rajasthan',
        whatsappNumber: '919376136511'
    }
};

// Load data from localStorage or use default
function loadData() {
    const stored = localStorage.getItem('portfolioData');
    if (stored) {
        return JSON.parse(stored);
    }
    return defaultData;
}

// Save data to localStorage
function saveData(data) {
    localStorage.setItem('portfolioData', JSON.stringify(data));
}

// Initialize data
let portfolioData = loadData();
saveData(portfolioData);

// ===========================
// RENDER FUNCTIONS
// ===========================

function renderProfile() {
    const p = portfolioData.profile;
    document.getElementById('heroSubtitle').textContent = p.heroSubtitle;
    document.getElementById('statProjects').textContent = p.statProjects;
    document.getElementById('statClients').textContent = p.statClients;
    document.getElementById('statExperience').textContent = p.statExperience;
    document.getElementById('aboutIntro').textContent = p.aboutIntro;
    document.getElementById('aboutBody1').textContent = p.aboutBody1;
    document.getElementById('aboutBody2').textContent = p.aboutBody2;
    document.getElementById('aboutClosing').textContent = p.aboutClosing;

    if (p.profileImage) {
        document.getElementById('profileImage').src = p.profileImage;
        document.getElementById('profileImage').style.display = 'block';
        document.getElementById('profilePlaceholder').style.display = 'none';
    }
}

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = portfolioData.services.map((service, index) => `
        <div class="service-card" style="animation-delay: ${index * 0.1}s">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <ul class="service-features">
                ${service.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function renderExperience() {
    const timeline = document.getElementById('experienceTimeline');
    if (!timeline) return;

    timeline.innerHTML = portfolioData.experience.map((exp, index) => `
        <div class="experience-item">
            <div class="experience-card">
                <h3 class="experience-title">${exp.title}</h3>
                <div class="experience-company">${exp.company}</div>
                <div class="experience-period">${exp.period}</div>
                <p class="experience-description">${exp.description}</p>
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    container.innerHTML = portfolioData.skills.map(skill => {
        if (skill.items.some(item => typeof item === 'object')) {
            return `
                <div class="skill-category">
                    <h3>${skill.name}</h3>
                    <div class="skills-list">
                        ${skill.items.map(item => `
                            <div class="skill-item">
                                <span>${item.name}</span>
                                <div class="skill-bar">
                                    <div class="skill-fill" style="width: ${item.level}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="skill-category">
                    <h3>${skill.name}</h3>
                    <div class="skill-badges">
                        ${skill.items.map(item => `<span class="badge">${item}</span>`).join('')}
                    </div>
                </div>
            `;
        }
    }).join('');
}

function renderProjects() {
    const grid = document.getElementById('portfolioGrid');
    grid.innerHTML = portfolioData.projects.map((project, index) => `
        <div class="portfolio-card" style="animation-delay: ${index * 0.1}s">
            <div class="portfolio-image">
                <div class="image-placeholder ${project.image}">
                    <i class="${project.icon}"></i>
                </div>
                <div class="portfolio-overlay">
                    <button class="btn btn-small" onclick="openProjectModal(${project.id})">View Details</button>
                </div>
            </div>
            <div class="portfolio-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="portfolio-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderContact() {
    const details = document.getElementById('contactDetails');
    document.getElementById('contactDescription').textContent = portfolioData.contact.description;

    details.innerHTML = portfolioData.contact.items.map(item => `
        <div class="contact-item">
            <div class="contact-icon">
                <i class="${item.icon}"></i>
            </div>
            <div class="contact-text">
                <h4>${item.label}</h4>
                <p>${item.link ? `<a href="${item.link}">${item.value}</a>` : item.value}</p>
            </div>
        </div>
    `).join('');
}

function renderSocial() {
    const socials = document.getElementById('socialLinks');
    document.getElementById('followMeTitle').textContent = portfolioData.social.followMeTitle;

    socials.innerHTML = portfolioData.social.links.map(link => `
        <a href="${link.url}" target="_blank" class="social-link" title="${link.title}">
            <i class="${link.icon}"></i>
        </a>
    `).join('');
}

function renderFooter() {
    const f = portfolioData.footer;
    document.getElementById('footerName').textContent = f.name;
    document.getElementById('footerDescription').textContent = f.description;
    document.getElementById('footerCopyright').textContent = f.copyright;
    document.getElementById('footerMadeWith').innerHTML = f.madeWith;
    document.getElementById('whatsappBtn').href = `https://wa.me/${f.whatsappNumber}`;
}

// Render all content
function renderAll() {
    renderProfile();
    renderServices();
    renderExperience();
    renderSkills();
    renderProjects();
    renderContact();
    renderSocial();
    renderFooter();
}

// ===========================
// CUSTOM CURSOR
// ===========================

const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

    cursorDot.style.left = x + 'px';
    cursorDot.style.top = y + 'px';

    cursor.classList.add('active');
    cursorDot.classList.add('active');
});

document.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
    cursorDot.classList.remove('active');
});

document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.classList.contains('service-card') ||
        e.target.classList.contains('portfolio-card') ||
        e.target.closest('button') ||
        e.target.closest('a')) {
        cursor.style.transform = 'scale(1.5)';
        cursorDot.style.transform = 'scale(0)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.classList.contains('service-card') ||
        e.target.classList.contains('portfolio-card') ||
        e.target.closest('button') ||
        e.target.closest('a')) {
        cursor.style.transform = 'scale(1)';
        cursorDot.style.transform = 'scale(1)';
    }
});

// ===========================
// ADMIN PANEL
// ===========================

const adminToggle = document.getElementById('adminToggle');
const adminPanel = document.getElementById('adminPanel');
const closeAdmin = document.getElementById('closeAdmin');
const adminOverlay = document.createElement('div');
adminOverlay.className = 'admin-overlay';
document.body.appendChild(adminOverlay);

adminToggle?.addEventListener('click', () => {
    adminPanel.classList.add('active');
    adminOverlay.classList.add('active');
    loadAdminData();
});

closeAdmin?.addEventListener('click', () => {
    adminPanel.classList.remove('active');
    adminOverlay.classList.remove('active');
});

adminOverlay.addEventListener('click', () => {
    adminPanel.classList.remove('active');
    adminOverlay.classList.remove('active');
});

// Tab switching
document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab + 'Tab').classList.add('active');
    });
});

// Load data into admin forms
function loadAdminData() {
    // Profile
    document.getElementById('adminProfileImage').value = portfolioData.profile.profileImage;
    document.getElementById('adminHeroSubtitle').value = portfolioData.profile.heroSubtitle;
    document.getElementById('adminStatProjects').value = portfolioData.profile.statProjects;
    document.getElementById('adminStatClients').value = portfolioData.profile.statClients;
    document.getElementById('adminStatExperience').value = portfolioData.profile.statExperience;
    document.getElementById('adminAboutIntro').value = portfolioData.profile.aboutIntro;
    document.getElementById('adminAboutBody1').value = portfolioData.profile.aboutBody1;
    document.getElementById('adminAboutBody2').value = portfolioData.profile.aboutBody2;
    document.getElementById('adminAboutClosing').value = portfolioData.profile.aboutClosing;

    // Services list
    renderAdminServicesList();

    // Experience list
    renderAdminExperienceList();

    // Skills list
    renderAdminSkillsList();

    // Projects list
    renderAdminProjectsList();

    // Contact
    document.getElementById('adminContactDescription').value = portfolioData.contact.description;
    renderAdminContactList();

    // Social
    document.getElementById('adminFollowMeTitle').value = portfolioData.social.followMeTitle;
    renderAdminSocialList();

    // Footer
    document.getElementById('adminFooterName').value = portfolioData.footer.name;
    document.getElementById('adminFooterDescription').value = portfolioData.footer.description;
    document.getElementById('adminFooterCopyright').value = portfolioData.footer.copyright;
    document.getElementById('adminFooterMadeWith').value = portfolioData.footer.madeWith;
    document.getElementById('adminWhatsappNumber').value = portfolioData.footer.whatsappNumber;
}

// Save profile image
document.getElementById('saveProfileImage')?.addEventListener('click', () => {
    portfolioData.profile.profileImage = document.getElementById('adminProfileImage').value;
    saveData(portfolioData);
    renderProfile();
    alert('Profile image saved!');
});

document.getElementById('saveHeroSubtitle')?.addEventListener('click', () => {
    portfolioData.profile.heroSubtitle = document.getElementById('adminHeroSubtitle').value;
    saveData(portfolioData);
    renderProfile();
    alert('Hero subtitle saved!');
});

document.getElementById('saveStatProjects')?.addEventListener('click', () => {
    portfolioData.profile.statProjects = document.getElementById('adminStatProjects').value;
    saveData(portfolioData);
    renderProfile();
    alert('Projects stat saved!');
});

document.getElementById('saveStatClients')?.addEventListener('click', () => {
    portfolioData.profile.statClients = document.getElementById('adminStatClients').value;
    saveData(portfolioData);
    renderProfile();
    alert('Clients stat saved!');
});

document.getElementById('saveStatExperience')?.addEventListener('click', () => {
    portfolioData.profile.statExperience = document.getElementById('adminStatExperience').value;
    saveData(portfolioData);
    renderProfile();
    alert('Experience stat saved!');
});

document.getElementById('saveAboutIntro')?.addEventListener('click', () => {
    portfolioData.profile.aboutIntro = document.getElementById('adminAboutIntro').value;
    saveData(portfolioData);
    renderProfile();
    alert('About intro saved!');
});

document.getElementById('saveAboutBody1')?.addEventListener('click', () => {
    portfolioData.profile.aboutBody1 = document.getElementById('adminAboutBody1').value;
    saveData(portfolioData);
    renderProfile();
    alert('About body 1 saved!');
});

document.getElementById('saveAboutBody2')?.addEventListener('click', () => {
    portfolioData.profile.aboutBody2 = document.getElementById('adminAboutBody2').value;
    saveData(portfolioData);
    renderProfile();
    alert('About body 2 saved!');
});

document.getElementById('saveAboutClosing')?.addEventListener('click', () => {
    portfolioData.profile.aboutClosing = document.getElementById('adminAboutClosing').value;
    saveData(portfolioData);
    renderProfile();
    alert('About closing saved!');
});

// ===========================
// SERVICES MANAGEMENT
// ===========================

let serviceFeatures = [];

document.getElementById('addFeatureBtn')?.addEventListener('click', () => {
    const container = document.getElementById('serviceFeaturesContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-input-group';
    div.innerHTML = `
        <input type="text" class="service-feature-input" placeholder="Feature" />
        <button class="btn-delete" onclick="this.parentElement.remove()">Remove</button>
    `;
    container.appendChild(div);
});

document.getElementById('saveService')?.addEventListener('click', () => {
    const icon = document.getElementById('serviceIcon').value;
    const title = document.getElementById('serviceTitle').value;
    const description = document.getElementById('serviceDescription').value;
    const features = Array.from(document.querySelectorAll('.service-feature-input')).map(i => i.value).filter(v => v);

    if (!icon || !title || !description) {
        alert('Please fill in all required fields');
        return;
    }

    portfolioData.services.push({
        id: Date.now(),
        icon,
        title,
        description,
        features
    });

    saveData(portfolioData);
    renderServices();
    renderAdminServicesList();

    document.getElementById('serviceIcon').value = '';
    document.getElementById('serviceTitle').value = '';
    document.getElementById('serviceDescription').value = '';
    document.getElementById('serviceFeaturesContainer').innerHTML = '';

    alert('Service added!');
});

function renderAdminServicesList() {
    const list = document.getElementById('adminServicesList');
    list.innerHTML = portfolioData.services.map(service => `
        <div class="admin-list-item">
            <div class="admin-list-item-info">
                <div class="admin-list-item-title">${service.title}</div>
                <div class="admin-list-item-subtitle">${service.description}</div>
            </div>
            <div class="admin-list-item-actions">
                <button class="btn-edit" onclick="editService(${service.id})">Edit</button>
                <button class="btn-delete" onclick="deleteService(${service.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

window.deleteService = function(id) {
    if (confirm('Are you sure you want to delete this service?')) {
        portfolioData.services = portfolioData.services.filter(s => s.id !== id);
        saveData(portfolioData);
        renderServices();
        renderAdminServicesList();
    }
};

window.editService = function(id) {
    const service = portfolioData.services.find(s => s.id === id);
    if (service) {
        document.getElementById('serviceIcon').value = service.icon;
        document.getElementById('serviceTitle').value = service.title;
        document.getElementById('serviceDescription').value = service.description;
        const container = document.getElementById('serviceFeaturesContainer');
        container.innerHTML = '';
        service.features.forEach(f => {
            const div = document.createElement('div');
            div.className = 'dynamic-input-group';
            div.innerHTML = `
                <input type="text" class="service-feature-input" value="${f}" placeholder="Feature" />
                <button class="btn-delete" onclick="this.parentElement.remove()">Remove</button>
            `;
            container.appendChild(div);
        });
        deleteService(id);
    }
};

// ===========================
// EXPERIENCE MANAGEMENT
// ===========================

document.getElementById('saveExperience')?.addEventListener('click', () => {
    const title = document.getElementById('expTitle').value;
    const company = document.getElementById('expCompany').value;
    const period = document.getElementById('expPeriod').value;
    const description = document.getElementById('expDescription').value;

    if (!title || !company || !period) {
        alert('Please fill in all required fields');
        return;
    }

    portfolioData.experience.push({
        id: Date.now(),
        title,
        company,
        period,
        description
    });

    saveData(portfolioData);
    renderExperience();
    renderAdminExperienceList();

    document.getElementById('expTitle').value = '';
    document.getElementById('expCompany').value = '';
    document.getElementById('expPeriod').value = '';
    document.getElementById('expDescription').value = '';

    alert('Experience added!');
});

function renderAdminExperienceList() {
    const list = document.getElementById('adminExperienceList');
    list.innerHTML = portfolioData.experience.map(exp => `
        <div class="admin-list-item">
            <div class="admin-list-item-info">
                <div class="admin-list-item-title">${exp.title} at ${exp.company}</div>
                <div class="admin-list-item-subtitle">${exp.period}</div>
            </div>
            <div class="admin-list-item-actions">
                <button class="btn-edit" onclick="editExperience(${exp.id})">Edit</button>
                <button class="btn-delete" onclick="deleteExperience(${exp.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

window.deleteExperience = function(id) {
    if (confirm('Are you sure you want to delete this experience?')) {
        portfolioData.experience = portfolioData.experience.filter(e => e.id !== id);
        saveData(portfolioData);
        renderExperience();
        renderAdminExperienceList();
    }
};

window.editExperience = function(id) {
    const exp = portfolioData.experience.find(e => e.id === id);
    if (exp) {
        document.getElementById('expTitle').value = exp.title;
        document.getElementById('expCompany').value = exp.company;
        document.getElementById('expPeriod').value = exp.period;
        document.getElementById('expDescription').value = exp.description;
        deleteExperience(id);
    }
};

// ===========================
// SKILLS MANAGEMENT
// ===========================

let skillItems = [];

document.getElementById('addSkillItemBtn')?.addEventListener('click', () => {
    const container = document.getElementById('skillItemsContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-input-group';
    div.innerHTML = `
        <input type="text" class="skill-name-input" placeholder="Skill name" style="flex:1" />
        <input type="number" class="skill-level-input" placeholder="%" style="width:60px" min="0" max="100" />
        <button class="btn-delete" onclick="this.parentElement.remove()">Remove</button>
    `;
    container.appendChild(div);
});

document.getElementById('saveSkillCategory')?.addEventListener('click', () => {
    const name = document.getElementById('skillCategoryName').value;
    const items = [];

    document.querySelectorAll('.skill-name-input').forEach((input, i) => {
        const level = document.querySelectorAll('.skill-level-input')[i]?.value || 80;
        items.push({ name: input.value, level: parseInt(level) });
    });

    if (!name || items.length === 0) {
        alert('Please add a category name and at least one skill');
        return;
    }

    portfolioData.skills.push({
        id: Date.now(),
        name,
        items: items.filter(i => i.name)
    });

    saveData(portfolioData);
    renderSkills();
    renderAdminSkillsList();

    document.getElementById('skillCategoryName').value = '';
    document.getElementById('skillItemsContainer').innerHTML = '';

    alert('Skill category added!');
});

function renderAdminSkillsList() {
    const list = document.getElementById('adminSkillsList');
    list.innerHTML = portfolioData.skills.map(skill => `
        <div class="admin-list-item">
            <div class="admin-list-item-info">
                <div class="admin-list-item-title">${skill.name}</div>
                <div class="admin-list-item-subtitle">${skill.items.length} skills</div>
            </div>
            <div class="admin-list-item-actions">
                <button class="btn-delete" onclick="deleteSkillCategory(${skill.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

window.deleteSkillCategory = function(id) {
    if (confirm('Are you sure you want to delete this skill category?')) {
        portfolioData.skills = portfolioData.skills.filter(s => s.id !== id);
        saveData(portfolioData);
        renderSkills();
        renderAdminSkillsList();
    }
};

// ===========================
// PROJECTS MANAGEMENT
// ===========================

let projectTags = [];
let projectFeatures = [];
let projectTech = [];

document.getElementById('addTagBtn')?.addEventListener('click', () => {
    const container = document.getElementById('projectTagsContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-input-group';
    div.innerHTML = `
        <input type="text" class="project-tag-input" placeholder="Tag" />
        <button class="btn-delete" onclick="this.parentElement.remove()">Remove</button>
    `;
    container.appendChild(div);
});

document.getElementById('addFeatureProjectBtn')?.addEventListener('click', () => {
    const container = document.getElementById('projectFeaturesContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-input-group';
    div.innerHTML = `
        <input type="text" class="project-feature-input" placeholder="Feature" />
        <button class="btn-delete" onclick="this.parentElement.remove()">Remove</button>
    `;
    container.appendChild(div);
});

document.getElementById('addTechBtn')?.addEventListener('click', () => {
    const container = document.getElementById('projectTechContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-input-group';
    div.innerHTML = `
        <input type="text" class="project-tech-input" placeholder="Technology" />
        <button class="btn-delete" onclick="this.parentElement.remove()">Remove</button>
    `;
    container.appendChild(div);
});

document.getElementById('saveProject')?.addEventListener('click', () => {
    const title = document.getElementById('projectTitle').value;
    const image = document.getElementById('projectImage').value || 'project-1';
    const icon = document.getElementById('projectIcon').value || 'fas fa-globe';
    const description = document.getElementById('projectDescription').value;
    const fullDescription = document.getElementById('projectFullDescription').value;
    const tags = Array.from(document.querySelectorAll('.project-tag-input')).map(i => i.value).filter(v => v);
    const features = Array.from(document.querySelectorAll('.project-feature-input')).map(i => i.value).filter(v => v);
    const technologies = Array.from(document.querySelectorAll('.project-tech-input')).map(i => i.value).filter(v => v);

    if (!title || !description) {
        alert('Please fill in required fields');
        return;
    }

    portfolioData.projects.push({
        id: Date.now(),
        title,
        image,
        icon,
        description,
        fullDescription,
        tags,
        features,
        technologies
    });

    saveData(portfolioData);
    renderProjects();
    renderAdminProjectsList();

    // Clear form
    document.getElementById('projectTitle').value = '';
    document.getElementById('projectImage').value = '';
    document.getElementById('projectIcon').value = '';
    document.getElementById('projectDescription').value = '';
    document.getElementById('projectFullDescription').value = '';
    document.getElementById('projectTagsContainer').innerHTML = '';
    document.getElementById('projectFeaturesContainer').innerHTML = '';
    document.getElementById('projectTechContainer').innerHTML = '';

    alert('Project added!');
});

function renderAdminProjectsList() {
    const list = document.getElementById('adminProjectsList');
    list.innerHTML = portfolioData.projects.map(project => `
        <div class="admin-list-item">
            <div class="admin-list-item-info">
                <div class="admin-list-item-title">${project.title}</div>
                <div class="admin-list-item-subtitle">${project.description}</div>
            </div>
            <div class="admin-list-item-actions">
                <button class="btn-edit" onclick="editProject(${project.id})">Edit</button>
                <button class="btn-delete" onclick="deleteProject(${project.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

window.deleteProject = function(id) {
    if (confirm('Are you sure you want to delete this project?')) {
        portfolioData.projects = portfolioData.projects.filter(p => p.id !== id);
        saveData(portfolioData);
        renderProjects();
        renderAdminProjectsList();
    }
};

window.editProject = function(id) {
    const project = portfolioData.projects.find(p => p.id === id);
    if (project) {
        document.getElementById('projectTitle').value = project.title;
        document.getElementById('projectImage').value = project.image;
        document.getElementById('projectIcon').value = project.icon;
        document.getElementById('projectDescription').value = project.description;
        document.getElementById('projectFullDescription').value = project.fullDescription;

        const tagsContainer = document.getElementById('projectTagsContainer');
        tagsContainer.innerHTML = '';
        project.tags.forEach(t => {
            const div = document.createElement('div');
            div.className = 'dynamic-input-group';
            div.innerHTML = `<input type="text" class="project-tag-input" value="${t}" placeholder="Tag" /><button class="btn-delete" onclick="this.parentElement.remove()">Remove</button>`;
            tagsContainer.appendChild(div);
        });

        const featuresContainer = document.getElementById('projectFeaturesContainer');
        featuresContainer.innerHTML = '';
        project.features.forEach(f => {
            const div = document.createElement('div');
            div.className = 'dynamic-input-group';
            div.innerHTML = `<input type="text" class="project-feature-input" value="${f}" placeholder="Feature" /><button class="btn-delete" onclick="this.parentElement.remove()">Remove</button>`;
            featuresContainer.appendChild(div);
        });

        const techContainer = document.getElementById('projectTechContainer');
        techContainer.innerHTML = '';
        project.technologies.forEach(t => {
            const div = document.createElement('div');
            div.className = 'dynamic-input-group';
            div.innerHTML = `<input type="text" class="project-tech-input" value="${t}" placeholder="Technology" /><button class="btn-delete" onclick="this.parentElement.remove()">Remove</button>`;
            techContainer.appendChild(div);
        });

        deleteProject(id);
    }
};

// ===========================
// CONTACT MANAGEMENT
// ===========================

document.getElementById('saveContactDescription')?.addEventListener('click', () => {
    portfolioData.contact.description = document.getElementById('adminContactDescription').value;
    saveData(portfolioData);
    renderContact();
    alert('Contact description saved!');
});

document.getElementById('saveContactItem')?.addEventListener('click', () => {
    const icon = document.getElementById('contactIcon').value;
    const label = document.getElementById('contactLabel').value;
    const value = document.getElementById('contactValue').value;
    const link = document.getElementById('contactLink').value;

    if (!icon || !label || !value) {
        alert('Please fill in required fields');
        return;
    }

    portfolioData.contact.items.push({
        id: Date.now(),
        icon,
        label,
        value,
        link
    });

    saveData(portfolioData);
    renderContact();
    renderAdminContactList();

    document.getElementById('contactIcon').value = '';
    document.getElementById('contactLabel').value = '';
    document.getElementById('contactValue').value = '';
    document.getElementById('contactLink').value = '';

    alert('Contact item added!');
});

function renderAdminContactList() {
    const list = document.getElementById('adminContactList');
    list.innerHTML = portfolioData.contact.items.map(item => `
        <div class="admin-list-item">
            <div class="admin-list-item-info">
                <div class="admin-list-item-title">${item.label}: ${item.value}</div>
            </div>
            <div class="admin-list-item-actions">
                <button class="btn-delete" onclick="deleteContactItem(${item.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

window.deleteContactItem = function(id) {
    if (confirm('Are you sure you want to delete this contact item?')) {
        portfolioData.contact.items = portfolioData.contact.items.filter(i => i.id !== id);
        saveData(portfolioData);
        renderContact();
        renderAdminContactList();
    }
};

// ===========================
// SOCIAL LINKS MANAGEMENT
// ===========================

document.getElementById('saveFollowMeTitle')?.addEventListener('click', () => {
    portfolioData.social.followMeTitle = document.getElementById('adminFollowMeTitle').value;
    saveData(portfolioData);
    renderSocial();
    alert('Follow Me title saved!');
});

document.getElementById('saveSocialLink')?.addEventListener('click', () => {
    const icon = document.getElementById('socialIcon').value;
    const url = document.getElementById('socialUrl').value;
    const title = document.getElementById('socialTitle').value;

    if (!icon || !url || !title) {
        alert('Please fill in all fields');
        return;
    }

    portfolioData.social.links.push({
        id: Date.now(),
        icon,
        url,
        title
    });

    saveData(portfolioData);
    renderSocial();
    renderAdminSocialList();

    document.getElementById('socialIcon').value = '';
    document.getElementById('socialUrl').value = '';
    document.getElementById('socialTitle').value = '';

    alert('Social link added!');
});

function renderAdminSocialList() {
    const list = document.getElementById('adminSocialList');
    list.innerHTML = portfolioData.social.links.map(link => `
        <div class="admin-list-item">
            <div class="admin-list-item-info">
                <div class="admin-list-item-title">${link.title}</div>
                <div class="admin-list-item-subtitle">${link.url}</div>
            </div>
            <div class="admin-list-item-actions">
                <button class="btn-delete" onclick="deleteSocialLink(${link.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

window.deleteSocialLink = function(id) {
    if (confirm('Are you sure you want to delete this social link?')) {
        portfolioData.social.links = portfolioData.social.links.filter(l => l.id !== id);
        saveData(portfolioData);
        renderSocial();
        renderAdminSocialList();
    }
};

// ===========================
// FOOTER MANAGEMENT
// ===========================

document.getElementById('saveFooterName')?.addEventListener('click', () => {
    portfolioData.footer.name = document.getElementById('adminFooterName').value;
    saveData(portfolioData);
    renderFooter();
    alert('Footer name saved!');
});

document.getElementById('saveFooterDescription')?.addEventListener('click', () => {
    portfolioData.footer.description = document.getElementById('adminFooterDescription').value;
    saveData(portfolioData);
    renderFooter();
    alert('Footer description saved!');
});

document.getElementById('saveFooterCopyright')?.addEventListener('click', () => {
    portfolioData.footer.copyright = document.getElementById('adminFooterCopyright').value;
    saveData(portfolioData);
    renderFooter();
    alert('Footer copyright saved!');
});

document.getElementById('saveFooterMadeWith')?.addEventListener('click', () => {
    portfolioData.footer.madeWith = document.getElementById('adminFooterMadeWith').value;
    saveData(portfolioData);
    renderFooter();
    alert('Footer made with text saved!');
});

document.getElementById('saveWhatsappNumber')?.addEventListener('click', () => {
    portfolioData.footer.whatsappNumber = document.getElementById('adminWhatsappNumber').value;
    saveData(portfolioData);
    renderFooter();
    alert('WhatsApp number saved!');
});

// ===========================
// MOBILE MENU TOGGLE
// ===========================

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = navLinks.classList.contains('active')
        ? 'rotate(45deg) translateY(10px)'
        : '';
    spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navLinks.classList.contains('active')
        ? 'rotate(-45deg) translateY(-10px)'
        : '';
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelectorAll('span').forEach(span => {
            span.style.transform = '';
            span.style.opacity = '1';
        });
    });
});

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// SCROLL ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .portfolio-card, .skill-category, .experience-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
});

// ===========================
// NAVBAR SCROLL
// ===========================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(212, 175, 55, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ===========================
// MODAL FUNCTIONALITY
// ===========================

const projectModal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModalBtn');

window.openProjectModal = function(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <div class="modal-image ${project.image}">
            <i class="${project.icon}"></i>
        </div>
        <p class="modal-description">${project.fullDescription}</p>
        <h4>Key Features:</h4>
        <ul class="modal-features">
            ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <h4>Technologies Used:</h4>
        <div class="modal-tech">
            ${project.technologies.map(t => `<span>${t}</span>`).join('')}
        </div>
    `;

    projectModal.classList.add('show');
    document.body.style.overflow = 'hidden';
};

closeModalBtn?.addEventListener('click', () => {
    projectModal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        projectModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// ===========================
// SKILL BARS ANIMATION
// ===========================

const skillBars = document.querySelectorAll('.skill-fill');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillsAnimated) {
            skillsAnimated = true;
            animateSkillBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

function animateSkillBars() {
    skillBars.forEach((bar, index) => {
        const width = bar.style.width || '0%';
        bar.style.width = '0%';

        setTimeout(() => {
            bar.style.transition = 'width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            bar.style.width = width;
        }, index * 100);
    });
}

// ===========================
// FORM HANDLING
// ===========================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;

        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        const mailtoLink = `mailto:${portfolioData.contact.items.find(i => i.label === 'Email')?.value || 'ramlalsaranoffical@gmail.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        window.location.href = mailtoLink;

        showNotification('Thank you! Your message has been sent.', 'success');
        contactForm.reset();
    });
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        font-weight: 500;
        z-index: 3000;
        animation: slideInUp 0.3s ease-out;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ===========================
// PARALLAX EFFECT
// ===========================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');

    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.1);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===========================
// COUNTER ANIMATION
// ===========================

let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero-stats');
if (heroSection) {
    statsObserver.observe(heroSection);
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/[0-9]/g, '');
        const increment = target / 100;
        let current = 0;

        const updateCount = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + suffix;
                clearInterval(updateCount);
            } else {
                counter.textContent = Math.floor(current) + suffix;
            }
        }, 20);
    });
}

// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link:not(.cta-nav)');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.style.color = 'var(--accent-gold)';
        }
    });
});

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    console.log('%cWelcome to Ram Saran\'s Portfolio!', 'color: #d4af37; font-size: 20px; font-weight: bold;');
    console.log('%cFull Stack Developer | Modern Web Solutions', 'color: #b0b8d4; font-size: 14px;');
    console.log('%cLet\'s connect! Email: ramlalsaranoffical@gmail.com', 'color: #10b981; font-size: 12px;');
});
