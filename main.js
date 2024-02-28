(function () {
	// Define time units in milliseconds
	const SECOND_MS = 1000,
		  MINUTE_MS = SECOND_MS * 60,
		  HOUR_MS = MINUTE_MS * 60,
		  DAY_MS = HOUR_MS * 24;
  
	// Retrieve the countdown value from local storage
	let countDown = localStorage.getItem("countDown");
  
	// If the countdown value is not available in local storage, set it to a future date
	if (!countDown) {
	  countDown = new Date().getTime() + 10 * DAY_MS;
	  localStorage.setItem("countDown", countDown);
	}
  
	// Update the countdown every second
	const interval = setInterval(function () {
	  const now = new Date().getTime(),
			distance = countDown - now;
  
	  // Update the countdown display
	  document.getElementById("days").innerText = Math.floor(distance / DAY_MS);
	  document.getElementById("display_days").innerText = Math.floor(distance / DAY_MS);
	  document.getElementById("hours").innerText = Math.floor((distance % DAY_MS) / HOUR_MS);
	  document.getElementById("minutes").innerText = Math.floor((distance % HOUR_MS) / MINUTE_MS);
	  document.getElementById("seconds").innerText = Math.floor((distance % MINUTE_MS) / SECOND_MS);
  
	  // Restart countdown if it has ended
	  if (distance < 0) {
		countDown = new Date().getTime() + 10 * DAY_MS;
		localStorage.setItem("countDown", countDown);
	  }
	}, SECOND_MS);
  })();
  