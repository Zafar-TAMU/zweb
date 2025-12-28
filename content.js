// ========================================
// WEBSITE CONTENT CONFIGURATION
// ========================================
// Edit this file to add/update content on your website
// Just change the text between quotes "like this"
// Add new items by copying the template and changing values

const websiteContent = {
    
    // ========================================
    // PUBLICATIONS
    // ========================================
    // To add a new publication, copy one block and change the values
    publications: [
        // Example:
        //  {
        //     year: "2025",
        //    title: "Your Publication Title Here",
        //     journal: "Journal Name",
        //     date: "December 15, 2024",
        //    topics: ["Machine Learning", "Agriculture"],
        //         link: "https://link-to-paper.com",
        //    pdfLink: "https://link-to-pdf.com"
        // },
        // Copy the block above to add more publications
    ],

    // ========================================
    // RESEARCH PROJECTS
    // ========================================
    // To add a new project, copy one block and change the values
    // Categories: "crop", "climate", "soil"
    // Icons: "fa-microscope", "fa-robot", "fa-leaf", "fa-tractor", "fa-warehouse", "fa-chart-line", "fa-temperature-low", "fa-exclamation-triangle"
    // Colors: "purple", "pink", "green", "blue", "orange"
    projects: [
        // Example:
        // {
        //     title: "Your Project Title",
        //     description: "Brief description of your project",
        //     funding: "NSF",
        //     years: "2024-Present",
        //     category: "crop",
        //     icon: "fa-microscope",
        //     color: "purple"
        // },
        // Copy the block above to add more projects
    ],

    // ========================================
    // EDUCATION
    // ========================================
    // To add new education, copy one block and change the values
    education: [
        // Example:
        // {
        //     degree: "Ph.D. in Computer Science",
        //     university: "Stanford University",
        //     years: "2020-2024",
        //     badge: "Ph.D.",
        //     logo: "stanford.png"
        // },
        // Copy the block above to add more education
    ],

    // ========================================
    // EXPERIENCE
    // ========================================
    // To add new experience, copy one block and change the values
    experience: [
        // Example:
        // {
        //     title: "Postdoctoral Associate",
        //     company: "University of Florida",
        //     years: "2024-Present",
        //     badge: "Current",
        //     logo: "ufl.png"
        // },
        // Copy the block above to add more experience
    ],

    // ========================================
    // SKILLS
    // ========================================
    // To add new skills, just add text between quotes
    skills: {
        // Example:
        // "Programming Languages": ["Python", "R", "MATLAB", "JavaScript"],
        // "AI & Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn"],
        // Add more categories by copying the format above
    },

    // ========================================
    // LINKEDIN POSTS
    // ========================================
    // To add new LinkedIn post, copy one block and change the values
    linkedinPosts: [
        // Example:
        // {
        //     name: "Dr. Zafar Iqbal",
        //     position: "Postdoctoral Associate @ University of Florida",
        //     time: "1 week ago",
        //     content: "Excited to share our latest research on AI in agriculture...",
        //     likes: 25,
        //     comments: 3,
        //     avatar: "Zafar1.png"
        // },
        // Copy the block above to add more posts
    ],

    // ========================================
    // AWARDS
    // ========================================
    // To add new award, copy one block and change the values
    awards: [
        // Example:
        // {
        //     name: "Best Paper Award",
        //     institution: "IEEE Conference",
        //     year: "2024",
        //     emoji: "🏆"
        // },
        // Copy the block above to add more awards
    ],

    // ========================================
    // CERTIFICATES
    // ========================================
    // To add new certificate, copy one block and change the values
    // Colors: "purple", "pink", "green", "blue", "orange"
    certificates: [
        // Example:
        // {
        //     name: "Machine Learning Certification",
        //     fullTitle: "Advanced Machine Learning Specialization",
        //     institution: "Stanford University",
        //     year: "2023",
        //     color: "purple"
        // },
        // Copy the block above to add more certificates
    ],

    // ========================================
    // CONFERENCE PRESENTATIONS
    // ========================================
    // To add new conference, copy one block and change the values
    // Types: "keynote", "presentation", "workshop", "international"
    conferences: [
        // Example:
        // {
        //     type: "keynote",
        //     title: "International Conference on Agricultural Engineering",
        //     location: "Texas, USA",
        //     year: "2024",
        //     topic: "AI Applications in Smart Agriculture",
        //     tags: ["Machine Learning", "Smart Farming"]
        // },
        // Copy the block above to add more conferences
    ],

    // ========================================
    // RESEARCH INTERESTS
    // ========================================
    // To add new research interest, copy one block and change the values
    // Icons: Any emoji like 🌾, 👁️, 📡, 🧠, 🤖, 🔬, etc.
    researchInterests: [
        // Example:
        // {
        //     icon: "🌾",
        //     title: "Precision Agriculture",
        //     description: "Data-driven farming solutions using AI and sensor technologies for optimized crop management"
        // },
        // Copy the block above to add more research interests
    ],

    // ========================================
    // PROFESSIONAL MEMBERSHIPS
    // ========================================
    // To add new membership, copy one block and change the values
    memberships: [
        // Example:
        // {
        //     logo: "ASABE",
        //     name: "American Society of Agricultural and Biological Engineers",
        //     status: "Active Member"
        // },
        // Copy the block above to add more memberships
    ]
};

// ========================================
// DO NOT EDIT BELOW THIS LINE
// ========================================

const colorMap = {
    purple: "#667eea 0%, #764ba2 100%",
    pink: "#f093fb 0%, #f5576c 100%",
    green: "#43e97b 0%, #38f9d7 100%",
    blue: "#4facfe 0%, #00f2fe 100%",
    orange: "#fa709a 0%, #fee140 100%"
};

function loadContent() {
    // Load Publications (newest first)
    if (websiteContent.publications && websiteContent.publications.length > 0) {
        const pubList = document.querySelector('.publications-list');
        if (pubList) {
            // Get first existing publication to insert before it
            const firstPub = pubList.querySelector('.publication-item');
            websiteContent.publications.forEach(pub => {
                const pubHTML = `
                    <div class="publication-item animate-slide-left" data-year="${pub.year}">
                        <div class="pub-year-badge">${pub.year}</div>
                        <div class="pub-content">
                            <h3 class="pub-title">${pub.title}</h3>
                            <div class="pub-journal">${pub.journal} • ${pub.date}</div>
                            <div class="pub-tags">
                                ${pub.topics.map(topic => `<span class="tag">${topic}</span>`).join('')}
                            </div>
                        </div>
                        <div class="pub-actions">
                            ${pub.link ? `<a href="${pub.link}" class="pub-link"><i class="fas fa-external-link-alt"></i></a>` : ''}
                            ${pub.pdfLink ? `<a href="${pub.pdfLink}" class="pub-link"><i class="fas fa-file-pdf"></i></a>` : ''}
                        </div>
                    </div>
                `;
                if (firstPub) {
                    firstPub.insertAdjacentHTML('beforebegin', pubHTML);
                } else {
                    pubList.insertAdjacentHTML('beforeend', pubHTML);
                }
            });
        }
    }

    // Load Projects
    if (websiteContent.projects && websiteContent.projects.length > 0) {
        const projGrid = document.querySelector('.portfolio-grid');
        if (projGrid) {
            websiteContent.projects.forEach(proj => {
                const projHTML = `
                    <div class="portfolio-item" data-category="${proj.category}">
                        <div class="portfolio-image">
                            <div class="portfolio-placeholder" style="background: linear-gradient(135deg, ${colorMap[proj.color]});">
                                <i class="fas ${proj.icon}" style="font-size: 4rem; color: white;"></i>
                            </div>
                            <div class="portfolio-overlay">
                                <div class="portfolio-content">
                                    <h3 class="portfolio-title">${proj.title}</h3>
                                    <p class="portfolio-description">${proj.description}${proj.funding ? ' • ' + proj.funding : ''} • ${proj.years}</p>
                                    <div class="portfolio-links">
                                        <a href="#" class="portfolio-link"><i class="fas fa-file-pdf"></i></a>
                                        <a href="#" class="portfolio-link"><i class="fas fa-external-link-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                projGrid.insertAdjacentHTML('beforeend', projHTML);
            });
        }
    }

    // Load Education
    if (websiteContent.education && websiteContent.education.length > 0) {
        const eduTimeline = document.querySelector('.education-timeline');
        if (eduTimeline) {
            websiteContent.education.forEach(edu => {
                const eduHTML = `
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="education-header">
                                <div class="education-title-row">
                                    <img src="${edu.logo}" alt="${edu.university}" class="university-logo">
                                    <div class="education-text">
                                        <h4>${edu.degree}</h4>
                                        <p class="university-name">${edu.university} • ${edu.years}</p>
                                    </div>
                                </div>
                                <div class="education-badge">
                                    <span class="education-label">${edu.badge}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                eduTimeline.insertAdjacentHTML('beforeend', eduHTML);
            });
        }
    }

    // Load Experience
    if (websiteContent.experience && websiteContent.experience.length > 0) {
        const expTimeline = document.querySelector('.experience-timeline');
        if (expTimeline) {
            websiteContent.experience.forEach(exp => {
                const expHTML = `
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="education-header">
                                <div class="education-title-row">
                                    <img src="${exp.logo}" alt="${exp.company}" class="university-logo">
                                    <div class="education-text">
                                        <h4>${exp.title}</h4>
                                        <p class="university-name">${exp.company} • ${exp.years}</p>
                                    </div>
                                </div>
                                <div class="education-badge">
                                    <span class="education-label">${exp.badge}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                expTimeline.insertAdjacentHTML('beforeend', expHTML);
            });
        }
    }

    // Load Skills
    if (websiteContent.skills) {
        const skillsContainer = document.querySelector('.tech-skills');
        if (skillsContainer) {
            Object.keys(websiteContent.skills).forEach(category => {
                const skillHTML = `
                    <div class="tech-category">
                        <h4>${category}</h4>
                        <div class="tech-tags">
                            ${websiteContent.skills[category].map(skill => `<span class="tech-tag">${skill}</span>`).join('')}
                        </div>
                    </div>
                `;
                skillsContainer.insertAdjacentHTML('beforeend', skillHTML);
            });
        }
    }

    // Load LinkedIn Posts (newest first)
    if (websiteContent.linkedinPosts && websiteContent.linkedinPosts.length > 0) {
        const linkedinGrid = document.querySelector('.linkedin-posts-grid');
        if (linkedinGrid) {
            // Get first existing post to insert before it
            const firstPost = linkedinGrid.querySelector('.linkedin-post');
            websiteContent.linkedinPosts.forEach(post => {
                const postHTML = `
                    <div class="linkedin-post">
                        <div class="post-header">
                            <img src="${post.avatar}" alt="${post.name}" class="post-avatar">
                            <div class="post-author">
                                <h4>${post.name}</h4>
                                <p>${post.position}</p>
                                <span class="post-time">${post.time}</span>
                            </div>
                        </div>
                        <div class="post-content">
                            <p>${post.content}</p>
                        </div>
                        <div class="post-engagement">
                            <span><i class="fas fa-thumbs-up"></i> ${post.likes}</span>
                            <span><i class="fas fa-comment"></i> ${post.comments}</span>
                        </div>
                    </div>
                `;
                if (firstPost) {
                    firstPost.insertAdjacentHTML('beforebegin', postHTML);
                } else {
                    linkedinGrid.insertAdjacentHTML('beforeend', postHTML);
                }
            });
        }
    }

    // Load Awards
    if (websiteContent.awards && websiteContent.awards.length > 0) {
        const awardsList = document.querySelector('.awards-list');
        if (awardsList) {
            websiteContent.awards.forEach(award => {
                const awardHTML = `
                    <div class="award-item">
                        <div class="award-icon">${award.emoji}</div>
                        <div class="award-content">
                            <h4>${award.name}</h4>
                            <p>${award.institution} • ${award.year}</p>
                        </div>
                    </div>
                `;
                awardsList.insertAdjacentHTML('beforeend', awardHTML);
            });
        }
    }

    // Load Certificates
    if (websiteContent.certificates && websiteContent.certificates.length > 0) {
        const certGrid = document.querySelector('.certificates-grid');
        if (certGrid) {
            websiteContent.certificates.forEach(cert => {
                const certHTML = `
                    <div class="certificate-item">
                        <div class="certificate-image">
                            <div style="background: linear-gradient(135deg, ${colorMap[cert.color]}); height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; color: white; padding: 2rem;">
                                <i class="fas fa-award" style="font-size: 4rem; margin-bottom: 1rem;"></i>
                                <h3 style="text-align: center; margin: 0;">${cert.name}</h3>
                            </div>
                        </div>
                        <div class="certificate-description">
                            <h4>${cert.fullTitle}</h4>
                            <p>${cert.institution}, ${cert.year}</p>
                        </div>
                    </div>
                `;
                certGrid.insertAdjacentHTML('beforeend', certHTML);
            });
        }
    }

    // Load Conferences (newest first)
    if (websiteContent.conferences && websiteContent.conferences.length > 0) {
        const confGrid = document.querySelector('.conferences-grid');
        if (confGrid) {
            const firstConf = confGrid.querySelector('.conference-card');
            websiteContent.conferences.forEach(conf => {
                const typeIcons = {
                    keynote: 'fa-microphone',
                    presentation: 'fa-presentation',
                    workshop: 'fa-users',
                    international: 'fa-globe'
                };
                const confHTML = `
                    <div class="conference-card ${conf.type === 'keynote' ? 'keynote' : ''}">
                        <div class="conference-type">
                            <i class="fas ${typeIcons[conf.type] || 'fa-presentation'}"></i>
                            <span>${conf.type.charAt(0).toUpperCase() + conf.type.slice(1)}</span>
                        </div>
                        <div class="conference-content">
                            <h3>${conf.title}</h3>
                            <p class="conference-location">📍 ${conf.location} • ${conf.year}</p>
                            <p class="conference-topic">"${conf.topic}"</p>
                            <div class="conference-tags">
                                ${conf.tags.map(tag => `<span class="conf-tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `;
                if (firstConf) {
                    firstConf.insertAdjacentHTML('beforebegin', confHTML);
                } else {
                    confGrid.insertAdjacentHTML('beforeend', confHTML);
                }
            });
        }
    }

    // Load Research Interests
    if (websiteContent.researchInterests && websiteContent.researchInterests.length > 0) {
        const interestsGrid = document.querySelector('.interests-grid');
        if (interestsGrid) {
            websiteContent.researchInterests.forEach(interest => {
                const interestHTML = `
                    <div class="interest-card animate-fade-in">
                        <div class="interest-icon">${interest.icon}</div>
                        <h3>${interest.title}</h3>
                        <p>${interest.description}</p>
                    </div>
                `;
                interestsGrid.insertAdjacentHTML('beforeend', interestHTML);
            });
        }
    }

    // Load Memberships
    if (websiteContent.memberships && websiteContent.memberships.length > 0) {
        const membershipsGrid = document.querySelector('.memberships-grid');
        if (membershipsGrid) {
            websiteContent.memberships.forEach(membership => {
                const memberHTML = `
                    <div class="membership-card">
                        <div class="membership-logo">${membership.logo}</div>
                        <h3>${membership.name}</h3>
                        <p class="membership-status">${membership.status}</p>
                    </div>
                `;
                membershipsGrid.insertAdjacentHTML('beforeend', memberHTML);
            });
        }
    }
}

// Load content when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadContent);
} else {
    loadContent();
}
