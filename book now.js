const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const booking = {
        name: bookingForm.elements["name"].value,
        phone: bookingForm.elements["phone"].value,
        email: bookingForm.elements["email"].value,
        event: bookingForm.elements["event"].value,
        date: bookingForm.elements["date"].value,
        location: bookingForm.elements["location"].value,
        guests: bookingForm.elements["guests"].value,
        requirements: bookingForm.elements["requirements"].value,
        message: bookingForm.elements["message"].value,
        submittedAt: new Date().toLocaleString()
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Booking request submitted successfully!");

    bookingForm.reset();
});
function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
}