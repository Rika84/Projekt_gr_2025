const products = [
    {
        id: 1,
        name: "Blue Rim",
        price: "49,99 zł",
        image: "https://raw.githubusercontent.com/Rika84/Projekt_gr_2025/main/site2/img/produkt1.jpg",
        description: "The Blue Rim is a vibrant fish known for its striking blue edge on the fins. Its bright coloration and peaceful nature make it a popular choice for aquarium enthusiasts."
    },
    {
        id: 2,
        name: "Koi",
        price: "89,99 zł",
        image: "https://raw.githubusercontent.com/Rika84/Projekt_gr_2025/main/site2/img/produkt2.jpg",
        description: "Koi are large, colorful carp that are often found in outdoor ponds. Known for their beautiful patterns and long lifespan, they are a symbol of good fortune and perseverance in Japanese culture."
    },
    {
        id: 3,
        name: "Kirys",
        price: "29,99 zł",
        image: "https://raw.githubusercontent.com/Rika84/Projekt_gr_2025/main/site2/img/produkt3.jpg",
        description: "Kirys, or Corydoras, are small, bottom-dwelling catfish with a peaceful temperament. They are well-loved for their playful nature and their ability to help keep tanks clean by scavenging leftover food."
    },
    {
        id: 4,
        name: "Hipacitrus",
        price: "59,99 zł",
        image: "https://raw.githubusercontent.com/Rika84/Projekt_gr_2025/main/site2/img/produkt4.jpg",
        description: "Hipacitrus is a type of tropical fish recognized for its vibrant colors, particularly its bright yellow and orange hues. It’s an active fish that thrives in warm, well-maintained aquariums."
    },
    {
        id: 5,
        name: "Coralland",
        price: "99,99 zł",
        image: "https://raw.githubusercontent.com/Rika84/Projekt_gr_2025/main/site2/img/produkt5.jpg",
        description: "Coralland is a colorful, reef-dwelling fish known for its vibrant coral-like patterns. It thrives in marine aquariums and adds a splash of color to any tank."
    },
    {
        id: 6,
        name: "Oranda",
        price: "39,99 zł",
        image: "https://raw.githubusercontent.com/Rika84/Projekt_gr_2025/main/site2/img/produkt6.jpg",
        description: "Oranda is a type of goldfish characterized by its distinctive, hood-like growth on the head. They are graceful swimmers with beautiful, flowing fins and are popular in both indoor and outdoor ponds."
    }
];

function initSearchBar() {
    const input = document.querySelector(".search-box input");
    const button = document.querySelector(".search-box button");
    const suggestions = document.getElementById("search-suggestions");

    if (!input || !suggestions) return;

    input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();
        suggestions.innerHTML = "";

        if (query.length === 0) {
            suggestions.style.display = "none";
            return;
        }

        const matches = products.filter(p => p.name.toLowerCase().includes(query));

        if (matches.length === 0) {
            const noResult = document.createElement("div");
            noResult.className = "suggestion-item";
            noResult.innerHTML = `<span style="color: gray;">Brak wyników dla: <strong>${query}</strong></span>`;
            suggestions.appendChild(noResult);
            suggestions.style.display = "flex";
            return;
        }

        matches.forEach(p => {
            const nameHighlighted = p.name.replace(
                new RegExp(query, "i"),
                match => `<mark>${match}</mark>`
            );
            const item = document.createElement("div");
            item.className = "suggestion-item";
            item.innerHTML = `<img src="${p.image}" alt="${p.name}"><div><strong>${nameHighlighted}</strong><br>${p.price}</div>`;
            item.onclick = () => {
                window.location.href = `product.html?id=${p.id}`;
            };
            suggestions.appendChild(item);
        });

        suggestions.style.display = "flex";
    });

    input.addEventListener("keypress", e => {
        if (e.key === "Enter") {
            button.click();
        }
    });

    document.addEventListener("click", e => {
        if (!document.querySelector(".search-box").contains(e.target)) {
            suggestions.style.display = "none";
        }
    });
}

window.addEventListener("DOMContentLoaded", initSearchBar);
window.products = products;
