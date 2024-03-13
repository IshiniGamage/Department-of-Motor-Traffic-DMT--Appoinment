function changeLanguage(language) {
  switch (language) {
    case 'english':
      document.getElementById('languageDropdown').innerText = 'English';
      document.getElementById('formTitle').innerText = 'Book an Appointment';
      document.getElementById('nicLabel').innerText = 'NIC Number:';
      document.getElementById('nameLabel').innerText = 'Name:';
      document.getElementById('phoneLabel').innerText = 'Phone Number:';
      document.getElementById('districtLabel').innerText = 'Booking District Office:';
      document.getElementById('appointLabel').innerText = 'Appointment For:';
      document.getElementById('dateLabel').innerText = 'Date of Arrival:';
      document.getElementById('timeLabel').innerText = 'Time of Arrival:';
      updateServices(language);
      break;
    case 'sinhala':
      document.getElementById('languageDropdown').innerText = 'සිංහල';
      document.getElementById('formTitle').innerText = 'හමුවීමක් වෙන්කරවා ගන්න';
      document.getElementById('nicLabel').innerText = 'ජා.හැ.අං:';
      document.getElementById('nameLabel').innerText = 'නම:';
      document.getElementById('phoneLabel').innerText = 'දුරකථන අංකය:';
      document.getElementById('districtLabel').innerText = 'දිස්ත්‍රික් කාර්යාලය වෙන්කරවා ගැනීම:';
      document.getElementById('appointLabel').innerText = 'පත්වීම සඳහා?';
      document.getElementById('dateLabel').innerText = 'පැමිණීමේ දිනය:';
      document.getElementById('timeLabel').innerText = 'පැමිණීමේ වේලාව:';
      updateServices(language);
      break;
    case 'tamil':
      document.getElementById('languageDropdown').innerText = 'தமிழ்';
      document.getElementById('formTitle').innerText = 'ஒரு சந்திப்பை பதிவு செய்யவும்';
      document.getElementById('nicLabel').innerText = 'NIC எண்:';
      document.getElementById('nameLabel').innerText = 'பெயர்:';
      document.getElementById('phoneLabel').innerText = 'தொலைபேசி எண்:';
      document.getElementById('districtLabel').innerText = 'முன்பதிவு மாவட்ட அலுவலகம்:';
      document.getElementById('appointLabel').innerText = 'நியமனம்:';
      document.getElementById('dateLabel').innerText = 'வருகை தேதி:';
      document.getElementById('timeLabel').innerText = 'வருகை நேரம்:';
      updateServices(language);
      break;
    default:
      break;
  }
  currentLanguage = language;
}

document.getElementById('languageDropdown').addEventListener('click', function() {
  const language = this.innerText.trim(); // Get the selected language
  changeLanguage(language); // Call changeLanguage function with the selected language
});

// Function to update services based on language
function updateServices(language) {
  const servicesList = document.getElementById('servicesList');
  servicesList.innerHTML = ''; // Clear existing list
  
  switch (language) {
    case 'English':
      addService('<i class="fas fa-car"></i> Vehicle First Registration');
      addService('<i class="fas fa-id-card"></i> New Driving Licence');
      addService('<i class="fas fa-car"></i> Vehicle Ownership Transfer');
      addService('<i class="fas fa-id-card"></i> Driving Licence Renewal');
      addService('<i class="fas fa-car-side"></i> Vehicle Information Request');
      break;
    case 'සිංහල':
      addService('<i class="fas fa-car"></i> වාහන පළමු ලියාපදිංචිය');
      addService('<i class="fas fa-id-card"></i> නව රියදුරු ලියාපදිංචිය');
      addService('<i class="fas fa-car"></i> වාහන අයදුම් මාරු කිරීම');
      addService('<i class="fas fa-id-card"></i> රියදුරු නැවතුම් කිරීම');
      addService('<i class="fas fa-car-side"></i> වාහන තොරතුරු ඉල්ලීම');
      break;
    case 'தமிழ்':
      addService('<i class="fas fa-car"></i> வாகனம் முதல் பதிவு');
      addService('<i class="fas fa-id-card"></i> புதிய ஓட்டு அனுமதி');
      addService('<i class="fas fa-car"></i> வாகன உரிமம் மாற்றம்');
      addService('<i class="fas fa-id-card"></i> ஓட்டு அனுமதி புதுப்பிப்பு');
      addService('<i class="fas fa-car-side"></i> வாகன தகவல் கோரிக்கை');
      break;
    default:
      break;
  }
}

// Call updateServices initially with default language
updateServices('English');
window.addEventListener("scroll", function() {
  var footer = document.querySelector(".footer");
  if (window.scrollY > 0) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
});

