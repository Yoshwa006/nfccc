// Simulate Loading Screen
const loadingScreen = document.getElementById('loading-screen');

window.addEventListener('load', () => {
  // Hide loading screen after 2 seconds (simulate loading)
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 2000);
});

// Simulate NFC Scan
const nfcButton = document.getElementById('nfc-scan-button');
const contentContainer = document.getElementById('content-container');
const nfcScanContainer = document.getElementById('nfc-scan-container');

// Elements to update with bike details
const bikeName = document.getElementById('bike-name');
const bikeModel = document.getElementById('bike-model');
const bikeRent = document.getElementById('bike-rent');
const bikeAvailability = document.getElementById('bike-availability');
const ownerName = document.getElementById('owner-name');
const ownerContact = document.getElementById('owner-contact');

// Function to fetch bike details from the backend
async function fetchBikeDetails(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch bike details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching bike details:', error);
    return null;
  }
}

// Simulate NFC scan and fetch bike details
nfcButton.addEventListener('click', async () => {
  // Simulate NFC scan success
  setTimeout(async () => {
    // Hide NFC scan button and show loading screen
    nfcScanContainer.style.display = 'none';
    loadingScreen.style.display = 'flex';

    // Simulate the NFC tag providing a link to the backend
    const nfcTagLink = 'https://your-backend-server.com/api/bike-details'; // Replace with your actual backend link

    // Fetch bike details from the backend
    const bikeDetails = await fetchBikeDetails(nfcTagLink);

    if (bikeDetails) {
      // Update the UI with bike details
      bikeName.textContent = bikeDetails.name;
      bikeModel.textContent = bikeDetails.model;
      bikeRent.textContent = `$${bikeDetails.rentPerHour}`;
      bikeAvailability.textContent = bikeDetails.availability;
      ownerName.textContent = bikeDetails.owner.name;
      ownerContact.textContent = bikeDetails.owner.contact;

      // Hide loading screen and show content
      loadingScreen.style.display = 'none';
      contentContainer.style.display = 'block';
      setTimeout(() => {
        contentContainer.style.opacity = '1';
      }, 100);
    } else {
      // Handle error (e.g., show an error message)
      loadingScreen.style.display = 'none';
      alert('Failed to fetch bike details. Please try again.');
    }
  }, 1000); // Simulate 1 second delay for NFC scan
});

// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Automatic Slide Change Every 2 Seconds
setInterval(() => {
  nextSlide();
}, 2000);

// Initial Slide
showSlide(currentSlide);