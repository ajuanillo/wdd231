async function loadTopMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        const cardsContainer = document.querySelector('.members');

        // Filtrar solo los miembros con nivel de membresía 3, 2 o 1
        const topMembers = members.filter(member => member.membership_level >= 2 && member.membership_level <= 3);

        topMembers.forEach(member => {
            const card = document.createElement('section');

            const image = document.createElement('img');
            image.src = member.image_icon ? `images/${member.image_icon}` : 'images/default.png';
            image.alt = member.name;
            card.appendChild(image);

            const name = document.createElement('h2');
            name.textContent = member.name;
            card.appendChild(name);

            const address = document.createElement('p');
            address.textContent = member.address || 'Address not available';
            card.appendChild(address);

            const phone = document.createElement('p');
            phone.textContent = member.phone_number || 'Phone not available';
            card.appendChild(phone);

            const website = document.createElement('a');
            website.href = member.website_url || '#';
            website.textContent = member.website_url ? 'Visit Website' : 'Website not available';
            website.target = '_blank';
            card.appendChild(website);

            const membership = document.createElement('p');
            membership.textContent = `Membership Level: ${member.membership_level === 3 ? 'Gold' : member.membership_level === 2 ? 'Silver' : 'Member'}`;
            card.appendChild(membership);

            const additionalInfo = document.createElement('div');
            additionalInfo.innerHTML = `Industry: ${member.additional_info.industry}
`;
            if (member.additional_info.services) {
                additionalInfo.innerHTML += `Services: ${member.additional_info.services.join(', ')}
`;
            }
            if (member.additional_info.specialties) {
                additionalInfo.innerHTML += `Specialties: ${member.additional_info.specialties.join(', ')}
`;
            }
            if (member.additional_info.founded_year) {
                additionalInfo.innerHTML += `Founded Year: ${member.additional_info.founded_year}
`;
            }
            if (member.additional_info.description) {
                additionalInfo.innerHTML += `Description: ${member.additional_info.description}
`;
            }
            card.appendChild(additionalInfo);

            cardsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading members:', error);
    }
}

loadTopMembers();