function showBookings() {

    const bookingList = document.getElementById("bookingList");

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookingList.innerHTML = "";

    if (bookings.length === 0) {

        bookingList.innerHTML =
            "<p>No booking requests yet.</p>";

        return;
    }


    bookings.forEach(function(booking, index) {

        const card = document.createElement("div");

        card.className = "booking-card";

        card.innerHTML = `
            <h2>Booking ${index + 1}</h2>

            <p>
                <strong>Full Name:</strong>
                ${booking.name}
            </p>

            <p>
                <strong>Phone:</strong>
                ${booking.phone}
            </p>

            <p>
                <strong>Email:</strong>
                ${booking.email}
            </p>

            <p>
                <strong>Function:</strong>
                ${booking.event}
            </p>

            <p>
                <strong>Event Date:</strong>
                ${booking.date}
            </p>

            <p>
                <strong>Location:</strong>
                ${booking.location}
            </p>

            <p>
                <strong>Number of Guests:</strong>
                ${booking.guests || "Not provided"}
            </p>

            <p>
                <strong>Photography Requirements:</strong>
                ${booking.requirements}
            </p>

            <p>
                <strong>Additional Message:</strong>
                ${booking.message || "None"}
            </p>

            <p>
                <strong>Submitted:</strong>
                ${booking.submittedAt}
            </p>
        `;

        bookingList.appendChild(card);

    });
}


function clearBookings() {

    if (confirm("Are you sure you want to delete all bookings?")) {

        localStorage.removeItem("bookings");

        showBookings();

    }
}


showBookings();