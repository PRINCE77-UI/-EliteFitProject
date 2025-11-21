let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    testimonials[index].classList.add('active');
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}, 3000);
const monthlyBtn = document.getElementById('monthlyBtn');
const yearlyBtn = document.getElementById('yearlyBtn');
const pricingContainer = document.getElementById('pricingContainer');

const monthlyPlans = [
    { name: "Basic", price: "₹1,499", features: ["Gym Access", "Locker", "1 Trainer"] },
    { name: "Standard", price: "₹2,499", features: ["Everything in Basic", "Group Classes", "Nutrition Plan"] },
    { name: "Elite", price: "₹3,999", features: ["Everything in Standard", "Personal Coach", "Spa Access"] },
];

const yearlyPlans = [
    { name: "Basic", price: "₹14,999", features: ["Gym Access", "Locker", "1 Trainer"] },
    { name: "Standard", price: "₹23,999", features: ["Everything in Basic", "Group Classes", "Nutrition Plan"] },
    { name: "Elite", price: "₹39,999", features: ["Everything in Standard", "Personal Coach", "Spa Access"] },
];

function renderPlans(plans) {
    pricingContainer.innerHTML = plans.map(plan => `
    <div class="pricing-plan">
      <h3>${plan.name}</h3>
      <p><strong>${plan.price}</strong> / plan</p>
      <ul>
        ${plan.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
    </div>
  `).join('');
}

monthlyBtn.addEventListener("click", () => {
    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");
    renderPlans(monthlyPlans);
});

yearlyBtn.addEventListener("click", () => {
    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");
    renderPlans(yearlyPlans);
});

renderPlans(monthlyPlans);

const countdown = document.getElementById('countdown');

function startCountdown(hours) {
    const now = new Date().getTime();
    const target = now + hours * 60 * 60 * 1000;

    const interval = setInterval(() => {
        const current = new Date().getTime();
        const distance = target - current;

        const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (distance < 0) {
            clearInterval(interval);
            countdown.textContent = "Class Started!";
        }
    }, 1000);
}

if (countdown) startCountdown(2); 
function reveal() {
  const reveals = document.querySelectorAll(".reveal, .slide-left, .slide-right, .zoom-deluxe");

  reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 120;

      if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
      }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);




