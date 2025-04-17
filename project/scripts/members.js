const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        const cardsContainer = document.querySelector('.cards');

        members.forEach(member => {
            const card = document.createElement('section');
            //card.classList.add('card');

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
            additionalInfo.innerHTML = `<strong>Industry:</strong> ${member.additional_info.industry}<br>`;
            if (member.additional_info.services) {
                additionalInfo.innerHTML += `<strong>Services:</strong> ${member.additional_info.services.join(', ')}<br>`;
            }
            if (member.additional_info.specialties) {
                additionalInfo.innerHTML += `<strong>Specialties:</strong> ${member.additional_info.specialties.join(', ')}<br>`;
            }
            if (member.additional_info.founded_year) {
                additionalInfo.innerHTML += `<strong>Founded Year:</strong> ${member.additional_info.founded_year}<br>`;
            }
            if (member.additional_info.description) {
                additionalInfo.innerHTML += `<strong>Description:</strong> ${member.additional_info.description}<br>`;
            }
            card.appendChild(additionalInfo);

            cardsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading members:', error);
    }
}

loadMembers();