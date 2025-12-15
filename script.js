
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    currentSlide = (n + totalSlides) % totalSlides;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Auto slide
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Indicator clicks
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-categories');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});



// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
let count = 3; // Initial count

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
        
        // Show a quick confirmation
        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.style.background = 'var(--success)';
        
        // Show toast notification
        showToast('Product added to cart successfully!');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    });
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toast notification function
function showToast(message) {
    const toast = document.querySelector('.toast');
    toast.querySelector('span').textContent = message;
    toast.classList.add('visible');
    
    setTimeout(() => {
        toast.classList.remove('visible');
    }, 3000);
}

// Quick view functionality
const quickViewButtons = document.querySelectorAll('.product-quick-view');

quickViewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const productCard = button.closest('.product-card');
        const productTitle = productCard.querySelector('.product-title').textContent;
        showToast(`Quick view: ${productTitle}`);
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (emailInput.value) {
        showToast('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    }
});

const cartToggle = document.getElementById('cart-toggle');
const cartSidebar = document.getElementById('cart-sidebar');
// cartToggle.addEventListener('click', function() {
//     openPopup()
// });

// function cartSidebarActive(){
//     openPopup()
// }


// Sample product data
const products = [
    {
        id: 1,
        title: "Smartphone XYZ Pro Max 128GB",
        price: 799,
        originalPrice: 999,
        discount: 20,
        rating: 4.5,
        reviewCount: 124,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    },
    {
        id: 2,
        title: "Wireless Bluetooth Headphones",
        price: 550,
        originalPrice: 79.99,
        discount: 38,
        rating: 4.2,
        reviewCount: 87,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    },
    {
        id: 3,
        title: "Ultra HD Smart TV 55-inch",
        price: 9999,
        originalPrice: 699,
        discount: 21,
        rating: 4.7,
        reviewCount: 203,
        image: "https://images.unsplash.com/photo-1593784991095-2056a68f74ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    },
    {
        id: 4,
        title: "Laptop Pro 15.6-inch 16GB RAM",
        price: 1899,
        originalPrice: 1499,
        discount: 13,
        rating: 4.6,
        reviewCount: 156,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    },
    {
        id: 5,
        title: "Smart Watch Series 6",
        price: 500,
        originalPrice: 399,
        discount: 25,
        rating: 4.4,
        reviewCount: 98,
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    },
    {
        id: 6,
        title: "Wireless Gaming Mouse",
        price: 800,
        originalPrice: 89.99,
        discount: 33,
        rating: 4.3,
        reviewCount: 76,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    },
    {
        id: 7,
        title: "Digital Camera 4K",
        price: 1000,
        originalPrice: 1199,
        discount: 25,
        rating: 4.8,
        reviewCount: 142,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    },
    {
        id: 8,
        title: "Bluetooth Speaker Waterproof",
        price: 150,
        originalPrice: 59.99,
        discount: 33,
        rating: 4.1,
        reviewCount: 65,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    },
    {
        id: 9,
        title: "Bluetooth Speaker Waterproof",
        price: 300,
        originalPrice: 59.99,
        discount: 33,
        rating: 4.1,
        reviewCount: 65,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
    },
    {
        id: 10,
        title: "Bluetooth Speaker Waterproof",
        price: 250,
        originalPrice: 59.99,
        discount: 33,
        rating: 4.1,
        reviewCount: 65,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80"
    },
    {
        id: 11,
        title: "Bluetooth Speaker Waterproof",
        price: 230,
        originalPrice: 59.99,
        discount: 33,
        rating: 4.1,
        reviewCount: 65,
        image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
        id: 12,
        title: "Bluetooth Speaker Waterproof",
        price: 220,
        originalPrice: 59.99,
        discount: 33,
        rating: 4.1,
        reviewCount: 65,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    },
    {
        id: 13,
        title: "Bluetooth Speaker Waterproof",
        price: 200,
        originalPrice: 59.99,
        discount: 33,
        rating: 4.1,
        reviewCount: 65,
        image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
    }
];

const data = {
    Bangladesh: {
    "ঢাকা": {
        "ঢাকা জেলা": ["সাভার", "ধামরাই", "কেরাণীগঞ্জ","নবাবগঞ্জ", "দোহার"],
        "নরসিংদী জেলা": ["বেলাবো", "মনোহরদী", "পলাশ","রায়পুরা", "শিবপুর", "নরসিংদী "],
        "নারায়ণগঞ্জ জেলা": ["আড়াইহাজার", "বন্দর", "নারায়ণগঞ্জ সদর", "রূপগঞ্জ", "সোনারগাঁ"],
        "গাজীপুর জেলা": ["কালীগঞ্জ", "কালিয়াকৈর", "কাপাসিয়া", "গাজীপুর সদর", "শ্রীপুর"],
        "শরীয়তপুর জেলা": ["শরিয়তপুর সদর", "নড়িয়া", "জাজিরা", "গোসাইরহাট", "ভেদরগঞ্জ", "ডামুড্যা"],
        "টাঙ্গাইল জেলা": ["বাসাইল", "ভুয়াপুর", "দেলদুয়ার","ঘাটাইল", "গোপালপুর", "মধুপুর","মির্জাপুর", "নাগরপুর", "সখিপুর","টাঙ্গাইল সদর", "কালিহাতী", "ধনবাড়ী"],            
        "কিশোরগঞ্জ জেলা": ["ইটনা", "কটিয়াদী", "ভৈরব","সাভার", "তাড়াইল", "হোসেনপুর","পাকুন্দিয়া", "কুলিয়ারচর", "কিশোরগঞ্জ সদর","করিমগঞ্জ", "বাজিতপুর", "অষ্টগ্রাম", "মিঠামইন", "নিকলী"],          
        "মানিকগঞ্জ জেলা": ["মানিকগঞ্জ সদর", "ঘিওর", "শিবালয়","দৌলতপুর","সিংগাইর"],          
        "মুন্সিগঞ্জ জেলা": ["মুন্সিগঞ্জ সদর", "শ্রীনগর", "সিরাজদিখান","লৌহজং","গজারিয়া","টংগীবাড়ি"],          
        "রাজবাড়ী জেলা": ["রাজবাড়ী সদর", "গোয়ালন্দ", "পাংশা","বালিয়াকান্দি","কালুখালী", "মাদারীপুর সদর", "শিবচর", "কালকিনি","রাজৈর","ডাসার"],          
        "গোপালগঞ্জ জেলা": ["গোপালগঞ্জ সদর", "কাশিয়ানী", "টুংগীপাড়া","কোটালীপাড়া","মুকসুদপুর"],          
        "ফরিদপুর জেলা": ["ফরিদপুর সদর", "আলফাডাঙ্গা", "বোয়ালমারী","সদরপুর","নগরকান্দা","ভাঙ্গা","চরভদ্রাসন","মধুখালী","সালথা"],        
    },
    "চট্টগ্রাম": {
        "চট্টগ্রাম জেলা": ["রাঙ্গুনিয়া", "সীতাকুন্ড", "মীরসরাই","পটিয়া","সন্দ্বীপ","বাঁশখালী","বোয়ালখালী","আনোয়ারা","চন্দনাইশ","সাতকানিয়া","লোহাগাড়া","হাটহাজারী","ফটিকছড়ি","রাউজান","কর্ণফুলী"],                    
        "কুমিল্লা জেলা": ["দ্বার", "বরুড়া", "ব্রাহ্মণপাড়া","চান্দিনা","চৌদ্দগ্রাম","দাউদকান্দি","হোমনা","লাকসাম","মুরাদনগর","নাঙ্গলকোট","কুমিল্লা সদর","মেঘনা","মনোহরগঞ্জ","সদর দক্ষিণ","তিতাস","বুড়িচং","লালমাই"],          
        "ফেনী জেলা": ["গলনাইয়া", "ফেনী সদর", "সোনাগাজী","ফুলগাজী","পরশুরাম","দাগনভূঞা"],          
        "ব্রাহ্মণবাড়িয়া জেলা": ["রাহ্মণবাড়িয়া সদর", "কসবা", "নাসিরনগর","সরাইল","আশুগঞ্জ","আখাউড়া","নবীনগর","বাঞ্ছারামপুর","বিজয়নগর"],          
        "রাঙ্গামাটি জেলা": ["ঙ্গামাটি সদর", "কাপ্তাই", "কাউখালী","বাঘাইছড়ি","বরকল","লংগদু","রাজস্থলী","বিলাইছড়ি","জুরাছড়ি","নানিয়ারচর"],          
        "নোয়াখালী জেলা": ["য়াখালী সদর", "কোম্পানীগঞ্জ", "বেগমগঞ্জ","হাতিয়া","সুবর্ণচর","কবিরহাট","সেনবাগ","চাটখিল","সোনাইমুড়ী"],          
        "চাঁদপুর জেলা": ["ইমচর", "কচুয়া", "শাহরাস্তি","চাঁদপুর সদর","মতলব দক্ষিণ","হাজীগঞ্জ","মতলব উত্তর","ফরিদগঞ্জ"],          
        "লক্ষ্মীপুর জেলা": ["ক্ষ্মীপুর সদর", "কমলনগর", "রায়পুর","রামগতি","রামগঞ্জ"],          
        "কক্সবাজার জেলা": ["ক্সবাজার সদর", "চকরিয়া", "কুতুবদিয়া","উখিয়া","মহেশখালী",'পেকুয়া',"রামু","টেকনাফ","ঈদগাঁও"],          
        "খাগড়াছড়ি জেলা": ["গড়াছড়ি সদর", "দিঘীনালা", "পানছড়ি","লক্ষীছড়ি","মহালছড়ি","মানিকছড়ি","রামগড়","মাটিরাঙ্গা","গুইমারা"],        
        "বান্দরবান জেলা": ["সুন্দরবান সদর", "আলীকদম", "নাইক্ষ্যংছড়ি","রোয়াংছড়ি","লামা","রুমা","থানচি"],          
    },
    "রাজশাহী": {
        "সিরাজগঞ্জ জেলা": ["বেলকুচি", "চৌহালি", "কামারখন্দ","কাজীপুর","রায়গঞ্জ","শাহজাদপুর","সিরাজগঞ্জ সদর","তাড়াশ","উল্লাপাড়া"],          
        "পাবনা জেলা": ["সুজানগর", "ঈশ্বরদী", "ভাঙ্গুড়া","পাবনা সদর","বেড়া","আটঘরিয়া","চাটমোহর","সাঁথিয়া","ফরিদপুর"],          
        "বগুড়া জেলা": ["কাহালু", "বগুড়া সদর", "সারিয়াকান্দি","শাজাহানপুর","দুপচাচিঁয়া",'আদমদিঘি',"নন্দিগ্রাম","সোনাতলা","ধুনট","গাবতলী","শেরপুর","শিবগঞ্জ"],          
        "রাজশাহী জেলা": ["পবা", "দুর্গাপুর", "মোহনপুর","চারঘাট","পুঠিয়া","বাঘা","গোদাগাড়ী","তানোর","বাগমারা"],          
        "নাটোর জেলা": ["নাটোর সদর", "সিংড়া", "বড়াইগ্রাম","বাগাতিপাড়া","লালপুর","গুরুদাসপুর","নলডাঙ্গা"],          
        "জয়পুরহাট জেলা": ["আক্কেলপুর", "কালাই", "ক্ষেতলাল","পাঁচবিবি","জয়পুরহাট সদর"],          
        "চাঁপাইনবাবগঞ্জ জেলা": ["চাঁপাইনবাবগঞ্জ সদর", "গোমস্তাপুর", "নাচোল","ভোলাহাট","শিবগঞ্জ"],          
        "নওগাঁ জেলা": ["মহাদেবপুর", "বদলগাছী", "পত্নিতলা","ধামইরহাট","নিয়ামতপুর","মান্দা","আত্রাই","নওগাঁ সদর","পোরশা","সাপাহার"],          
    },
    "খুলনা": {
        "যশোর জেলা": ["মণিরামপুর", "অভয়নগর", "বাঘারপাড়া","চৌগাছা","ঝিকরগাছা","কেশবপুর","যশোর সদর","শার্শা"],          
        "সাতক্ষীরা জেলা": ["আশাশুনি", "দেবহাটা", "কলারোয়া","সাতক্ষীরা সদর","শ্যামনগর","তালা","কালিগঞ্জ"],          
        "মেহেরপুর জেলা": ["মুজিবনগর", "মেহেরপুর সদর", "গাংনী"],          
        "নড়াইল জেলা": ["নড়াইল সদর", "লোহাগড়া", "কালিয়া"],          
        "চুয়াডাঙ্গা জেলা": ["চুয়াডাঙ্গা সদর", "আলমডাঙ্গা", "দামুড়হুদা","জীবননগর"],          
        "কুষ্টিয়া জেলা": ["কুষ্টিয়া সদর", "কুমারখালী", "খোকসা","মিরপুর","দৌলতপুর","ভেড়ামারা"],          
        "মাগুরা জেলা": ["শালিখা", "শ্রীপুর", "মাগুরা সদর","মহম্মদপুর"],          
        "খুলনা জেলা": ["পাইকগাছা", "ফুলতলা", "দিঘলিয়া","রূপসা","তেরখাদা","ডুমুরিয়া","বটিয়াঘাটা","দাকোপ","কয়রা"],
        "বাগেরহাট জেলা": ["ফকিরহাট", "বাগেরহাট সদর", "মোল্লাহাট","শরণখোলা","মোড়েলগঞ্জ","কচুয়া","মোংলা","চিতলমারী"],          
        "ঝিনাইদহ জেলা": ["ঝিনাইদহ সদর", "শৈলকুপা", "হরিণাকুন্ডু","কালীগঞ্জ","কোটচাঁদপুর","মহেশপুর"],          
    },
    "বরিশাল": {
        "ঝালকাঠি জেলা": ["ঝালকাঠি সদর", "কাঠালিয়া", "নলছিটি","রাজাপুর"],          
        "পটুয়াখালী জেলা": ["পটুয়াখালী সদর", "দুমকি", "দশমিনা","কলাপাড়া","মির্জাগঞ্জ","গলাচিপা","রাঙ্গাবালী"],          
        "বরিশাল জেলা": ["পিরোজপুর সদর", "নাজিরপুর", "কাউখালী","জিয়ানগর","ভান্ডারিয়া","মঠবাড়ীয়া","নেছারাবাদ"],          
        "ভোলা জেলা": ["বরিশাল সদর", "বাকেরগঞ্জ", "বাবুগঞ্জ","উজিরপুর","বানারীপাড়া","গৌরনদী","আগৈলঝাড়া","মেহেন্দিগঞ্জ","মুলাদী","হিজলা"],          
        "বরগুনা জেলা": ["ভোলা সদর", "বোরহান উদ্দিন", "চরফ্যাশন","দৌলতখান","মনপুরা","তজুমদ্দিন","লালমোহন"],          
        "পিরোজপুর জেলা": ["আমতলী", "বরগুনা সদর", "বেতাগী","বামনা","পাথরঘাটা","তালতলি"],
    },
    "সিলেট": {
        "সিলেট জেলা": ["বালাগঞ্জ", "বিয়ানীবাজার", "মীরসরাই","বিশ্বনাথ","কোম্পানীগঞ্জ","ফেঞ্চুগঞ্জ","গোলাপগঞ্জ","গোয়াইনঘাট","জৈন্তাপুর","কানাইঘাট","সিলেট সদর","জকিগঞ্জ","জকিগঞ্জ","দক্ষিণ সুরমা","ওসমানী নগর"],          
        "মৌলভীবাজার জেলা": ["বড়লেখা", "কমলগঞ্জ", "কুলাউড়া","মৌলভীবাজার সদর","রাজনগর","শ্রীমঙ্গল","জুড়ী"],          
        "হবিগঞ্জ জেলা": ["নবীগঞ্জ", "বাহুবল", "আজমিরীগঞ্জ","বানিয়াচং","লাখাই","চুনারুঘাট","হবিগঞ্জ সদর",'মাধবপুর',"শায়েস্তাগঞ্জ"],      
        "সুনামগঞ্জ জেলা": ["সুনামগঞ্জ সদর", "দক্ষিণ সুনামগঞ্জ", "বিশ্বম্ভরপুর","ছাতক","জগন্নাথপুর","দোয়ারাবাজার","তাহিরপুর","ধর্মপাশা","জামালগঞ্জ","শাল্লা","দিরাই","মধ্যনগর"],          
    },

    "রংপুর": {
        "পঞ্চগড় জেলা": ["পঞ্চগড় সদর", "দেবীগঞ্জ", "বোদা","আটোয়ারী","তেতুলিয়া"],          
        "দিনাজপুর জেলা": ["আদিতমারী", "বীরগঞ্জ", "ঘোড়াঘাট","বিরামপুর","পার্বতীপুর","বোচাগঞ্জ","কাহারোল","ফুলবাড়ী","দিনাজপুর সদর","হাকিমপুর","খানসামা","বিরল","চিরিরবন্দর"],          
        "লালমনিরহাট জেলা": ["লালমনিরহাট সদর", "কালীগঞ্জ", "হাতীবান্ধা","পাটগ্রাম","আদিতমারী"],        
        "নীলফামারী জেলা": ["সৈয়দপুর", "ডোমার", "ডিমলা","জলঢাকা","কিশোরগঞ্জ","নীলফামারী সদর"],          
        "গাইবান্ধা জেলা": ["সাদুল্লাপুর", "গাইবান্ধা সদর", "পলাশবাড়ী","সাঘাটা","গোবিন্দগঞ্জ","সুন্দরগঞ্জ","ফুলছড়ি"],
        "ঠাকুরগাঁও জেলা": ["ঠাকুরগাঁও সদর", "পীরগঞ্জ", "রাণীশংকৈল","হরিপুর","বালিয়াডাঙ্গী"],
        "রংপুর জেলা": ["রংপুর সদর", "গংগাচড়া", "তারাগঞ্জ","বদরগঞ্জ","মিঠাপুকুর","পীরগঞ্জ","কাউনিয়া","পীরগাছা"],
        "কুড়িগ্রাম জেলা": ["কুড়িগ্রাম সদর", "নাগেশ্বরী", "ভুরুঙ্গামারী","ফুলবাড়ী","রাজারহাট","উলিপুর","চিলমারী","রৌমারী","চর রাজিবপুর"],
    },
    "ময়মনসিংহ": {
        "শেরপুর জেলা": ["শেরপুর সদর", "নালিতাবাড়ী", "শ্রীবরদী","নকলা","ঝিনাইগাতী"],
        "ময়মনসিংহ জেলা": ["ফুলবাড়ীয়া", "ত্রিশাল", "ভালুকা","মুক্তাগাছা","ময়মনসিংহ সদর","ধোবাউড়া","ফুলপুর","হালুয়াঘাট","গৌরীপুর","গফরগাঁও","ঈশ্বরগঞ্জ","নান্দাইল","তারাকান্দা"],
        "জামালপুর জেলা": ["জামালপুর সদর", "মেলান্দহ", "ইসলামপুর","দেওয়ানগঞ্জ","সরিষাবাড়ী","মাদারগঞ্জ","বকশীগঞ্জ"],
        "নেত্রকোণা জেলা": ["বারহাট্টা", "দুর্গাপুর", "কেন্দুয়া","বারহাট্টা", "আটপাড়া", "মদন","খালিয়াজুরী", "কলমাকান্দা", "মোহনগঞ্জ","পূর্বধলা","নেত্রকোণা সদর"],
    }
    },
    India: {
    "দিল্লি": {
        "নতুন দিল্লি": ["চানাক্যাপুরি", "কারোল বাগ"]
    },
    "মুম্বাই": {
        "মুম্বাই শহরতলি": ["আন্ধেরি", "বান্দ্রা"]
    }
    }
};

// Cart functionality
let cart = [];

// DOM elements
const productGrid = document.getElementById('product-grid');
const Allprodact = document.querySelector(".Allprodact");
const recommendationProdact = document.querySelector(".recommendationprodact");
const cartItemsContainer = document.getElementById('cart-items');
const cartSummaryContainer = document.getElementById('cart-summary');
const closeCart = document.getElementById('close-cart');
const authModal = document.getElementById('auth-modal');
const modalClose = document.getElementById('modal-close');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const accountLink = document.getElementById('account-link');
const authForm = document.getElementById('auth-form');
const modalTitle = document.getElementById('modal-title');
const authSubmit = document.getElementById('auth-submit');
const nameGroup = document.getElementById('name-group');
const cancelBtn = document.getElementById('cancel-btn');
const searchBox = document.getElementById('searchBox');




// Initialize the page
function init() {
    renderProducts();
    setupEventListeners();
}

let filtered=[];
searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();

    filtered = products.filter(p => 
        p.title.toLowerCase().includes(query)
    );
    console.log(query)
    renderProducts(filtered.length ? filtered : [{title:"No results", price:""}]);
    searchUIupdate();
    console.log(renderProducts)

    console.log(filtered)


});
    
let sectionTitle = document.querySelector(".section-title")
function searchUIupdate(){
    sectionTitle.innerHTML='Search Item'
    productGrid.innerHTML = '';
    if(filtered.length === 0){
        productGrid.innerHTML=`<h2 style="text-align: center; width:100%">No Results</h2>`;
    }

    filtered.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        
        productCard.innerHTML = `
            <div class="product-img" data-id="${product.id}">
                <img src="${product.image}" alt="${product.title}">
                <span class="discount-badge">-${product.discount}%</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">BT ${product.price}</span>
                    <span class="original-price">BT ${product.originalPrice}</span>
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviewCount})</span>
                    <div class="Favorite">
                        <div class="wishlist"><i class="far fa-heart"></i></div>                    
                        <p id="FavoriteNumber">(12)</p>
                    </div>
                </div>
                <div class="buttons">
                    <button class="add-to-cart" data-id="${product.id}" onclick="cartSidebarActive()">By New</button>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
}






// Render products
function renderProducts() {
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        
        productCard.innerHTML = `
            <div class="product-img" data-id="${product.id}">
                <img src="${product.image}" alt="${product.title}">
                <span class="discount-badge">-${product.discount}%</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">BT ${product.price}</span>
                    <span class="original-price">BT ${product.originalPrice}</span>
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviewCount})</span>
                    <div class="Favorite">
                        <div class="wishlist"><i class="far fa-heart"></i></div>                    
                        <p id="FavoriteNumber">(12)</p>
                    </div>
                </div>
                <div class="buttons">
                    <button class="add-to-cart" data-id="${product.id}" onclick="cartSidebarActive()">By New</button>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.id=product.id;

        
        productCard.innerHTML = `
            <div class="product-img" data-id="${product.id}">
                <img src="${product.image}" alt="${product.title}">
                <span class="discount-badge">-${product.discount}%</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">BT ${product.price}</span>
                    <span class="original-price">BT ${product.originalPrice}</span>
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviewCount})</span>
                    <div class="Favorite">
                        <div class="wishlist"><i class="far fa-heart"></i></div>                    
                        <p id="FavoriteNumber">(12)</p>
                    </div>
                </div>
            </div>
        `;
        Allprodact.appendChild(productCard);
    });
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.id=product.id;
        
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}">
                <span class="discount-badge">-${product.discount}%</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">BT ${product.price}</span>
                    <span class="original-price">BT ${product.originalPrice}</span>
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviewCount})</span>
                    <div class="Favorite">
                        <div class="wishlist"><i class="far fa-heart"></i></div>                    
                        <p id="FavoriteNumber">(12)</p>
                    </div>
                </div>
            </div>
        `;
        recommendationProdact.appendChild(productCard);
    });
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
            console.log(productId)
        });
    });

        // Add event listeners to add to cart buttons
    document.querySelectorAll('.product-img').forEach(productcard => {
        productcard.addEventListener('click', function() {
            const ViewProdactId = parseInt(this.getAttribute('data-id'));
            ViewProdact(ViewProdactId);
        });
    });
    ``
}

function cartButton(){
        document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
            console.log(productId)
        });
    });
}

// Generate star rating
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartUI();
        showNotification(`${product.title} added to cart!`);
    }

}
let productDetails;
function ViewProdact(ViewProdactId) {
    productDetails = products.find(p => p.id === ViewProdactId);
    viewProdactDetails()
}

// Update cart UI
function updateCartUI() {
    // Update cart count

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    

    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                    <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                    <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                    <button class="quantity-btn remove-item" data-id="${item.id}" style="margin-left: 10px; background-color: var(--danger-color); color: white;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
        
    });
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            decreaseQuantity(productId);
        });
    });
    
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            increaseQuantity(productId);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
    
    // Update cart summary
    updateCartSummary();
}


function viewProdactDetails(){
    goToPage('ProdactDetailsMainDiv')
    console.log('img Click')
    // document.querySelector("#mainContainer").style.display="none";
    // document.querySelector(".ProdactDetailsSection").style.display="block";
    let ProdactDetailsSection = document.querySelector(".ProdactDetailsSection");
    ProdactDetailsSection.innerHTML="";

    const ProdactDetails = document.createElement("div");
    ProdactDetails.className='ProdactDetails';
    ProdactDetails.innerHTML=`
    <div class="AllImg">
        <img src="${productDetails.image}" alt="${productDetails.title}">
        <div class="courseImg">
            <img src="${productDetails.image}" alt="${productDetails.title}">
            <img src="${productDetails.image}" alt="${productDetails.title}">
            <img src="${productDetails.image}" alt="${productDetails.title}">
        </div>
    </div>
    <div class="productTitel">
        <h4>${productDetails.title}</h4>
        <div class="share">
            <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <div>
                <i class="fa-solid fa-share-nodes"></i>
                <i class="fa-regular fa-heart"></i>
            </div>
        </div>
        <p>Brand: <a href="#">No BrandMore Computer Accessories from No Brand</a></p>
        <div class="taka">
            <h2>BT ${productDetails.price} </h2>
            <p>BT1 ${productDetails.originalPrice}</p>
            <span>-${productDetails.discount}%</span>
        </div>
        <hr>
        <div class="buyBtnColar">
            <p>Color Family <span>Black</span></p>
            <div>
                <img src="${productDetails.image}" alt="${productDetails.title}">
            </div>
            <div>
                <p>Quantity</p>
                <div><i class="fa-solid fa-minus"></i><p>1</p><i class="fa-solid fa-plus"></i></div>
            </div>
            <div>
                <button class="add-to-cart" data-id="${productDetails.id}" onclick="cartSidebarActive()">Buy Now</button>
                <button class="add-to-cart" data-id="${productDetails.id}" >Add to Cart</button>
            </div>
        </div>
    </div>
    `
    ProdactDetailsSection.appendChild(ProdactDetails);

    const productDetails1 = document.createElement("div");
    productDetails1.className='productDetails';
    productDetails1.innerHTML=`
    <p>Product details of ${productDetails.title}</p>
    <div>
        <ul>
            <li>BT5.0 connection,stable signal,not occupy charging port or headphone port,convenient to use.</li>
            <li>Built-in quick reporting shortcut,report player unknown's battleground in real time.</li>
        </ul>
        <ul>
            <li>Press mouse middle wheel to control the mouse cursor,all operations in the game can be achieved. Support one-key continuous .</li>
            <li>Adopt cloud key mapping technology,default key mapping auto-match,support a variety of phone models.</li>
            <li>For senior players,you can customize keys via APP to fit your habit.</li>
        </ul>
    </div>
    <div>
        <img src="${productDetails.image}" alt="${productDetails.title}">
        <video src="https://youtu.be/AhYnDYzPUbM?si=HGjasIWMcn7ct1O-" o></video>
    </div>
    `
    ProdactDetailsSection.appendChild(productDetails1);

    const RatingsReviews = document.createElement("div");
    RatingsReviews.className='RatingsReviews';
    RatingsReviews.innerHTML=`
    <p>Ratings & Reviews of ${productDetails.title}</p>
    <div class="Ratings">
        <div>
            <div>
                <h1>${productDetails.rating}</h1>
                <h3>/5</h3>
            </div>
            <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        <p>${productDetails.reviewCount} Ratings</p>
        </div>
    </div>
    <div class="colam">
        <p>Product Reviews</p>
        <p>Sort:Relevance</p>
        <p>Filter:All star</p>
    </div>
    <div class="comment">
        <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <div class="UserId">
            <i class="fa-solid fa-user"></i>
            <p>SK A.</p>
            <span>Verified Purchase</span>
        </div>
        <h4>আমি এইটা বিগত চারদিন ইউজ করছি এখনো কোন সমস্যা পাই নাই আশা করি কোন সমস্যা হবে না 🥰🥰 এটা অনেক ভালো সার্ভিস দেয় 🥰👍</h4>
        <div>
           <img src="${productDetails.image}" alt="${productDetails.title}">
           <img src="${productDetails.image}" alt="${productDetails.title}">
        </div>
        <p class="ColorFamily">Color Family: <span>Black</span></p>
        <div class="lick">
            <i class="fa-regular fa-thumbs-up"></i>
            <p>(28)</p>
        </div>
    </div>
    <div class="ViewAll"><a href="#" class="view-all">View All <i class="fas fa-chevron-right"></i></a></div>`
    ProdactDetailsSection.appendChild(RatingsReviews);

    const recommendation = document.createElement("div");
    recommendation.className="recommendation";
    recommendation.innerHTML=`
    <div class="section-title">
        <h2>You may also like</h2>
    </div>
    <div class="recommendationprodact" ></div
>
    <div class="ViewAll">
        <a href="#" class="view-all">View All <i class="fas fa-chevron-right"></i></a>
    </div>`
    ProdactDetailsSection.appendChild(recommendation);
    cartButton()
    window.scrollTo(0,0)

}
// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 10;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    cartSummaryContainer.innerHTML = `
        <div class="summary-row">
            <span>Subtotal</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Shipping</span>
            <span>$${shipping.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Tax</span>
            <span>$${tax.toFixed(2)}</span>
        </div>
        <div class="summary-row total">
            <span>Total</span>
            <span>$${total.toFixed(2)}</span>
        </div>
        <button class="checkout-btn">Proceed to Checkout</button>
    `;
}

// Decrease quantity
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(productId);
            return;
        }
        
        updateCartUI();
    }
}

// Increase quantity
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += 1;
        updateCartUI();
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showNotification('Item removed from cart');
}

// Setup event listeners
function setupEventListeners() {
    // Cart toggle
    // cartToggle.addEventListener('click', function() {
    //     cartSidebar.classList.add('active');
    // });
    
    // closeCart.addEventListener('click', function() {
    //     cartSidebar.classList.remove('active');
    // });
    
    // Auth modal
    loginLink.addEventListener('click', function(e) {
        console.log("click")
        e.preventDefault();
        openAuthModal('login');
    });
    
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        openAuthModal('register');
    });
    
    accountLink.addEventListener('click', function(e) {
        e.preventDefault();
        openAuthModal('login');
    });
    
    
    authForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleAuthSubmit();
    });
    
    // Close modal when clicking outside
    authModal.addEventListener('click', function(e) {
        if (e.target === authModal) {
            closePopup('auth-modal')
        }
    });
    Wishlist()

}

// Open auth modal
function openAuthModal(type) {
    
    if (type === 'login') {
        modalTitle.textContent = 'Login to Your Account';
        authSubmit.textContent = 'Login';
        nameGroup.style.display = 'none';
    } else {
        modalTitle.textContent = 'Create an Account';
        authSubmit.textContent = 'Register';
        nameGroup.style.display = 'block';
    }
}

// Handle auth form submit
function handleAuthSubmit() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    
    if (authSubmit.textContent === 'Login') {
        // Simulate login
        showNotification('Login successful!');
        closePopup('auth-modal')
        // Update UI to show logged in state
        document.getElementById('account-link').innerHTML = `
            <i class="fas fa-user"></i>
            <span>${email}</span>
        `;
    } else {
        // Simulate registration
        showNotification('Registration successful!');
        closePopup('auth-modal')
        // Update UI to show logged in state
        document.getElementById('account-link').innerHTML = `
            <i class="fas fa-user"></i>
            <span>${name}</span>
        `;
    }
    
    // Reset form
    authForm.reset();
}


// Wishlist toggle
function Wishlist(){
    const wishlistButtons = document.querySelectorAll('.wishlist');

wishlistButtons.forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('i');
        button.classList.toggle('active');
        
        if (button.classList.contains('active')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    });
});
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--success-color);
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');
const districtSelect = document.getElementById('district');
const upazilaSelect = document.getElementById('upazila');
const addAddressButton = document.querySelector('.add-Address');
const addAddressDiv = document.getElementById('addAddress');

addAddressButton.addEventListener("click", ()=>{
    OpenAddressDiv()
    // addAddressDiv.style.display="block";
})
// দেশ চেঞ্জ হলে সিটি লোড হবে
countrySelect.addEventListener('change', function() {
    const country = this.value;
    citySelect.innerHTML = '<option value="">সিটি সিলেক্ট করুন</option>';
    districtSelect.innerHTML = '<option value="">আগে সিটি সিলেক্ট করুন</option>';
    upazilaSelect.innerHTML = '<option value="">আগে জেলা সিলেক্ট করুন</option>';
    
    if (country && data[country]) {
    Object.keys(data[country]).forEach(city => {
        citySelect.innerHTML += `<option value="${city}">${city}</option>`;
    });
    }
});

// সিটি চেঞ্জ হলে জেলা লোড হবে
citySelect.addEventListener('change', function() {
    const country = countrySelect.value;
    const city = this.value;
    districtSelect.innerHTML = '<option value="">জেলা সিলেক্ট করুন</option>';
    upazilaSelect.innerHTML = '<option value="">আগে জেলা সিলেক্ট করুন</option>';
    
    if (city && data[country][city]) {
    Object.keys(data[country][city]).forEach(district => {
        districtSelect.innerHTML += `<option value="${district}">${district}</option>`;
    });
    }
});

// জেলা চেঞ্জ হলে উপজেলা লোড হবে
districtSelect.addEventListener('change', function() {
    const country = countrySelect.value;
    const city = citySelect.value;
    const district = this.value;
    upazilaSelect.innerHTML = '<option value="">উপজেলা সিলেক্ট করুন</option>';
    
    if (district && data[country][city][district]) {
    data[country][city][district].forEach(upazila => {
        upazilaSelect.innerHTML += `<option value="${upazila}">${upazila}</option>`;
    });
    }
});

// ফর্ম সাবমিট করলে ঠিকানা দেখাবে
document.getElementById('addressForm').addEventListener('submit', function(e) {
    e.preventDefault();
    


    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const country = countrySelect.value;
    const city = citySelect.value;
    const district = districtSelect.value;
    const upazila = upazilaSelect.value;
    const village = document.getElementById('village').value;
    
    const addressDisplay = document.getElementById('addressDisplay');
    const addressContent = document.getElementById('addressContent');
    
    addressContent.innerHTML = `
    <p><strong>নাম:</strong> ${name}</p>
    <p><strong>ফোন:</strong> ${phone}</p>
    <p><strong></strong> ${country} / ${city} / ${district} / ${upazila} / ${village}</p>
    `;
    
    addressDisplay.scrollIntoView({ behavior: 'smooth' });
    addAddressDiv.style.display="none";
});



const PAGES = ['mainContainer', 'ProdactDetailsMainDiv'];
let currentPage = null;

// ---------- PAGE HANDLING ----------
function showPage(pageId) {
    PAGES.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.style.display = 'none';
    });

    const target = document.getElementById(pageId);
    if (target) {
        target.style.display = 'block';
        currentPage = pageId;
    } else {
        const fallback = PAGES[0];
        document.getElementById(fallback).style.display = 'block';
        currentPage = fallback;
    }
}

function goToPage(pageId) {
    if (pageId === currentPage) return;
    showPage(pageId);
    history.pushState({ type: 'page', page: pageId }, '', '#' + pageId);
}

// ---------- POPUP HANDLING ----------
function showPopup(popupId) {
    // সব popup আগে hide করো
    document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));

    const popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.add('active');
        history.pushState({ type: 'popup', popupId }, '', '#' + popupId);
    }
}

function hidePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.remove('active');
    }
}

function closePopup(popupId) {
    console.log(popupId)
    console.log("closs")
    hidePopup(popupId);
    history.back(); // আগের state এ ফিরে যাবে
}

// ---------- HISTORY HANDLER ----------
function handlePopState(event) {
    if (!event.state) {
        // যদি কোনো state না থাকে → প্রথম পেজ দেখাও + সব popup বন্ধ করো
        showPage(PAGES[0]);
        document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
        return;
    }

    if (event.state.type === 'page') {
        showPage(event.state.page);
        document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
    } else if (event.state.type === 'popup') {
        document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
        const popup = document.getElementById(event.state.popupId);
        if (popup) popup.classList.add('active');
    }
}

// ---------- INIT ----------
function initRouter() {
    let initialState = null;

    // যদি hash থাকে তাহলে সেটা থেকে restore করো
    if (location.hash) {
        const id = location.hash.slice(1);

        if (PAGES.includes(id)) {
            showPage(id);
            initialState = { type: 'page', page: id };
        } else {
            const popup = document.getElementById(id);
            if (popup && popup.classList.contains('popup')) {
                showPage(PAGES[0]); // popup সবসময় কোনো একটা page এর উপর খোলে
                popup.classList.add('active');
                initialState = { type: 'popup', popupId: id };
            } else {
                showPage(PAGES[0]);
                initialState = { type: 'page', page: PAGES[0] };
            }
        }
    } else {
        showPage(PAGES[0]);
        initialState = { type: 'page', page: PAGES[0] };
    }

    history.replaceState(initialState, '', location.hash || '#' + PAGES[0]);
    window.addEventListener('popstate', handlePopState);
}

document.addEventListener('DOMContentLoaded', initRouter);











// const PAGES = [ 'mainContainer', 'ProdactDetailsMainDiv' ];
// let currentPage = null; 
//  // ✅ ADD THIS

// function showPage(pageId){
//     PAGES.forEach(id => {
//         const el = document.getElementById(id);
//         if(!el) return;
//         el.style.display = 'none';
//     });

//     const target = document.getElementById(pageId);
//     if(target){
//         target.style.display = 'block';
//         currentPage = pageId;
//     }
//     else{
//         const fallback = PAGES[0]; // ✅ এখানে [0] এর বদলে PAGES[0]
//         document.getElementById(fallback).style.display = 'block';
//         currentPage = fallback;
//     }
// }

// function goToPage(pageId) {
//     if(pageId === currentPage) return;
//     showPage(pageId);

//     history.pushState({ type: 'page', page: pageId }, '', '#' + pageId); // ✅ এখানে type: 'page'
// }

// function handlePopState(event){
//     if(!event.state) {
//         hidePopup();
//         return;
//     }

//     if(event.state.type === 'page'){
//         showPage(event.state.page);
//         hidePopup();
//     } 
//     else if(event.state.type === 'popup'){
//         showPopup();
//     }
// }

// function initRouter() {
//     const firstPage = location.hash ? location.hash.slice(1) : PAGES[0];
//     showPage(firstPage);
//     history.replaceState({ type: 'page', page: firstPage }, '', '#' + firstPage);
//     window.addEventListener('popstate',handlePopState);
// }

// function showPopup(popupId){
//     const popup = document.getElementById(popupId);
//     if(popup){
//         popup.classList.add('active');
//         history.pushState({type: 'popup', popupId}, '', '#'+popupId);
//     }
// }

// function hidePopup(popupId){
//     const popup = document.getElementById(popupId);
//     if(popup){
//         popup.classList.remove('active');
//     }
// }

// function handlePopState(event){
//     if(!event.state) {
//         document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
//         return;
//     }

//     if(event.state.type === 'page'){
//         showPage(event.state.page);
//         document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
//     } 
//     else if(event.state.type === 'popup'){
//         document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
//         showPopup(event.state.popupId);
//     }
// }

// function closePopup(popupId){
//     hidePopup(popupId);
//     history.back();
// }



// document.addEventListener('DOMContentLoaded', initRouter);



// const PAGES = [ 'mainContainer', 'ProdactDetailsMainDiv' ];
// let currentPage = null; 

// function showPage(pageId){
//     PAGES.forEach(id => {
//         const el = document.getElementById(id);
//         if(!el) return;
//         console.log(el)
//         el.style.display = 'none';
//     });
//     console.log(pageId)
//     const target = document.getElementById(pageId);
//     if(target){
//         target.style.display = 'block';
//         currentPage = pageId;
//     }
//     else{
//         const fallback = [0];
//         document.getElementById(fallback).style.display = 'block';
//         currentPage = fallback;
//     }
// }

// function goToPage(pageId) {
//     if(pageId === currentPage) return;
//     showPage(pageId);

//     history.pushState({ page: pageId }, '', '#' + pageId);
// }

// function handlePopState(event){
//     const pageFromState = event.state && event.state.page;

//     if(!event)return;
//     if(event.state.type === 'page'){
//         showPage(event.state.page);
//     }else if(event.state.type === 'popup'){
//         showPopup();
//     }
//     // const pageToShow =
//     //     pageFromState ||
//     //     (location.hash ? location.hash.slice(1) : PAGES[0]);
//     // showPage(pageToShow);
// }

// function initRouter() {
//     const firstPage = location.hash ? location.hash.slice(1) : PAGES[0];
//     showPage(firstPage);
//     history.replaceState({ page: firstPage }, '', '#' + firstPage);
//     window.addEventListener('popstate',handlePopState);
// }

// function showPopup(){
//     cartSidebar.style.display = 'block';
// }

// function hidenPopup(){
//     cartSidebar.style.display = 'none';
// }
// function openPopup(){
//     showPopup();
//     history.pushState({type: 'popup'}, '', '#popup');
// }

// function closePopup(){
//     hidenPopup();
//     history.back();
// }


// document.addEventListener('DOMContentLoaded', initRouter)
















// Initialize the app
init();