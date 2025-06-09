import { displayData } from "./module.js";

const getUsersbtn = document.getElementById('fetch-users');
const getUsersExpbtn = document.getElementById('users-exp');
const resetbtn = document.getElementById('reset');
const divsContainer = document.getElementById('container');

getUsersbtn.addEventListener('click', () => getData("https://raw.githubusercontent.com/dan-collins-dev/dummy-data-fetching-repo/main/data/users.json"));
getUsersExpbtn.addEventListener('click', () => getData("https://raw.githubusercontent.com/dan-collins-dev/dummy-data-fetching-repo/main/data/users.json", 10));

resetbtn.addEventListener('click', () => {divsContainer.innerHTML = ""})
async function getData(url, exp = null) {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Error fetching')
            }
            const data = await response.json()
            
            const filterData = exp ? data.filter(user => user.yearsEmployed <= exp) : data;
            displayData(filterData)
        }
        catch(error) {
            console.error(error)
        }
        
}
