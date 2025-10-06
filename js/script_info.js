const infoData = [
    { name: "Lion", habitat: "Savannah and Grasslands", fact: "A male lion's mane signals its health and dominance." },
    { name: "Cheetah", habitat: "Open Plains", fact: "The fastest land animal, reaching speeds of up to 120 km/h." },
    { name: "Reticulated Giraffe", habitat: "Northern Kenya", fact: "Each giraffe's spot pattern is unique, like a human fingerprint." }
];

function loadInfoContent() {
    const area = document.getElementById('dynamic-area');
    area.innerHTML = '<h3>Kenya Wildlife Spotlight (Info Mode)</h3>';
    
    const ul = document.createElement('ul');
    infoData.forEach(animal => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${animal.name}:</strong> ${animal.fact} (Habitat: ${animal.habitat})`;
        ul.appendChild(li);
    });
    
    area.appendChild(ul);
    
    // Add a simple interactive element
    const factButton = document.createElement('button');
    factButton.textContent = "Get a Random Fact";
    factButton.onclick = () => {
        const randomAnimal = infoData[Math.floor(Math.random() * infoData.length)];
        alert(`RANDOM FACT: Did you know that the ${randomAnimal.name} lives in the ${randomAnimal.habitat}?`);
    };
    area.appendChild(factButton);
}

// Call the function immediately upon script execution
loadInfoContent();