const baseDate = new Date();
baseDate.setHours(0, 0, 0, 0);

const listings = [
  {
    id: "kings-sismet",
    venue: "Kings Courts Sismet",
    session: "Adult pickup basketball",
    venueType: "private",
    playType: "dropin",
    age: "adult",
    ageLabel: "18+",
    days: [1, 6],
    time: "8:00–10:00 PM",
    timeSort: 20,
    price: 10,
    priceLabel: "$10",
    address: "1775 Sismet Road, Mississauga",
    area: "Northeast Mississauga",
    distance: 8.7,
    online: true,
    status: "book",
    statusLabel: "Book online",
    sourceName: "Kings Courts",
    sourceUrl: "https://kingscourtssismet.as.me/pickupbasketball",
    checked: "Oct 26, 2026",
    x: 76,
    y: 35,
    description: "A scheduled adult pickup run. The venue checks appointment confirmation emails at entry, so reserve through the official booking page before arriving."
  },
  {
    id: "mississauga-valley",
    venue: "Mississauga Valley Gymnasium",
    session: "Drop-in adult basketball",
    venueType: "municipal",
    playType: "dropin",
    age: "adult",
    ageLabel: "18+",
    days: [1, 6],
    timeByDay: { 1: "11:45 AM–1:45 PM", 6: "2:30–4:30 PM" },
    timeSortByDay: { 1: 11.75, 6: 14.5 },
    price: 8,
    priceLabel: "Pay at facility",
    address: "1275 Mississauga Valley Blvd",
    area: "Mississauga Valley",
    distance: 4.2,
    online: false,
    status: "schedule",
    statusLabel: "Schedule listed",
    sourceName: "Active Mississauga",
    sourceUrl: "https://anc.ca.apm.activecommunities.com/activemississauga/activity/search?activity_keyword=Drop+In+Basketball&activity_select_param=2&locale=en-US&onlineSiteId=0&viewMode=list",
    checked: "Oct 26, 2026",
    x: 56,
    y: 56,
    description: "A City of Mississauga pay-as-you-go adult basketball session. Schedule status does not guarantee remaining capacity; verify on the official page before travelling."
  },
  {
    id: "game-court-derry",
    venue: "Game Court Derry",
    session: "Full-court and half-court rental",
    venueType: "private",
    playType: "rental",
    age: "all",
    ageLabel: "All ages",
    days: [0, 1, 2, 3, 4, 5, 6],
    time: "Open 24 hours",
    timeSort: 0,
    price: 35,
    priceLabel: "From $35/hr",
    address: "7115 Edwards Blvd, Mississauga",
    area: "Derry / Hurontario",
    distance: 11.4,
    online: true,
    status: "check",
    statusLabel: "Check live slots",
    sourceName: "Game Court",
    sourceUrl: "https://gamecourt.ca/mississauga-ontario/",
    checked: "Oct 26, 2026",
    x: 49,
    y: 18,
    description: "Two full courts and two half courts are available for private booking. The facility operates 24/7, but an open building does not mean an unreserved court is available."
  },
  {
    id: "fitcourts-odyssey",
    venue: "Fitcourts Mississauga",
    session: "Basketball court rental",
    venueType: "private",
    playType: "rental",
    age: "all",
    ageLabel: "All ages",
    days: [0, 1, 2, 3, 4, 5, 6],
    time: "Times vary",
    timeSort: 9,
    price: 80,
    priceLabel: "$80–$115/hr",
    address: "3545 Odyssey Drive, Unit 14",
    area: "Erin Mills",
    distance: 9.5,
    online: true,
    status: "check",
    statusLabel: "Live booking page",
    sourceName: "Fitcourts",
    sourceUrl: "https://fitcourts.com/mississauga/",
    checked: "Oct 26, 2026",
    x: 22,
    y: 48,
    description: "Indoor basketball and pickleball court rentals for groups, practices, and pickup runs. Open the provider’s live calendar to see the actual available times."
  },
  {
    id: "overtime-aimco",
    venue: "Overtime Athletics",
    session: "Basketball court rental",
    venueType: "private",
    playType: "rental",
    age: "all",
    ageLabel: "All ages",
    days: [0, 1, 2, 3, 4, 5, 6],
    time: "6:00 AM–5:00 AM",
    timeSort: 6,
    price: 30,
    priceLabel: "Rates vary",
    address: "1400 Aimco Blvd, Units 22–23",
    area: "Dixie",
    distance: 8.1,
    online: true,
    status: "check",
    statusLabel: "Check booking grid",
    sourceName: "Overtime Athletics",
    sourceUrl: "https://overtimeathletics.ca/",
    checked: "Oct 26, 2026",
    x: 80,
    y: 48,
    description: "Multiple basketball-capable zones with an online availability grid. Hours are nearly 24/7, but each court has its own booking status."
  },
  {
    id: "huron-park",
    venue: "Huron Park Recreation Centre",
    session: "Drop-in adult basketball",
    venueType: "municipal",
    playType: "dropin",
    age: "adult",
    ageLabel: "18+",
    days: [2],
    time: "8:15–10:15 PM",
    timeSort: 20.25,
    price: 8,
    priceLabel: "Pay at facility",
    address: "830 Paisley Blvd W",
    area: "Huron Park",
    distance: 5.4,
    online: false,
    status: "schedule",
    statusLabel: "Schedule listed",
    sourceName: "Active Mississauga",
    sourceUrl: "https://anc.ca.apm.activecommunities.com/activemississauga/activity/search?activity_keyword=Drop+In+Basketball&activity_select_param=2&locale=en-US&onlineSiteId=0&viewMode=list",
    checked: "Oct 26, 2026",
    x: 42,
    y: 67,
    description: "A City of Mississauga adult drop-in program. Check the official activity listing for cancellations and current registration information."
  },
  {
    id: "churchill-meadows",
    venue: "Churchill Meadows Community Centre",
    session: "Drop-in adult basketball",
    venueType: "municipal",
    playType: "dropin",
    age: "adult",
    ageLabel: "18+",
    days: [2, 5],
    timeByDay: { 2: "9:30–11:30 PM", 5: "9:30–11:30 AM" },
    timeSortByDay: { 2: 21.5, 5: 9.5 },
    price: 8,
    priceLabel: "Pay at facility",
    address: "5320 Ninth Line, Mississauga",
    area: "Churchill Meadows",
    distance: 13.2,
    online: false,
    status: "schedule",
    statusLabel: "Schedule listed",
    sourceName: "Active Mississauga",
    sourceUrl: "https://anc.ca.apm.activecommunities.com/activemississauga/activity/search?activity_keyword=Drop+In+Basketball&activity_select_param=2&locale=en-US&onlineSiteId=0&viewMode=list",
    checked: "Oct 26, 2026",
    x: 10,
    y: 45,
    description: "Scheduled City drop-in basketball at Churchill Meadows. Official availability and any day-of cancellations should be confirmed at the source."
  },
  {
    id: "frank-mckechnie",
    venue: "Frank McKechnie Community Centre",
    session: "Drop-in adult basketball",
    venueType: "municipal",
    playType: "dropin",
    age: "adult",
    ageLabel: "18+",
    days: [3, 4],
    timeByDay: { 3: "7:00–9:00 PM", 4: "7:45–9:45 PM" },
    timeSortByDay: { 3: 19, 4: 19.75 },
    price: 8,
    priceLabel: "Pay at facility",
    address: "310 Bristol Road E",
    area: "Hurontario",
    distance: 6.6,
    online: false,
    status: "schedule",
    statusLabel: "Schedule listed",
    sourceName: "Active Mississauga",
    sourceUrl: "https://anc.ca.apm.activecommunities.com/activemississauga/activity/search?activity_keyword=Drop+In+Basketball&activity_select_param=2&locale=en-US&onlineSiteId=0&viewMode=list",
    checked: "Oct 26, 2026",
    x: 54,
    y: 34,
    description: "Two weekly City drop-in options for adults. CourtPing currently presents the published schedule and links you back to Active Mississauga."
  },
  {
    id: "erin-meadows",
    venue: "Erin Meadows Community Centre",
    session: "Drop-in adult basketball",
    venueType: "municipal",
    playType: "dropin",
    age: "adult",
    ageLabel: "18+",
    days: [0],
    time: "11:15 AM–12:45 PM",
    timeSort: 11.25,
    price: 8,
    priceLabel: "Pay at facility",
    address: "2800 Erin Centre Blvd",
    area: "Erin Mills",
    distance: 10.1,
    online: false,
    status: "schedule",
    statusLabel: "Schedule listed",
    sourceName: "Active Mississauga",
    sourceUrl: "https://anc.ca.apm.activecommunities.com/activemississauga/activity/search?activity_keyword=Drop+In+Basketball&activity_select_param=2&locale=en-US&onlineSiteId=0&viewMode=list",
    checked: "Oct 26, 2026",
    x: 20,
    y: 37,
    description: "A Sunday adult basketball session listed by Active Mississauga. Verify availability on the official registration page."
  },
  {
    id: "carmen-corbasson",
    venue: "Carmen Corbasson Community Centre",
    session: "Drop-in adult basketball",
    venueType: "municipal",
    playType: "dropin",
    age: "adult",
    ageLabel: "18+",
    days: [5, 0],
    timeByDay: { 5: "8:15–10:15 PM", 0: "4:30–6:30 PM" },
    timeSortByDay: { 5: 20.25, 0: 16.5 },
    price: 8,
    priceLabel: "Pay at facility",
    address: "1399 Cawthra Road",
    area: "Lakeview",
    distance: 6.8,
    online: false,
    status: "schedule",
    statusLabel: "Schedule listed",
    sourceName: "Active Mississauga",
    sourceUrl: "https://anc.ca.apm.activecommunities.com/activemississauga/activity/search?activity_keyword=Drop+In+Basketball&activity_select_param=2&locale=en-US&onlineSiteId=0&viewMode=list",
    checked: "Oct 26, 2026",
    x: 70,
    y: 72,
    description: "Adult basketball offered on Friday and Sunday. The card reflects the published schedule, not guaranteed walk-in capacity."
  },
  {
    id: "clarkson-older-adult",
    venue: "Clarkson Community Centre",
    session: "Basketball shoot-around for older adults",
    venueType: "municipal",
    playType: "dropin",
    age: "older",
    ageLabel: "55+",
    days: [1],
    time: "7:00–8:15 PM",
    timeSort: 19,
    price: 8,
    priceLabel: "Pay at facility",
    address: "2475 Truscott Drive",
    area: "Clarkson",
    distance: 12.6,
    online: false,
    status: "schedule",
    statusLabel: "Schedule listed",
    sourceName: "Active Mississauga",
    sourceUrl: "https://anc.ca.apm.activecommunities.com/activemississauga/activity/search?activity_keyword=Drop+In+Basketball&activity_select_param=2&locale=en-US&onlineSiteId=0&viewMode=list",
    checked: "Oct 26, 2026",
    x: 25,
    y: 80,
    description: "A lower-intensity basketball shoot-around for adults age 55 and older. Confirm current program information through Active Mississauga."
  }
];

const state = {
  date: "today",
  query: "",
  venueType: "all",
  playType: "all",
  age: "all",
  onlineOnly: false,
  sort: "soonest"
};

const els = {
  resultsList: document.querySelector("#resultsList"),
  resultCount: document.querySelector("#resultCount"),
  searchInput: document.querySelector("#searchInput"),
  heroDate: document.querySelector("#heroDate"),
  venueType: document.querySelector("#venueTypeFilter"),
  playType: document.querySelector("#playTypeFilter"),
  age: document.querySelector("#ageFilter"),
  onlineOnly: document.querySelector("#onlineOnlyFilter"),
  sort: document.querySelector("#sortSelect"),
  tabs: [...document.querySelectorAll("[data-date]")],
  mapPins: document.querySelector("#mapPins"),
  dialog: document.querySelector("#detailDialog"),
  dialogContent: document.querySelector("#dialogContent")
};

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function dateOffsetForDay(day, includeToday = true) {
  const today = baseDate.getDay();
  let offset = (day - today + 7) % 7;
  if (!includeToday && offset === 0) offset = 7;
  return offset;
}

function occurrencesFor(listing) {
  const offsets = listing.days.map((day) => dateOffsetForDay(day));
  const validOffsets = state.date === "today"
    ? offsets.filter((offset) => offset === 0)
    : state.date === "tomorrow"
      ? offsets.filter((offset) => offset === 1)
      : offsets.filter((offset) => offset >= 0 && offset <= 6);

  return validOffsets.map((offset) => {
    const date = addDays(baseDate, offset);
    const day = date.getDay();
    return {
      ...listing,
      occurrenceDate: date,
      offset,
      displayTime: listing.timeByDay?.[day] || listing.time,
      occurrenceSort: offset * 24 + (listing.timeSortByDay?.[day] ?? listing.timeSort)
    };
  });
}

function formatDate(date, offset) {
  if (offset === 0) return "Today";
  if (offset === 1) return "Tomorrow";
  return new Intl.DateTimeFormat("en-CA", { weekday: "short", month: "short", day: "numeric" }).format(date);
}

function matchesFilters(item) {
  const haystack = `${item.venue} ${item.session} ${item.area} ${item.address}`.toLowerCase();
  return (!state.query || haystack.includes(state.query))
    && (state.venueType === "all" || item.venueType === state.venueType)
    && (state.playType === "all" || item.playType === state.playType)
    && (state.age === "all" || item.age === state.age || item.age === "all")
    && (!state.onlineOnly || item.online);
}

function getVisibleItems() {
  const items = listings.flatMap(occurrencesFor).filter(matchesFilters);
  return items.sort((a, b) => {
    if (state.sort === "distance") return a.distance - b.distance;
    if (state.sort === "price") return a.price - b.price;
    return a.occurrenceSort - b.occurrenceSort;
  });
}

function statusClass(status) {
  if (status === "schedule") return "schedule";
  if (status === "check") return "check";
  return "";
}

function listingCard(item) {
  return `
    <article class="result-card" data-id="${item.id}" tabindex="0">
      <div class="time-block">
        <strong>${item.displayTime.replace("–", "<br>–<br>")}</strong>
        <small>${formatDate(item.occurrenceDate, item.offset)}</small>
      </div>
      <div>
        <div class="card-title-row">
          <h3>${item.venue}</h3>
          <span class="pill ${item.venueType}">${item.venueType === "municipal" ? "City" : "Private"}</span>
        </div>
        <p class="session-name">${item.session}</p>
        <div class="card-meta">
          <span class="distance">${item.distance.toFixed(1)} km</span>
          <span class="age">${item.ageLabel}</span>
          <span class="price">${item.priceLabel}</span>
        </div>
        <p class="source-line">Source: <strong>${item.sourceName}</strong> · Checked ${item.checked}</p>
      </div>
      <div class="card-actions">
        <span class="status-badge ${statusClass(item.status)}">${item.statusLabel}</span>
        <button class="detail-button" type="button" data-detail="${item.id}">Details</button>
        <a class="action-link" href="${item.sourceUrl}" target="_blank" rel="noopener">Official site →</a>
      </div>
    </article>`;
}

function renderMap(items) {
  const unique = [...new Map(items.map((item) => [item.id, item])).values()];
  els.mapPins.innerHTML = unique.map((item, index) => `
    <button
      class="map-pin ${item.venueType}"
      style="left:${item.x}%;top:${item.y}%"
      data-map-id="${item.id}"
      type="button"
      aria-label="Show ${item.venue}"
      title="${item.venue}"
    ><span>${index + 1}</span></button>
  `).join("");

  els.mapPins.querySelectorAll(".map-pin").forEach((pin) => {
    pin.addEventListener("click", () => {
      const card = document.querySelector(`.result-card[data-id="${pin.dataset.mapId}"]`);
      if (!card) return;
      document.querySelectorAll(".result-card, .map-pin").forEach((el) => el.classList.remove("active"));
      pin.classList.add("active");
      card.classList.add("active");
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

function render() {
  const items = getVisibleItems();
  els.resultCount.textContent = `${items.length} ${items.length === 1 ? "option" : "options"}`;
  els.resultsList.innerHTML = items.length
    ? items.map(listingCard).join("")
    : `<div class="empty-state"><strong>No matching courts yet.</strong><p>Try a wider date range or clear one of your filters.</p></div>`;
  renderMap(items);
  bindCardInteractions();
}

function openDetails(id) {
  const item = listings.find((listing) => listing.id === id);
  if (!item) return;
  const next = occurrencesFor(item)[0] || { ...item, occurrenceDate: addDays(baseDate, dateOffsetForDay(item.days[0])), offset: dateOffsetForDay(item.days[0]), displayTime: item.timeByDay?.[item.days[0]] || item.time };
  els.dialogContent.innerHTML = `
    <div class="dialog-body">
      <span class="pill ${item.venueType}">${item.venueType === "municipal" ? "City facility" : "Private facility"}</span>
      <h2>${item.venue}</h2>
      <p class="dialog-session">${item.session}</p>
      <div class="dialog-grid">
        <div><small>Next shown</small><strong>${formatDate(next.occurrenceDate, next.offset)} · ${next.displayTime}</strong></div>
        <div><small>Price</small><strong>${item.priceLabel}</strong></div>
        <div><small>Age</small><strong>${item.ageLabel}</strong></div>
        <div><small>Distance</small><strong>${item.distance.toFixed(1)} km</strong></div>
      </div>
      <p class="dialog-copy">${item.description}</p>
      <p class="dialog-copy"><strong>Address:</strong> ${item.address}</p>
      <div class="dialog-source">Source: ${item.sourceName} · Last checked ${item.checked}. Availability can change; confirm on the official provider’s page.</div>
      <a class="dialog-cta" href="${item.sourceUrl}" target="_blank" rel="noopener">Continue to official site →</a>
    </div>`;
  els.dialog.showModal();
}

function bindCardInteractions() {
  document.querySelectorAll("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => openDetails(button.dataset.detail));
  });
  document.querySelectorAll(".result-card").forEach((card) => {
    const activate = () => {
      document.querySelectorAll(".result-card, .map-pin").forEach((el) => el.classList.remove("active"));
      card.classList.add("active");
      document.querySelector(`.map-pin[data-map-id="${card.dataset.id}"]`)?.classList.add("active");
    };
    card.addEventListener("mouseenter", activate);
    card.addEventListener("focus", activate);
  });
}

function setDateFilter(value) {
  state.date = value;
  els.heroDate.value = value;
  els.tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.date === value));
  render();
}

document.querySelector("#heroSearch").addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = els.searchInput.value.trim().toLowerCase();
  setDateFilter(els.heroDate.value);
  document.querySelector("#results").scrollIntoView({ behavior: "smooth" });
});

els.searchInput.addEventListener("input", () => {
  state.query = els.searchInput.value.trim().toLowerCase();
  render();
});
els.heroDate.addEventListener("change", () => setDateFilter(els.heroDate.value));
els.tabs.forEach((tab) => tab.addEventListener("click", () => setDateFilter(tab.dataset.date)));
els.venueType.addEventListener("change", () => { state.venueType = els.venueType.value; render(); });
els.playType.addEventListener("change", () => { state.playType = els.playType.value; render(); });
els.age.addEventListener("change", () => { state.age = els.age.value; render(); });
els.onlineOnly.addEventListener("change", () => { state.onlineOnly = els.onlineOnly.checked; render(); });
els.sort.addEventListener("change", () => { state.sort = els.sort.value; render(); });

document.querySelector("#clearFilters").addEventListener("click", () => {
  Object.assign(state, { query: "", venueType: "all", playType: "all", age: "all", onlineOnly: false, sort: "soonest" });
  els.searchInput.value = "";
  els.venueType.value = "all";
  els.playType.value = "all";
  els.age.value = "all";
  els.onlineOnly.checked = false;
  els.sort.value = "soonest";
  render();
});

document.querySelector(".dialog-close").addEventListener("click", () => els.dialog.close());
els.dialog.addEventListener("click", (event) => {
  const rect = els.dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) els.dialog.close();
});

document.querySelector("#locationButton").addEventListener("click", () => {
  document.querySelector("#results").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#tonightDate").textContent = new Intl.DateTimeFormat("en-CA", {
  weekday: "long", month: "short", day: "numeric"
}).format(baseDate);

render();
