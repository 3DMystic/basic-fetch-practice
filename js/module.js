const divsContainer = document.getElementById('container');
export function displayData(users) {
    divsContainer.innerHTML = '';

    users.forEach(user => {
        const userContainer = document.createElement('div'); 
        userContainer.className = 'user-container';
        //name
        const name = document.createElement('p')
        name.className = 'info'
        name.innerText = `${user.firstName} ${user.lastName}`
        //email
        const email= document.createElement('p')
        email.className = 'info'
        email.innerText = `${user.email}`
        //company
        const company= document.createElement('p')
        company.className = 'info'
        company.innerText = `Company: ${user.companyName}`
        //experience
        const experience = document.createElement('p')
        experience.className = 'info'
        experience.innerText = `Experience: ${user.yearsEmployed} years`
        
        userContainer.appendChild(name);
        userContainer.appendChild(email);
        userContainer.appendChild(company);
        userContainer.appendChild(experience);

        divsContainer.appendChild(userContainer);
    });
} 