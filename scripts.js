function showCase(caseId) {
    const caseDetails = {
        case1: `
            <h3>Bias in Predictive Policing Algorithms</h3>
            <p><strong>Sector:</strong> Law Enforcement</p>
            <p><strong>Risk Type:</strong> Algorithmic Bias</p>
            <p><strong>Description:</strong> Predictive policing tools were found to disproportionately target minority communities due to biased training data, leading to over-policing in certain neighborhoods.</p>
            <p><strong>Impact:</strong> Legal ramifications, social unrest, and loss of trust in law enforcement.</p>
            <p><strong>Mitigation Strategy:</strong> Implement fairness auditing and retraining on more diverse datasets; ongoing community oversight.</p>
        `,
        case2: `
            <h3>Adversarial Attack on Autonomous Vehicles</h3>
            <p><strong>Sector:</strong> Transportation</p>
            <p><strong>Risk Type:</strong> Vulnerability to Adversarial Attacks</p>
            <p><strong>Description:</strong> An autonomous vehicle was fooled by small perturbations to street signs, causing it to misread a stop sign as a yield sign.</p>
            <p><strong>Impact:</strong> Increased risk of accidents and safety failures.</p>
            <p><strong>Mitigation Strategy:</strong> Strengthen adversarial defense mechanisms by regularly testing models against adversarial examples.</p>
        `,
        case3: `
            <h3>Financial Algorithm Flash Crash</h3>
            <p><strong>Sector:</strong> Finance</p>
            <p><strong>Risk Type:</strong> Model Degradation</p>
            <p><strong>Description:</strong> A high-frequency trading algorithm malfunctioned due to unexpected market conditions, leading to a flash crash and wiping out billions of dollars in value within minutes.</p>
            <p><strong>Impact:</strong> Economic instability and regulatory concerns.</p>
            <p><strong>Mitigation Strategy:</strong> Real-time monitoring and back-testing of AI models under simulated extreme market conditions.</p>
        `,
        case4: `
            <h3>Misdiagnosis in AI-based Healthcare Diagnostics</h3>
            <p><strong>Sector:</strong> Healthcare</p>
            <p><strong>Risk Type:</strong> Model Failure</p>
            <p><strong>Description:</strong> An AI diagnostic tool incorrectly identified benign tumors as malignant due to a flawed training dataset.</p>
            <p><strong>Impact:</strong> Patient harm and loss of trust in AI-based medical tools.</p>
            <p><strong>Mitigation Strategy:</strong> Use a multi-layered verification system, combining AI suggestions with human expertise, and maintain diverse and comprehensive training data.</p>
        `,
        case5: `
            <h3>AI Misinformation Propagation</h3>
            <p><strong>Sector:</strong> Media & Social Platforms</p>
            <p><strong>Risk Type:</strong> Unintended Social Consequences</p>
            <p><strong>Description:</strong> An AI model for content recommendation on a social media platform amplified misinformation, contributing to societal polarization.</p>
            <p><strong>Impact:</strong> Harmful social division, disinformation, and ethical concerns.</p>
            <p><strong>Mitigation Strategy:</strong> Introduce human moderation and implement content verification tools to reduce the spread of false information.</p>
        `
    };

    document.getElementById('case-details').innerHTML = caseDetails[caseId];
}

function openChatbot() {
    alert("Chatbot feature coming soon!");
}

// Add event listeners for search and filter functionality
document.getElementById('search-input').addEventListener('input', filterCases);
document.getElementById('filter-select').addEventListener('change', filterCases);

function filterCases() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filterSelect = document.getElementById('filter-select').value;
    const buttons = document.querySelectorAll('#case-studies button');

    buttons.forEach(button => {
        const text = button.textContent.toLowerCase();
        const matchesSearch = text.includes(searchInput);
        const matchesFilter = filterSelect === 'all' || text.includes(filterSelect.replace('-', ' '));

        if (matchesSearch && matchesFilter) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}